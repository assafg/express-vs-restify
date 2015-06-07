#Express
## ab -n 100000 -c 100 -p post-date.json -T "application/json" http://127.0.0.1:3000/

    Server Software:
    Server Hostname:        127.0.0.1
    Server Port:            3000

    Document Path:          /
    Document Length:        6657 bytes

    Concurrency Level:      100
    Time taken for tests:   61.707 seconds
    Complete requests:      100000
    Failed requests:        0
    Total transferred:      686000000 bytes
    Total body sent:        874000000
    HTML transferred:       665700000 bytes
    Requests per second:    1620.56 [#/sec] (mean)
    Time per request:       61.707 [ms] (mean)
    Time per request:       0.617 [ms] (mean, across all concurrent requests)
    Transfer rate:          10856.52 [Kbytes/sec] received
                            13831.77 kb/s sent
                            24688.29 kb/s total

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.3      0      21
    Processing:    29   62   7.3     61     124
    Waiting:       29   62   7.3     61     124
    Total:         30   62   7.3     61     125

    Percentage of the requests served within a certain time (ms)
    50%     61
    66%     65
    75%     67
    80%     68
    90%     71
    95%     73
    98%     76
    99%     78
    100%    125 (longest request)

#Restify
## ab -n 100000 -c 100 -p post-date.json -T "application/json" http://127.0.0.1:8080/

    Server Software:
    Server Hostname:        127.0.0.1
    Server Port:            8080
    
    Document Path:          /
    Document Length:        6657 bytes

    Concurrency Level:      100
    Time taken for tests:   55.201 seconds
    Complete requests:      100000
    Failed requests:        0
    Total transferred:      678600000 bytes
    Total body sent:        874000000
    HTML transferred:       665700000 bytes
    Requests per second:    1811.55 [#/sec] (mean)
    Time per request:       55.201 [ms] (mean)
    Time per request:       0.552 [ms] (mean, across all concurrent requests)
    Transfer rate:          12005.04 [Kbytes/sec] received
                            15461.84 kb/s sent
                            27466.88 kb/s total

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.2      0      14
    Processing:     9   55   8.4     55      95
    Waiting:        8   55   8.4     55      95
    Total:         15   55   8.4     55      97

    Percentage of the requests served within a certain time (ms)
    50%     55
    66%     59
    75%     61
    80%     62
    90%     66
    95%     70
    98%     73
    99%     75
    100%     97 (longest request)
