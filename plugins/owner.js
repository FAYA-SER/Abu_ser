const Abu = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Abu.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '𝙽𝙰𝙼𝙴', description: "🍁 ɴᴀᴍᴇ ᴏғ ᴏᴡɴᴇʀ 🍁.\n\n\n+Config.BOT+\n ", rowId:" rowid1"},
        {title: '𝙸𝙽𝚂𝚃𝙰 ', description: "🍁 ɪɴsᴛᴀɢʀᴀᴍ 🍁.\n\n\n+Config.INSTA+\n ", rowId:" rowid2"},
        {title: '𝙽𝚄𝙼𝙱𝙴𝚁', description: "🍁 ɴᴜᴍʙᴇʀ 🍁.\n\n\nhttp://wa.me/+Config.PHONE+\n ", rowId:" rowid3"},
        ]
       
       const sections = [{title: "+Config.BOT+️", rows: rows}]
       
       const button = {
        buttonText: '+Config.BOT+',
        description: "💫 ᴏᴡɴᴇʀ ᴅᴇᴛᴀɪʟs",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));