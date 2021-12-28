module.exports = mongoose => {
    const Order = mongoose.model(
        "order",
        mongoose.Schema(
          {
            _id: { type : String , required : true },
            address:[String],
            product:[String],
            quantity:{type : Number,required :true},
            user: [String],
            __v : Number
           
          
          },
          { timestamps: true }
        )
      );
    
      return Order;
    };