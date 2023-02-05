const express = require('express')
const {getallProducts,getallProductsTesting}=require('../controller/products')
const router = express.Router()
router.route("/").get(getallProducts)
router.route("/testing").get(getallProductsTesting)
module.exports=router