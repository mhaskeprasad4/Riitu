const https = require('https');
const fs = require('fs');
const path = require('path');

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
const urlList = locMatches.map((m) => m.replace(/<\/?loc>/g, '').trim());

console.log(`Found ${urlList.length} URLs in sitemap.xml to submit to IndexNow.`);

const payload = JSON.stringify({
  host: 'riituinstitution.com',
  key: 'e7c8b415a9d643878b209d012e564f92',
  keyLocation: 'https://riituinstitution.com/e7c8b415a9d643878b209d012e564f92.txt',
  urlList: urlList,
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Gateway Response Status: ${res.statusCode} ${res.statusMessage}`);
  let responseData = '';
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ IndexNow submission SUCCESS! Search engines notified for rapid indexing.');
    } else {
      console.log('Response body:', responseData);
    }
  });
});

req.on('error', (e) => {
  console.error(`IndexNow Request Error: ${e.message}`);
});

req.write(payload);
req.end();
