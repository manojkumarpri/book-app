import { Router } from 'express';
import basicinfoController from '../controllers/basicinfoController';
const authJwt = require('./verifyJwtToken');
const router = Router();
const authJwt2=require('./verifyJwtToken2');

/**
 * @api {get} /basicinfo/ Request get all Basicinfo information
 * @apiName GetAllBasicinfo
 * @apiGroup Basicinfo
 *
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *  "status": "success",
    "message": "basicinfos retrieved",
    "data": [
        {
            "id": 1,
            "firstname": "Manojkumar",
            "lastname": "manikkam",
            "gender": "male",
            "dob": "2012-04-23T18:25:43.511Z",
            "age": 25,
            "mothername": "ambika",
            "fathername": "manikkam",
            "maritialstatus": "single",
            "native": "tiruppur",
            "living": "chennai",
            "onbehalf": "self",
            "memberid": 2,
            "profession": "softwareDeveloper",
            "createdAt": "2020-06-17T12:23:41.814Z",
            "updatedAt": "2020-06-17T12:23:41.814Z"
        }
    ]
 *     }
 *
 * @apiError BasicinfoNotfound  Basicinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "BasicinfoNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], basicinfoController.getAllbasicinfos);
/**
 * @api {post} /basicinfo/ add Basicinfo information
 * @apiName GetBasicinfo
 *  * @apiGroup Basicinfo
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} firstname  firstname of the User.
 * @apiSuccess {String} lastname  lastname of the User. 
 * @apiSuccess {String} gender  gender  of the User. 
 * @apiSuccess {DATE} dob  dob  of the User. 
 * @apiSuccess {String} mothername  mothername  of the User. 
 * @apiSuccess {String} fathername  fathername  of the User. 
 * @apiSuccess {String} maritialstatus  maritialstatus  of the User. 
 *@apiSuccess {String} native  native  of the User.
 @apiSuccess {String} living  living  of the User.
 @apiSuccess {String} onbehalf  onbehalf  of the User.
  @apiSuccess {String} profession  profession  of the User.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                     "status": "success",
    "message": "basicinfo Added!",
    "data": {
        "id": 1,
        "lastname": "manikkam",
        "firstname": "Manojkumar",
        "gender": "male",
        "dob": "2012-04-23T18:25:43.511Z",
        "memberid": 2,
        "age": 25,
        "mothername": "ambika",
        "fathername": "manikkam",
        "maritialstatus": "single",
        "native": "tiruppur",
        "living": "chennai",
        "onbehalf": "self",
        "profession": "softwareDeveloper",
        "updatedAt": "2020-06-17T12:23:41.814Z",
        "createdAt": "2020-06-17T12:23:41.814Z"
    }
 *     }
 *
 * @apiError BasicinfoNotFound Basicinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post Basicinfo "
 *     }
 */

router.post('/',[authJwt.verifyToken],basicinfoController.addbasicinfo);
/**
 * @api {get} /basicinfo/:id  Request specific Basicinfo information
 * @apiName Get Specific Basicinfo
 *  * @apiGroup Basicinfo
 
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Basicinfo unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                 "status": "success",
    "message": "Found basicinfo",
    "data": {
        "id": 1,
        "firstname": "Manojkumar",
        "lastname": "manikkam",
        "gender": "male",
        "dob": "2012-04-23T18:25:43.511Z",
        "age": 25,
        "mothername": "ambika",
        "fathername": "manikkam",
        "maritialstatus": "single",
        "native": "tiruppur",
        "living": "chennai",
        "onbehalf": "self",
        "memberid": 2,
        "profession": "softwareDeveloper",
        "createdAt": "2020-06-17T12:23:41.814Z",
        "updatedAt": "2020-06-17T12:23:41.814Z"
    }
 *     }
 *
 * @apiError BasicinfoNotFound Basicinfo with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find Basicinfo with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],  basicinfoController.getAbasicinfo);
/**
* @api {put} /basicinfo/:id Update specific Basicinfo information
 * @apiName UpdateBasicinfo information
 * @apiGroup Basicinfo
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Basicinfo unique ID.
 *
 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} firstname  firstname of the User.
 * @apiSuccess {String} lastname  lastname of the User. 
 * @apiSuccess {String} gender  gender  of the User. 
 * @apiSuccess {DATE} dob  dob  of the User. 
 * @apiSuccess {String} mothername  mothername  of the User. 
 * @apiSuccess {String} fathername  fathername  of the User. 
 * @apiSuccess {String} maritialstatus  maritialstatus  of the User. 
 *@apiSuccess {String} native  native  of the User.
 @apiSuccess {String} living  living  of the User.
 @apiSuccess {String} onbehalf  onbehalf  of the User.
  @apiSuccess {String} profession  profession  of the User.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
    "status": "success",
    "message": "basicinfo updated",
       "data": {
                                          "id": 2,
                                   "firstname": "Manojkumar",
                                    "lastname": "Manikkam",
                                      "gender": "male",
                                         "dob": "2020-05-14T18:11:41.380Z",
                                  "mothername": "ambika",
                                  "fathername": "Manikkam",
                              "maritialstatus": "single",
                                      "native": "tiruppur",
                                      "living": "chennai",
                                    "onbehalf": "self",
                                    "memberid": 2,
                                   "createdAt": "2020-05-16T09:52:11.149Z",
                                   "updatedAt": "2020-05-16T09:52:11.149Z"
           }
    }
}
 *     }
 *
 * @apiError BasicinfoNotFound The id of the Basicinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Basicinfo with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],basicinfoController.updatedbasicinfo);
/**
* @api {delete} /basicinfo/:id Delete specific Basicinfo information
 * @apiName DeleteBasicinfo information
 * @apiGroup Basicinfo
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Basicinfo unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "Basicinfo deleted"
    }
}
 *     }
 *
 * @apiError BasicinfoNotFound The id of the Basicinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Basicinfo with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2],  basicinfoController.deletebasicinfo);

export default router;