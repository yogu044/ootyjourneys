const express=require('express')
const router=express.Router()
const {submitContactForm}=require("../controller/Contactdetail")

router.post("/send",submitContactForm)

module.exports=router