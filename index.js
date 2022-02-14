const express = require("express");
const formidable = require('express-formidable');

const getParser = ({ jsonOptions, formOptions } = {}) => {
    
    let jsonParser = express.json(jsonOptions || { limit: "50mb" }); // Express json middleware to parse application/json
    
    const formParser = formidable(formOptions || {
        multiples : true //To support multiple file uploads
    });
    
    // Return parser MiddleWare
    return (req, res, next) => {
        let requestContentType = req.get('content-type') || '';
        // For forms use formParser middleware else use express jsonParser
        if (requestContentType.includes('multipart/form-data')) {
            return formParser(req, res, next);
        }
        return jsonParser(req, res, next);
    }
}

module.exports = {
    getParser
}