var data = "query=select%20*%20where%20%7B%20%7B%20graph%20%3Fg%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20union%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20limit%2010&undefined=";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://dydra.com/skorkmaz/movielens1k/sparql");
xhr.setRequestHeader("Accept", "application/sparql-results+json");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Authorization", "Bearer YOUR_DYDRA_API_KEY");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "0f8c2131-0426-446c-b16d-632cfd1e16f8");

xhr.send(data);
