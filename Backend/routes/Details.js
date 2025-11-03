const express=require('express')
const router=express.Router()
const register=require("../controller/GetDetail")


router.post('/add',register)

module.exports = router; 