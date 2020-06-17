# Repo link
https://github.com/ntrangtruong/applicationstack 
**************************************
# Here is our code from index.js
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h2>Hello World !</h2>');
});
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
**************************************
# Application Stack Building Tutorial
Create a VM in GCP: 
Navigation Menu > Compute Engine > VM Instances > Create Instance > 
Select Region : Oregon ; Select Machine Type : n1-standard ; 
Select Firewall - Allow HTTP traffic; Hit Create > Click SSH

Making sure software is updated:
sudo apt update

Installing NodeJS:
sudo apt instal nodejs

Installing Node Package Manager:
sudo apt install npm

Create a package.json file:
sudo npm init

Install ExpressJS:
sudo npm install express
**************************************
#A Hello World application tutorial 
Navigation Menu > VPC Networking > Firewall >
 click on default-allow-http >click Edit >
 in Protocols and Ports, tcp: 80 “add: ,3000” > click Save
 
Follow the instructions from Application Stack Building Tutorial Document
 
Create index.js:
sudo nano index.js (direct us to nano editor)
Here we past the code:
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h2>Hello World !</h2>');
});
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
Save by pressing ctrl+x ; y ; enter;
In order to execute a JS file in Node we need to 
run a node command followed by file name:
node index.js
Go back to your VM instances in GCP, click on the external
 ip of the VM we created. After the new page opens,
 click on the search bar and add “ :3000/ “ to it. After 
that Hello World should appear.
