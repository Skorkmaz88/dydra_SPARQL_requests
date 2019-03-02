import requests

url = "http://dydra.com/skorkmaz/movielens1k/sparql"

payload = "query=select%20*%20where%20%7B%20%7B%20graph%20%3Fg%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20union%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20limit%2010&undefined="
headers = {
    'Accept': "application/sparql-results+json",
    'Content-Type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer YOUR_DYDRA_API_KEY",
    'cache-control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
