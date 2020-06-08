import { Router } from 'express';
import followedController from '../controllers/followedController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /followed/ Request get all followed user information
 * @apiName GetAllfollowedusers
 * @apiGroup followedusers
 *
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "followeds retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 2,
            "followedmemberid": [
                1,
                2
            ],
            "createdAt": "2020-05-16T15:24:31.807Z",
            "updatedAt": "2020-05-16T15:24:31.807Z"
        }
    ]
 *     }
 *
 * @apiError followedsNotfound  followed was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "followedsNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], followedController.getAllfolloweds);
/**
 * @api {post} /followed/ add followedusers information
 * @apiName addfollowedusers
 *  * @apiGroup followedusers
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 
 
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} followedmemberid  followedmemberids of the User.
 

 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "followed Added!",
    "data": {
        "id": 2,
        "memberid": 1,
        "followedmemberid": [
            1,
            2,
            3
        ],
        "updatedAt": "2020-05-16T15:29:32.537Z",
        "createdAt": "2020-05-16T15:29:32.537Z"
    }
 *     }
 *
 * @apiError followedNotFound followed was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post followed "
 *     }
 */
router.post('/',[authJwt.verifyToken], followedController.addfollowed);
/**
 * @api {get} /followed/:id  Request specific followedusers information
 * @apiName Get Specific user followedusers
 *  * @apiGroup followedusers
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id followedusers unique ID.
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found followed",
    "data": {
        "id": 2,
        "memberid": 1,
        "followedmemberid": [
            1,
            2,
            3
        ],
        "createdAt": "2020-05-16T15:29:32.537Z",
        "updatedAt": "2020-05-16T15:29:32.537Z"
    }
 *     }
 *
 * @apiError followedusersNotFound followedusers with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find followedusers with the id 1"
 *     }
 */
router.get('/:id',[authJwt.verifyToken], followedController.getAfollowed);
/**
* @api {put} /followed/:id Update specific followedusers information
 * @apiName Updatefollowedusers information
 * @apiGroup followedusers
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id followedusers unique ID.
 *
 *
 *
 *
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} followedmemberid  followedmemberids of the User.
 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
    "status": "success",
    "message": "followed updated",
    "data": {
        "memberid": 2,
        "followedmemberid": [
            1,
            2,
            3,
            4
        ]
    }
    

 *     }
 *
 * @apiError followedusersNotFound The id of the followedusers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find followedusers with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],followedController.updatedfollowed);
/**
* @api {delete} /followed/:id Delete specific followedusers information
 * @apiName Deletefollowedusers information
 * @apiGroup followedusers
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id followedusers unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "followed deleted"
    }
}
 *     }
 *
 * @apiError followedusersNotFound The id of the followedusers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find followedusers with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],followedController.deletefollowed);

export default router;