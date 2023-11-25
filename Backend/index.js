const express=require("express")
const config=require("./config")

const mongoose=require("mongoose")

const Bookroute =require("./Route/Bookroute")
const cors=require("cors")


const app=  express();

app.use(express.json());
app.use(cors())

//cors
// app.use(cors({
//         origin:"http://localhost:5050",
//         methods:["GET","POST","PUT","DELETE"],
//         allowedHeader:['Content-Type']

// }))

//GET
app.get("/",(req,res)=>{
 
    res.status(234).send("Welcome")
})

app.use("/books",Bookroute)


mongoose.connect(config.mongodbURL).then(()=>{

    console.log("Mongoose Connected...")
    app.listen(config.port,()=>{
        console.log(`app is listening ${config.port}`)
        
    });
   
}).catch((err)=>{

    console.error(err.message)
})