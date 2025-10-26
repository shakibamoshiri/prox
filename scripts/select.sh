#!/bin/bash


if (( ${#} == 0 )); then
    curl -s http://127.0.0.1:7000/proxies/Manual | jq
else
    curl -s http://127.0.0.1:7000/proxies/Manual -X PUT -d '{"name":"'${1}'"}'
    curl -s http://127.0.0.1:7000/proxies/Manual | jq
fi
