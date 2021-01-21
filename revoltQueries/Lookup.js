const BOOKING_MODELS = require("../revoltModels/bookingModels")
const { logger, ResponseParser, RESPONSE } = require("../utils")
const lookupBookingByMobile = async (_, { mobilenumber }, context) => {
    logger("Logging lookupBookingByMobile API ", '', "info")
    let response = ResponseParser(await BOOKING_MODELS.CUSTOMER_DETAILS.findOne({ where: { mobilenumber: mobilenumber } }))
    logger("Response From lookupBookingByMobile API customerDetails ---- :", response, "separator")
    if (response) {
        return RESPONSE(true, response, [])
    }
    else {
        return RESPONSE(false, response, [{
            status: false,
            errorMessage: "Record Not Present Data :" + response,
            errorCode: 404
        }])
    }
}

const LOOKUP_APIS = { lookupBookingByMobile, }
module.exports = LOOKUP_APIS