const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const cron = require('node-cron');
const settings = require('./settings.json');
const token = settings.token;
const CronJob = require('cron').CronJob;
const quoteUrlBase = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

client.on('ready', () => {
  console.log('I am ready!');
});


//Clann bosses
new CronJob('00 00 19 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till clan bosses guys');
}, null, true, null);

new CronJob('00 30 19 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till clan bosses guys');
}, null, true, null);

new CronJob('00 55 19 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till clan bosses guys');
}, null, true, null);


//Field bosses

//24
new CronJob('00 00 23 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 30 23 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 55 23 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till field bosses guys');
}, null, true, null);

//04
new CronJob('00 00 03 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 30 03 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 55 03 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till field bosses guys');
}, null, true, null);

//08
new CronJob('00 00 07 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 30 07 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 55 07 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till field bosses guys');
}, null, true, null);

//12
new CronJob('00 00 11 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 30 11 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 55 11 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till field bosses guys');
}, null, true, null);

//16
new CronJob('00 00 15 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 30 15 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 55 15 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till field bosses guys');
}, null, true, null);


//20
new CronJob('00 00 19 * * 0-6', function() {
  client.channels.get('388394754380922882').send('60 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 30 19 * * 0-6', function() {
  client.channels.get('388394754380922882').send('30 minutes till field bosses guys');
}, null, true, null);

new CronJob('00 55 19 * * 0-6', function() {
  client.channels.get('388394754380922882').send('5 minutes till field bosses guys');
}, null, true, null);
client.on('message', message => {
  const prefix = '!'

  if (message.content.substring(0, 1) == '!') {
    var args = message.content.substring(1).split(' ');
    var cmd = args[0];
    args = args.splice(1);

    switch (cmd) {
      case 'ping':
          message.reply('pong');
        break;
        case 'pong':
            message.reply('ping');
        break;
        case 'quote':
            message.reply('No quotes supported yet');
        break;
        case 'thetime':
            message.reply('No time supported yet');
        break;
        case 'help':
            //message.reply('Hello vanguard member ;). Following commands are currently available. ');
        break;
    }

  }
});

client.login(token);
