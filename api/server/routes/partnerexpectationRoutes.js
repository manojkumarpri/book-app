import { Router } from 'express';
import partnerexpectationController from '../controllers/partnerexpectationController';
const authJwt = require('./verifyJwtToken');
const authJwt2=require('./verifyJwtToken2');

const router = Router();
/**
 * @api {get} /partnerexpectation/ Request get all partnerexpectation information of the user
 * @apiName GetAll partnerexpectation info
 * @apiGroup partnerexpectation
 *
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.



 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "partnerexpectations retrieved",
    "data": [
        {
            "expectedmatchingstars": [
                {
                    "star": "maham"
                },
                {
                    "star": "pooram"
                },
                {
                    "star": "uthiraadam"
                }
            ],
            "expectedhoroscopematch": [
                {
                    "star": "maham"
                },
                {
                    "star": "pooram"
                },
                {
                    "star": "uthiraadam"
                }
            ],
            "id": 1,
            "memberid": 1,
            "generalrequirement": "simple and well educated homely",
            "age": 25,
            "height": "6.5",
            "weight": "75kgs",
            "bodytype": "tall",
            "healthstatus": "good",
            "complexion": "no",
            "familystatus": "good",
            "religion": "Hindu",
            "caste": "kavuundar",
            "subcaste": "devendira",
            "education": "B.E",
            "profession": "Software Engineer",
            "prefferedbusiness": "IT industrry",
            "work": "technical lead",
            "expectedincome": "4-5 lakh",
            "prefferedworkingcountry": "US,UK",
            "prefferedworkingstate": "tamilnadu",
            "prefferednativeplace": "tiruppur",
            "prefferedlivingstate": "kerala",
            "diet": "yes",
            "drinkinghabits": "NO",
            "smokinghabits": "NO",
            "maritialstatus": "single",
            "children": "no",
            "createdAt": "2020-05-16T16:30:26.902Z",
            "updatedAt": "2020-05-16T16:30:26.902Z"
        }
    ]
 *     }
 *
 * @apiError partnerexpectationNotfound  partnerexpectation was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "partnerexpectationNotfound"
 *     }
 */
router.get('/',[authJwt2.verifyToken2], partnerexpectationController.getAllpartnerexpectations);
/**
 * @api {post} /partnerexpectation/ add partnerexpectation information
 * @apiName Getpartnerexpectation of user
 *  * @apiGroup partnerexpectation
 
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} generalrequirement  generalrequirement of the User.
  * @apiSuccess {integer} age age of the User.
 * @apiSuccess {String} height  height of the User. 
 * @apiSuccess {String} weight  weight  of the User. 
 * @apiSuccess {String} bodytype  bodytype  of the User. 
 * @apiSuccess {String} healthstatus  healthstatus  of the User. 
 * @apiSuccess {String} complexion  complexion of the user have. 
 *@apiSuccess {String} familystatus  familystatus  of the user have.
  *@apiSuccess {String} religion  religion  of the user have.
*@apiSuccess {String} caste  caste  of the user have.
*@apiSuccess {String} subcaste  subcaste  of the user have.
*@apiSuccess {String} education  education  of the user have.
*@apiSuccess {String} profession  profession  of the user have.
*@apiSuccess {String} prefferedbusiness  prefferedbusiness  of the user have.
*@apiSuccess {String} work  work  of the user have.
*@apiSuccess {String} expectedincome  expectedincome  of the user have.
*@apiSuccess {String} prefferedworkingcountry  prefferedworkingcountry  of the user have.
*@apiSuccess {String} prefferedworkingstate  prefferedworkingstate  of the user have.
*@apiSuccess {String} prefferednativeplace  prefferednativeplace  of the user have.
*@apiSuccess {String} prefferedlivingstate  prefferedlivingstate  of the user have.
@apiSuccess {ARRAY} expectedmatchingstars  expectedmatchingstars  of the User.
@apiSuccess {ARRAY} expectedhoroscopematch  expectedhoroscopematch  of the User.

*@apiSuccess {String} diet  diet  of the user have.
*@apiSuccess {String} drinkinghabits  drinkinghabits  of the user have.
*@apiSuccess {String} smokinghabits  smokinghabits  of the user have.
*@apiSuccess {String} maritialstatus  maritialstatus  of the user have.
*@apiSuccess {String} children  children  of the user have.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "partnerexpectation Added!",
    "data": {
        "expectedmatchingstars": [
            {
                "star": "maham"
            },
            {
                "star": "pooram"
            },
            {
                "star": "uthiraadam"
            }
        ],
        "expectedhoroscopematch": [
            {
                "star": "maham"
            },
            {
                "star": "pooram"
            },
            {
                "star": "uthiraadam"
            }
        ],
        "id": 1,
        "memberid": 1,
        "generalrequirement": "simple and well educated homely",
        "age": 25,
        "height": "6.5",
        "weight": "75kgs",
        "bodytype": "tall",
        "healthstatus": "good",
        "complexion": "no",
        "familystatus": "good",
        "religion": "Hindu",
        "caste": "kavuundar",
        "subcaste": "devendira",
        "education": "B.E",
        "profession": "Software Engineer",
        "prefferedbusiness": "IT industrry",
        "work": "technical lead",
        "expectedincome": "4-5 lakh",
        "prefferedworkingcountry": "US,UK",
        "prefferedworkingstate": "tamilnadu",
        "prefferednativeplace": "tiruppur",
        "prefferedlivingstate": "kerala",
        "diet": "yes",
        "drinkinghabits": "NO",
        "smokinghabits": "NO",
        "maritialstatus": "single",
        "children": "no",
        "updatedAt": "2020-05-16T16:30:26.902Z",
        "createdAt": "2020-05-16T16:30:26.902Z"
    }
 *     }
 *
 * @apiError partnerexpectationNotFound partnerexpectation was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot post partnerexpectation "
 *     }
 */
