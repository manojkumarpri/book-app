import { Router } from 'express';
import ignoredController from '../controllers/ignoredController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /ignored/ Request get all ignored user information
 * @apiName GetAll ignored users
 * @apiGroup ignoredusers
 *
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "ignoreds retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 2,
            "ignoredmemberid": [
                1,
                2,
                3,
                4
            ],
            "createdAt": "2020-05-16T15:39:43.963Z",
            "updatedAt": "2020-05-16T15:39:43.963Z"
        }
    ]
 *     }
 *
 * @apiError ignoredNotfound  ignored was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ignoredNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], ignoredController.getAllignoreds);
/**
 * @api {post} /ignored/ add ignored users information
 * @apiName addignored users
 *  * @apiGroup ignoredusers
 
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} ignoredmemberid  ignoredmemberids of the Users.
 

 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "ignored Added!",
    "data": {
        "id": 1,
        "memberid": 2,
        "ignoredmemberid": [
            1,
            2,
            3,
            4
        ],
        "updatedAt": "2020-05-16T15:39:43.963Z",
        "createdAt": "2020-05-16T15:39:43.963Z"
    }
 *     }
 *
 * @apiError ignoredNotfound  ignored was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ignoredNotfound"
 *     }
 */
router.post('/',[authJwt.verifyToken], ignoredController.addignored);
/**
 * @api {get} /ignored/:id  Request specific ignored users information
 * @apiName Get Specific ignored userlist of a user
 *  * @apiGroup ignoredusers
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id ignoredusers unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found ignored",
    "data": {
        "id": 1,
        "memberid": 2,
        "ignoredmemberid": [
            1,
            2,
            3,
            4
        ],
        "createdAt": "2020-05-16T15:39:43.963Z",
        "updatedAt": "2020-05-16T15:39:43.963Z"
    }
 *     }
 *
 * @apiError ignoredusersNotFound ignoredusers with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find ignoredusers with the id 1"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],ignoredController.getAignored);
/**
* @api {put} /ignored/:id Update specific ignored  users information
 * @apiName Update ignored users information
 * @apiGroup ignoredusers
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id ignoredusers unique ID.
 *
 *
 *
 *
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} ignoredmemberid  ignoredmemberids of the User.
 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "ignored updated",
    "data": {
        "memberid": 2,
        "ignoredmemberid": [
            1,
            2,
            3
        ]
    }
    

 *     }
 *
 * @apiError ignoredusersNotFound The id of the ignoredusers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find ignoredusers with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], ignoredController.updatedignored);
/**
* @api {delete} /ignored/:id Delete specific ignored users information
 * @apiName Delete ignored users list of a user
 * @apiGroup ignoredusers
 *
   *
 * @apiParam {Number} id ignoredusers unique ID.
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "ignored deleted"
    }
}
 *     }
 *
 * @apiError ignoredusersNotFound The id of the ignoredusers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find ignoredusers with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2],ignoredController.deleteignored);

export default router;