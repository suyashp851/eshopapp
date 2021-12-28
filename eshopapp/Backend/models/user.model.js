module.exports = mongoose => {
    const Users = mongoose.model(
        "user",
        mongoose.Schema(
          {
            _id: { type : String , required : true },
            isAdmin: Boolean,
            name: { type : String , required : true },
            email: { type : String , unique : true, required : true , dropDups: true},
            password: {type: String, required: true},
            __v : Number,
           //uuid: String,
           //accesstoken: String,
          
          },
          { timestamps: true }
        )
      );
    
      return Users;
    };