var request = require("request");

var options = { method: 'POST',
  url: 'https://dydra.com/skorkmaz/movielens1k/sparql',
  headers: 
   { 'cache-control': 'no-cache',
     Authorization: 'Bearer YOUR_DYDRA_API_KEY',
     'Content-Type': 'application/x-www-form-urlencoded',
     Accept: 'application/sparql-results+json' },
  form: 
   { query: 'select * where { { graph ?g {?s ?p ?o} } union {?s ?p ?o} } limit 10',
     undefined: undefined } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
