const log = console.log.bind( console )
log("prox")

const oneKilo = 1024
const oneMeg = 1024 * 1024;
const oneGig = 1024 * 1024 * 1024;

const oneMinute = 60
const oneHour = 60 * 60
const oneDay = 24 * 60 * 60

const limitColor = "#af0000"
const warningColor = "#facc00"

function bytesUnit(userBytes, userBytesBase){
    if (userBytes > userBytesBase) {
        document.getElementById('user-bytes').style.color = limitColor
        return "Limited"
    }
    if ((userBytes + oneGig) >= userBytesBase) {
        document.getElementById('user-bytes').style.color = warningColor
        return "Less than 1 Gigabyte to limit"
    }

    if (userBytes == 0 ) {
        return "Not Connected yet"
    }
    if (userBytes > 0 && userBytes <= oneKilo ){
        return "bytes"
    }

    if (userBytes > oneKilo && userBytes <= oneMeg ) {
        return "Kilobytes"
    }

    if (userBytes > oneMeg && userBytes <= oneGig ) {
        return "Megabytes"
    }

    if (userBytes > oneGig) {
        return  "Gigabytes"
    }
}

function bytesUsed(userBytes){
    if (userBytes == 0 ) {
        return 0
    }
    if (userBytes > 0 && userBytes <= oneKilo ){
        return userBytes
    }

    if (userBytes > oneKilo && userBytes <= oneMeg ) {
        return Math.floor((userBytes / oneKilo))
    }

    if (userBytes > oneMeg && userBytes <= oneGig ) {
        return Math.floor((userBytes / oneMeg))
    }

    if (userBytes > oneGig) {
        return Math.floor((userBytes / oneGig))
    }
}

function secondsUnit(userSeconds, userSecondsBase){
    if (userSeconds > userSecondsBase) {
        document.getElementById('user-seconds').style.color = limitColor
        return "Expired"
    }
    if ((userSeconds + oneDay) >= userSecondsBase) {
        document.getElementById('user-seconds').style.color = warningColor
        return 'Less than 1 day to expire'
    }

    if (userSeconds == 0) {
        return "Not Connected Yet"
    }
    if (userSeconds > 0 && userSeconds <= oneMinute) {
        return "Seconds"
    }

    if (userSeconds > oneMinute && userSeconds <= oneHour) {
        return "Minutes"
    }
    if (userSeconds > oneHour && userSeconds <= oneDay) {
        return "Hours"
    }
    if (userSeconds > oneDay) {
        return "Days"
    }
}

function secondsUsed(userSeconds){
    if (userSeconds == 0) {
        return 0
    }
    if (userSeconds > 0 && userSeconds <= oneMinute) {
        return userSeconds
    }

    if (userSeconds > oneMinute && userSeconds <= oneHour) {
        return Math.floor((userSeconds / oneMinute))
    }
    if (userSeconds > oneHour && userSeconds <= oneDay) {
        return Math.floor((userSeconds / oneHour))
    }
    if (userSeconds > oneDay) {
        return Math.floor((userSeconds / oneDay))
    }
}

const username = document.URL.split("/").filter((item) => {if (item != "" ) return item})[3]
const fetchURL = document.URL + username + ".json"

// Fetch the JSON file (could be local or from a server)
fetch(fetchURL)

    .then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json(); // parse JSON

}).then((data) => {

    log( data.atime )

    document.getElementById('user-sessions').textContent = data.sessions

    document.getElementById('user-atime').textContent = (new Date(data.atime * 1000).toLocaleString())

    document.getElementById('user-bytes-unit').textContent = bytesUnit(data.bytes.used, data.bytes.base)
    document.getElementById('user-bytes').textContent = bytesUsed(data.bytes.used)

    document.getElementById('user-seconds-unit').textContent = secondsUnit(data.seconds.used, data.seconds.base)
    document.getElementById('user-seconds').textContent = secondsUsed(data.seconds.used)

}).catch((error) => {

    console.error("Fetch error:", error);
});
