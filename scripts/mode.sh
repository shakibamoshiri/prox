#!/bin/bash


if (( ${#} == 0 )); then
    curl -s http://127.0.0.1:7000/configs -X GET | jq
else
    curl -s http://127.0.0.1:7000/configs -X PATCH -d '{"mode": "'${1}'"}'
    curl -s http://127.0.0.1:7000/configs -X GET | jq
fi
