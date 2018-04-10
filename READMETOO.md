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
- I just want to use a simple Chart.js wrapper for React. The choices are between [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) and [react-chartjs](https://github.com/reactjs/react-chartjs). I think I will use the react-chartjs-2, despite having fewer github stars than react-chartjs, because react-chartjs-2 looks more maintained (more closed issues, even though it has more opened issues too).

### 14:45 - 15:06
- But, does react-chartjs-2 support stacked bar chart?
- [Yes](https://github.com/jerairrest/react-chartjs-2/issues/220)
- Let's draw the chart.
- Hmm, where do I get the data for "Total number of SLTs in the circulation"? I supposed it should be on `analytics/:id` API, but I cannot find it. Let's skip this for now.
- Should we refactor each graph into separate components? Nah, let's do that later.
- So we start by creating the deliveries graph.

### 15:37 - 16:20
- I think instead of creating a React component for each graph, it's better create a stateless functional component. We'll fetch the data on the AnalyticsDetails component and pass the data into each functional component.
- Oh I think we don't need to create any additional component at all. The `react-chartjs-2` component has enough configuration, so we just need to modify the data to put into the component from `react-chartjs-2`.
- Hmm I don't understand how the data is structured yet.
- I'll style the graps later. First we should feed the correct data into the graps.
- Should we create four action generator for each API or we just put the four API into a single action generator?
- I think it's better to create four action generator, to make it more modular and easier to refactor. For example, maybe we can use it on other component later?
- Great, the action generators are done. The next step is to insert them into the data for the graph.


### 16:20 - 16:50
- I better implement the `?week` or `?month` choice for the deliveries later.
- The data from the backend isn't clean yet (it contained an id key on the object). Where should we clean this? action generator? reducer? or on the component?
- I think it's better in the reducer, if the backend changed, maybe the API will return other data. In that case, we just need to add a little bit of code to the reducer, without changing the action generator.
- Okay great. Now we have the important data on our store, we just need to input them into the graphs.
- Our naming isn't consistent yet. We use singular for action generator (e.g. delivery), but we use plural for reducer and states (e.g. deliveries).
- So the objet from the backend is structured like `{ timestamp: x, value: y}`, but the chart.js data looked like `{ labels: [x], datasets: [{ data: y }]}` so we should use convert the value appropriately.
- I suppose all the graph's x axis is time, and the y axis values.
- I wonder why the timestamp on `analytics/:id/delivery` is all the same for all values, either with `?month` or `?week` parameter. And there's no timestamp on `analytics/:id/throughput` yet. 
- And I think we don't have the API for 'Durchschnittliche Verweildauer in Zone:' graph yet? There's 'zones' key on `analytics/:id`, but it doesn't have any 'length of stay in zone' property. Maybe we can add that?

## Sat, 7 Apr 2018
### 10:09 - 10:34
- Staring at the code, while eating an orange fruit.

### 10:39 - 11:01
- First, we will refactor each graph into separate functional component

### 11:01 - 11:26
- The first graph we will be working on is the distribution graph, because it has the right (different for each value) timestamp from the backend.
- How to map the current data structure into the graph data structure? We should transform the data within the functional component yea?
- I want to try to transform the data using a functiont first. And we try to view only the All SLTs first.

### 13:27 - 13:40
- We should use moment for displaying the dates from the timestamp.
- Okay it's finished for Distribution graph. It's easier than I expected :D
- Now for the other graph, but we should change the backend too for fixing the timestamp.


## Mon, 9 Apr 2018
### 07:52 - 8:31
- Changing the data structure for other graph. Adding timestamp on throughput backend.
- It's quite hard to test the backend using postman, because the uuid is changing every server restart. If you want to test the throughput api, you should post to the `/analytics` api first before you can post into the `/analytics/:id/throughput` to get the correct uuid.
- I don't know why in `/analytics/:id/throughput` the range is `for throughput in range(4, 11)`. Why not `for throughput in range(1, 8)` ?
- I change the json structure on throughput API from `week` to `throughput` to make it more similar to other API.
- I know how to substract the current date by one day. But how to convert datetime object into epoch time for timestamp value? Is the current implementation the cleanest?
```
timestamp = time.mktime(t_i.timetuple())*1e3 + t_i.microsecond/1e3
```
- Okay I think I'll use that implementation
- No. I got the better implementation for python 3.3+ from this [stackoverflow's answer](https://stackoverflow.com/a/8778548). Let's also put the python version requirement on the README.md file.
- Now the throughput API is good. Let's move to the front-end side of the throughput graph.

### 13:16 - 14:17
- Somehow I want to make the graph colors more beautiful, I think I'll use the default color from [chart.js examples](http://www.chartjs.org/samples/)
- Haha the graph for throughput is done, but the timestamp from the API is broken. It's showing dates from year 70s :D
- Ohh okay nevermind, [I forgot to multiply the timestamp with 1000.](https://stackoverflow.com/a/41635863/5035761)
- Now why the API for deliveries is showing the same timestamp for each value?
- Okay I just add `- datetime.timedelta(days=i)` on the delivery API. So the `t_i` change from
```
t_i = today - delta_t
```
- into
```
t_i = today - delta_t - datetime.timedelta(days=i)
```
- Now the timestamp shows deliveries for each day.
- The delivery graph now is done.
- Current TODOs:
    - Option for week or month for deliveries
    - Option for choosing Alle SLT, Leergut SLT, or Vollgut SLT for throughput
    - Create average length of stay in zone graph? We don't have the API yet too!
    - Map for showing the location of the zone?
    - Creating the nice layout to match the mockup
    
## Tue, 10 Apr 2018
### 11:11 - 11:45
- Why the x axis on the graph is reversed? The earliest data is on the left while the oldest is on the right. Should we fix this on the backend side? or on the front-end side? I think I'll do it on the front-end side because I don't want to really mess the code from the backend.
- Whoa why the graph is mirrorred on y-axis on the middle? And it's only happened sometimes. What happen?
- I think I know the answer, my current transformData function use push() method, which isn't not pure function, because it modifies a current object. Let's try to make the function a pure function.
- Okay, I learn something new today. So both the spread operator `{ ...oldObject }`, and assign `Object.assign({}, oldObject)` operator only do shallow copy.
- So when the function is
```js
function transformData(template, arrayOfData={}) {
    let templateCopy = { ...template }

    arrayOfData.forEach(data => {
        templateCopy.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        templateCopy.datasets[0].data.push(data.value.consumer.empty + data.value.consumer.full)
        templateCopy.datasets[1].data.push(data.value.producer.empty + data.value.producer.full)
        templateCopy.datasets[2].data.push(data.value.transit.empty + data.value.transit.full)
    });
    return templateCopy
}
```
- The push method will push into the template object too, not only on templateCopy, because spread operator only do shallow copy and it reference to the template object.
- Now I have some choices: use method other than `push`, that won't modify the current object, or we use some method that will do a deep copy for us.
- I think I'll take the latter. Based on [this](https://stackoverflow.com/a/38359898/5035761) and [this](https://scotch.io/bar-talk/copying-objects-in-javascript) articles, we can use `JSON.parse(JSON.stringify(object))` to do deep copy. But this only works as long as the contained objects don't have dates, functions or other values that are impermissible in JSON. This is okay for our case.
- Now our graphs are working as expected.

### 11:46 -
- Now working on our next TODO: Option for week or month for deliveries
- Yay it's working. Note that I think the API backend for `/delivery` is not showing the right data for per week and per month. But I think that's out of scope of this challenge. I don't really know the real backend structure of the API.
- Now working on our next TODO: Option for choosing Alle SLT, Leergut SLT, or Vollgut SLT for throughput. It should be similar to the previous TODO.
- Okay now it's done. But graph is always reversed when we click the button because we call `.reverse()` when rendering the graph, and `reverse()` method modify the array being called. We should move the reverse method into the action creator or on the reducer.
- 