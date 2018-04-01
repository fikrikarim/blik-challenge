All time and date are in local time (UTC + 7)

## Sat, 31 Mar 2018
### 17:32 - 18:03
- Create the blik-challenge folder, initialize git, and create the repository on [gitlab](https://gitlab.com/fikrikarim/blik-challenge)
- Copy the mock-server [repository](https://gitlab.com/publik/code-challenges/mock-server) into the blik-challenge folder, and initialize the react app using [create-react-app CLI](https://github.com/facebook/create-react-app) into `front-end` directory.

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
- Ohh okay. After reading this [article](https://www.getpostman.com/docs/v6/postman/environments_and_globals/variables), there are actually the scripts on `{{host}}/analytics` test section that fetch the id and set that into global variable. That's kinda cool.
- Sorry this is my first time using Postman 'advancedly' haha.
- _I should use Redux, and possibly react router, and redux thunk too (I use [redux-thunk](https://github.com/gaearon/redux-thunk) on my last project, and it's really nice when building app that makes a lot of API call. I don't use redux-saga because I'm not familiar with it yet, and I think redux-thunk is enough). This can takes some time to wire things up. Should I use boilerplate like from this [tutorial](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f), or we set up redux, react-router, and redux-thunk manually?_
- I set up the react-router and redux-thunk from the start, to scale up the app later easily, without changing most of the main/base code.
- Okay we use [that tutorial](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f), but we don't clone the repository instantly. Instead, we go through the step one by one.


### 09:15 - 09:31
- Using [this tutorial](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f) to set things up. I use this exact tutorial when setting up my react app for my previous project (The Dormitory Permission App).
- we run, on the front-end
```shell
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk history redux-devtools-extension
```
- Initialize the store, the `index.js` file, `App` file, and the example of action and reducer. On this example they don't separate the action and reducer folders yet.

### 09:32 - 10:02
- So the first thing I should do is to create the Analytics component for the `/analytics` path, and the AnalyticDetails component for `/analytics/<id>` path.
- Emm first I want to restructure the project a little bit. I want to make the App.js in the root of src folder to make it cleaner, and restructure the modules folder into actions and reducers folder. And also rename the containers folder into components because at this stage we're not using containers yet. (Later will be needed after refactoring code).
- How about we redirect users who are from the home page to analytics page? Because we're not using homepage yet. No. Maybe later we'll create the home page that simulate the landing page, and authentication forms before the user can visit the analytics page. So first from home page we create a link to go to analytics page.
- Hmm, how to get parameters in react-router, for example, if I input `/analytics/this-isn't-uuid-123` path, how I get the `this-isn't-uuid-123` as parameter ID?
- Ohh okay cool. Looking at this [page](https://reacttraining.com/react-router/web/example/url-params), it's as easy as adding `:id` into the Route path, `/analytics/:id`, and getting them from `match.params.id` on the component.
- Should we do the styling first, or connecting to the backend API first? 

### 10:03 - 10:53
- I guess the answer is connecting to the backend API first. Because we should be familiar with the data structure first before go into the styling and organizing them into a neat looking app.
- Okay. First we should change our Analytics and AnalyticDetails components from stateless functional components into a React Component, because we are going to fetch data from them.
- Then we should create the action and the reducer for the Analytics component, to fetch data from backend.
- _Hmm, for my previous project I use the Firebase libarary for communicating with the backend, so I didn't need to configure the endpoint. How to make the endpoint configurable?_
- Based on [this](https://hackernoon.com/how-to-combine-a-nodejs-back-end-with-a-reactjs-front-end-app-ea9b24715032), and [this](https://daveceddia.com/create-react-app-express-backend/) tutorial there's a way that use `proxy` configuration on `package.json` file. But I think that only work well on development server, and the front-end runs on the same server with back-end.
- So i decided to use environment variable called REACT_APP_API_URL. I create the configuration file `config.js` that takes environment variable `REACT_APP_API_URL` or use `http://localhost:8000` as the default. In production setting, set the `REACT_APP_API_URL` variable with the desired backend url.

### 10:55 - 12:06
- _Should I use HTTP request library like [axios](https://github.com/axios/axios)? Or [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) API is enough?_
- On my first tutorial of learning React, I use axios library, and based on this [post](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5) I think I will use axios library.
- Finally, it's time to create the action and fetching data from backend for Analytics component!
- So we create the AnalyticsReducer, AnalyticsActions file with analyticsList function, and connect the Analytics component using connect method from `react-redux`. It took quite some time. I used my previous project for reference on how to wire these things up. And yay it's working.
- For analyticsList dispatcher, I create three actions, `ANALYTICS_LIST_REQUESTED` `ANALYTICS_LIST_SUCCESS`, and `ANALYTICS_LIST_FAILED`. This is useful for error handling, and for showing loading animation while the request take place. But I think I won't utilize this function on this project, because it can take some time. I should finish the mvp first.
- For fetching the data, I put the action generator function on `componentDidMount`, after reading [this](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/) and [this](https://www.robinwieruch.de/react-fetching-data/) post. (On my previous project I put it on `componentWillMount` hehe)
- Now we should render the ids on analytics page, and when the individual id is clicked, the page will change to `analytics/:id`
- _I managed to list all the ids on the table using map function. But how to make the link dynamically to go to `analytics/:id` using the react-router API? I used to do that with button, but with a link?_

### 12:40 - 12:49
- Ohh okay. I forgot react-router provides Link component exactly for that.
- I think I should rename the AnalyticDetails into AnalyticsDetails. That little s can be confusing in the future.

### 13:16 - 13:44
- Now it's time to understand (helped by google translate) the mockup for AnalyticsDetails Component! It looks like component page will send requests to the rest of the API.
- Die obere linke ist Gesamtzahl SLTs im Kreislauf. Darunter ist Anzahl der lieferungen pro: woche oder monat graph. Rechts davon ist Prozess Durchlaufs Zeit graph, mit maximalen, minimalen und durchschnittlichen Linien. Darunter ist Verteilung der SLTs im Kreislauf graph, wir können alle SLTs, leere SLTs oder vollständige SLTs auswählen. Darunter ist Durchschnittliche Verweildauer in Zone graph. Und unten rechts ist eine Karte, die die Standorte zeigt. Es tut mir leid, wenn die Übersetzungen schrecklich sind. Bitte beschuldige Google Übersetzer. Aber deutsche Sprache sieht fantastisch aus.

### 13:44 - 14:00
- I don't understand what KW is. Is it week? 
- Ohh okay it's [kalenderwoche](https://en.pons.com/translate/german-english/KW)
- Now I kinda undertstand which API belongs to which graph.
- Now we need a library for creating a graph. Is D3.js the right library for this? (I often heard about D3.js, but I don't have any experiences creating a graph with js. I usually use excel. haha just kidding.)

### 14:00 - 14:29
- It's time to look at the D3.js documentations.
- Nope. D3.js is too basic for this project. We should search for more robust charting libraries.
- After reading this [article](https://hackernoon.com/9-best-javascript-charting-libraries-46e7f4dc34e6), I decided to use Chart.js, because it shows first on google search, has highest github stars number, and has beautiful landing pages. I hope it can create line and stacked bar chart.
- Oh yeah Chart.js use < canvas> on HTML. Is there any library that create the wrapper for React.js?
- I just want to use a simple Chart.js wrapper for React. The choices are between [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) and [react-chartjs](https://github.com/reactjs/react-chartjs). I think I will use the react-chartjs-2, despite having fewer github stars than react-chartjs, because react-chartjs-2 looks more maintained (more closed issues, even has more opened too).