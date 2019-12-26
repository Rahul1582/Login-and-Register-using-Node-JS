var mongoose=require('mongoose');
var Schema=mongoose.Schema;

userSchema= new Schema({

	unique_is: Number,
	email:String,
	password:String,
	passwordConf:String

}),

User= mongoose.model('User',userSchema);

model.exports= User;