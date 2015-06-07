#!/bin/sh

sudo apt-get update -y
sudo apt-get install npm -y
sudo apt-get install nodejs -y
sudo ln -s /usr/bin/nodejs /usr/bin/node

sudo npm install forever -g

cd /vagrant/express
npm install

cd /vagrant/restify
npm install

cd /vagrant
forever start express/.
forever start restify/.
