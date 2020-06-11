import { Router } from 'express';
import physicalappearanceController from '../controllers/physicalappearanceController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /physicalappearance/ Request get all physicalappearance information
 * @apiName GetAllphysicalappearance
 * @apiGroup physicalappearance
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "physicalappearances retrieved",
    "data": [
        {
            "id": 1,
            "height": "1.83 Feet",
            "weight": "89",
            "complexion": "FAIR",
            "bloodgroup": "O+",
            "bodytype": "FAT",
            "disability": "YES",
            "criticaldisease": "YES",
            "normaldisease": "no",
            "fertilitytest": "DONE",
            "pressuresugarcount": "NORMAL",
            "memberid": 1,
            "createdAt": "2020-06-11T18:59:30.481Z",
            "updatedAt": "2020-06-11T18:59:30.481Z"
        }
    ]
}
 *
 * @apiError physicalappearanceNotfound  physicalappearance was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "physicalappearanceNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2],physicalappearanceController.getAllphysicalappearances);
/**
 * @api {post} /physicalappearance/ add physicalappearance information
 * @apiName Getphysicalappearance
 *  * @apiGroup physicalappearance
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} memberid memberid of the physicalappearance.
 * @apiSuccess {String} height  height of the physicalappearance.
 * @apiSuccess {String} weight  weight of the physicalappearance. 
 * @apiSuccess {String} complexion  complexion of the physicalappearance. 
 *@apiSuccess {String} bloodgroup  bloodgroup of the physicalappearance. 
 * @apiSuccess {String} bodytype  bodytype of the physicalappearance. 
 * @apiSuccess {String} disability  disability of the physicalappearance. 
 * @apiSuccess {String} criticaldisease  criticaldisease of the physicalappearance. 
 * @apiSuccess {String} normaldisease  normaldisease of the physicalappearance. 
 *  @apiSuccess {String} fertilitytest  fertilitytest of the physicalappearance. 
 * @apiSuccess {String} pressuresugarcount  pressuresugarcount of the physicalappearance. 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "physicalappearance Added!",
    "data": {
        "id": 1,
        "height": "1.83 Feet",
        "weight": "89",
        "complexion": "FAIR",
        "bloodgroup": "O+",
        "bodytype": "FAT",
        "disability": "YES",
        "criticaldisease": "YES",
        "normaldisease": "no",
        "fertilitytest": "DONE",
        "pressuresugarcount": "NORMAL",
        "memberid": 1,
        "updatedAt": "2020-06-11T18:59:30.481Z",
        "createdAt": "2020-06-11T18:59:30.481Z"
    }
}
 *
 * @apiError physicalappearanceNotFound physicalappearance was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post physicalappearance "
 *     }
 */
router.post('/',[authJwt.verifyToken],physicalappearanceController.addphysicalappearance);
/**
 * @api {get} /physicalappearance/:id  Request specific physicalappearance information
 * @apiName Get Specific physicalappearance
 *  * @apiGroup physicalappearance
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id physicalappearance unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "Found physicalappearance",
    "data": {
        "id": 1,
        "height": "1.83 Feet",
        "weight": "89",
        "complexion": "FAIR",
        "bloodgroup": "O+",
        "bodytype": "FAT",
        "disability": "YES",
        "criticaldisease": "YES",
        "normaldisease": "no",
        "fertilitytest": "DONE",
        "pressuresugarcount": "NORMAL",
        "memberid": 1,
        "createdAt": "2020-06-11T18:59:30.481Z",
        "updatedAt": "2020-06-11T18:59:30.481Z"
    }
}

 * @apiError physicalappearanceNotFound physicalappearance with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find physicalappearance with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],physicalappearanceController.getAphysicalappearance);
/**
* @api {put} /physicalappearance/:id Update specific physicalappearance information
 * @apiName Updatephysicalappearance information
 * @apiGroup physicalappearance
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.
  
 * @apiParam {Number} id physicalappearance unique ID.
 *
 * @apiSuccess {integer} memberid memberid of the physicalappearance.
 * @apiSuccess {String} height  height of the physicalappearance.
 * @apiSuccess {String} weight  weight of the physicalappearance. 
 * @apiSuccess {String} complexion  complexion of the physicalappearance. 
 *@apiSuccess {String} bloodgroup  bloodgroup of the physicalappearance. 
 * @apiSuccess {String} bodytype  bodytype of the physicalappearance. 
 * @apiSuccess {String} disability  disability of the physicalappearance. 
 * @apiSuccess {String} criticaldisease  criticaldisease of the physicalappearance. 
 * @apiSuccess {String} normaldisease  normaldisease of the physicalappearance. 
 *  @apiSuccess {String} fertilitytest  fertilitytest of the physicalappearance. 
 * @apiSuccess {String} pressuresugarcount  pressuresugarcount of the physicalappearance. 




 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "physicalappearance updated",
    "data": {
        "height": "1.83 Feet",
        "weight": "91",
        "complexion": "FAIR",
        "bloodgroup": "O+",
        "bodytype": "FAT",
        "disability": "YES",
        "criticaldisease": "YES",
        "normaldisease": "no",
        "fertilitytest": "DONE",
        "pressuresugarcount": "NORMAL",
        "memberid": "1"
    }
}
 *
 * @apiError physicalappearanceNotFound The id of the physicalappearance was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find physicalappearance with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],physicalappearanceController.updatedphysicalappearance);
/**
* @api {delete} /physicalappearance/:id Delete specific physicalappearance information
 * @apiName Deletephysicalappearance information
 * @apiGroup physicalappearance
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id physicalappearance unique ID.
 
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "physicalappearance deleted"
    }
}
 
 * @apiError physicalappearanceNotFound The id of the physicalappearance was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find physicalappearance with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],physicalappearanceController.deletephysicalappearance);

export default router;