import fetch from 'node-fetch';
import xml2js from 'xml2js';

 const products=async function fetchProductsFromFeed(feedUrl) {
  try {
    const res = await fetch(feedUrl);
    const text = await res.text();

    // تحويل XML إلى JSON
    const result = await xml2js.parseStringPromise(text);

    // معالجته حسب هيكل البيانات
   const items = result.rss.channel[0].item.map(p => ({
  id: p['g:id']?.[0] || '',
  title: p['g:title']?.[0] || '',
  description: p['g:description']?.[0] || '',
  price: p['g:price']?.[0] || '',
  image: p['g:image_link']?.[0] || '',
  url: p['g:link']?.[0] || ''
}));

    return items;
  } catch (err) {
    console.error("Error fetching or parsing feed:", err);
    return [];
  }
}
export default products;



