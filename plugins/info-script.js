//Credits Jangan Dihapus
//Thanks To Jarot 
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://chat.whatsapp.com/DbbDlICeGFuJiX9KlFyI17Q*`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'ᴏᴋ','Cok', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/DbbDlICeGFuJiX9KlFyI17",
    title: 'itsuki-MultiDevice',
    body: 'Cari Aja Di Situ',
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
