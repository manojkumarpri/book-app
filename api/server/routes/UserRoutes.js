import { Router } from 'express';
import UserController from '../controllers/UserController';
const verfifysignup = require('./verifysignup');
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /users/ Request get all User information
 * @apiName GetAllUser
 * @apiGroup User
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "firstname": "Manojkumar",
            "lastname": "manikkam",
            "gender": "male",
            "dob": "2012-04-23T18:25:43.511Z",
            "onbehalf": "self",
            "password": "manojkumar@11",
            "premium": true,
            "Contactinfo": {
                "mobile": 122772332,
                "email": "manojkumar11tpr@gmail.com",
                "facebook": null,
                "linkedin": null,
                "UserMemberid": 1,
                "createdAt": "2020-05-16T07:52:31.620Z",
                "updatedAt": "2020-05-16T07:52:31.620Z"
            }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken], UserController.getAllUsers);
/**
 * @api {post} /users/ add User information
 * @apiName AddUser information
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} gender  gender of the User. 
 * @apiSuccess {DATE} dob  dob of the User.
 * @apiSuccess {String} onbehalf  onbehalf of the User. 
 * @apiSuccess {String} password  password of the User.
 * * @apiSuccess {boolean} premium  premium of the User. 
 * @apiSuccess {object} contactobj  contactobj of the User. 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "firstname": "gokmathiakka",
            "lastname": "ambika",
            "gender": "female",
            "dob": "2012-04-23T18:25:43.511Z",
            "onbehalf": "self",
            "password": "goms@11",
            "premium": true,
            "contactobj": {
                "mobile": 122772332,
                "email": "kodi@gmail.com",
                "facebook": null,
                "linkedin": null,
                "UserMemberid": 1,
                "createdAt": "2020-05-14T17:02:49.008Z",
                "updatedAt": "2020-05-14T17:02:49.008Z"
            }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.post('/',[verfifysignup.verifyemail],  UserController.addUser);
/**
 * @api {post} /users/sigin signin User
 * @apiName login user
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} password  password of the User.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "Found User",
    "data": {
        "auth": true,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTAwMDYwMjQsImV4cCI6MTU5MDA5MjQyNH0.b5QC4XKpJ-Qm27d5pF81NLeJ5JRYwtBcKkmKS7p-TEo"
    }
          
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.post('/signin', UserController.signin);
/**
 * @api {get} /users/:id Request specific User information
 * @apiName GetUser
 * @apiGroup User
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Users unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "firstname": "gokmathiakka",
            "lastname": "ambika",
            "gender": "female",
            "dob": "2012-04-23T18:25:43.511Z",
            "onbehalf": "self",
            "password": "goms@11",
            "premium": true,
            "Contactinfo": {
                "mobile": 122772332,
                "email": "kodi@gmail.com",
                "facebook": null,
                "linkedin": null,
                "UserMemberid": 1,
                "createdAt": "2020-05-14T17:02:49.008Z",
                "updatedAt": "2020-05-14T17:02:49.008Z"
            }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find User with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken], UserController.getAUser);
/**
* @api {put} /users/:id Update specific User information
 * @apiName UpdateUser information
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} gender  gender of the User. 
 * @apiSuccess {DATE} dob  dob of the User.
 * @apiSuccess {String} onbehalf  onbehalf of the User. 
 * @apiSuccess {String} password  password of the User.
 * * @apiSuccess {boolean} premium  premium of the User. 
 * @apiSuccess {object} Contactinfo  Contactinfo of the User. 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
    "status": "success",
    "message": "User updated",
    "data": {
        "aadharno": "12345436464",
        "firstname": "MAnojkumar",
        "lastname": "manikkam",
        "gender": "male",
        "dob": "2012-04-23T18:25:43.511Z",
        "onbehalf": "self",
        "password": "manojkumar@11",
        "premium": true,
        "contactobj": {
            "mobile": 122772332,
            "email": "manojkumarssaug6@gmail.com"
        }
    }
}
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find User with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],UserController.updatedUser);
/**
* @api {delete} /users/:id Delete specific User information
 * @apiName DeleteUser information
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "status": "success",
      "message": "User deleted"
}
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find User with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],UserController.deleteUser);

export default router;