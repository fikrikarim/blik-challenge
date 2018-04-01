All time and date are in local time (UTC + 7), rounded to minimum 30 minutes unit

## Sat, 31 Mar 2018
### 17:30 - 18:00
- Create the blik-challenge folder, initialize git, and create the repository on [gitlab](https://gitlab.com/fikrikarim/blik-challenge)
- Copy the mock-server [repository](https://gitlab.com/publik/code-challenges/mock-server) into the blik-challenge folder, and initialize the react app using [create-react-app CLI](https://github.com/facebook/create-react-app)

## Sun, 1 Apr 2018
### 07:30 - 08:41
- Download Postman App, download the [postman collection](https://drive.google.com/drive/folders/1HJKTXDa_bupkawVCkL0_o2IZA7KVCNK5) and add the environments to Postman.
- Install 
```shell
pipenv
```
- run 
```shell
pipenv install
```
- run the mockup server with 
```shell
pipenv run python server.py
```
- Try the postman collection, it's working as expected.
- I don't know how global variables in postman works. For example, if I run the query `{{host}}/analytics/{{id}}` first before anything, the server will return error because id isn't undefined. But if I run `{{host}}/analytics` first, then run `{{host}}/analytics/{{id}}` again, the first id from the `{{host}}/analytics` response is automatically stored as global variable called `id` in Postman.
- Ohh okay. After reading this [article](https://www.getpostman.com/docs/v6/postman/environments_and_globals/variables), there are actually the scripts on `{{host}}/analytics` test section that fetch the id and set that into global variable.
- Sorry this is my first time using postman 'advancedly'.
- _I should use Redux, and possibly react router, and redux thunk too (I use [redux-thunk](https://github.com/gaearon/redux-thunk) on my last project, and it's really nice when building app that makes a lot of API call. I don't use redux-saga because I'm not familiar with it yet, and I think redux-thunk is enough). This can takes some time to wire things up. Should I use boilerplate like from this [tutorial](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f), or we set up redux, react-router, and redux-thunk manually?_
- Okay we use [that tutorial](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f), but we don't clone the repository instantly. Instead, we go through the step one by one.
