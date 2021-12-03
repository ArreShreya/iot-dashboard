const express = require("express");
const app = express();
const cors = require("cors");


var ThingSpeakClient = require('thingspeakclient');
var client = new ThingSpeakClient({server:'http://localhost:8000'}, {updateTimeout:15000});

client.attachChannel(1587446, { eadKey:'DVNDCBS2VZEDWU5L'}, function(err, resp) {
    if (!err && resp > 0) {
        console.log('update successfully. Entry number was: ' + resp);
    }
    else {
        console.log('There is an error attaching ' + err);
    }
});

// client.updateChannel(4711, {field1: 7, field2: 6}, function(err, resp) {
//     if (!err && resp > 0) {
//         console.log('update successfully. Entry number was: ' + resp);
//     }
// });

// READ DATA
client.getFieldFeed(1587446, "Temp_amb", function(err, resp) {
    console.log(resp)
    if (!err && resp > 0) {
        console.log('read successfully. Entry number was: ' + resp);
    }
}); 