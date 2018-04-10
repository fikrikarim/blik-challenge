# Blik-Challenge

- To open the demo files, visit https://blik-challenge.firebaseapp.com/
- If you don't see the analytics list, please wait a little bit and refresh the homepage again. This bug is caused because the mock-server is hosted at free dyno on Heroku, which sleep often after inactivity.
- The mock-server demo is located on https://blik-challenge-back-end.herokuapp.com/
- Decisions, thoughts, remarks, etc., are located on READMETOO.md file.

## Running development app
- Clone this repository
### Run the front-end side by changing current directory to front-end, and run
```
yarn install
```
- then
```
yarn start
```
### Run the mock-server by changing current directory to back-end, and run using python `3.6.3`.
```
pip install pipenv
```
- then
```
pipenv install
```
- then
```
pipenv run python server.py
```