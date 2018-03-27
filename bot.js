console.log('running');

var Discord = require('discord.io');
var logger = require('winston');
var auth = ('./auth.json');

//Configure logger settings
logger.level = 'debug';

//Initialise Discord bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt) {
    //bot will listen for messages that start with 1
    if (message.substring(0,1) == '1') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            //1! response
            case 'gain':
                bot.sendMessage({
                    to: channelID,
                    message: 'Blessed be thine gainz!'
                });
            break;

            //1loss response
            case 'loss':
                bot.sendMessage({
                    to: channelID,
                    message: 'Thine losses be sick!'
                });
            break;
        }
    }
    else if (message.substring(0,1) == '4') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            //4give response
            case 'give':
                bot.sendMessage({
                    to: channelID,
                    message: "That's OK my child, now pull yourself up again!"
                });
            break;
        }
    }
});
