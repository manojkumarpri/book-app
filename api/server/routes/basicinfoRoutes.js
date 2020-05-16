import { Router } from 'express';
import basicinfoController from '../controllers/basicinfoController';

const router = Router();
/**
 * @api {get} /basicinfo/ Request get all Basicinfo information
 * @apiName GetAllBasicinfo
 * @apiGroup Basicinfo
 *
 
 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "status": "success",
            "message": "Found basicinfo",
               "data": {
                              "id": 1,
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
                        "memberid": 1,
                       "createdAt": "2020-05-14T18:38:59.495Z",
                       "updatedAt": "2020-05-14T18:38:59.495Z"
                       }
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
router.get('/', basicinfoController.getAllbasicinfos);
/**
 * @api {post} /basicinfo/ add Basicinfo information
 * @apiName GetBasicinfo
 *  * @apiGroup Basicinfo
 
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
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                         "status": "success",
                          "message": "basicinfo Added!",
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
                                     "updatedAt": "2020-05-16T09:52:11.149Z",
                                     "createdAt": "2020-05-16T09:52:11.149Z"
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

router.post('/', basicinfoController.addbasicinfo);
/**
 * @api {get} /basicinfo/:id  Request specific Basicinfo information
 * @apiName Get Specific Basicinfo
 *  * @apiGroup Basicinfo
 
  *
 * @apiParam {Number} id Basicinfo unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *                      "status": "success",
                       "message": "Found basicinfo",
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
router.get('/:id', basicinfoController.getAbasicinfo);
/**
* @api {put} /basicinfo/:id Update specific Basicinfo information
 * @apiName UpdateBasicinfo information
 * @apiGroup Basicinfo
 *
   *
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
router.put('/:id', basicinfoController.updatedbasicinfo);
/**
* @api {delete} /basicinfo/:id Delete specific Basicinfo information
 * @apiName DeleteBasicinfo information
 * @apiGroup Basicinfo
 *
   *
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
router.delete('/:id', basicinfoController.deletebasicinfo);

export default router;