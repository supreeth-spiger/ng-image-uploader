const filedata = require('../models/filedata');
module.exports = (function () {
    return {

      fileUpload: function (req, res) {
      //  console.log("req body", req.body)
       var uploadAdd = new filedata(req.body);
      //  uploadAdd.find({"imgURL": req.body.image, "fileName":req.body.filename}).exec(function(err,file){
          uploadAdd.save(function(err,file){
            if(err){
              console.log(err)
            } 
            if(file){
              res.json("both the images uploaded to server");
            }
         
          })
         
      // })
        },
    }
}());
