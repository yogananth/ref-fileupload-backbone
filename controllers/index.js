'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

        res.render('index', model);

    });



    router.post('/import', function (req, res) {

        // Since this app is just a reference for client-side file upload functionality,
        // I'm just implementing a simple backend route

        var result = {};

        if (req.files && req.files.inFile && req.files.inFile.name && req.files.inFile.name !== '') {
            result = {
                '_ok' : true,
                'file': req.files.inFile,
                'message': 'File uploaded successfully : ' + req.files.inFile.name
            };
        } else {
            result = {
                '_ok' : false,
                'message': 'No file to upload'
            };
        }



        if (req.xhr || req.headers.accept.indexOf('json') > -1) {

            // Respond JSON if XHR request
            res.status(200).json(result);

        } else {

            result.alert = true;
            res.render('index', {'result': result});    

        }
    });

};
