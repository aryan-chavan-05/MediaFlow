import mongoose from "mongoose";

const contentSchema = mongoose.Schema({
    title:{
        type: String,
        require: [true, "Title is required"],
        trim: true,
        minlength: [3, "Title must be at least 3 characters"],
        maxlength: [100, "Title must be less than 100 characters"]
    },
    description:{
        type: String,
        require: [true, "Description is required"],
        trim: true,
        minlength: [10, "Description must be at least 10 characters"]
    },
    category:{
        type: String,
        require: [true, "Category is required"],
        trim: true
    },
    status:{
        type: String,
        values:{
            enum: ["Draft", "Published"],
            message: "Status is either Draft or Published"
        },
        default: "Draft"
    },
    thumbnail:{
        type: String,
        default: ""
    }
},
{
    timestamps: true,
})

const contentModel = mongoose.model("Content", contentSchema);

export default contentModel;