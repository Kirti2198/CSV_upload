const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const CSV_PATH = path.join('/uploads/files/csv_files');

const searchfileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', CSV_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

//   static methods
searchfileSchema.statics.uploadedCsv = multer({ storage: storage }).single('csv_file');
searchfileSchema.statics.csvfilePath = CSV_PATH;

const SearchFile = mongoose.model('SearchFile', searchfileSchema);
module.exports = SearchFile;

