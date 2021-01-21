const BOOKING_MODELS = require("../revoltModels/bookingModels")
const { logger, ResponseParser, RESPONSE } = require("../utils")

const registerCustomerBooking = async (_, args, context) => {
    logger("Logging registerCustomerBooking API ", args.bikecolor, "separator")
    try {
        let res = ResponseParser(await BOOKING_MODELS.CUSTOMER_DETAILS.create(args));
        logger("\n : ------ Response From registerCustomerBooking API  ---- :\n", res.id, "info")
        if (res.id) {
            let customerid = parseInt(res.id);
            //casting in argsObject
            args.customerid = customerid;
            let data = ResponseParser(await BOOKING_MODELS.BOOKING_DETAILS.create(args));
            // logger("\n : ------ Response From registerCustomerBooking API  For AfterBooking 1---- :\n", data, "info")
            if (data.id) {
                let response = ResponseParser(await BOOKING_MODELS.DEALER_DETAILS.create(args));
                // logger("\n : ------ Response From registerCustomerBooking API  For AfterBooking 2---- :\n", response, "info")
            }

        }
        //loanRefId casting 
        res.loanrefId = res.id;
        delete res.id;
        return RESPONSE(true, JSON.stringify(res), [], "Success!")
    }
    catch (error) {
        return RESPONSE(false, null, [{
            status: false,
            errorMessage: "Unable to Insert Data Error :" + error,
            errorCode: 777
        }], error.toString())
    }

}

module.exports = registerCustomerBooking