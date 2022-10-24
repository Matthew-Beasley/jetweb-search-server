const google = require('googlethis');


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

const searchGoogle = async (term, pages) => {
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


module.exports = searchGoogle;


