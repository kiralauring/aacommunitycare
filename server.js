// server.js
// where your node app starts

// init project
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
var express = require('express');
var app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
//const adapter = new FileSync('.data/db.json');
const adapter = new FileSync('data/db.json'); 
const db = low(adapter)

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  let dreams = db.get('dreams').value();
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// yes :)
app.post("/dreams", function (request, response) {
  db.get('dreams').push(request.query.dream).write();
  response.sendStatus(200);
});
//ok so I'll do the rest :)

app.get("/accountability", function (request, response) {
  let accountabilities = db.get('accountabilities').value();
  response.send(accountabilities);
});

app.post("/accountability", function (request, response) {
  db.get('accountabilities').push(request.query.accountability).write();
  response.sendStatus(200);
});

app.get("/good", function (request, response) {
  let goods = db.get('goods').value();
  response.send(goods);
});

app.post("/good", function (request, response) {
  db.get('goods').push(request.query.good).write();
  response.sendStatus(200);
});

app.get("/quest", function (request, response) {
  let quests = db.get('quests').value();
  response.send(quests);
});

app.post("/quest", function (request, response) {
  db.get('quests').push(request.query.quest).write();
  response.sendStatus(200);
});  

app.get("/advice", function (request, response) {
  let advices = db.get('advices').value();
  response.send(advices);
});

app.post("/advice", function (request, response) {
  db.get('advices').push(request.query.advice).write();
  response.sendStatus(200);
});

app.get("/value", function (request, response) {
  let values = db.get('values').value();
  response.send(values);
});

app.post("/value", function (request, response) {
  db.get('values').push(request.query.value).write();
  response.sendStatus(200);
});



// working on a way to save stuff for good (since glitch apps shut down after 5 mins of us not using them)
// I'm close :) awesome!! 
// are these the right default first answers for each form below?
//yes! i mean these aren't the submit box default but example answers I would like to be displayed for each form
// ok, I'm going to start adding a way to save stuff. Would you like me to walk you through it or just do it?
//i'd love you to walk through if it isn't too much trouble! but if it is super complicated and easier for you to just do it thats ok :)
// you have been helping me a LONG time which I really appreciate!!
// In case you need to save something like this again, I remixed the original "dreams" app
// at https://glitch.com/~add-low-db-to-dreams-app, you can see that I added a library called "lowdb" to the default dreams application.
// I've been wanting to add persistence to a glitch app so this is a good exercise :)
// inside of the app.get("/dreams") function and the app.post("dreams") functions, notice that I'm making calls to the db object.
// db.get('dreams').value() gets the array of strings
// yes. the db object is way of interacting through the method names for lowdb to access the file contents from .data/db.json
// I went with https://github.com/typicode/lowdb because it looked a lot simpler than adding a full database system.
// which I think should work since we're saving small strings and the lists will not be in the millions..
// so, I want you to do the next step.
// we need to add the lowdb node package to your project.
// take a look at my https://glitch.com/~add-low-db-to-dreams-app in the package.json file.
// add the line that has the lowdb dependency to this project. 
// yes, at the top of the other server.js, copy/paste those 4 lines.
// alright, I'm going to provide a structure for the 5 topics right here. Copy paste those strings into each array.
// this will do the same work as the variables below, but will save for good
// not quite that automatic...
// we're basically labeling each topic, each topic will have its own array of strings.
// then when we go into the server.js get and post functions above, we'll reference each of the topics
//ahhhh ok. 
// got it. I can confirm. each input is working, but the defaults are off.
// by default, the .data folder is hidden, so folks can't see it if they remix your project.
// I cannot see your .data folder, for instance.
// If we change the location of the db.json, it will be more accessible
// depends on how familiar you are with command line interface (since the best way to see .data is to open a console)
// if you're comfy with linux, then we're good! Each glitch app runs in a tiny linux container.
// so click aacommunitycare in the upper left of your screen, then go to advanced settings, and select console.
// the bash prompt puts you inside of ~ (where .data is a hidden subfolder)
// the bash prompt gives you access to vim, nano, or emacs if you need a command line text editor.


//ah i see so i can change stuff this way. yes :)
// if you changed the filepath on line 12 of server.js to say /data/db.json instead of .data, it would be a shown folder.
// upside to that is that you could edit inside of glitch w/o needing console. downside is the contents would come with if someone remixes your project

//gotcha. i'll open it now to make it easier but change it back later.

//hmm not sure what changed to make logs unhappy
// maybe bc the filepath doesn't exist... try making a folder called data w/ an empty file called db.json in it

//defaults just showeed up!
//hooray!!! thank you so so so much
//yes I learned so much :))))
//thank you and take care!
// you're very welcome. I'm happy to have been able to assist. Hope this was a good experience w/ JS!
// excellent. I'll remove myself from your project now. Good luck :)
// sweet! 
db.defaults({ dreams: [ "Start to talk to someone (even if it is myself!) about how I am feeling and what I need!"],
            accountabilities: ["Don't wait for other people to call me out, instead be honest with myself"],
            goods: ["To Love in This Way by Not That Kind of Asian Doctor"],
            quests: ["How do you feel when you say something abusive? Do you realize?"],
            advices: ["Taking my hurt feelings seriously"],
            values:["Being 'better' than other people, my sensitivity!"]
}).write();

// deleted the old variables.. now we'll go up to the /dreams GET function above and make dreams work.

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
