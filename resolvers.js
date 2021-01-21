const { lookupBookingByMobile } = require("./revoltQueries/Lookup")
const registerCustomerBooking = require("./revoltMutations/registerCustomerBooking")

const resolvers = {
    Query: { lookupBookingByMobile, },
    Mutation: { registerCustomerBooking, }
}

module.exports = resolvers