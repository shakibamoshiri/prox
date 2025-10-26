#!/bin/bash 

set -euo pipefail
set -x 

declare -r filename=${1:?error: filename<string> ?}

### gigabyte
perl -i  -s -lpe 's/(?<=id="data-gigabytes">)\d+(?=<\/span>)/$arg/' -- -arg=3  $filename
### day
perl -i -s -lpe 's/(?<=id="data-days">)\d+(?=<\/span>)/$arg/' -- -arg=5  $filename
### sessions
perl -i -s -lpe 's/(?<=id="data-sessions">)\d+(?=<\/span>)/$arg/' -- -arg=243  $filename

### qr image
perl -i -s -lpe 's/(?<=img src=").*?(?=" alt)/$arg/' -- -arg=one.png  $filename
### remote link
perl -i -s  -lpe 's/(?<=id="user-remote-link">).*?(?=<\/a>)/$arg/' -- -arg=one  $filename



