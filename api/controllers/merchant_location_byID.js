'use strict';

var util = require('util');

// Merchant model needs to properly defined and required
var Location = require('../models/location');
 
module.exports ={
index: function(req,res){
  // Need to expand upon the find functionality of the location obj, specifically by ID
    Location.find({"location_gid":{$ne:null}}, function(err,merchant_location_byID){
        if(err){
            res.status(500).json(err).end();
            return;
        }
 
        res.json({
            merchant_location_byID : merchant_location_byID
        }).end();
    });
},