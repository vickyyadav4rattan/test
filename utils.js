
var css = "\x1b[36m%s\x1b[0m";
var yellow = "\x1b[33m \x1b[1m \x1b[4m"
const logger = (msg, variables, type) => {
    const currentDateTime = new Date().toLocaleString()

    switch (type) {
        case "separator":
            console.log(yellow, "####################################################################################################")
            console.log(css, currentDateTime, "------ : ", msg)
            console.log(currentDateTime, "------ Data : ", variables)
            console.log(yellow, "####################################################################################################")
            break;

        case "info":
            console.log(css, currentDateTime, variables == '' ? "\x1b[5m---------- :" : " : ------ :  Data ", variables, "------------  :", msg);
            break;

        case "debug":
            console.log(css, currentDateTime, " : -------------------------------------------------------------------------------------\n -------- :: ", msg, variables)

    }
}

const ResponseParser = (data) => {
    return JSON.parse(JSON.stringify(data))
}


const RESPONSE = (status, data, errors, message) => {
    return {
        status, data, errors, message
    }
}

const UTILS = { logger, ResponseParser, RESPONSE }
module.exports = UTILS