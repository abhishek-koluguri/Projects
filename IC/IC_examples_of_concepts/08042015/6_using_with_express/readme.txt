express todoapp
cd todoapp
npm install
run ./bin/www
View http://localhost:3000
Make sure express is running. Quite at this time.

Create a file routes/tasks.js.
We modified this file to perform some server-side operations.

Edit app.js and do the following:

Change 
var users = require('./routes/users');
to
var users = require('./routes/users');
var tasks = require('./routes/tasks');

and
change
app.use('/users', users);
to
app.use('/users', users);
app.use('/tasks', tasks);

Now we can use the Express app to server a 
list of tasks based on what's in tasks.js.

This completes the server side.

But, let's make sure the server is working.

open http://localhost:3000
See Express welcome page.

Now open http://localhost:3000/tasks

It should diplay the JSON objects created 
and sent from tasks.js.


Now, we can start writing angular code for
the client side.