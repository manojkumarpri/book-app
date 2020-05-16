import { Router } from 'express';
import astronimicdetailsController from '../controllers/astronimicdetailsController';

const router = Router();
/**
 * @api {get} /astronimicdetails/ Request get all Astronimicdetails information
 * @apiName GetAllAstronimicdetails
 * @apiGroup Astronimicdetails
 *
 
 


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *            "status": "success",
             "message": "astronimicdetailss retrieved",
                "data": [
                          {
                            "suitablestars": [
                                                   {
                                                      "star": "maham"
                                                   },
                                                   {
                                                      "star": "swathi"
                                                   },
                                                   {
                                                      "star": "puram"
                                                   }
                                            ],
                                       "id": 1,
                                 "memberid": 1,
                                    "raasi": "leo",
                                   "laknam": "thulam",
                                     "star": "maham",
                               "birthplace": "thulam",
                                "birthdate": "2020-05-14T18:38:59.495Z",
                                "birthtime": "2:30am",
                                "ragukethu": "NO",
                             "sevvaithosam": "NO",
                                "createdAt": "2020-05-16T11:57:17.003Z",
                                "updatedAt": "2020-05-16T11:57:17.003Z"
                         }
                ]
 *     }
 *
 * @apiError AstronimicdetailsNotfound  Astronimicdetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "AstronimicdetailsNotfound"
 *     }
 */
router.get('/', astronimicdetailsController.getAllastronimicdetailss);
/**
 * @api {post} /astronimicdetails/ add Astronimicdetails information
 * @apiName GetAstronimicdetails
 *  * @apiGroup Astronimicdetails
 
 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} raasi  raasi of the User.
 * @apiSuccess {String} laknam  laknam of the User. 
 * @apiSuccess {String} star  star  of the User. 
 * @apiSuccess {String} birthplace  birthplace  of the User. 
 * @apiSuccess {DATE} birthdate  birthdate  of the User. 
 * @apiSuccess {String} birthtime  birthtime  of the User. 
 * @apiSuccess {String} ragukethu  ragukethu if the user have. 
 *@apiSuccess {String} sevvaithosam  sevvaithosam  if the user have.
 @apiSuccess {ARRAY} suitablestars  suitablestars  of the User.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "astronimicdetails Added!",
    "data": {
        "suitablestars": [
            {
                "star": "maham"
            },
            {
                "star": "swathi"
            },
            {
                "star": "puram"
            }
        ],
        "id": 2,
        "memberid": 2,
        "raasi": "leo",
        "laknam": "thulam",
        "star": "maham",
        "birthplace": "thulam",
        "birthdate": "2020-05-14T18:38:59.495Z",
        "birthtime": "2:30am",
        "ragukethu": "NO",
        "sevvaithosam": "NO",
        "updatedAt": "2020-05-16T12:07:52.599Z",
        "createdAt": "2020-05-16T12:07:52.599Z"
    }
 *     }
 *
 * @apiError astronimicdetailsNotFound astronimicdetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post astronimicdetails "
 *     }
 */

router.post('/', astronimicdetailsController.addastronimicdetails);
/**
 * @api {get} /astronimicdetails/:id  Request specific Astronimicdetails information
 * @apiName Get Specific Astronimicdetails
 *  * @apiGroup Astronimicdetails
 
  *
 * @apiParam {Number} id Astronimicdetails unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "Found astronimicdetails",
    "data": {
        "suitablestars": [
            {
                "star": "maham"
            },
            {
                "star": "swathi"
            },
            {
                "star": "puram"
            }
        ],
        "id": 1,
        "memberid": 1,
        "raasi": "leo",
        "laknam": "thulam",
        "star": "maham",
        "birthplace": "thulam",
        "birthdate": "2020-05-14T18:38:59.495Z",
        "birthtime": "2:30am",
        "ragukethu": "NO",
        "sevvaithosam": "NO",
        "createdAt": "2020-05-16T11:57:17.003Z",
        "updatedAt": "2020-05-16T11:57:17.003Z"
    }
 *     }
 *
 * @apiError AstronimicdetailsNotFound Astronimicdetails with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find Astronimicdetails with the id 2"
 *     }
 */
router.get('/:id', astronimicdetailsController.getAastronimicdetails);
/**
* @api {put} /astronimicdetails/:id Update specific Astronimicdetails information
 * @apiName UpdateAstronimicdetails information
 * @apiGroup Astronimicdetails
 *
   *
 * @apiParam {Number} id Astronimicdetails unique ID.
 *
 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} raasi  raasi of the User.
 * @apiSuccess {String} laknam  laknam of the User. 
 * @apiSuccess {String} star  star  of the User. 
 * @apiSuccess {String} birthplace  birthplace  of the User. 
 * @apiSuccess {DATE} birthdate  birthdate  of the User. 
 * @apiSuccess {String} birthtime  birthtime  of the User. 
 * @apiSuccess {String} ragukethu  ragukethu if the user have. 
 *@apiSuccess {String} sevvaithosam  sevvaithosam  if the user have.
 @apiSuccess {ARRAY} suitablestars  suitablestars  of the User.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "success",
    "message": "astronimicdetails updated",
    "data": {
        "memberid": 1,
        "raasi": "simmam",
        "laknam": "thulam",
        "star": "maham",
        "birthplace": "thulam",
        "birthdate": "2020-05-14T18:38:59.495Z",
        "birthtime": "2:30am",
        "ragukethu": "NO",
        "sevvaithosam": "NO",
        "suitablestars": [
            {
                "star": "maham"
            },
            {
                "star": "swathi"
            },
            {
                "star": "puram"
            }
        ]
    }
 *     }
 *
 * @apiError AstronimicdetailsNotFound The id of the Astronimicdetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Astronimicdetails with the id: 2"
 *     }
 */
router.put('/:id', astronimicdetailsController.updatedastronimicdetails);
/**
* @api {delete} /astronimicdetails/:id Delete specific Astronimicdetails information
 * @apiName DeleteAstronimicdetails information
 * @apiGroup Astronimicdetails
 *
   *
 * @apiParam {Number} id Astronimicdetails unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "Astronimicdetails deleted"
    }
}
 *     }
 *
 * @apiError AstronimicdetailsNotFound The id of the Astronimicdetails was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find Astronimicdetails with the id: 2"
 *     }
 */
router.delete('/:id', astronimicdetailsController.deleteastronimicdetails);

export default router;