const Express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
import ignoredController from '../controllers/ignoredController';
const authJwt = require('./verifyJwtToken');
import { Router } from 'express';

const router = Router();


const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images')
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
  },
})

const upload = multer({ storage: Storage })

router.post('/', function(req, res){
   console.log("ffffffffffffffffffffffflllllllllllllllll")
    console.log('file', req.files)
    console.log('body', req.body)
    res.status(200).json({
      message: 'success!',
    })
  })



export default router;