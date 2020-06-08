import { Router } from 'express';
import shortlistedController from '../controllers/shortlistedController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /shortlisted/ Request get all shortlisted user information
 * @apiName GetAll shortlisted users
 * @apiGroup shortlisted
 *
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "shortlisteds retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 1,
            "shortlistedmemberid": [
                1,
                2,
                3,
                4
            ],
            "createdAt": "2020-05-16T16:06:36.065Z",
            "updatedAt": "2020-05-16T16:06:36.065Z"
        }
    ]
 *     }
 *
 * @apiError shortlistedNotfound  shortlisted was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "shortlistedNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2],  shortlistedController.getAllshortlisteds);
/**
 * @api {post} /shortlisted/ add shortlisted users information
 * @apiName add shortlisted users
 *  * @apiGroup shortlisted
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 
 
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} shortlistedmemberid  shortlistedmemberids of the Users.
 

 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "shortlisted Added!",
    "data": {
        "id": 2,
        "memberid": 2,
        "shortlistedmemberid": [
            1,
            2,
            3,
            4
        ],
        "updatedAt": "2020-05-16T15:58:50.526Z",
        "createdAt": "2020-05-16T15:58:50.526Z"
    }
 *     }
 *
 * @apiError shortlistedidNotfound  myinterest was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "shortlistedridNotfound"
 *     }
 */
router.post('/',[authJwt.verifyToken], shortlistedController.addshortlisted);
/**
 * @api {get} /shortlisted/:id  Request specific shortlisted users information
 * @apiName Get Specific shortlisted userlist 
 *  * @apiGroup shortlisted
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id shortlisted unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found shortlisted",
    "data": {
        "id": 1,
        "memberid": 1,
        "shortlistedmemberid": [
            1,
            2,
            3,
            4
        ],
        "createdAt": "2020-05-16T16:06:36.065Z",
        "updatedAt": "2020-05-16T16:06:36.065Z"
    }
 *     }
 *
 * @apiError shortlistedNotFound shortlisted with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find shortlisted with the id 1"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],  shortlistedController.getAshortlisted);
/**
* @api {put} /shortlisted/:id Update specific shortlisted  users information
 * @apiName Update shortlisted users information
 * @apiGroup shortlisted
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id shortlisted unique ID.
 *
 *
 *
 *
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} shortlistedmemberid  shortlistedmemberids of the User.
 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "shortlisted updated",
    "data": {
        "memberid": 1,
        "shortlistedmemberid": [
            1,
            2,
            3
        ]
    }
 *     }
 *
 * @apiError shortlistedNotFound The id of the shortlisted was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find shortlisted with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], shortlistedController.updatedshortlisted);
/**
* @api {delete} /shortlisted/:id Delete specific shortlisted users information
 * @apiName Delete shortlisted users list of a user
 * @apiGroup shortlisted
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id shortlisted unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "shortlisted deleted"
    }
}
 *     }
 *
 * @apiError shortlistedNotFound The id of the shortlisted was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find shortlisted with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken], shortlistedController.deleteshortlisted);

export default router;