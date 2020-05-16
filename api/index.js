import config from 'dotenv';
import express from 'express';
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
import root from '../root';

config.config({ silent: process.env.NODE_ENV === 'production' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/apidoc'))
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
// when a random route is inputed
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to this APIhlo.',
// }));
console.log("__dirname"+root);
app.use('/apidoc', function(req, res) {
  res.sendFile(root+'/public/apidoc/index.html');
});
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;