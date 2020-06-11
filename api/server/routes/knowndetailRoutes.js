import { Router } from 'express';
import knowndetailController from '../controllers/knowndetailController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /knowndetail/ Request get all knowndetail information
 * @apiName GetAllknowndetail
 * @apiGroup knowndetail
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "knowndetails retrieved",
    "data": [
        {
            "id": 1,
            "relative": "kumaran- working builder",
            "friend": "anbu - working IT engineer",
            "memberid": 1,
            "createdAt": "2020-06-11T18:46:42.197Z",
            "updatedAt": "2020-06-11T18:46:42.197Z"
        }
    ]
}
 *
 * @apiError knowndetailNotfound  knowndetail was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "knowndetailNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2],knowndetailController.getAllknowndetails);
/**
 * @api {post} /knowndetail/ add knowndetail information
 * @apiName Getknowndetail
 *  * @apiGroup knowndetail
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} memberid memberid of the knowndetail.
 * @apiSuccess {String} relative  relative of the knowndetail.
 * @apiSuccess {String} friend  friend of the knowndetail. 
 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "knowndetail Added!",
    "data": {
        "id": 1,
        "relative": "kumaran- working builder",
        "friend": "anbu - working IT engineer",
        "memberid": 1,
        "updatedAt": "2020-06-11T18:46:42.197Z",
        "createdAt": "2020-06-11T18:46:42.197Z"
    }
}
 *
 * @apiError knowndetailNotFound knowndetail was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post knowndetail "
 *     }
 */
router.post('/',[authJwt.verifyToken],knowndetailController.addknowndetail);
/**
 * @api {get} /knowndetail/:id  Request specific knowndetail information
 * @apiName Get Specific knowndetail
 *  * @apiGroup knowndetail
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id knowndetail unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "Found knowndetail",
    "data": {
        "id": 1,
        "relative": "kumaran- working builder",
        "friend": "anbu - working IT engineer",
        "memberid": 1,
        "createdAt": "2020-06-11T18:46:42.197Z",
        "updatedAt": "2020-06-11T18:46:42.197Z"
    }
}
 *
 * @apiError knowndetailNotFound knowndetail with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find knowndetail with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],knowndetailController.getAknowndetail);
/**
* @api {put} /knowndetail/:id Update specific knowndetail information
 * @apiName Updateknowndetail information
 * @apiGroup knowndetail
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.
  
 * @apiParam {Number} id knowndetail unique ID.
 *
 *
 *
 * @apiSuccess {integer} memberid memberid of the knowndetail.
 * @apiSuccess {String} relative  relative of the knowndetail.
 * @apiSuccess {String} friend  friend of the knowndetail.  



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "knowndetail updated",
    "data": {
        "relative": "kumaran- working builder",
        "friend": "Anbu - working IT engineer",
        "memberid": "1"
    }
}
 *
 * @apiError knowndetailNotFound The id of the knowndetail was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find knowndetail with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],knowndetailController.updatedknowndetail);
/**
* @api {delete} /knowndetail/:id Delete specific knowndetail information
 * @apiName Deleteknowndetail information
 * @apiGroup knowndetail
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id knowndetail unique ID.
 
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "knowndetail deleted"
    }
}
 
 * @apiError knowndetailNotFound The id of the knowndetail was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find knowndetail with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],knowndetailController.deleteknowndetail);

export default router;