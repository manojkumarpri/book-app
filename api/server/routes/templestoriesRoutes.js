import { Router } from 'express';
import templestoriesController from '../controllers/templestoriesController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /templestories/ Request get all templestories information
 * @apiName GetAlltemplestories
 * @apiGroup templestories
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": "success",
    "message": "templestoriess retrieved",
    "data": [
        {
            "id": 1,
            "title": "Demo Happy Story Title 1",
            "createdby": "Slade Bennett",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.",
            "imgurl": "https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg",
            "createdAt": "2020-06-08T07:30:34.435Z",
            "updatedAt": "2020-06-08T07:30:34.435Z"
        }
    ]
}
 *
 * @apiError templestoriesNotFound The id of the templestories was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "templestoriesNotFound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], templestoriesController.getAlltemplestoriess);
/**
 * @api {post} /templestories/ add templestories information
 * @apiName Addtemplestories information
 * @apiGroup templestories
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} title title of the templestories.
 * @apiSuccess {String} createdby  createdby of the templestories.
 * @apiSuccess {String} description  description of the templestories. 
 * @apiSuccess {String} imgurl  imgurl of the templestories. 
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "templestories Added!",
    "data": {
        "id": 2,
        "title": "Demo Happy Story Title 2",
        "createdby": "Slade Bennett",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.",
        "imgurl": "https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg",
        "updatedAt": "2020-06-08T07:36:00.474Z",
        "createdAt": "2020-06-08T07:36:00.474Z"
    }
}
 *
 * @apiError templestoriesNotFound The id of the templestories was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "templestoriesNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken], templestoriesController.addtemplestories);
/**
 * @api {get} /templestories/:id Request specific templestories information
 * @apiName Gettemplestories
 * @apiGroup templestories
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id templestories unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "status": "success",
    "message": "Found templestories",
    "data": {
        "id": 1,
        "title": "Demo Happy Story Title 1",
        "createdby": "Slade Bennett",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.",
        "imgurl": "https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg",
        "createdAt": "2020-06-08T07:30:34.435Z",
        "updatedAt": "2020-06-08T07:30:34.435Z"
    }
}
 *
 * @apiError templestoriesNotFound The id of the templestories was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find templestories with the id Number"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2],templestoriesController.getAtemplestories);
/**
* @api {put} /templestories/:id Update specific templestories information
 * @apiName Updatetemplestories information
 * @apiGroup templestories
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
* @apiSuccess {String} title title of the templestories.
 * @apiSuccess {String} createdby  createdby of the templestories.
 * @apiSuccess {String} description  description of the templestories. 
 * @apiSuccess {String} imgurl  imgurl of the templestories. 
  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "status": "success",
    "message": "templestories updated",
    "data": {
        "title": "Demo Happy Story Title 2",
        "createdby": "Slad walker",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.",
        "imgurl": "https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg"
    }
}
 *
 * @apiError templestoriesNotFound The id of the templestories was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find templestories with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],templestoriesController.updatedtemplestories);
/**
* @api {delete} /templestories/:id Delete specific templestories information
 * @apiName Deletetemplestories information
 * @apiGroup templestories
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "status": "success",
    "message": "templestories deleted"
}
 *
 * @apiError templestoriesNotFound The id of the templestories was not found.
 *
 * @apiError Example Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find templestories with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2],templestoriesController.deletetemplestories);

export default router;