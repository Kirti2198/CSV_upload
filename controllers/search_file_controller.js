const SearchFile = require('../models/search_file');
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');



// module.exports.uploadCsv= function(req,res){
//     SearchFile.findById(req.params.id, function(err,search_file){
//         return res.render('home', {
//             title: "User profile",
//             search_file_user: search_file
//         });
//     });    
//   } 

//upload a file to the server

module.exports.upload = async function (req, res) {
    try {
        //we use this static function which is defined in Model file to 
        await SearchFile.uploadedCsv(req, res, function (err) {
            if (err) { console.log('****Multer Error*****', err) }

            // console.log(req.file);
             SearchFile.create({
                //saving the path of the uploaded file path field in SearchFile
                path: SearchFile.csvfilePath + '/' + req.file.filename

            });

        })

        return res.render('home', {
            path: 'home',
            title: 'CSV UPLOAD',
            message: 'File Uploaded Successfully'
        });

    } catch (err) {
        return res.render('home', {
            path: "home",
            title: "CSV UPLOAD",
            message: "File upload failed!"
        });
    }
}

//fetch all files 
module.exports.displayAllFiles = async function (req, res) {
    try {
        let allFiles = await SearchFile.uploadedCsv.find({});

        return res.render('files_view', {
            title: 'All files',
            path: 'files_view',
            files: allFiles
        });
    } catch (err) {
        return res.redirect('back');

    }
}


//selected files fetched
module.exports.openFile = async function (req, res) {
    try {
        let file = await SearchFile.uploadedCsv.findById(req.params.id);

        let csvFilePath = SearchFile.csvfilePath

        //csv to json
        const jsonArray = await csv().fromFile(csvFilePath);

        return res.render('display', {
            path: 'Display Files',
            title: 'display',
            name: file.name,
            jsonArray
        });
    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
}