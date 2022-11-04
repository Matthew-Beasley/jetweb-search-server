import google from 'googlethis';
import bing from 'bing-scraper';


const getResults = async (term, page)  => {
  const options = {
    page: page, 
    safe: false,
    additional_params: { 
      hl: 'en' 
    }
  }
  const response = await google.search(term, options);
  return response; 
};

const googleSearch = async (term, pages) => {
  const promises = [];
  for (let i = 0; i < pages; i++) {
    promises.push(Promise.resolve(getResults(term, i)));
  }
  const searchResults = await Promise.all (
    promises
  );
  const output = searchResults.map((el, idx) => {
    return el.results;
  });
  const retArr = [];
  output.forEach((value, index, array) => {
    retArr.push(retArr, ...value)
  });

  return output;
}

const bingSearch = async (term, pages) => {
  const query = {
    "q": term,
    "lang": "en-US,en;q=0.5",
    "enforceLanguage": false,
    "pageCount": pages
  }
  return new Promise((resolve, reject) => {
    bing.search( query, (err, resp) => {
        if (err) {
          reject(err)
        } else {
          //console.log(resp)
          resolve(resp)
        }
      }
    )
  });
}


export { googleSearch, bingSearch};


