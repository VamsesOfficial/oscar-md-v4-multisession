let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '4'
let sn = '8'
let ss = '35'
//premium
let ph = '2,5'
let pn = '5'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 Bulan)_
┊⫹⫺ *Normal:* _${sn}k/grup (Permanent)_
┊⫹⫺ *Script Bot:* _${ss}k_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 Bulam)_
┊⫹⫺ *Normal:* _${pn}k (Permanent)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Indosat:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Saweria:* '-'

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Featur nya pasaran ga?
💬: Ga dong, bot kami di rancang dengan featur no pasaran?

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 Bulan)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (Permanent)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* Script Bot', description: 'PRICE: ' + ss + 'k' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 Bulan)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (Permanent)' },
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
