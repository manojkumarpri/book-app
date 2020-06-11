import { Router } from 'express';
import UserController from '../controllers/UserController';
const verfifysignup = require('./verifysignup');
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

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
router.get('/',[authJwt2.verifyToken2], UserController.getAllUsers);
/**
 * @api {post} /users/ add User information
 * @apiName AddUser information
 * @apiGroup User
 *
  *  @apiHeader {String} Content-Type application/json.

 *  @apiSuccess {String} aadharno aadharno of the User.

 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} gender  gender of the User. 
 * @apiSuccess {DATE} dob  dob of the User.
 * @apiSuccess {String} onbehalf  onbehalf of the User. 
 * @apiSuccess {String} password  password of the User.
 * * @apiSuccess {boolean} premium  premium of the User. 
 * @apiSuccess {object} contactobj  contactobj of the User. 
 * @apiSuccess {String} imgurl imgurl of the user.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "aadharno":"12323242424",
 *          "firstname": "gokmathiakka",
            "lastname": "ambika",
            "gender": "female",
            "dob": "2012-04-23T18:25:43.511Z",
            "onbehalf": "self",
            "password": "goms@11",
            "premium": true,
            "imgurl":"https://testingbook-demo.herokuapp.com/Anandh.jpg",
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
router.post('/',  UserController.addUser);
/**
 * @api {post} /users/sigin signin User
 * @apiName login user
 * @apiGroup User
 *
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} aadharno aadharnumber of the User.
 * @apiSuccess {String} password  password of the User.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "Found User",
    "data": {
        "auth": true,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE5MDQxMjYsImV4cCI6MTU5MTk5MDUyNn0.TkmFPGLvI_ykRsZuSxiGBcemDdRiNhyJqlWfn4gexLY",
        "data": {
            "aadharno": "1223223",
            "firstname": "Manojkumar",
            "lastname": "manikkam",
            "gender": "male",
            "dob": "2012-04-23T18:25:43.511Z",
            "memberid": 1,
            "onbehalf": "self",
            "password": "manojkumar@11",
            "premium": true,
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTojYs59LJ19HQR9HEf6vds1to-FQW1kItsFJp-7Rnv-_13rLZ4&usqp=CAU",
            "createdAt": "2020-06-11T19:34:40.136Z",
            "updatedAt": "2020-06-11T19:34:40.136Z",
            "Contactinfo": {
                "mobile": "122772332",
                "email": "manojkumar18tpr@gmail.com",
                "facebook": null,
                "linkedin": null,
                "UserMemberid": 1,
                "createdAt": "2020-06-11T19:34:40.164Z",
                "updatedAt": "2020-06-11T19:34:40.164Z"
            }
        }
    }
}
 *
 * @apiError UserNotFound The aadharno of the User was not found.
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
router.get('/:id',[authJwt2.verifyToken2],UserController.getAUser);
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
router.delete('/:id',[authJwt2.verifyToken2],UserController.deleteUser);
router.delete('/',UserController.deleteallusers);

export default router;