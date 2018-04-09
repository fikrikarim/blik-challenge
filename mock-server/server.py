#!/usr/bin/env python
import os
from flask import Flask
from flask_cors import CORS

from flask import request
from flask import jsonify
import uuid
import random
import time
import datetime


baseURL = str(os.getenv('BASE_URL', '')) + '/'

app = Flask(__name__)
CORS(app)

# generate a new set of uuids on startup
IDS = [uuid.uuid4() for i in range(15)]


@app.route(baseURL)
def base():
    """
    displays a simple debug message if the server is running
    """
    return "Mock Server up and running"


@app.route(baseURL + 'analytics')
def analytics_list():
    """
    lists the available analytics resources
    """
    return_value = [str(id) for id in IDS]
    return jsonify(return_value)


@app.route(baseURL + 'analytics/<id>')
def analytics(id):
    """
    displays a single analytics resource
    """
    return_value = {}
    uid = uuid.UUID(id)
    if id_is_valid(uid):
        return_value = {
            'id': id,
            'name': 'Analytics for Process {}'.format(IDS.index(uid) + 1),
            'location': {
                'lat': round(random.uniform(51.477848, 51.47790), 6),
                'lon': round(random.uniform(-0.0001, 0.0001), 6)
            },
            'zones': []
        }

        # add a random number of involved zones
        for i in range(random.randint(8, 12)):
            return_value['zones'].append({
                'name': 'Zone #{}'.format(i),
                'description': 'Some description for Zone #{}'.format(i)
            })

    return jsonify(return_value)


@app.route(baseURL + 'analytics/<id>/distribution')
def analytics_distribution(id):
    """
    mock slt distribution data
    """
    return_value = {'distribution': []}
    uid = uuid.UUID(id)
    if id_is_valid(uid):
        return_value['id'] = id
        today = datetime.datetime.today()
        for i in range(30):
            t_i = today - datetime.timedelta(days=i)
            timestamp = time.mktime(t_i.timetuple())*1e3 + t_i.microsecond/1e3

            values = [random.randint(10, 15) for i in range(5)]

            return_value['distribution'].append({
                'timestamp': timestamp,
                'value': {
                    'consumer': {
                        'empty': values[0],
                        'full': values[1]
                    },
                    'producer': {
                        'empty': values[2],
                        'full': values[3]
                    },
                    'transit': {
                        'empty': values[4],
                        'full': 80 - sum(values)
                    }
                }
            })

        time.sleep(random.randint(2, 4))

    return jsonify(return_value)


@app.route(baseURL + 'analytics/<id>/delivery')
def analytics_delivery(id):
    """
    Mock some delivery counts for the last 30 days

    If the query string starts with week or month, then it is the last 30 weeks
    or months 
    """
    return_value = {}
    uid = uuid.UUID(id)
    delta_t = datetime.timedelta(days=1)
    factor = 1

    if len(request.query_string) > 0:
        if request.query_string.startswith(b'week'):
            delta_t = datetime.timedelta(weeks=1)
            factor = 7

        if request.query_string.startswith(b'month'):
            delta_t = datetime.timedelta(weeks=4)
            factor = 30

    if id_is_valid(uid):
        return_value['deliveries'] = []
        return_value['id'] = id
        today = datetime.datetime.today()
        for i in range(30):
            t_i = today - delta_t
            timestamp = time.mktime(t_i.timetuple())*1e3 + t_i.microsecond/1e3

            return_value['deliveries'].append({
                'timestamp': timestamp,
                'value': random.randint(2, 8) * factor
            })

    return jsonify(return_value)


@app.route(baseURL + 'analytics/<id>/throughput')
def analytics_throughput(id):
    """
    generate some process throughput data.
    """
    return_value = {
        'throughput': []
    }
    uid = uuid.UUID(id)

    if id_is_valid(uid):
        return_value['id'] = id

        for throughput in range(4, 11):
            max_val = random.randint(100, 250)
            min_val = random.randint(50, 99)

            date = datetime.datetime.today() - datetime.timedelta(days=throughput)
            timestamp = date.timestamp() * 1000

            return_value['throughput'].append({
                'timestamp': timestamp,
                'max': max_val,
                'min': min_val,
                'avg': (max_val + min_val) / 2
            })
    return jsonify(return_value)


def id_is_valid(uuid):
    """
    check if resource is existend
    """
    return uuid in IDS


if __name__ == "__main__":
    """
    start server on port 8000
    """
    app.run(port=8000)
