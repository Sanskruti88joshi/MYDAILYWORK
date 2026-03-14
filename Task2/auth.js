const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", async(req,res)=>{

 const {name,email,password,role} = req.body;

 const result = await db.query(
 "INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4) RETURNING *",
 [name,email,password,role]
 );

 res.json(result.rows[0]);

});

router.post("/login", async(req,res)=>{

 const {email,password} = req.body;

 const result = await db.query(
 "SELECT * FROM users WHERE email=$1 AND password=$2",
 [email,password]
 );

 if(result.rows.length>0){
  res.json({message:"Login successful"});
 }else{
  res.json({message:"Invalid login"});
 }

});

module.exports = router;