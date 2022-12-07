const db = require( "../models")
const property = db.property;
const uuid = require ("uuidv4");
const { user } = require("../models");
const user = db.user

exports.createProperty = async (req, res) => {
    try {
let user = await user.findOne({
    wherw:{
        userid: req.userId
    },
});

      let property = await Property.create({

            propertyId: uuid(),
            userId: user.userId,
            images: req.body.images ,
            region: req.body.region,
            town: req.body.town,
            street: req.body.street,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            for: req.body.for,
            description: req.body.description,
            owner: user.firstName + lastName,
            phoneNumber: req.body.phoneNumber,
            price: req.body.price,
            available: req.body.available,

        })
        res
            .status(200)
            .send
    }catch (error){

    }

}