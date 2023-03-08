const User = require('../models/User');
var csv = require ('csvtojson')

const importUser = async(req,res)=>{

    try {

        var data = [];

        csv()
        .fromFile(req.file.path)
        .then(async(response) => {
            
            for(var x = 0; x < response.length; x++){
                data.push({
                    FirstName: response[x].FirstName,
                    LastName: response[x].LastName,
                    Age: response[x].Age,
                    Course: response[x].Course,
                });
            }

            await User.insertMany(data)
        });
        
        res.send({status:200, success:true, msg:'CSV Imported'});
    } catch (error) {
        res.send({status:400, success:false, msg:error.message});
    }

}

module.exports = {
    importUser
}