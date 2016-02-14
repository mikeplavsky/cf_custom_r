"use strict";

let evt = JSON.parse(
        process.argv[2]);

let instance_id = process.argv[3];
let instance_ip = process.argv[4];

let responseBody = JSON.stringify({
    
    Status: "SUCCESS",
    Reason: "Instance started",
    PhysicalResourceId: instance_id,
    StackId: evt.StackId,
    RequestId: evt.RequestId,
    LogicalResourceId: evt.LogicalResourceId,
    Data: {IP: instance_ip}

});

console.log(responseBody);

let https = require("https");
let url = require("url");

let parsedUrl = url.parse(evt.ResponseURL);

let options = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: "PUT",
    headers: {
        "content-type": "",
        "content-length": responseBody.length
    }
};

console.log(options);

let request = https.request(options, (response)=>{

    console.log(
            `Status code: ${response.statusCode}`);

    console.log(
            `Status message: ${response.statusMessage}`);

});

request.on("error", (error)=>{
    console.log(
            `send(..) failed executing https.request(..): ${error}`);
});

request.write(responseBody);
request.end();
