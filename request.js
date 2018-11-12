const rp = require('request-promise');
const $ = require('cheerio');

const url = 'https://www.supremenewyork.com/shop';



rp(url)

  .then(function(html){

    //success!

    console.log($('li > a', html).length);
    //console.log(html);

    console.log($('li > a', html));
    const wikiUrls = [];

    for (let i = 0; i < 51; i++) {

      wikiUrls.push($('li > a', html)[i].attribs.href);

    }

    console.log(String(wikiUrls));

  })

  .catch(function(err){

    //handle error

  });

