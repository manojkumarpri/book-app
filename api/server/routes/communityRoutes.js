import { Router } from 'express';
import communityController from '../controllers/communityController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
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