const mongoose = require('mongoose')
const utilities = require('../utilities/Utilities')
require('dotenv').config()

const nomineeSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
        phoneNumber: {
            type: String,
            trim: true,
            validate: [utilities.phoneValidator, 'Phone number is invalid']
            
        },
        email:{
            type:String,
        }

    },
    
    {
        timestamps: true,
    },

)




const Nominee = mongoose.model('Nominee', nomineeSchema)

module.exports = Nominee
