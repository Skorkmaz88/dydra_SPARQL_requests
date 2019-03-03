require 'uri'
require 'net/http'

url = URI("https://dydra.com/skorkmaz/movielens1k/sparql")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/sparql-results+json'
request["Content-Type"] = 'application/x-www-form-urlencoded'
request["Authorization"] = 'Bearer YOUR_DYDRA_API_KEY
request["cache-control"] = 'no-cache'
request.body = "query=select%20*%20where%20%7B%20%7B%20graph%20%3Fg%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20union%20%7B%3Fs%20%3Fp%20%3Fo%7D%20%7D%20limit%2010&undefined="

response = http.request(request)
puts response.read_body
