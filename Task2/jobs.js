const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/jobs", async(req,res)=>{

 try{

 const result = await db.query("SELECT * FROM jobs");

 res.json(result.rows);

 }catch(err){

 res.status(500).json(err);

 }

});

router.post("/jobs", async(req,res)=>{

 const {title,description,company,location,salary} = req.body;

 try{

 const result = await db.query(
 "INSERT INTO jobs(title,description,company,location,salary) VALUES($1,$2,$3,$4,$5) RETURNING *",
 [title,description,company,location,salary]
 );

 res.json(result.rows[0]);

 }catch(err){

 res.status(500).json(err);

 }

});

module.exports = router;