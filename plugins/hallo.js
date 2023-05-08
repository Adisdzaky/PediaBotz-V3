let handler = async (m, { conn, participants }) => {
 m.reply('Hai, Saya RullBOT Ada Yang Bisa Saya Bantu? Seperti Mengirim Chat Confess,Membuat Sticker Atau Mendownload Video Tiktok?')
 }
 handler.help = ['Hallo','Halo']
 handler.tags = ['main']
 
 handler.customPrefix = /Hallo|Halo$/i
 handler.command = new RegExp
 module.exports = handler