router.post('/',[authJwt.verifyToken], partnerexpectationController.addpartnerexpectation);
/**
 * @api {get} /partnerexpectation/:id  Request specific partnerexpectation information of user
 * @apiName Get Specific partnerexpectation
 *  * @apiGroup partnerexpectation
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiParam {Number} id partnerexpectation unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found partnerexpectation",
    "data": {
        "expectedmatchingstars": [
            {
                "star": "maham"
            },
            {
                "star": "pooram"
            },
            {
                "star": "uthiraadam"
            }
        ],
        "expectedhoroscopematch": [
            {
                "star": "maham"
            },
            {
                "star": "pooram"
            },
            {
                "star": "uthiraadam"
            }
        ],
        "id": 1,
        "memberid": 1,
        "generalrequirement": "simple and well educated homely",
        "age": 25,
        "height": "6.5",
        "weight": "75kgs",
        "bodytype": "tall",
        "healthstatus": "good",
        "complexion": "no",
        "familystatus": "good",
        "religion": "Hindu",
        "caste": "kavuundar",
        "subcaste": "devendira",
        "education": "B.E",
        "profession": "Software Engineer",
        "prefferedbusiness": "IT industrry",
        "work": "technical lead",
        "expectedincome": "4-5 lakh",
        "prefferedworkingcountry": "US,UK",
        "prefferedworkingstate": "tamilnadu",
        "prefferednativeplace": "tiruppur",
        "prefferedlivingstate": "kerala",
        "diet": "yes",
        "drinkinghabits": "NO",
        "smokinghabits": "NO",
        "maritialstatus": "single",
        "children": "no",
        "createdAt": "2020-05-16T16:30:26.902Z",
        "updatedAt": "2020-05-16T16:30:26.902Z"
    }
 *     }
 *
 * @apiError partnerexpectationNotFound partnerexpectation with id was not  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
       "message": "Cannot find partnerexpectation with the id 1"
 *     }
 */
