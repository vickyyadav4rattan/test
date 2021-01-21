const { DataTypes } = require('sequelize');
const CONFIG = require("../revoltConfig/serverconfig")
const sequelize = CONFIG.sequelize;

const CUSTOMER_DETAILS = sequelize.define('customer_details', {
    // Model attributes 
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middlename: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING
    },
    mobilenumber: {
        type: DataTypes.STRING
    },
    emailaddress: {
        type: DataTypes.STRING
    },
    source: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.TIME
    },
    updatedAt: {
        type: DataTypes.TIME
    }
}, CONFIG.schema);


const BOOKING_DETAILS = sequelize.define('booking_details', {
    // Model attributes 
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customerid: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    plan: {
        type: DataTypes.STRING,
    },
    bookingrefid: {
        type: DataTypes.STRING
    },
    bookingamount: {
        type: DataTypes.STRING
    },
    bikemodel: {
        type: DataTypes.STRING
    },
    bikecolor: {
        type: DataTypes.STRING
    },
    deliverybatch: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.TIME
    },
    updatedAt: {
        type: DataTypes.TIME
    }
}, CONFIG.schema);




const DEALER_DETAILS = sequelize.define('dealer_details', {
    // Model attributes 
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customerid: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    dealerid: {
        type: DataTypes.STRING,
    },
    dealeraddress: {
        type: DataTypes.STRING
    },
    dealername: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.TIME
    },
    updatedAt: {
        type: DataTypes.TIME
    }
}, CONFIG.schema);




const BOOKING_MODELS = {
    CUSTOMER_DETAILS,
    BOOKING_DETAILS,
    DEALER_DETAILS
}
module.exports = BOOKING_MODELS 