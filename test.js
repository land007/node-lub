const unite = require('./index');
const { promisify } = require('util');
const sleep = promisify(setTimeout);

var crawling = function(milliseconds) {
	return new Promise(async function(resolve, reject) {
		console.log('begin', milliseconds);
		setTimeout(() => {
			resolve(milliseconds);
		}, milliseconds);
	});
};
var reptile = function() {
	(async ()=> {
		await sleep(10);
		let sss = await unite(crawling, 2001);
		console.log('a', sss);
	})();
	(async ()=> {
		await sleep(20);
		let sss = await unite(crawling, 2002);
		console.log('b', sss);
	})();
	(async ()=> {
		await sleep(6000);
		let sss = await unite(crawling, 2003);
		console.log('c', sss);
	})();
};

reptile();