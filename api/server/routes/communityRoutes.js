import { Router } from 'express';
import communityController from '../controllers/communityController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();

/**
 * @api {post} /community/filterusers  filterusers information
 * @apiName Getfilterusers
 *  * @apiGroup filterusers
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccess {String} gender  gender of the Users.
 * @apiSuccess {String} fromAge  fromAge of the Users. 
 * @apiSuccess {String} toAge  toAge  of the Users. 
 *  @apiSuccess {String} religion  religion  of the Users. 

 * @apiSuccess {String} caste  caste  of the Users. 
 * @apiSuccess {String} subcaste  subcaste  of the Users. 



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Filter Results retrieved",
    "data": [
        {
            "aadharno": "1234567891011",
            "firstname": "Manojkumar",
            "lastname": "manikkam",
            "gender": "male",
            "dob": "2012-04-23T18:25:43.511Z",
            "memberid": 2,
            "onbehalf": "self",
            "password": "manoj@11",
            "premium": true,
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTojYs59LJ19HQR9HEf6vds1to-FQW1kItsFJp-7Rnv-_13rLZ4&usqp=CAU",
            "createdAt": "2020-06-16T16:54:08.371Z",
            "updatedAt": "2020-06-16T16:54:08.371Z",
            "Contactinfo.mobile": "122772332",
            "Contactinfo.email": "manojkumar11tpr@gmail.com",
            "Contactinfo.facebook": null,
            "Contactinfo.linkedin": null,
            "Contactinfo.UserMemberid": 2,
            "Contactinfo.createdAt": "2020-06-16T16:54:08.421Z",
            "Contactinfo.updatedAt": "2020-06-16T16:54:08.421Z"
        }
    ]
 *     }
 *
 * @apiError  FilterResultsNotFound Filter Results was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post Filter Results "
 *     }
 */
router.post('/filterusers',[authJwt2.verifyToken2], communityController.getparticularcommunitys);

/**
 * @api {get} /community/ Request get all community information
 * @apiName GetAllcommunity
 * @apiGroup community
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "communitys retrieved",
    "data": [
        {
            "id": 1,
            "religion": "Hindu",
            "community": "goundar",
            "caste": "Kongu Vellala Goundar",
            "subcaste": " Aanthuvan - அந்துவன்",
            "kuladeivam": "keernaar",
            "place": "chennai",
            "familystatus": "Low Class\t\n",
            "familyvalue": "Moderate",
            "memberid": 1,
            "createdAt": "2020-06-11T17:48:45.846Z",
            "updatedAt": "2020-06-11T17:48:45.846Z"
        }
    ]
}
 *
 * @apiError communityNotfound  community was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "communityNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], communityController.getAllcommunitys);
/**
 * @api {post} /community/ add community information
 * @apiName Getcommunity
 *  * @apiGroup community
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} memberid memberid of the community.
 * @apiSuccess {String} religion  religion of the community.
 * @apiSuccess {String} community  community of the community. 
 * @apiSuccess {String} caste  caste  of the community. 
 * @apiSuccess {String} subcaste  subcaste  of the community. 
 * @apiSuccess {String} kuladeivam  kuladeivam  of the community. 
 * @apiSuccess {String} place  place  of the community. 
 *@apiSuccess {String} familystatus  familystatus  of the community.
 @apiSuccess {String} familyvalue  familyvalue  of the community.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "community Added!",
    "data": {
        "id": 1,
        "religion": "Hindu",
        "community": "goundar",
        "caste": "Kongu Vellala Goundar",
        "subcaste": " Aanthuvan - அந்துவன்",
        "kuladeivam": "keernaar",
        "place": "chennai",
        "familystatus": "Low Class\t\n",
        "familyvalue": "Moderate",
        "memberid": 1,
        "updatedAt": "2020-06-11T17:48:45.846Z",
        "createdAt": "2020-06-11T17:48:45.846Z"
    }
 *     }
 *
 * @apiError communityNotFound community was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post community "
 *     }
 */
router.post('/',[authJwt.verifyToken],communityController.addcommunity);
/**
 * @api {get} /community/:id  Request specific community information
 * @apiName Get Specific community
 *  * @apiGroup community
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id community unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "Found community",
    "data": {
        "id": 1,
        "religion": "Hindu",
        "community": "goundar",
        "caste": "Kongu Vellala Goundar",
        "subcaste": " Aanthuvan - அந்துவன்",
        "kuladeivam": "keernaar",
        "place": "chennai",
        "familystatus": "Low Class\t\n",
        "familyvalue": "Moderate",
        "memberid": 1,
        "createdAt": "2020-06-11T17:48:45.846Z",
        "updatedAt": "2020-06-11T17:48:45.846Z"
    }
}
 *
 * @apiError communityNotFound community with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find community with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2], communityController.getAcommunity);
/**
* @api {put} /community/:id Update specific community information
 * @apiName Updatecommunity information
 * @apiGroup community
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.
  
 * @apiParam {Number} id community unique ID.
 *
 *
 * @apiSuccess {integer} memberid memberid of the community.
 * @apiSuccess {String} religion  religion of the community.
 * @apiSuccess {String} community  community of the community. 
 * @apiSuccess {String} caste  caste  of the community. 
 * @apiSuccess {String} subcaste  subcaste  of the community. 
 * @apiSuccess {String} kuladeivam  kuladeivam  of the community. 
 * @apiSuccess {String} place  place  of the community. 
 *@apiSuccess {String} familystatus  familystatus  of the community.
 @apiSuccess {String} familyvalue  familyvalue  of the community.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "community updated",
    "data": {
        "religion": "Hindu",
        "community": "goundar",
        "caste": "Kongu Vellala Goundar",
        "subcaste": " Aanthuvan - அந்துவன்",
        "kuladeivam": "keernaar",
        "place": "chennai",
        "familystatus": "Low class",
        "familyvalue": "Moderate",
        "memberid": "1"
    }
}
 *
 * @apiError communityNotFound The id of the community was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find community with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],communityController.updatedcommunity);
/**
* @api {delete} /community/:id Delete specific community information
 * @apiName Deletecommunity information
 * @apiGroup community
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id community unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "community deleted"
    }
}
 *     }
 *
 * @apiError communityNotFound The id of the community was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find community with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],communityController.deletecommunity);

export default router;