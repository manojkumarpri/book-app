import { Router } from 'express';
import socialbackroundController from '../controllers/socialbackroundController';
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /socialbackround/ Request get all socialbackround information
 * @apiName GetAll socialbackround
 * @apiGroup socialbackround
 *
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "socialbackrounds retrieved",
    "data": [
        {
            "id": 1,
            "memberid": 1,
            "religion": "Hindu",
            "community": "BC",
            "caste": "koundar",
            "subcaste": "Devendira",
            "kuladeivam": "pathraklai",
            "place": "tiruppur",
            "familystatus": "medium",
            "familyvalue": "good",
            "createdAt": "2020-05-16T17:14:27.811Z",
            "updatedAt": "2020-05-16T17:14:27.811Z"
        }
    ]
 *     }
 *
 * @apiError socialbackrounddetailsNotfound  socialbackround was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "socialbackround Notfound"
 *     }
 */
router.get('/',[authJwt.verifyToken], socialbackroundController.getAllsocialbackrounds);
/**
 * @api {post} /socialbackround/ add socialbackround information
 * @apiName Add socialbackround
 *  * @apiGroup socialbackround
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *  @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} religion  religion of the User.
  * @apiSuccess {String} community  community of the User.
 * @apiSuccess {String} caste  caste  of the User.
 *  @apiSuccess {integer} subcaste subcaste of the User.
 * @apiSuccess {String} kuladeivam  kuladeivam of the User.
 * @apiSuccess {String} place  place of the User.
 * @apiSuccess {String} familystatus  familystatus of the User.
 * @apiSuccess {String} familyvalue  familyvalue of the User.
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "socialbackround Added!",
    "data": {
        "id": 1,
        "memberid": 1,
        "religion": "Hindu",
        "community": "BC",
        "caste": "koundar",
        "subcaste": "Devendira",
        "kuladeivam": "pathraklai",
        "place": "tiruppur",
        "familystatus": "medium",
        "familyvalue": "good",
        "updatedAt": "2020-05-16T17:14:27.811Z",
        "createdAt": "2020-05-16T17:14:27.811Z"
    }
 *     }
 *
 * @apiError socialbackroundNotFound socialbackround was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post socialbackround "
 *     }
 */

router.post('/',[authJwt.verifyToken],socialbackroundController.addsocialbackround);
/**
 * @api {get} /socialbackround/:id  Request specific socialbackround information
 * @apiName Get Specific socialbackround of user
 *  * @apiGroup socialbackround
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id socialbackround unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     "status": "success",
    "message": "Found socialbackround",
    "data": {
        "id": 1,
        "memberid": 1,
        "religion": "Hindu",
        "community": "BC",
        "caste": "koundar",
        "subcaste": "Devendira",
        "kuladeivam": "pathraklai",
        "place": "tiruppur",
        "familystatus": "medium",
        "familyvalue": "good",
        "createdAt": "2020-05-16T17:14:27.811Z",
        "updatedAt": "2020-05-16T17:14:27.811Z"
    }
 *     }
 *
 * @apiError socialbackroundNotFound socialbackround with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find socialbackround with the id 1"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],socialbackroundController.getAsocialbackround);
/**
* @api {put} /socialbackround/:id Update specific socialbackround information of user
 * @apiName Update socialbackround information
 * @apiGroup socialbackround
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id socialbackround unique ID.
 *
 *
  *  @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} religion  religion of the User.
  * @apiSuccess {String} community  community of the User.
 * @apiSuccess {String} caste  caste  of the User.
 *  @apiSuccess {integer} subcaste subcaste of the User.
 * @apiSuccess {String} kuladeivam  kuladeivam of the User.
 * @apiSuccess {String} place  place of the User.
 * @apiSuccess {String} familystatus  familystatus of the User.
 * @apiSuccess {String} familyvalue  familyvalue of the User.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
    "status": "success",
    "message": "socialbackround updated",
    "data": {
        "memberid": 1,
        "religion": "Hindu",
        "community": "BC",
        "caste": "koundar",
        "subcaste": "vellalar",
        "kuladeivam": "pathraklai",
        "place": "tiruppur",
        "familystatus": "medium",
        "familyvalue": "good"
    }
}
 *     }
 *
 * @apiError socialbackroundNotFound The id of the socialbackround was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find socialbackround with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],socialbackroundController.updatedsocialbackround);
/**
* @api {delete} /socialbackround/:id Delete specific socialbackround information of user
 * @apiName Delete socialbackround information
 * @apiGroup socialbackround
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id socialbackround unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "socialbackround deleted"
    }
}
 *     }
 *
 * @apiError socialbackroundNotFound The id of the socialbackround was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find socialbackround with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken], socialbackroundController.deletesocialbackround);

export default router;