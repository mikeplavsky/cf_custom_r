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

console.log(responseBody)
console.log("Done!")
