var mongoose=require('mongoose');

var countries=mongoose.model('countries',new mongoose.Schema(
    {
      country_code: String,
      country_name: String,
      dialling_code: String,
      capital: String
    }
),'countrydocs');

module.exports=countries;