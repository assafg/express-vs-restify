# express-vs-restify

This is a simple benchmark project to test the difference in performance between [Expressjs](http://expressjs.com/) and [Restify](http://mcavage.me/node-restify/)
for simple API's that don't require page generation.

### Setup
Use vagrant to set up a machine: vagrant up.

This should spaun a machine with 2 node processes - an express server listening on port 3000 and a restify server listening on port 8080.

To make sure the processes are running point your browser to [http://192.168.33.10:8080](http://192.168.33.10:8080) and [http://192.168.33.10:3000](http://192.168.33.10:3000) and make sure
that you get a response.

If not - ssh into the machine and using forever start the processes manually

### Benchmark
I used ApacheBenchmark (ab) to test variouse requests - see results in results-simple-get.md and results-post.md.
Feel free to use any benchmarking tool. and add more endpoints to the servers.
