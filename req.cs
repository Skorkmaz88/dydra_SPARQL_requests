var client = new RestClient("https://dydra.com/skorkmaz/movielens1k/sparql");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("Authorization", "Bearer YOUR_DYDRA_API_KEY");
request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
request.AddHeader("Accept", "application/sparql-results+json");
request.AddParameter("undefined", "query=select%20*%20where%20%7B%20%7B%20graph%20%3Fg%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20union%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20limit%2010&undefined=", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
