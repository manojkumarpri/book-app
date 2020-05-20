import { Router } from 'express';
import personeldetailsController from '../controllers/personeldetailsController';
const authJwt = require('./verifyJwtToken');

const router = Router();
/**
 * @api {get} /personeldetails/ Request get all personeldetails information
 * @apiName GetAll personeldetails
 * @apiGroup personeldetails
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "personeldetailss retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 1,
            "smoke": "NO",
            "drink": "NO",
            "hobby": "cricket",
            "interest": "in cricket",
            "sports": "cricket,volleyball",
            "fitness": "GYM",
            "diet": "yes",
            "politicalview": "strong political view",
            "humor": "lot",
            "dresstyle": "adoptable",
            "createdAt": "2020-05-16T16:57:23.993Z",
            "updatedAt": "2020-05-16T16:57:23.993Z"
        }
    ]
 *     }
 *
 * @apiError personeldetailsNotfound  personeldetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "personeldetails Notfound"
 *     }
 */
router.get('/',[authJwt.verifyToken],personeldetailsController.getAllpersoneldetailss);
/**
 * @api {post} /personeldetails/ add personeldetails information
 * @apiName Add personeldetails
 *  * @apiGroup personeldetails
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *  @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} smoke  smoke of the User.
  * @apiSuccess {String} drink  drink of the User.
 * @apiSuccess {String} hobby  hobby  of the User.
 *  @apiSuccess {integer} interest interest of the User.
 * @apiSuccess {String} sports  sports of the User.
 * @apiSuccess {String} fitness  fitness of the User.
 * @apiSuccess {String} diet  diet of the User.
 * @apiSuccess {String} politicalview  politicalview of the User.
  * @apiSuccess {String} humor  humor of the User.
  * @apiSuccess {String} dresstyle  dresstyle of the User.



 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "personeldetails Added!",
    "data": {
        "id": 1,
        "memberid": 1,
        "smoke": "NO",
        "drink": "NO",
        "hobby": "cricket",
        "interest": "in cricket",
        "sports": "cricket,volleyball",
        "fitness": "GYM",
        "diet": "yes",
        "politicalview": "strong political view",
        "humor": "lot",
        "dresstyle": "adoptable",
        "updatedAt": "2020-05-16T16:57:23.993Z",
        "createdAt": "2020-05-16T16:57:23.993Z"
    }
 *     }
 *
 * @apiError personeldetailsNotFound personeldetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post personeldetails "
 *     }
 */

router.post('/',[authJwt.verifyToken], personeldetailsController.addpersoneldetails);
/**
 * @api {get} /personeldetails/:id  Request specific personeldetails information
 * @apiName Get Specific user personeldetails
 *  * @apiGroup personeldetails
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id personeldetails unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found personeldetails",
    "data": {
        "id": 1,
        "memberid": 1,
        "smoke": "NO",
        "drink": "NO",
        "hobby": "cricket",
        "interest": "in cricket",
        "sports": "cricket,volleyball",
        "fitness": "GYM",
        "diet": "yes",
        "politicalview": "strong political view",
        "humor": "lot",
        "dresstyle": "adoptable",
        "createdAt": "2020-05-16T16:57:23.993Z",
        "updatedAt": "2020-05-16T16:57:23.993Z"
    }
 *     }
 *
 * @apiError personeldetailsNotFound personeldetails with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find personeldetails with the id 1"
 *     }
 */
router.get('/:id',[authJwt.verifyToken], personeldetailsController.getApersoneldetails);
/**
* @api {put} /personeldetails/:id Update specific personeldetails of user information
 * @apiName Update personeldetails information of a user
 * @apiGroup personeldetails
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id personeldetails unique ID.
 *
 *
 *
 *  @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} smoke  smoke of the User.
  * @apiSuccess {String} drink  drink of the User.
 * @apiSuccess {String} hobby  hobby  of the User.
 *  @apiSuccess {integer} interest interest of the User.
 * @apiSuccess {String} sports  sports of the User.
 * @apiSuccess {String} fitness  fitness of the User.
 * @apiSuccess {String} diet  diet of the User.
 * @apiSuccess {String} politicalview  politicalview of the User.
  * @apiSuccess {String} humor  humor of the User.
  * @apiSuccess {String} dresstyle  dresstyle of the User.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
     "status": "success",
    "message": "personeldetails updated",
    "data": {
        "memberid": 1,
        "smoke": "yes",
        "drink": "NO",
        "hobby": "cricket",
        "interest": "in cricket",
        "sports": "cricket,volleyball",
        "fitness": "GYM",
        "diet": "yes",
        "politicalview": "strong political view",
        "humor": "lot",
        "dresstyle": "adoptable"
    }
 *     }
 *
 * @apiError personeldetailsNotFound The id of the personeldetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find personeldetails with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], personeldetailsController.updatedpersoneldetails);
/**
* @api {delete} /personeldetails/:id Delete specific personeldetails  information
 * @apiName Delete personeldetails information
 * @apiGroup personeldetails
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id personeldetails unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "personeldetails deleted"
    }
}
 *     }
 *
 * @apiError personeldetailsNotFound The id of the personeldetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find personeldetails with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken], personeldetailsController.deletepersoneldetails);

export default router;