const express = require('express')

const router = express.Router()

const cityModel = require('../model/cityModel')
const itineraryModel = require('../model/itineraryModel')

router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

router.get('/:name',
    (req, res) => {
        let cityName = req.params.name;
        itineraryModel.findOne({ city: cityName })
            .then(itinerary => {
                res.send(itinerary)
            })
            .catch(err => console.log(err));
    });

module.exports = router