# Code Challenge Mock Server

## Installation

Python version:
```
3.6.3
```

Install pipenv:

```bash
pip install pipenv
```

Install dependencies:

```bash
pipenv install
```

Run Server with:

```bash
pipenv run python server.py
```

## API Description

| Method | Call                                        | Description                                                               |
|:------:|:-------------------------------------------:|:-------------------------------------------------------------------------:|
| GET    | localhost:8000                              | for debugging purposes (not shown in frontend)                            |
| GET    | localhost:8000/analytics                    | provides a list of all available analytics resources                      |
| GET    | localhost:8000/analytics/\<ID>              | get information about a single analytics resource                         |
| GET    | localhost:8000/analytics/\<ID>/distribution | get distribution of load carriers, a load carrier is either empty or full |
| GET    | localhost:8000/analytics/\<ID>/delivery     | get deliveries per day (with ?week per week and with ?month per month)    |
| GET    | localhost:8000/analytics/\<ID>/throughput   | get process throughput per week                                           |
