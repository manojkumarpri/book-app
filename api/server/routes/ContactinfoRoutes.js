import { Router } from 'express';
import ContactinfoController from '../controllers/ContactinfoController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /contact/ Request get all contact information
 * @apiName GetAllcontact
 * @apiGroup Contact
 *
 
 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "status": "success",
            "message": "Contactinfos retrieved",
               "data": [
                         {
                           "mobile": 122772332,
                           "email": "manojkumarssaug6@gmail.com",
                        "facebook": null,
                        "linkedin": null,
                    "UserMemberid": 1,
                       "createdAt": "2020-05-16T07:52:31.620Z",
                       "updatedAt": "2020-05-16T08:05:58.583Z"
                          }
                        ]
 *     }
 *
 * @apiError ContactinfoNotfound The id of the contact was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ContactinfoNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], ContactinfoController.getAllContactinfos);
/**
 * @api {post} /contact/ add contact information
 * @apiName Getcontact
 *  * @apiGroup Contact
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} mobile mobile of the User.
 * @apiSuccess {String} email  email of the User.
 * @apiSuccess {String} facebook  facebook profile link of the User. 
 * @apiSuccess {String} linkedin  linkedin profile link of the User. 

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                        "mobile": 122772332,
                           "email": "manojkumarssaug6@gmail.com",
                        "facebook": "httpsLfaceboook/manojk.com",
                        "linkedin": "https:linkedin/manoj.com",
 *     }
 *
 * @apiError ContactNotFound contat was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find Contact "
 *     }
 */

router.post('/',[authJwt.verifyToken],ContactinfoController.addContactinfo);
/**
 * @api {get} /contact/:id  Request specific contact information
 * @apiName Get Specific contact
 *  * @apiGroup Contact
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id Contact unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                      "status": "success",
                       "message": "Found Contactinfo",
                          "data": {
                                   "mobile": 122772332,
                                    "email": "manojkumarssaug6@gmail.com",
                                 "facebook": null,
                                 "linkedin": null,
                             "UserMemberid": 1,
                                "createdAt": "2020-05-16T07:52:31.620Z",
                                "updatedAt": "2020-05-16T08:05:58.583Z"
       }
 *     }
 *
 * @apiError ContactNotFound contat with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find Contactinfo with the id 2"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2], ContactinfoController.getAContactinfo);
/**
* @api {put} /contact/:id Update specific Contact information
 * @apiName UpdateContact information
 * @apiGroup Contact
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Contact unique ID.
 *
 *
 *
 *
 * @apiSuccess {integer} mobile mobile of the User.
 * @apiSuccess {String} email  email of the User.
 * @apiSuccess {String} facebook  facebook profile link of the User. 
 * @apiSuccess {String} linkedin  linkedin profile link of the User. 

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
    "status": "success",
    "message": "Contactinfo updated",
    "data": {
        "mobile": 122772332,
        "email": "manojkumarssaug6@gmail.com",
        "facebook": "https:faceboook.com/manoj",
        "linkedin": "https:linkedin.com/manoj"
    }
    }
}
 *     }
 *
 * @apiError contactNotFound The id of the contact was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Contact with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], ContactinfoController.updatedContactinfo);
/**
* @api {delete} /contact/:id Delete specific Contact information
 * @apiName DeleteContact information
 * @apiGroup Contact
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Contact unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "Contactinfo deleted"
    }
}
 *     }
 *
 * @apiError contactNotFound The id of the contact was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Contact with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2],  ContactinfoController.deleteContactinfo);

export default router;