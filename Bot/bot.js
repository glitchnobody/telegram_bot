const { Telegraf } = require("telegraf");
const TOKEN = "6703173997:AAEFCCyIlRBprLUxUtvQYepJRKq__3UApOc";
const bot = new Telegraf(TOKEN);

const web_link = "https://starlit-raindrop-2d0fd2.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Hi! lets get you started Click the Get started", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  }),
);

bot.launch();
