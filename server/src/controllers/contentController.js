import contentModel from "../models/content.js"

const createContent = async(req,res) => {
    try{
        const {title,description,category,status,thumbnail} = req.body;

        const content = await contentModel.create({
            title,
            description,
            category,
            status,
            thumbnail
        });

        res.status(201).json({
            success: true,
            message: "Content Created Successfully",
            data: content,
        });
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

const getallContent = async (req,res) => {
    try{

        const {search , 
               category , 
               status , 
               page = 1 , 
               limit = 10}
               = req.query;

        let filter = {};

        if(search){
            filter.$or = [
                    {title : {$regex : search , $options : "i"} },
                    {description: {$regex : search , $options : "i"} },
                    {category: {$regex : search , $options : "i"}}
                ];
        }

        if(category){
            filter.category = category
        }

        if(status){
            filter.status = status
        }

        const skip = (page - 1) * limit;

        const content = await contentModel.find(filter)
                        .sort({createdAt: -1})
                        .skip(skip)
                        .limit(Number(limit));

        const total = await contentModel.countDocuments(filter);

        res.status(200).json({
            success: true,
            count: content.length,
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total  / limit),
            data: content
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const getCOntentById = async (req , res) => {
    try{
        const content = await contentModel.findById(req.params.id);

        if(!content){
            res.status(404).json({
                success: false,
                message: "content not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Data fetched Successfully",
            data: content
        })
    }
    catch(err){
         if (error.name === "CastError") {
            return res.status(400).json({
            success: false,
            message: "Invalid content ID",
            });
        }

        console.log(err)
        
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}

const updateContent = async (req, res) => {
  try {
    const content = await contentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Content updated successfully",
      data: content,
    });
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
        message: "Internal server error"
    })
  }
};

const deleteContent = async (req, res) => {
  try {
    const content = await contentModel.findByIdAndDelete(req.params.id);

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Content deleted successfully",
    });
  } 
  catch (err) {
    console.log(err)
    res.status(500).json({
        message: "Internal server error"
    })
  }
};

export default {createContent , getallContent , getCOntentById , updateContent , deleteContent}