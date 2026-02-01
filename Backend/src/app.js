const express = require("express")
const noteModel = require("./model/note.model")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello baby")
})

app.post("/api/note",async (req,res)=>{
    const {title,description,age} = req.body;
    const note =await noteModel.create({
        title,description,age
        }
      )
      res.status(201).json({
        message:"note created by succesfully",
        note 
      })  
})


app.get("/api/note",async (req,res)=>{
      const note =await noteModel.find()
      res.status(200).json({
        message:"note fatched  succesfully",
        note
      })

})


app.delete("/api/note/:id",async (req,res)=>{
           
  const id = req.params.id

     await noteModel.findByIdAndDelete(id)
  res.status(200).json({
    message:"note deleted succesfully"
  })
 
})
 
app.patch('/api/note/:id',async (req,res)=>{
 
  const id = req.params.id 
  const {description,title,age} = req.body
    
  await noteModel.findByIdAndUpdate(id,{description,title,age})

  res.status(200).json({
    message:"updated succesfully"
  })


  

})

 


module.exports = app