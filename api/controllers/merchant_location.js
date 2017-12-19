'use strict';

/*
const express = require('express');
const localAuth = require('../auth/local');
const authHelpers = require('../auth/_helpers');

const router = express.Router();
*/

var util = require('util');
var request = require('request');

// Location model needs to properly defined and required
var Location = require('../models/location');

module.exports = {
  merchant_location: merchant_location
};


 // Add required authentication
function merchant_location(req, res) {
  // Collect Variables
  var searchText = req.swagger.params.searchText.value;
  var longitude = req.swagger.params.longitude.value;
  var latitude = req.swagger.params.latitude.value;
  var searchRadius = req.swagger.params.searchRadius.value;
  var maximumResults = req.swagger.params.maximumResults.value;
  var mobileClientAccess = req.swagger.params.mobileClientAccess.value;
  var omitMerchantInfo = req.swagger.params.omitMerchantInfo.value;
  var omitContactInfo = req.swagger.params.omitContactInfo.value;
  var omitConsumerFeatures = req.swagger.params.omitConsumerFeatures.value;
  var X-Fields = req.swagger.params.X-Fields.value;

  // Determine which data we have to choose query


  //Run query
  //return queries.getSingleLocation(parseInt(req.params.id, 10))
  var locations = ''

  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  if(err){
    console.log(err);
    res.status(500).json(err).end();
    return;
  }


  res.status(200).json({
      status: 'success',
      locations,
  });

}
