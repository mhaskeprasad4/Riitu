/**
 * Instant Search Engine Indexing Tool (IndexNow Protocol)
 * Automatically notifies Microsoft Bing, Yandex, Naver, and Seznam
 * whenever pages are updated, triggering crawling within seconds.
 */

const https = require('https');

const host = 'riituinstitution.com';
const key = 'e7c8b415a9d643878b209d012e564f92';
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/ca-coaching-kharghar`,
  `https://${host}/ca-classes-navi-mumbai`,
  `https://${host}/ca-foundation`,
  `https://${host}/ca-intermediate`,
  `https://${host}/courses`,
  `https://${host}/commerce-11th-12th`,
  `https://${host}/school-6th-10th`,
  `https://${host}/cs-cma`,
  `https://${host}/college-bcom-bms`,
  `https://${host}/our-faculty`,
  `https://${host}/about-us`
];

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log(`Submitting ${urlList.length} URLs to IndexNow (Bing / Yandex)...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode} ${res.statusMessage}`);
  res.on('data', (d) => process.stdout.write(d));
  res.on('end', () => console.log('\nIndexing submission complete!'));
});

req.on('error', (e) => {
  console.error(`IndexNow submission error: ${e.message}`);
});

req.write(postData);
req.end();
