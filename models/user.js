var mongoose=require('mongoose');
var Schema=mongoose.Schema;

userSchema= new Schema({

	unique_is: Number,
	username:String,
	email:String,
	password:String,
	passwordConf:String

}),

User= mongoose.model('User',userSchema);

module.exports= User;