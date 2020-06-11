import config from 'dotenv';
import express from 'express';
var cors = require('cors');
var fs = require('fs');

const multer = require('multer')
var path = require('path');

import bodyParser from 'body-parser';
import bookRoutes from './server/routes/BookRoutes';
import userRoutes from './server/routes/UserRoutes';
import contactinfoRoutes from './server/routes/ContactinfoRoutes';
import educationRoutes from './server/routes/educationRoutes';
import introductionRoutes from './server/routes/introductionRoutes';
import basicinfoRoutes from './server/routes/basicinfoRoutes';
import businessRoutes from './server/routes/businessRoutes';
import personeldetailsRoutes from './server/routes/personeldetailsRoutes';
import astronimicdetailsRoutes from './server/routes/astronimicdetailsRoutes';
import socialbackroundRoutes from './server/routes/socialbackroundRoutes';
import partnerexpectationRoutes from './server/routes/partnerexpectationRoutes';
import myinterestRoutes from './server/routes/myinterestRoutes';
import shortlistedRoutes from './server/routes/shortlistedRoutes';
import followedRoutes from './server/routes/followedRoutes';
import ignoredRoutes from './server/routes/ignoredRoutes';
import templestoriesRoutes from './server/routes/templestoriesRoutes';
import communityRoutes from './server/routes/communityRoutes';
import familyinfoRoutes from './server/routes/familyinfoRoutes';
import knowndetailRoutes from './server/routes/knowndetailRoutes';
import physicalappearanceRoutes from './server/routes/physicalappearanceRoutes';
import root from '../root';
config.config({ silent: process.env.NODE_ENV === 'production' });

const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public/apidoc'));
app.use(express.static('images'));


const Storage = multer.diskStorage({
  destination(req, file, callback) {
    console.log("here dest")
    callback(null, './images')
  },
  filename(req, file, callback) {
    console.log("here filename")
    callback(null, `${file.fieldname}_${file.originalname}`)
  },
})

const upload = multer({ storage: Storage });
const port = process.env.PORT || 8000;
//Routes 

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/contact', contactinfoRoutes);
app.use('/api/v1/education', educationRoutes);
app.use('/api/v1/introduction', introductionRoutes);
app.use('/api/v1/basicinfo', basicinfoRoutes);
app.use('/api/v1/business', businessRoutes);
app.use('/api/v1/personeldetails', personeldetailsRoutes);
app.use('/api/v1/astronimicdetails', astronimicdetailsRoutes);
app.use('/api/v1/socialbackround', socialbackroundRoutes);
app.use('/api/v1/partnerexpectation', partnerexpectationRoutes);
app.use('/api/v1/myinterest', myinterestRoutes);
app.use('/api/v1/shortlisted', shortlistedRoutes);
app.use('/api/v1/followed', followedRoutes);
app.use('/api/v1/ignored', ignoredRoutes);
app.use('/api/v1/templestories',templestoriesRoutes);
app.use('/api/v1/community',communityRoutes);
app.use('/api/v1/familyinfo',familyinfoRoutes);
app.use('/api/v1/knowndetail',knowndetailRoutes);
app.use('/api/v1/physicalappearance',physicalappearanceRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this kongumalaiAPI.',
}));
app.post('/api/upload', upload.array('photo', 3), (req, res) => {
  //  console.log("here content type",req.get('Content-Type'));
    console.log('file', req.file)
    console.log('body', req.body)
    res.status(200).json({
      message: 'success!',
    })
  })
  var imagesEndpoints = [];
  fs.readdir(root+'/images/', function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
 console.log('file name'+filename);
 imagesEndpoints.push(filename);
    });
  });
 
 imagesEndpoints.forEach(function(name) {
   app.get('/'+name, function(req, res) {
      res.sendFile(root+'/images/'+ name );
   });
 }); 
console.log("__dirname"+root);
app.use('/apidoc', function(req, res) {
  res.sendFile(root+'/public/apidoc/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;