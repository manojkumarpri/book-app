import { Router } from 'express';
import businessController from '../controllers/businessController';
const authJwt = require('./verifyJwtToken');
const router = Router();
const authJwt2=require('./verifyJwtToken2');

/**
 * @api {get} /business/ Request get all Business information
 * @apiName GetAllBusiness
 * @apiGroup Business
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "businesss retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 2,
            "businessname": "shinelogicsinfotech",
            "position": "software developer",
            "annualctc": "3.5lakh",
            "employeeid": "sl59",
            "businessplace": "chennai",
            "experience": "2 years",
            "totalasset": "2 crore",
            "totalliability": "5 crore",
            "house": "own",
            "ancestorproperty": "no",
            "businesscategory": "software",
            "createdAt": "2020-06-17T15:05:31.033Z",
            "updatedAt": "2020-06-17T15:05:31.033Z"
        }
    ]
 *     }
 *
 * @apiError BusinessNotfound  Business was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "BusinessNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], businessController.getAllbusinesss);
/**
 * @api {post} /business/ add Business information
 * @apiName GetBusiness
 *  * @apiGroup Business
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} businessname  businessname of the User.
 * @apiSuccess {String} position  position of the User. 
 * @apiSuccess {String} annualctc  annualctc  of the User. 
 * @apiSuccess {String} employeeid  employeeid  of the User. 
 * @apiSuccess {String} businessplace  businessplace  of the User. 
 * @apiSuccess {String} experience  experience  of the User. 
 *@apiSuccess {String} totalasset  totalasset  of the User.
 @apiSuccess {String} totalliability  totalliability  of the User.
 @apiSuccess {String} house  house  of the User.
  @apiSuccess {String} ancestorproperty  ancestorproperty  of the User.
  @apiSuccess {String} businesscategory  businesscategory  of the User.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "business Added!",
    "data": {
        "id": 1,
        "memberid": 2,
        "businessname": "shinelogicsinfotech",
        "position": "software developer",
        "annualctc": "3.5lakh",
        "employeeid": "sl59",
        "businessplace": "chennai",
        "experience": "2 years",
        "totalasset": "2 crore",
        "totalliability": "5 crore",
        "house": "own",
        "ancestorproperty": "no",
        "businesscategory": "software",
        "updatedAt": "2020-06-17T15:05:31.033Z",
        "createdAt": "2020-06-17T15:05:31.033Z"
    }
 *     }
 *
 * @apiError BusinessNotFound Business was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post Business "
 *     }
 */
router.post('/',[authJwt.verifyToken], businessController.addbusiness);
/**
 * @api {get} /business/:id  Request specific Business information
 * @apiName Get Specific Business
 *  * @apiGroup Business
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id Business unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Found business",
    "data": {
        "id": 1,
        "memberid": 2,
        "businessname": "shinelogicsinfotech",
        "position": "software developer",
        "annualctc": "3.5lakh",
        "employeeid": "sl59",
        "businessplace": "chennai",
        "experience": "2 years",
        "totalasset": "2 crore",
        "totalliability": "5 crore",
        "house": "own",
        "ancestorproperty": "no",
        "businesscategory": "software",
        "createdAt": "2020-06-17T15:05:31.033Z",
        "updatedAt": "2020-06-17T15:05:31.033Z"
    }
 *     }
 *
 * @apiError BusinessNotFound Business with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find Business with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],  businessController.getAbusiness);
/**
* @api {put} /business/:id Update specific Business information
 * @apiName UpdateBusiness information
 * @apiGroup Business
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.
  
 * @apiParam {Number} id Business unique ID.
 *
 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} businessname  businessname of the User.
 * @apiSuccess {String} position  position of the User. 
 * @apiSuccess {String} annualctc  annualctc  of the User. 
 * @apiSuccess {String} employeeid  employeeid  of the User. 
 * @apiSuccess {String} businessplace  businessplace  of the User. 
 * @apiSuccess {String} experience  experience  of the User. 
 *@apiSuccess {String} totalasset  totalasset  of the User.
 @apiSuccess {String} totalliability  totalliability  of the User.
 @apiSuccess {String} house  house  of the User.
  @apiSuccess {String} ancestorproperty  ancestorproperty  of the User.
  @apiSuccess {String} businesscategory  businesscategory  of the User.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
     "status": "success",
    "message": "business updated",
    "data": {
        "memberid": 2,
        "businessname": "naga info solutions",
        "position": "software Developer",
        "annualctc": "3.5 lakh",
        "employeeid": "sl0061",
        "businessplace": "SRP Tools,thiruvanmaiyur ,chennai",
        "experience": "2 years",
        "totalasset": "3.5 crore",
        "totalliability": "40 lakhs",
        "house": "own",
        "ancestorproperty": "10 lakh"
    }
}
 *     }
 *
 * @apiError BusinessNotFound The id of the Business was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Business with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], businessController.updatedbusiness);
/**
* @api {delete} /business/:id Delete specific Business information
 * @apiName DeleteBusiness information
 * @apiGroup Business
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Business unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "Business deleted"
    }
}
 *     }
 *
 * @apiError BusinessNotFound The id of the Business was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Business with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2],  businessController.deletebusiness);

export default router;