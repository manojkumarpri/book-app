import { Router } from 'express';
import introductionController from '../controllers/introductionController';

const router = Router();
/**
 * @api {get} /introduction/ Request get all introduction of users
 * @apiName GetAllintroductions
 * @apiGroup Introduction
 *
 
 


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
router.get('/', introductionController.getAllintroductions);
/**
 * @api {post} /introduction/ add introduction information
 * @apiName Getintroduction
 *  * @apiGroup Introduction
 
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

router.post('/', introductionController.addintroduction);
/**
 * @api {get} /introduction/:id  Request specific introduction information
 * @apiName Get Specific introduction
 *  * @apiGroup Introduction
 
  *
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
router.get('/:id', introductionController.getAintroduction);
/**
 * @api {put} /introduction/:id Update introduction information
 * @apiName Updateintroduction
 *  * @apiGroup Introduction
   *
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
router.put('/:id', introductionController.updatedintroduction);
/**
 * @api {delete} /introduction/:id Delete introduction information
 * @apiName Deleteintroduction
 *  * @apiGroup Introduction
   *
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
router.delete('/:id', introductionController.deleteintroduction);

export default router;