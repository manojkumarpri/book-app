import { Router } from 'express';
import familyinfoController from '../controllers/familyinfoController';
const authJwt = require('./verifyJwtToken');

const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /familyinfo/ Request get all familyinfo information
 * @apiName GetAllfamilyinfo
 * @apiGroup familyinfo
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "familyinfos retrieved",
    "data": [
        {
            "id": 1,
            "fathersdetail": "KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n",
            "mothersdetail": "Mother LAKSMI Dies one year ago , she was house wife .\n",
            "sistersdetail": "Vennila -working",
            "brothersdetail": "nil",
            "otherrelationdetails": "Muthusamy - advocate\n",
            "memberid": 1,
            "createdAt": "2020-06-11T18:35:33.993Z",
            "updatedAt": "2020-06-11T18:35:33.993Z"
        }
    ]
}
 *
 * @apiError familyinfoNotfound  familyinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "familyinfoNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2],familyinfoController.getAllfamilyinfos);
/**
 * @api {post} /familyinfo/ add familyinfo information
 * @apiName Getfamilyinfo
 *  * @apiGroup familyinfo
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} memberid memberid of the familyinfo.
 * @apiSuccess {String} fathersdetail  fathersdetail of the familyinfo.
 * @apiSuccess {String} mothersdetail  mothersdetail of the familyinfo. 
 * @apiSuccess {String} sistersdetail  sistersdetail  of the familyinfo. 
 * @apiSuccess {String} brothersdetail  brothersdetail  of the familyinfo. 
 * @apiSuccess {String} otherrelationdetails  otherrelationdetails  of the familyinfo. 



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "familyinfo Added!",
    "data": {
        "id": 1,
        "fathersdetail": "KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n",
        "mothersdetail": "Mother LAKSMI Dies one year ago , she was house wife .\n",
        "sistersdetail": "Vennila -working",
        "brothersdetail": "nil",
        "otherrelationdetails": "Muthusamy - advocate\n",
        "memberid": 1,
        "updatedAt": "2020-06-11T18:35:33.993Z",
        "createdAt": "2020-06-11T18:35:33.993Z"
    }
}
 *
 * @apiError familyinfoNotFound familyinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post familyinfo "
 *     }
 */
router.post('/',[authJwt.verifyToken],familyinfoController.addfamilyinfo);
/**
 * @api {get} /familyinfo/:id  Request specific familyinfo information
 * @apiName Get Specific familyinfo
 *  * @apiGroup familyinfo
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id familyinfo unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "Found familyinfo",
    "data": {
        "id": 1,
        "fathersdetail": "KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n",
        "mothersdetail": "Mother LAKSMI Dies one year ago , she was house wife .\n",
        "sistersdetail": "Vennila -working",
        "brothersdetail": "nil",
        "otherrelationdetails": "Muthusamy - advocate\n",
        "memberid": 1,
        "createdAt": "2020-06-11T18:35:33.993Z",
        "updatedAt": "2020-06-11T18:35:33.993Z"
    }
}
 *
 * @apiError familyinfoNotFound familyinfo with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find familyinfo with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],familyinfoController.getAfamilyinfo);
/**
* @api {put} /familyinfo/:id Update specific familyinfo information
 * @apiName Updatefamilyinfo information
 * @apiGroup familyinfo
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.
  
 * @apiParam {Number} id familyinfo unique ID.
 *
 *
* @apiSuccess {integer} memberid memberid of the familyinfo.
 * @apiSuccess {String} fathersdetail  fathersdetail of the familyinfo.
 * @apiSuccess {String} mothersdetail  mothersdetail of the familyinfo. 
 * @apiSuccess {String} sistersdetail  sistersdetail  of the familyinfo. 
 * @apiSuccess {String} brothersdetail  brothersdetail  of the familyinfo. 
 * @apiSuccess {String} otherrelationdetails  otherrelationdetails  of the familyinfo. 



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "familyinfo updated",
    "data": {
        "fathersdetail": "KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n",
        "mothersdetail": "Mother LAKSMI Dies one year ago , she was house wife .\n",
        "sistersdetail": "Vennila -working.",
        "brothersdetail": "nil",
        "otherrelationdetails": "Muthusamy - advocate\n",
        "memberid": "1"
    }
}
 *
 * @apiError familyinfoNotFound The id of the familyinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find familyinfo with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],familyinfoController.updatedfamilyinfo);
/**
* @api {delete} /familyinfo/:id Delete specific familyinfo information
 * @apiName Deletefamilyinfo information
 * @apiGroup familyinfo
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id familyinfo unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "familyinfo deleted"
    }
}
 *     }
 *
 * @apiError familyinfoNotFound The id of the familyinfo was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find familyinfo with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],familyinfoController.deletefamilyinfo);

export default router;