import { Router } from 'express';
import introductionController from '../controllers/introductionController';
const authJwt = require('./verifyJwtToken');

const router = Router();
/**
 * @api {get} /introduction/ Request get all introduction of users
 * @apiName GetAllintroductions
 * @apiGroup Introduction
 *
 
 
* @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "status": "success",
            "message": "introductions retrieved",
               "data": [
                              {
                                    "id": 1,
                              "memberid": 1,
                           "description": "looking a simple and peaceful career ...being simple",
                             "createdAt": "2020-05-14T18:41:49.861Z",
                             "updatedAt": "2020-05-14T18:41:49.861Z"
                              }
                       ]
 *     }
 *
 * @apiError introductionsNotfound The id of the introductions was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "introductionsNotfound"
 *     }
 */
router.get('/',[authJwt.verifyToken], introductionController.getAllintroductions);
/**
 * @api {post} /introduction/ add introduction information
 * @apiName Getintroduction
 *  * @apiGroup Introduction
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} description  description of the User.

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                       "status": "success",
                        "message": "introduction Added!",
                           "data": {
                                          "id": 2,
                                    "memberid": 2,
                                 "description": "looking a simple and peaceful career ...being simple",
                                   "updatedAt": "2020-05-16T09:30:38.410Z",
                                   "createdAt": "2020-05-16T09:30:38.410Z"
                                    }
 *     }
 *
 * @apiError introduction cannot post.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post introduction "
 *     }
 */

router.post('/',[authJwt.verifyToken], introductionController.addintroduction);
/**
 * @api {get} /introduction/:id  Request specific introduction information
 * @apiName Get Specific introduction
 *  * @apiGroup Introduction
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id introduction unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                    "status": "success",
                     "message": "Found introduction",
                        "data": {
                                       "id": 1,
                                 "memberid": 1,
                              "description": "looking a simple and peaceful career ...being simple",
                                "createdAt": "2020-05-14T18:41:49.861Z",
                                "updatedAt": "2020-05-14T18:41:49.861Z"
                                 }
 *     }
 *
 * @apiError introductionNotFound contat with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find introduction with the id 2"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],introductionController.getAintroduction);
/**
 * @api {put} /introduction/:id Update introduction information
 * @apiName Updateintroduction
 *  * @apiGroup Introduction
   *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id introduction unique ID.
 *
 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} description  description of the User.

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                       "status": "success",
                        "message": "introduction updated!",
                           "data": {
                                          "id": 2,
                                    "memberid": 2,
                                 "description": "looking a simple and peaceful career ...being simple",
                                   "updatedAt": "2020-05-16T09:30:38.410Z",
                                   "createdAt": "2020-05-16T09:30:38.410Z"
                                    }
 *     }
 *
 * @apiError introduction cannot updated.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot updated introduction "
 *     }
 */
router.put('/:id',[authJwt.verifyToken], introductionController.updatedintroduction);
/**
 * @api {delete} /introduction/:id Delete introduction information
 * @apiName Deleteintroduction
 *  * @apiGroup Introduction
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id introduction unique ID.
 *

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                       "status": "success",
                        "message": "introduction Deleted!",
                          
 *     }
 *
 * @apiError introduction cannot updated.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot Delete introduction "
 *     }
 */
router.delete('/:id',[authJwt.verifyToken], introductionController.deleteintroduction);

export default router;