import fetchProducts from '../data/products.js'; // دالة جلب المنتجات من الفيد

export const sessions = new Map();

export async function handleMessage(client, msg) {
    const chatId = msg.from;
    const text = msg.body.trim();

    // لو العميل جديد
    if (!sessions.has(chatId)) {
        sessions.set(chatId, { step: 'language' });
        client.sendMessage(chatId, "🌐 اختر لغتك / Choose your language:\n1️⃣ عربي\n2️⃣ English");
        return;
    }

    const session = sessions.get(chatId);

    // اختيار اللغة
    if (session.step === 'language') {
        if (text === '1') {
            session.language = 'ar';
        } else if (text === '2') {
            session.language = 'en';
        } else {
            client.sendMessage(chatId, "Please choose 1 or 2");
            return;
        }

        // بعد اختيار اللغة مباشرة نجيب كل المنتجات
        session.step = 'product';
        const items = await fetchProducts('https://www.peoniaq8.com/product/feed/?lang=en');


        if (!items || items.length === 0) {
            client.sendMessage(chatId, session.language === 'ar' ? "لا توجد منتجات حالياً" : "No products available currently");
            return;
        }

        let msgText = session.language === 'ar' ? 'اختر المنتج:' : 'Choose a product:';
        items.forEach((p, idx) => {
            msgText += `\n${idx + 1} ${p.title} - ${p.price}`;
        });

        session.items = items;
        client.sendMessage(chatId, msgText);
        sessions.set(chatId, session);
        return;
    }

    // خطوة اختيار المنتج
    if (session.step === 'product') {
        const idx = parseInt(text) - 1;
        const item = session.items[idx];
        if (!item) {
            client.sendMessage(chatId, session.language === 'ar' ? "اختيار غير صحيح" : "Invalid choice");
            return;
        }

        session.step = 'extras';
        session.product = item;

        const extrasText = session.language === 'ar' ? "تحب نضيف معاه:\n🎈 بلونات\n🕯️ شموع\n💌 كرت إهداء" 
                                                     : "Do you want to add:\n🎈 Balloons\n🕯️ Candles\n💌 Greeting Card";
        client.sendMessage(chatId, extrasText);
        sessions.set(chatId, session);
        return;
    }

    // خطوة Extras
    if (session.step === 'extras') {
        session.step = 'payment';
        session.extras = text; // يمكن توسعة parsing لأكثر من اختيار

        const summary = session.language === 'ar' ? 
            `ممتاز ✅ طلبك:\n${session.product.title}\nإضافة: ${session.extras}\nالسعر: ${session.product.price}` :
            `Great ✅ Your order:\n${session.product.title}\nAdd: ${session.extras}\nPrice: ${session.product.price}`;

        client.sendMessage(chatId, summary);

        // رابط الدفع (يمكن تغييره حسب مشروعك)
        const paymentLink = "https://your-payment-link.com";
        const paymentMsg = session.language === 'ar' ? `🔗 هذا لينك الدفع الآمن:\n👉 ${paymentLink}`
                                                      : `🔗 Here is your secure payment link:\n👉 ${paymentLink}`;
        client.sendMessage(chatId, paymentMsg);

        // انتهاء الطلب
        sessions.delete(chatId);
        return;
    }
}
