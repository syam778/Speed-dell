import express from "express";
import manu from "../manu.js";
const manuRouter = express.Router();
manuRouter.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newManu = new manu(data);
    const response = await newManu.save();
    console.log('manu data save')
    res.status(200).json(response)
  } catch (error) {
    console.log('error')
    res.status(500).json({error:"internal err"})

  }
});
manuRouter.get('/',async(req,res) =>{
  try {
    const data = await manu.find()
    console.log('manu data save')
    res.status(200).json(data)
    
  } catch (error) {
    console.log('manu data error')
    res.status(500).json({error:'manu internal err'})
    
  }

})

manuRouter.get('/:testType',async(req,res) =>{
  try {
    const testType = req.params.testType;
    if(testType == 'sweet' || testType == 'spice' || testType == 'nurmal' || testType == 'numkin' ){
      const response = await manu.find({test:testType});
      console.log('test save')
      res.status(200).json(response)
    }else{
      res.status(400).json({error:'not fund your data'})
    }
    
  } catch (error) {
    console.log('error')
    res.status(500).json({error:'internal error'})
    
  }
  
})
export default manuRouter;