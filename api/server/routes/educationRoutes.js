import { Router } from 'express';
import educationController from '../controllers/educationController';
const authJwt = require('./verifyJwtToken');
const router = Router();
const authJwt2=require('./verifyJwtToken2');

/**
 * @api {get} /education/ Request get all education information
 * @apiName GetAlleducation
 * @apiGroup education
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "status": "success",
            "message": "educations retrieved",
               "data": [
                             {
                                      "id": 1,
                           "primaryschool": "govt high school morattupalayam",
                              "primaryyop": 2012,
                              "highschool": "govt boys higher secondary school uthukkuli",
                                 "highyop": 2014,
                      "firstdegreecollege": "MPNMJEnginerring college",
                          "firstdegreeyop": 2018,
                       "lastdegreecollege": "Nandha college",
                           "lastdegreeyop": 2020,
                                "memberid": 1,
                               "createdAt": "2020-05-14T18:11:41.380Z",
                               "updatedAt": "2020-05-14T18:11:41.380Z"
                            }
                       ]
 *     }
 *
 * @apiError educationNotfound  education was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "educationNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], educationController.getAlleducations);
/**
 * @api {post} /education/ add education information
 * @apiName Geteducation
 *  * @apiGroup education
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 
 * @apiSuccess {String} primaryschool  primaryschool of the User.
 *  @apiSuccess {integer} primaryyop primarschool year of passing of the User.
  * @apiSuccess {String} highschool  highschool of the User.
 *  @apiSuccess {integer} highyop highschool year of passing of the User.
 * @apiSuccess {String} firstdegreecollege  firstdegree college of the User.
 *  @apiSuccess {integer} firstdegreeyop firstdegree year of passing of the User.
 * @apiSuccess {String} lastdegreecollege  lastdegree college of the User.
 *  @apiSuccess {integer} lastdegreeyop lastdegreeyop year of passing of the User.
 *  @apiSuccess {integer} memberid memberid of the User.

 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                        "status": "success",
                         "message": "education Added!",
                            "data": {
                                           "id": 2,
                                "primaryschool": "govt high school morattupalayam",
                                   "primaryyop": 2012,
                                   "highschool": "govt boys higher secondary school uthukkuli",
                                      "highyop": 2014,
                           "firstdegreecollege": "MPNMJEnginerring college",
                               "firstdegreeyop": 2018,
                            "lastdegreecollege": "Nandha college",
                                "lastdegreeyop": 2020,
                                     "memberid": 2,
                                    "updatedAt": "2020-05-16T10:12:53.174Z",
                                    "createdAt": "2020-05-16T10:12:53.174Z"
                                    }
 *     }
 *
 * @apiError educationNotFound education was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post education "
 *     }
 */

router.post('/',[authJwt.verifyToken],educationController.addeducation);
/**
 * @api {get} /education/:id  Request specific education information
 * @apiName Get Specific education
 *  * @apiGroup education
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id education unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 * status": "success", 
 "message": "Found education",
    "data": {
        "id": 1,
        "primaryschool": "govt high school morattupalayam",
        "primaryyop": 2012,
        "highschool": "govt boys higher secondary school uthukkuli",
        "highyop": 2014,
        "firstdegreecollege": "MPNMJEnginerring college",
        "firstdegreeyop": 2018,
        "lastdegreecollege": "Nandha college",
        "lastdegreeyop": 2020,
        "memberid": 1,
        "createdAt": "2020-05-14T18:11:41.380Z",
        "updatedAt": "2020-05-14T18:11:41.380Z"
    }
 *     }
 *
 * @apiError educationNotFound education with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find education with the id 1"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2], educationController.getAeducation);
/**
* @api {put} /education/:id Update specific education information
 * @apiName Updateeducation information
 * @apiGroup education
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id education unique ID.
 *
 *
 *
 *
 * @apiSuccess {String} primaryschool  primaryschool of the User.
 *  @apiSuccess {integer} primaryyop primarschool year of passing of the User.
  * @apiSuccess {String} highschool  highschool of the User.
 *  @apiSuccess {integer} highyop highschool year of passing of the User.
 * @apiSuccess {String} firstdegreecollege  firstdegree college of the User.
 *  @apiSuccess {integer} firstdegreeyop firstdegree year of passing of the User.
 * @apiSuccess {String} lastdegreecollege  lastdegree college of the User.
 *  @apiSuccess {integer} lastdegreeyop lastdegreeyop year of passing of the User.
 *  @apiSuccess {integer} memberid memberid of the User.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
     "status": "success",
    "message": "education updated",
       "data": {
                        "id": 1,
             "primaryschool": "govt high school morattupalayam",
                "primaryyop": 2012,
                "highschool": "govt boys higher secondary school uthukkuli",
                   "highyop": 2014,
        "firstdegreecollege": "MPNMJEnginerring college",
            "firstdegreeyop": 2018,
         "lastdegreecollege": "Nandha college",
             "lastdegreeyop": 2020,
                  "memberid": 1,
                 "createdAt": "2020-05-14T18:11:41.380Z",
                 "updatedAt": "2020-05-14T18:11:41.380Z"
    }
    }
}
 *     }
 *
 * @apiError educationNotFound The id of the education was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find education with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], educationController.updatededucation);
/**
* @api {delete} /education/:id Delete specific education information
 * @apiName Deleteeducation information
 * @apiGroup education
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id education unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "education deleted"
    }
}
 *     }
 *
 * @apiError educationNotFound The id of the education was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find education with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2], educationController.deleteeducation);

export default router;