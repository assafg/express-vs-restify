#Restify
##ab -n 100000 -c 100 http://127.0.0.1:8080/

Server Software:
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        41 bytes

Concurrency Level:      100
Time taken for tests:   24.634 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      16800000 bytes
HTML transferred:       4100000 bytes
Requests per second:    4059.38 [#/sec] (mean)
Time per request:       24.634 [ms] (mean)
Time per request:       0.246 [ms] (mean, across all concurrent requests)
Transfer rate:          665.99 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0      15
Processing:     2   24   5.5     23      49
Waiting:        2   24   5.5     23      49
Total:          4   25   5.4     23      49

Percentage of the requests served within a certain time (ms)
  50%     23
  66%     26
  75%     28
  80%     29
  90%     32
  95%     34
  98%     37
  99%     39
 100%     49 (longest request)

## With Keepalive enabled
##ab -n 100000 -c 100 -k http://127.0.0.1:8080/  

Server Software:
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        41 bytes

Concurrency Level:      100
Time taken for tests:   15.569 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      17300000 bytes
HTML transferred:       4100000 bytes
Requests per second:    6423.09 [#/sec] (mean)
Time per request:       15.569 [ms] (mean)
Time per request:       0.156 [ms] (mean, across all concurrent requests)
Transfer rate:          1085.15 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       7
Processing:     1   16   3.5     15      42
Waiting:        1   16   3.5     15      42
Total:          1   16   3.5     15      42

Percentage of the requests served within a certain time (ms)
  50%     15
  66%     16
  75%     17
  80%     17
  90%     20
  95%     22
  98%     25
  99%     27
 100%     42 (longest request)


#Express
##ab -n 100000 -c 100 http://127.0.0.1:3000/

Server Software:
Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /
Document Length:        41 bytes

Concurrency Level:      100
Time taken for tests:   20.937 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      22900000 bytes
HTML transferred:       4100000 bytes
Requests per second:    4776.32 [#/sec] (mean)
Time per request:       20.937 [ms] (mean)
Time per request:       0.209 [ms] (mean, across all concurrent requests)
Transfer rate:          1068.14 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.5      0      13
Processing:     1   21   5.1     20      51
Waiting:        0   21   5.1     20      51
Total:          4   21   4.9     20      51

Percentage of the requests served within a certain time (ms)
  50%     20
  66%     22
  75%     24
  80%     24
  90%     26
  95%     28
  98%     32
  99%     37
 100%     51 (longest request)

## With Keepalive enabled
##ab -n 100000 -c 100 -k http://127.0.0.1:3000/

Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /
Document Length:        41 bytes

Concurrency Level:      100
Time taken for tests:   11.993 seconds
Complete requests:      100000
Failed requests:        0
Keep-Alive requests:    100000
Total transferred:      23400000 bytes
HTML transferred:       4100000 bytes
Requests per second:    8338.24 [#/sec] (mean)
Time per request:       11.993 [ms] (mean)
Time per request:       0.120 [ms] (mean, across all concurrent requests)
Transfer rate:          1905.42 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       9
Processing:     0   12   2.5     12      29
Waiting:        0   12   2.5     12      29
Total:          0   12   2.5     12      29

Percentage of the requests served within a certain time (ms)
  50%     12
  66%     12
  75%     12
  80%     13
  90%     15
  95%     16
  98%     18
  99%     19
 100%     29 (longest request)
