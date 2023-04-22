//index.js (main)
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//layouts.ejs file {where you want to use}
<%- style %>
<%- script %>

nodemon index.js
npm start

npm install express-ejs-layouts

http://localhost:8000/
http://localhost:8000/users/profile

// create a new repository 

git init

git branch -M 6-static-style-script

git add .

git commit -m "controller"

git push -u origin 6-static-style-script

git push -f -u origin 6-static-style-script

git branch

git remote add origin https://github.com/VIKASJI593/major-projet-expressjs.git

git remote -v


