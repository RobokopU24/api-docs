/*
 * Call with `node utils/make_id_unique api/openapi.json` to make each `operationId` unique (OVERWRITES FILE) 
 */

const fs = require('fs');
const { v4 } = require('uuid');

const filePath = process.argv[2]; // path to JSON file passed as command line argument

fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    jsonData = addUuidToOperationId(jsonData);
    fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log(`Successfully appended UUID to operationId in ${filePath}`);
    });
});

function addUuidToOperationId(jsonData) {
    for (let key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            if (key === 'operationId') {
                jsonData[key] += '-' + v4();
            } else if (typeof jsonData[key] === 'object') {
                jsonData[key] = addUuidToOperationId(jsonData[key]);
            }
        }
    }
    return jsonData;
}
