import { Router } from 'express';
import businessController from '../controllers/businessController';

const router = Router();
/**
 * @api {get} /business/ Request get all Business information
 * @apiName GetAllBusiness
 * @apiGroup Business
 *
 
 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "businesss retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 1,
            "businessname": "Shinelogics infotech",
            "position": "software Developer",
            "annualctc": "3.5 lakh",
            "employeeid": "sl0061",
            "businessplace": "SRP Tools,thiruvanmaiyur ,chennai",
            "experience": "2 years",
            "totalasset": "3.5 crore",
            "totalliability": "40 lakhs",
            "house": "own",
            "ancestorproperty": "10 lakh",
            "createdAt": "2020-05-14T18:30:38.279Z",
            "updatedAt": "2020-05-14T18:30:38.279Z"
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
router.get('/', businessController.getAllbusinesss);
/**
 * @api {post} /business/ add Business information
 * @apiName GetBusiness
 *  * @apiGroup Business
 
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

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "business Added!",
    "data": {
        "id": 2,
        "memberid": 2,
        "businessname": "Shinelogics infotech",
        "position": "software Developer",
        "annualctc": "3.5 lakh",
        "employeeid": "sl0061",
        "businessplace": "SRP Tools,thiruvanmaiyur ,chennai",
        "experience": "2 years",
        "totalasset": "3.5 crore",
        "totalliability": "40 lakhs",
        "house": "own",
        "ancestorproperty": "10 lakh",
        "updatedAt": "2020-05-16T12:40:06.040Z",
        "createdAt": "2020-05-16T12:40:06.040Z"
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
router.post('/', businessController.addbusiness);
/**
 * @api {get} /business/:id  Request specific Business information
 * @apiName Get Specific Business
 *  * @apiGroup Business
 
  *
 * @apiParam {Number} id Business unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found business",
    "data": {
        "id": 1,
        "memberid": 1,
        "businessname": "Shinelogics infotech",
        "position": "software Developer",
        "annualctc": "3.5 lakh",
        "employeeid": "sl0061",
        "businessplace": "SRP Tools,thiruvanmaiyur ,chennai",
        "experience": "2 years",
        "totalasset": "3.5 crore",
        "totalliability": "40 lakhs",
        "house": "own",
        "ancestorproperty": "10 lakh",
        "createdAt": "2020-05-14T18:30:38.279Z",
        "updatedAt": "2020-05-14T18:30:38.279Z"
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
router.get('/:id', businessController.getAbusiness);
/**
* @api {put} /business/:id Update specific Business information
 * @apiName UpdateBusiness information
 * @apiGroup Business
 *
   *
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
router.put('/:id', businessController.updatedbusiness);
/**
* @api {delete} /business/:id Delete specific Business information
 * @apiName DeleteBusiness information
 * @apiGroup Business
 *
   *
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
router.delete('/:id', businessController.deletebusiness);

export default router;