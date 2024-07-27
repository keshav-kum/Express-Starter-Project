const mongoose = require('mongoose');

const userSchema = new mongoose.SchemaN({
    firstName:{
        type:string,
        required:[true, "firstName should be required"],
        minlength:[5, "firsName shold be atleast five charecter"],
        lowercase:true,
        trim:true,
        maxlength:[20, "FirstName should maximum or equlal to 20"]
    },
    lastName:{
        type:string,
        required:[true, "firstName should be required"],
        minlength:[5, "firsName shold be atleast five charecter"],
        lowercase:true,
        trim:true,
        maxlength:[20, "FirstName should maximum or equlal to 20"]
    },
    mobileNumber:{
        type:string,
        required:[true, "phonNumber should be required"],
        unique:[true, "phonNumber is already in use"],
        trim:true
    },
    email:{
        type:string,
        require:[true, "email should be required"],
        unique:true,
        trim:true,
        minlength:[10, "charachter should be length 10"],
        maxlength:[10, "charachter should be length 10"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    pasword:{
       type:string,
       required:[true, "pasword should be required"],
       minlength:[6, "charachter should be minimum length 6"]
    }

},{
    Timestamp:true
});

const User = mongoose.model9("User",userSchema);

module.exports = User;