module.exports = mongoose => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema(
          {
            _id: { type : String , required : true },
             name: { type : String , required : true },
             category: {type : String , required : true},
             manufacturer:{type :String , required : true},
             availableItems:{type : Number , required : true},
             price:{type : Number , required : true},
             imageURL:{type : String , required :true},
             description:{type : String , required :true},
             createdAt: String,
             updatedAt: String,
             __v : Number
           
          
          },
          { timestamps: true }
        )
      );
    
      return Product;
    };