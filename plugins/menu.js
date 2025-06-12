import config from '../../config.cjs';

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🎀');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    // Use a fixed profile picture URL for the menu
    const profilePictureUrl = 'https://files.catbox.moe/n0dgjr.jpg';

    const menuText = `
═══════════════════════
> 🌟  *𝙋𝙀𝘼𝘾𝙀 𝙈𝘿 𝗕𝗢𝗧* 🌟
> *Version*: 8.1.0 |
> *DEVELOPED BY 𝗣𝗘𝗔𝗖𝗘𝗠𝗔𝗞𝗘𝗥🪆*
> *ULTRASONIC POWER AND SPEED ⚡
═══════════════════════

_✨ *𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗠𝗘𝗡𝗨* ✨_
> *Explore the commands below to harness the bot's full power!*

═══════════════════════
   🌍  *𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨* 🌍
═══════════════════════
| ⚡ | ${prefix}menu
| 🟢 | ${prefix}alive
| 🛠️ | ${prefix}owner
| 🍔 | ${prefix}list
═══════════════════════

═══════════════════════
   👑  *𝗢𝗪𝗡𝗘𝗥 𝗣𝗔𝗚𝗘* 👑
═══════════════════════
| 🎮 | ${prefix}join
| 🚪 | ${prefix}leave
| 🩷 | ${prefix}autobio
| 🔒 | ${prefix}block
| 🧋 | ${prefix}autolikestatus
| 🔓 | ${prefix}unblock
| 🤖 | ${prefix}antidelete on
| 🚫 | ${prefix}anticall
| 🛑 | ${prefix}settings
| 📝 | ${prefix}setname
═══════════════════════

═══════════════════════
  🤖  *𝗚𝗣𝗧 𝗠𝗘𝗡𝗨* 🤖
═══════════════════════
| 💬 | ${prefix}ai
| 🐞 | ${prefix}bug
| 📝 | ${prefix}report
| 🚪 | ${prefix}chatbot
| 🧠 | ${prefix}gpt
| 🎨 | ${prefix}xeon
═══════════════════════

═══════════════════════
  📦  *𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 𝗣𝗔𝗚𝗘* 📦
═══════════════════════
| 🎶 | ${prefix}attp
| 🎬 | ${prefix}gimage
| 🎧 | ${prefix}play
| 📹 | ${prefix}video
═══════════════════════

═══════════════════════
   🔍  *𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨* 🔍
═══════════════════════
| 🔎 | ${prefix}google
| 📽️ | ${prefix}mediafire
| 🚪 | ${prefix}facebook
| ❤️ | ${prefix}instagram
| 🚪 | ${prefix}tiktok
| 🎶 | ${prefix}lyrics
| 🎬 | ${prefix}imdb
═══════════════════════

═══════════════════════
   🔍  *𝗙𝗨𝗡 𝗠𝗘𝗡𝗨* 🔍
═══════════════════════
| 🔎 | ${prefix}getpp
| 📽️ | ${prefix}url
| 😂 | ${prefix}roast
═══════════════════════


🔧 *Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ᴍᴇɴᴜ!*
*ᴡᴀɪᴛ ғᴏʀ ᴍᴏʀᴇ ᴄᴏᴍᴍᴀɴᴅs...*

📢 *ᴅᴇᴠ 𝗣𝗘𝗔𝗖𝗘𝗠𝗔𝗞𝗘𝗥*
`;

    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "PEACE-MD",
          newsletterJid: "120363421564278292@newsletter",
        },
      }
    }, { quoted: m });
  }
};

export default menu;
