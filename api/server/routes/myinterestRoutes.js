import { Router } from 'express';
import myinterestController from '../controllers/myinterestController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /myinterest/ Request get all myinterest user information
 * @apiName GetAll myinterest users
 * @apiGroup myinterest
 *
 
* @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.
 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "myinterests retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 1,
            "intrestedmemberid": [
                1,
                2,
                3
            ],
            "createdAt": "2020-05-16T15:55:04.725Z",
            "updatedAt": "2020-05-16T15:55:04.725Z"
        }
    ]
 *     }
 *
 * @apiError myinterestNotfound  myinterest was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "myinterestNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], myinterestController.getAllmyinterests);
/**
 * @api {post} /myinterest/ add myinterest users information
 * @apiName add myinterest users
 *  * @apiGroup myinterest
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 
 
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} intrestedmemberid  intrestedmemberids of the Users.
 

 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "myinterest Added!",
    "data": {
        "id": 2,
        "memberid": 2,
        "intrestedmemberid": [
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
 * @apiError myinterestfound  myinterest was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "myinterestNotfound"
 *     }
 */
router.post('/',[authJwt.verifyToken],myinterestController.addmyinterest);
/**
 * @api {get} /myinterest/:id  Request specific myinterest users information
 * @apiName Get Specific myinterest userlist 
 *  * @apiGroup myinterest
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id myinterest unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found myinterest",
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
 * @apiError myinterestNotFound myinterest with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find myinterest with the id 1"
 *     }
 */
router.get('/:id',[authJwt.verifyToken], myinterestController.getAmyinterest);
/**
* @api {put} /myinterest/:id Update specific myinterest  users information
 * @apiName Update myinterest users information
 * @apiGroup myinterest
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id myinterest unique ID.
 *
 *
 *
 *
 *  @apiSuccess {integer} memberid memberid of the User.
  * @apiSuccess {ARRAY} intrestedmemberid  intrestedmemberids of the User.
 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "myinterest updated",
    "data": {
        "memberid": 2,
        "intrestedmemberid": [
            1,
            2,
            3
        ]
    }
    

 *     }
 *
 * @apiError myinterestsNotFound The id of the myinterest was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find myinterest with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],myinterestController.updatedmyinterest);
/**
* @api {delete} /myinterest/:id Delete specific myinterest users information
 * @apiName Delete myinterest users list of a user
 * @apiGroup myinterest
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id myinterest unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "myinterest deleted"
    }
}
 *     }
 *
 * @apiError myinterestNotFound The id of the myinterest was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find myinterest with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken], myinterestController.deletemyinterest);

export default router;