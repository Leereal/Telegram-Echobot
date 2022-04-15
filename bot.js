const Telegraf = require('telegraf')

const bot = new Telegraf('5300736719:AAG0qBW-tDuMnpvMIBZWnFJAQVgapW0eh6Q');

const helpMessage = `
Welcome to our new bot:
/help - To get help
/start - To start the robot
/echo <msg> - To begin speaking with our robot
`

bot.use((ctx, next)=>{ 
    // console.log(ctx.chat)  // To get chat info
    // console.log(ctx.updateSubTypes[0])  // To get message type

    if(ctx.updateSubTypes[0] == "text"){
        bot.telegram.sendMessage(-759765389,ctx.from.username + " said " + ctx.message.text)        
    }
    else{
        bot.telegram.sendMessage(-759765389,ctx.from.username + " sent " +ctx.updateSubTypes[0])
    }
    next()
})

// start
bot.start((ctx)=>{  
    ctx.reply(helpMessage);
})

bot.help((ctx)=>{
    ctx.reply(helpMessage)
})

bot.command("echo",(ctx)=>{
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    let message = "";

    if(inputArray == 1){
        message = "You said echo"
    }
    else{
        inputArray.shift();
        message = inputArray.join(" ");        
    }
    ctx.reply(message)
})

bot.launch();

