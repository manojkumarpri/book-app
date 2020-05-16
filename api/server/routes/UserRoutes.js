import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();
/**
 * @api {get} /users/ Request get all User information
 * @apiName GetAllUser
 * @apiGroup User
 *
 
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
router.get('/', UserController.getAllUsers);
/**
 * @api {post} /users/ add User information
 * @apiName AddUser information
 * @apiGroup User
 *
 
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
 *       "error": "UserNotFound"
 *     }
 */
router.post('/', UserController.addUser);
/**
 * @api {get} /users/:id Request specific User information
 * @apiName GetUser
 * @apiGroup User
 *
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


router.get('/:id', UserController.getAUser);
/**
* @api {put} /users/:id Update specific User information
 * @apiName UpdateUser information
 * @apiGroup User
 *
 
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
router.put('/:id', UserController.updatedUser);
/**
* @api {delete} /users/:id Delete specific User information
 * @apiName DeleteUser information
 * @apiGroup User
 *
 

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
router.delete('/:id', UserController.deleteUser);

export default router;