import express from "express";
import person from "../person.js";
const personRouter = express.Router();

personRouter.post('/', async (req, res) => { //endpoint post method
    try {
      const data = req.body;
      const newperson = new person(data); //data wrap
      const response = await newperson.save();
      console.log('data saved')
      res.status(200).json(response);
  
    } catch (error) {
      console.log('data err')
      res.status(500).json({ error: 'internal error' });
  
    }
  })
  personRouter.get('/', async (req, res) => {
    try {
      const data = await person.find()
      console.log('data show')
      res.status(200).json(data);
  
    } catch (error) {
      console.log('data show  err')
      res.status(500).json({ error: ' data show internal error' });
  
    }
  })
  personRouter.get('/:workType',async(req,res) =>{
    try {
      const workType = req.params.workType;
      if(workType == 'backend' || workType == 'fullstack' || workType == 'frontend' || workType == 'dataentry'){
        const response = await person.find({job:workType});
        console.log('response data')
        res.status(200).json(response);
      }else{
        res.status(400).json({error:"invalid worktype"})
      }
      
    } catch (error) {
      console.log('response data error')
        res.status(500).json({error:'inrernal error'})
      
    }
  
  });
  personRouter.put('/:id',async(req,res) =>{
    try {
        const id = req.params.id;
        const updatedata = req.body;
        
        const response = await person.findByIdAndUpdate(id,updatedata,{
            new : true,
            runValidators:true
        })
        if(!response){
            res.status(400).json({error:'person nut fund'})
        }
        console.log('data update')
        res.status(200).json(response)
        
    } catch (error) {
        console.log('error')
        res.status(500).json({error:'data not update'})
        
    }
  })
  personRouter.delete('/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const response = await person.findByIdAndDelete(id);
        if(!response){
            res.status(400).json({error:'person nut delet'})
        }
        console.log('data  deletsucess')
        res.status(200).json(response)
    } catch (error) {
        console.log('error')
        res.status(500).json({error:'data not update'})
        
        
    }

  })
  export default personRouter;