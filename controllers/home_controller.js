const SearchFile= require('../models/search_file');

module.exports.home=  function(req,res){
  SearchFile.findById(req.params.id, function(err,search_file){
  return res.render('home', {
    title: "SearchCsvFiles | Home",
    search_file_user: search_file
 });
});
}
