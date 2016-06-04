express helloapp

Then cd to helloapp diretory and run express first.

./bin/www

You get an error that some npm modules are not installed.

Install those it complain about.

npm install express
nmp install

Now run

./bin/www

If nothing happens then server is running, we are good.

Now open http://localhost:3000

Now edit, index.jade and index.js like in the files included.

Now restart server, then visit http://localhost:3000,
you should see the content from index.jade in html form.

Now, moving forward, we want to click on the submit and go to 
the greet controller.

But, we don't have it yet. 

Let's first define a route for it.

Edit app.js.

We changed

var routes = require('./routes/index');
var users = require('./routes/users');

to

var routes = require('./routes/index');
var users = require('./routes/users');
var greet = require('./routes/greet');

Then, change

app.use('/', routes);
app.use('/users', users);

to

app.use('/', routes);
app.use('/users', users);
app.use('/greet', greet);

Save.

Then create routes/greet.js with the content in the
file included.

Start the server again, and interact with 
http://localhost:3000
