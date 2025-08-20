
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;

import qrcode from 'qrcode-terminal';
import { handleMessage } from './utils/messageHandler.js';

// إنشاء client
const client = new Client({
    authStrategy: new LocalAuth()
});

// QR code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('QR code generated! Scan it with WhatsApp.');
});

// جاهزية البوت
client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

// استقبال الرسائل
client.on('message', msg => {
    handleMessage(client, msg);
});

// تشغيل البوت
client.initialize();
