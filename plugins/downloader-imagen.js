import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*مثال علي استخدام الامر ${usedPrefix + command} ناروتو*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *نتيجه البحث:* ${text}
🌎 *بحث:* جوجل
`, author, link, link, '🔗 الرابط', null, null, [
['🔄 التالي 🔄', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صوره|image|صورة)$/i
export default handler