router.get('/:id',[authJwt2.verifyToken2], partnerexpectationController.getApartnerexpectation);
/**
* @api {put} /partnerexpectation/:id Update specific partnerexpectation information
 * @apiName Update partnerexpectation information
 * @apiGroup partnerexpectation
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id partnerexpectation unique ID.
 *
 *
 *
 *
 * @apiSuccess {integer} memberid memberid of the User.
 * @apiSuccess {String} generalrequirement  generalrequirement of the User.
  * @apiSuccess {integer} age age of the User.
 * @apiSuccess {String} height  height of the User. 
 * @apiSuccess {String} weight  weight  of the User. 
 * @apiSuccess {String} bodytype  bodytype  of the User. 
 * @apiSuccess {String} healthstatus  healthstatus  of the User. 
 * @apiSuccess {String} complexion  complexion of the user have. 
 *@apiSuccess {String} familystatus  familystatus  of the user have.
  *@apiSuccess {String} religion  religion  of the user have.
*@apiSuccess {String} caste  caste  of the user have.
*@apiSuccess {String} subcaste  subcaste  of the user have.
*@apiSuccess {String} education  education  of the user have.
*@apiSuccess {String} profession  profession  of the user have.
*@apiSuccess {String} prefferedbusiness  prefferedbusiness  of the user have.
*@apiSuccess {String} work  work  of the user have.
*@apiSuccess {String} expectedincome  expectedincome  of the user have.
*@apiSuccess {String} prefferedworkingcountry  prefferedworkingcountry  of the user have.
*@apiSuccess {String} prefferedworkingstate  prefferedworkingstate  of the user have.
*@apiSuccess {String} prefferednativeplace  prefferednativeplace  of the user have.
*@apiSuccess {String} prefferedlivingstate  prefferedlivingstate  of the user have.
@apiSuccess {ARRAY} expectedmatchingstars  expectedmatchingstars  of the User.
@apiSuccess {ARRAY} expectedhoroscopematch  expectedhoroscopematch  of the User.

*@apiSuccess {String} diet  diet  of the user have.
*@apiSuccess {String} drinkinghabits  drinkinghabits  of the user have.
*@apiSuccess {String} smokinghabits  smokinghabits  of the user have.
*@apiSuccess {String} maritialstatus  maritialstatus  of the user have.
*@apiSuccess {String} children  children  of the user have.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
     "status": "success",
    "message": "partnerexpectation updated",
    "data": {
        "memberid": 2,
        "generalrequirement": "simple and well educated homely",
        "age": 25,
        "height": "6.5",
        "weight": "95kgs",
        "bodytype": "tall",
        "healthstatus": "good",
        "complexion": "no",
        "familystatus": "good",
        "religion": "Hindu",
        "caste": "kavuundar",
        "subcaste": "devendira",
        "education": "B.E",
        "profession": "Software Engineer",
        "prefferedbusiness": "IT industrry",
        "work": "technical lead",
        "expectedincome": "4-5 lakh",
        "prefferedworkingcountry": "US,UK",
        "prefferedworkingstate": "tamilnadu",
        "prefferednativeplace": "tiruppur",
        "prefferedlivingstate": "kerala",
        "expectedmatchingstars": [
            {
                "star": "maham"
            },
            {
                "star": "pooram"
            },
            {
                "star": "uthiraadam"
            }
        ],
        "expectedhoroscopematch": [
            {
                "star": "maham"
            },
            {
                "star": "pooram"
            },
            {
                "star": "uthiraadam"
            }
        ],
        "diet": "yes",
        "drinkinghabits": "NO",
        "smokinghabits": "NO",
        "maritialstatus": "single",
        "children": "no"
    }
}
 *     }
 *
 * @apiError partnerexpectationNotFound The id of the partnerexpectation was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find partnerexpectation with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], partnerexpectationController.updatedpartnerexpectation);
/**
* @api {delete} /partnerexpectation/:id Delete specific partnerexpectation information of user 
 * @apiName Delete partnerexpectation information
 * @apiGroup partnerexpectation
 *
   * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id partnerexpectation unique ID.
 *
 *
 *
 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
      "status": "success",
    "message": "partnerexpectation deleted"
    }
}
 *     }
 *
 * @apiError partnerexpectationNotFound The id of the partnerexpectation was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find partnerexpectation with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt2.verifyToken2],partnerexpectationController.deletepartnerexpectation);

export default router;