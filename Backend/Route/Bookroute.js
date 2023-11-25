const express=require("express")
const bookmodel=require("../Models/bookmodel.js");
const router =  express.Router();



//POST save a book
router.post("/",async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear ){
           return res.status(400).send({
                message:"Send all required fields :title.author,publishYear"
            })
        }
        const newBooks={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }

        const book=await bookmodel.create(newBooks);

        return res.status(201).send(book)

    }catch(err){
        console.error(err.message)
        res.status(500).send({message:err.message})
    }

})
//GET all books
router.get("/", async(req,res)=>{
try{
    const books =await bookmodel.find({});
    return res.status(200).json({
        booksCount:books.length,
        data:books
    })

}catch(err){
    console.log(err.message);
    res.status(500).send({message:err.message});
}

})

//GET one books
router.get("/:id", async(req,res)=>{
    try{

        const {id}=req.params;
        const book =await bookmodel.findById(id);
        return res.status(200).json(book)
    
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
    
    })

//update

router.put("/:id",async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(400).send({
                 message:"Send all required fields :title.author,publishYear"
             })
         }
         const {id}=req.params
         const result=await bookmodel.findByIdAndUpdate(id,req.body)

         if(!result){
            return res.status(404).send({message:"book not found"})
         }

         return res.status(200).send({message:"Book Updated..."})


    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }

})

//delete
router.delete("/:id",async(req,res)=>{
    try{
       
         const {id}=req.params
         const result=await bookmodel.findByIdAndDelete(id,req.body)

         if(!result){
            return res.status(404).send({message:"book not found"})
         }

         return res.status(200).send({message:"Book Deleted..."})


    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message});
    }

})


module.exports=router


