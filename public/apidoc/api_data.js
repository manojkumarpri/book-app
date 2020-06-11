define({ "api": [
  {
    "type": "delete",
    "url": "/astronimicdetails/:id",
    "title": "Delete specific Astronimicdetails information",
    "name": "DeleteAstronimicdetails_information",
    "group": "Astronimicdetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Astronimicdetails unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"Astronimicdetails deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AstronimicdetailsNotFound",
            "description": "<p>The id of the Astronimicdetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Astronimicdetails with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/astronimicdetailsRoutes.js",
    "groupTitle": "Astronimicdetails"
  },
  {
    "type": "get",
    "url": "/astronimicdetails/",
    "title": "Request get all Astronimicdetails information",
    "name": "GetAllAstronimicdetails",
    "group": "Astronimicdetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"status\": \"success\",\n         \"message\": \"astronimicdetailss retrieved\",\n            \"data\": [\n                      {\n                        \"suitablestars\": [\n                                               {\n                                                  \"star\": \"maham\"\n                                               },\n                                               {\n                                                  \"star\": \"swathi\"\n                                               },\n                                               {\n                                                  \"star\": \"puram\"\n                                               }\n                                        ],\n                                   \"id\": 1,\n                             \"memberid\": 1,\n                                \"raasi\": \"leo\",\n                               \"laknam\": \"thulam\",\n                                 \"star\": \"maham\",\n                           \"birthplace\": \"thulam\",\n                            \"birthdate\": \"2020-05-14T18:38:59.495Z\",\n                            \"birthtime\": \"2:30am\",\n                            \"ragukethu\": \"NO\",\n                         \"sevvaithosam\": \"NO\",\n                            \"createdAt\": \"2020-05-16T11:57:17.003Z\",\n                            \"updatedAt\": \"2020-05-16T11:57:17.003Z\"\n                     }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AstronimicdetailsNotfound",
            "description": "<p>Astronimicdetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AstronimicdetailsNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/astronimicdetailsRoutes.js",
    "groupTitle": "Astronimicdetails"
  },
  {
    "type": "post",
    "url": "/astronimicdetails/",
    "title": "add Astronimicdetails information",
    "name": "GetAstronimicdetails",
    "group": "Astronimicdetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "raasi",
            "description": "<p>raasi of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "laknam",
            "description": "<p>laknam of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "star",
            "description": "<p>star  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthplace",
            "description": "<p>birthplace  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthtime",
            "description": "<p>birthtime  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ragukethu",
            "description": "<p>ragukethu if the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sevvaithosam",
            "description": "<p>sevvaithosam  if the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "suitablestars",
            "description": "<p>suitablestars  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"astronimicdetails Added!\",\n  \"data\": {\n      \"suitablestars\": [\n          {\n              \"star\": \"maham\"\n          },\n          {\n              \"star\": \"swathi\"\n          },\n          {\n              \"star\": \"puram\"\n          }\n      ],\n      \"id\": 2,\n      \"memberid\": 2,\n      \"raasi\": \"leo\",\n      \"laknam\": \"thulam\",\n      \"star\": \"maham\",\n      \"birthplace\": \"thulam\",\n      \"birthdate\": \"2020-05-14T18:38:59.495Z\",\n      \"birthtime\": \"2:30am\",\n      \"ragukethu\": \"NO\",\n      \"sevvaithosam\": \"NO\",\n      \"updatedAt\": \"2020-05-16T12:07:52.599Z\",\n      \"createdAt\": \"2020-05-16T12:07:52.599Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "astronimicdetailsNotFound",
            "description": "<p>astronimicdetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post astronimicdetails \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/astronimicdetailsRoutes.js",
    "groupTitle": "Astronimicdetails"
  },
  {
    "type": "get",
    "url": "/astronimicdetails/:id",
    "title": "Request specific Astronimicdetails information",
    "name": "Get_Specific_Astronimicdetails",
    "group": "Astronimicdetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Astronimicdetails unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"Found astronimicdetails\",\n  \"data\": {\n      \"suitablestars\": [\n          {\n              \"star\": \"maham\"\n          },\n          {\n              \"star\": \"swathi\"\n          },\n          {\n              \"star\": \"puram\"\n          }\n      ],\n      \"id\": 1,\n      \"memberid\": 1,\n      \"raasi\": \"leo\",\n      \"laknam\": \"thulam\",\n      \"star\": \"maham\",\n      \"birthplace\": \"thulam\",\n      \"birthdate\": \"2020-05-14T18:38:59.495Z\",\n      \"birthtime\": \"2:30am\",\n      \"ragukethu\": \"NO\",\n      \"sevvaithosam\": \"NO\",\n      \"createdAt\": \"2020-05-16T11:57:17.003Z\",\n      \"updatedAt\": \"2020-05-16T11:57:17.003Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AstronimicdetailsNotFound",
            "description": "<p>Astronimicdetails with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find Astronimicdetails with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/astronimicdetailsRoutes.js",
    "groupTitle": "Astronimicdetails"
  },
  {
    "type": "put",
    "url": "/astronimicdetails/:id",
    "title": "Update specific Astronimicdetails information",
    "name": "UpdateAstronimicdetails_information",
    "group": "Astronimicdetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Astronimicdetails unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "raasi",
            "description": "<p>raasi of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "laknam",
            "description": "<p>laknam of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "star",
            "description": "<p>star  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthplace",
            "description": "<p>birthplace  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthtime",
            "description": "<p>birthtime  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ragukethu",
            "description": "<p>ragukethu if the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sevvaithosam",
            "description": "<p>sevvaithosam  if the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "suitablestars",
            "description": "<p>suitablestars  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"astronimicdetails updated\",\n  \"data\": {\n      \"memberid\": 1,\n      \"raasi\": \"simmam\",\n      \"laknam\": \"thulam\",\n      \"star\": \"maham\",\n      \"birthplace\": \"thulam\",\n      \"birthdate\": \"2020-05-14T18:38:59.495Z\",\n      \"birthtime\": \"2:30am\",\n      \"ragukethu\": \"NO\",\n      \"sevvaithosam\": \"NO\",\n      \"suitablestars\": [\n          {\n              \"star\": \"maham\"\n          },\n          {\n              \"star\": \"swathi\"\n          },\n          {\n              \"star\": \"puram\"\n          }\n      ]\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AstronimicdetailsNotFound",
            "description": "<p>The id of the Astronimicdetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Astronimicdetails with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/astronimicdetailsRoutes.js",
    "groupTitle": "Astronimicdetails"
  },
  {
    "type": "delete",
    "url": "/basicinfo/:id",
    "title": "Delete specific Basicinfo information",
    "name": "DeleteBasicinfo_information",
    "group": "Basicinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Basicinfo unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"Basicinfo deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BasicinfoNotFound",
            "description": "<p>The id of the Basicinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Basicinfo with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/basicinfoRoutes.js",
    "groupTitle": "Basicinfo"
  },
  {
    "type": "get",
    "url": "/basicinfo/",
    "title": "Request get all Basicinfo information",
    "name": "GetAllBasicinfo",
    "group": "Basicinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": \"success\",\n        \"message\": \"Found basicinfo\",\n           \"data\": {\n                          \"id\": 1,\n                   \"firstname\": \"Manojkumar\",\n                    \"lastname\": \"Manikkam\",\n                      \"gender\": \"male\",\n                         \"dob\": \"2020-05-14T18:11:41.380Z\",\n                  \"mothername\": \"ambika\",\n                  \"fathername\": \"Manikkam\",\n              \"maritialstatus\": \"single\",\n                      \"native\": \"tiruppur\",\n                      \"living\": \"chennai\",\n                    \"onbehalf\": \"self\",\n                    \"memberid\": 1,\n                   \"createdAt\": \"2020-05-14T18:38:59.495Z\",\n                   \"updatedAt\": \"2020-05-14T18:38:59.495Z\"\n                   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BasicinfoNotfound",
            "description": "<p>Basicinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"BasicinfoNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/basicinfoRoutes.js",
    "groupTitle": "Basicinfo"
  },
  {
    "type": "post",
    "url": "/basicinfo/",
    "title": "add Basicinfo information",
    "name": "GetBasicinfo",
    "group": "Basicinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "dob",
            "description": "<p>dob  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mothername",
            "description": "<p>mothername  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fathername",
            "description": "<p>fathername  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "maritialstatus",
            "description": "<p>maritialstatus  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>native  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "living",
            "description": "<p>living  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "onbehalf",
            "description": "<p>onbehalf  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                    \"status\": \"success\",\n                      \"message\": \"basicinfo Added!\",\n                         \"data\": {\n                                        \"id\": 2,\n                                 \"firstname\": \"Manojkumar\",\n                                  \"lastname\": \"Manikkam\",\n                                    \"gender\": \"male\",\n                                       \"dob\": \"2020-05-14T18:11:41.380Z\",\n                                \"mothername\": \"ambika\",\n                                \"fathername\": \"Manikkam\",\n                            \"maritialstatus\": \"single\",\n                                    \"native\": \"tiruppur\",\n                                    \"living\": \"chennai\",\n                                  \"onbehalf\": \"self\",\n                                  \"memberid\": 2,\n                                 \"updatedAt\": \"2020-05-16T09:52:11.149Z\",\n                                 \"createdAt\": \"2020-05-16T09:52:11.149Z\"\n                                  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BasicinfoNotFound",
            "description": "<p>Basicinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post Basicinfo \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/basicinfoRoutes.js",
    "groupTitle": "Basicinfo"
  },
  {
    "type": "get",
    "url": "/basicinfo/:id",
    "title": "Request specific Basicinfo information",
    "name": "Get_Specific_Basicinfo",
    "group": "Basicinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Basicinfo unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                 \"status\": \"success\",\n                   \"message\": \"Found basicinfo\",\n                      \"data\": {\n                                      \"id\": 2,\n                               \"firstname\": \"Manojkumar\",\n                                \"lastname\": \"Manikkam\",\n                                  \"gender\": \"male\",\n                                     \"dob\": \"2020-05-14T18:11:41.380Z\",\n                              \"mothername\": \"ambika\",\n                              \"fathername\": \"Manikkam\",\n                          \"maritialstatus\": \"single\",\n                                  \"native\": \"tiruppur\",\n                                  \"living\": \"chennai\",\n                                \"onbehalf\": \"self\",\n                                \"memberid\": 2,\n                               \"createdAt\": \"2020-05-16T09:52:11.149Z\",\n                               \"updatedAt\": \"2020-05-16T09:52:11.149Z\"\n                              }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BasicinfoNotFound",
            "description": "<p>Basicinfo with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find Basicinfo with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/basicinfoRoutes.js",
    "groupTitle": "Basicinfo"
  },
  {
    "type": "put",
    "url": "/basicinfo/:id",
    "title": "Update specific Basicinfo information",
    "name": "UpdateBasicinfo_information",
    "group": "Basicinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Basicinfo unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "dob",
            "description": "<p>dob  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mothername",
            "description": "<p>mothername  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fathername",
            "description": "<p>fathername  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "maritialstatus",
            "description": "<p>maritialstatus  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>native  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "living",
            "description": "<p>living  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "onbehalf",
            "description": "<p>onbehalf  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n    \"status\": \"success\",\n    \"message\": \"basicinfo updated\",\n       \"data\": {\n                                          \"id\": 2,\n                                   \"firstname\": \"Manojkumar\",\n                                    \"lastname\": \"Manikkam\",\n                                      \"gender\": \"male\",\n                                         \"dob\": \"2020-05-14T18:11:41.380Z\",\n                                  \"mothername\": \"ambika\",\n                                  \"fathername\": \"Manikkam\",\n                              \"maritialstatus\": \"single\",\n                                      \"native\": \"tiruppur\",\n                                      \"living\": \"chennai\",\n                                    \"onbehalf\": \"self\",\n                                    \"memberid\": 2,\n                                   \"createdAt\": \"2020-05-16T09:52:11.149Z\",\n                                   \"updatedAt\": \"2020-05-16T09:52:11.149Z\"\n           }\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BasicinfoNotFound",
            "description": "<p>The id of the Basicinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Basicinfo with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/basicinfoRoutes.js",
    "groupTitle": "Basicinfo"
  },
  {
    "type": "delete",
    "url": "/business/:id",
    "title": "Delete specific Business information",
    "name": "DeleteBusiness_information",
    "group": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Business unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"Business deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BusinessNotFound",
            "description": "<p>The id of the Business was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Business with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/businessRoutes.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/business/",
    "title": "Request get all Business information",
    "name": "GetAllBusiness",
    "group": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"businesss retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"memberid\": 1,\n          \"businessname\": \"Shinelogics infotech\",\n          \"position\": \"software Developer\",\n          \"annualctc\": \"3.5 lakh\",\n          \"employeeid\": \"sl0061\",\n          \"businessplace\": \"SRP Tools,thiruvanmaiyur ,chennai\",\n          \"experience\": \"2 years\",\n          \"totalasset\": \"3.5 crore\",\n          \"totalliability\": \"40 lakhs\",\n          \"house\": \"own\",\n          \"ancestorproperty\": \"10 lakh\",\n          \"createdAt\": \"2020-05-14T18:30:38.279Z\",\n          \"updatedAt\": \"2020-05-14T18:30:38.279Z\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BusinessNotfound",
            "description": "<p>Business was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"BusinessNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/businessRoutes.js",
    "groupTitle": "Business"
  },
  {
    "type": "post",
    "url": "/business/",
    "title": "add Business information",
    "name": "GetBusiness",
    "group": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businessname",
            "description": "<p>businessname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>position of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "annualctc",
            "description": "<p>annualctc  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeid",
            "description": "<p>employeeid  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businessplace",
            "description": "<p>businessplace  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>experience  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalasset",
            "description": "<p>totalasset  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalliability",
            "description": "<p>totalliability  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>house  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ancestorproperty",
            "description": "<p>ancestorproperty  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"business Added!\",\n  \"data\": {\n      \"id\": 2,\n      \"memberid\": 2,\n      \"businessname\": \"Shinelogics infotech\",\n      \"position\": \"software Developer\",\n      \"annualctc\": \"3.5 lakh\",\n      \"employeeid\": \"sl0061\",\n      \"businessplace\": \"SRP Tools,thiruvanmaiyur ,chennai\",\n      \"experience\": \"2 years\",\n      \"totalasset\": \"3.5 crore\",\n      \"totalliability\": \"40 lakhs\",\n      \"house\": \"own\",\n      \"ancestorproperty\": \"10 lakh\",\n      \"updatedAt\": \"2020-05-16T12:40:06.040Z\",\n      \"createdAt\": \"2020-05-16T12:40:06.040Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BusinessNotFound",
            "description": "<p>Business was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post Business \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/businessRoutes.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/business/:id",
    "title": "Request specific Business information",
    "name": "Get_Specific_Business",
    "group": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Business unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found business\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 1,\n     \"businessname\": \"Shinelogics infotech\",\n     \"position\": \"software Developer\",\n     \"annualctc\": \"3.5 lakh\",\n     \"employeeid\": \"sl0061\",\n     \"businessplace\": \"SRP Tools,thiruvanmaiyur ,chennai\",\n     \"experience\": \"2 years\",\n     \"totalasset\": \"3.5 crore\",\n     \"totalliability\": \"40 lakhs\",\n     \"house\": \"own\",\n     \"ancestorproperty\": \"10 lakh\",\n     \"createdAt\": \"2020-05-14T18:30:38.279Z\",\n     \"updatedAt\": \"2020-05-14T18:30:38.279Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BusinessNotFound",
            "description": "<p>Business with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find Business with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/businessRoutes.js",
    "groupTitle": "Business"
  },
  {
    "type": "put",
    "url": "/business/:id",
    "title": "Update specific Business information",
    "name": "UpdateBusiness_information",
    "group": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Business unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businessname",
            "description": "<p>businessname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>position of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "annualctc",
            "description": "<p>annualctc  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeid",
            "description": "<p>employeeid  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businessplace",
            "description": "<p>businessplace  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>experience  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalasset",
            "description": "<p>totalasset  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalliability",
            "description": "<p>totalliability  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>house  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ancestorproperty",
            "description": "<p>ancestorproperty  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n     \"status\": \"success\",\n    \"message\": \"business updated\",\n    \"data\": {\n        \"memberid\": 2,\n        \"businessname\": \"naga info solutions\",\n        \"position\": \"software Developer\",\n        \"annualctc\": \"3.5 lakh\",\n        \"employeeid\": \"sl0061\",\n        \"businessplace\": \"SRP Tools,thiruvanmaiyur ,chennai\",\n        \"experience\": \"2 years\",\n        \"totalasset\": \"3.5 crore\",\n        \"totalliability\": \"40 lakhs\",\n        \"house\": \"own\",\n        \"ancestorproperty\": \"10 lakh\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BusinessNotFound",
            "description": "<p>The id of the Business was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Business with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/businessRoutes.js",
    "groupTitle": "Business"
  },
  {
    "type": "delete",
    "url": "/contact/:id",
    "title": "Delete specific Contact information",
    "name": "DeleteContact_information",
    "group": "Contact",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Contact unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"Contactinfo deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "contactNotFound",
            "description": "<p>The id of the contact was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Contact with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ContactinfoRoutes.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/",
    "title": "Request get all contact information",
    "name": "GetAllcontact",
    "group": "Contact",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": \"success\",\n        \"message\": \"Contactinfos retrieved\",\n           \"data\": [\n                     {\n                       \"mobile\": 122772332,\n                       \"email\": \"manojkumarssaug6@gmail.com\",\n                    \"facebook\": null,\n                    \"linkedin\": null,\n                \"UserMemberid\": 1,\n                   \"createdAt\": \"2020-05-16T07:52:31.620Z\",\n                   \"updatedAt\": \"2020-05-16T08:05:58.583Z\"\n                      }\n                    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContactinfoNotfound",
            "description": "<p>The id of the contact was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ContactinfoNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ContactinfoRoutes.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/:id",
    "title": "Request specific contact information",
    "name": "Get_Specific_contact",
    "group": "Contact",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Contact unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                 \"status\": \"success\",\n                   \"message\": \"Found Contactinfo\",\n                      \"data\": {\n                               \"mobile\": 122772332,\n                                \"email\": \"manojkumarssaug6@gmail.com\",\n                             \"facebook\": null,\n                             \"linkedin\": null,\n                         \"UserMemberid\": 1,\n                            \"createdAt\": \"2020-05-16T07:52:31.620Z\",\n                            \"updatedAt\": \"2020-05-16T08:05:58.583Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContactNotFound",
            "description": "<p>contat with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find Contactinfo with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ContactinfoRoutes.js",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/contact/",
    "title": "add contact information",
    "name": "Getcontact",
    "group": "Contact",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facebook",
            "description": "<p>facebook profile link of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "linkedin",
            "description": "<p>linkedin profile link of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                   \"mobile\": 122772332,\n                       \"email\": \"manojkumarssaug6@gmail.com\",\n                    \"facebook\": \"httpsLfaceboook/manojk.com\",\n                    \"linkedin\": \"https:linkedin/manoj.com\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ContactNotFound",
            "description": "<p>contat was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find Contact \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ContactinfoRoutes.js",
    "groupTitle": "Contact"
  },
  {
    "type": "put",
    "url": "/contact/:id",
    "title": "Update specific Contact information",
    "name": "UpdateContact_information",
    "group": "Contact",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Contact unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facebook",
            "description": "<p>facebook profile link of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "linkedin",
            "description": "<p>linkedin profile link of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n    \"status\": \"success\",\n    \"message\": \"Contactinfo updated\",\n    \"data\": {\n        \"mobile\": 122772332,\n        \"email\": \"manojkumarssaug6@gmail.com\",\n        \"facebook\": \"https:faceboook.com/manoj\",\n        \"linkedin\": \"https:linkedin.com/manoj\"\n    }\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "contactNotFound",
            "description": "<p>The id of the contact was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find Contact with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ContactinfoRoutes.js",
    "groupTitle": "Contact"
  },
  {
    "type": "delete",
    "url": "/introduction/:id",
    "title": "Delete introduction information",
    "name": "Deleteintroduction",
    "group": "Introduction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>introduction unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                  \"status\": \"success\",\n                    \"message\": \"introduction Deleted!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "introduction",
            "description": "<p>cannot updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot Delete introduction \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/introductionRoutes.js",
    "groupTitle": "Introduction"
  },
  {
    "type": "get",
    "url": "/introduction/",
    "title": "Request get all introduction of users",
    "name": "GetAllintroductions",
    "group": "Introduction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": \"success\",\n        \"message\": \"introductions retrieved\",\n           \"data\": [\n                          {\n                                \"id\": 1,\n                          \"memberid\": 1,\n                       \"description\": \"looking a simple and peaceful career ...being simple\",\n                         \"createdAt\": \"2020-05-14T18:41:49.861Z\",\n                         \"updatedAt\": \"2020-05-14T18:41:49.861Z\"\n                          }\n                   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "introductionsNotfound",
            "description": "<p>The id of the introductions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"introductionsNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/introductionRoutes.js",
    "groupTitle": "Introduction"
  },
  {
    "type": "get",
    "url": "/introduction/:id",
    "title": "Request specific introduction information",
    "name": "Get_Specific_introduction",
    "group": "Introduction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>introduction unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n               \"status\": \"success\",\n                 \"message\": \"Found introduction\",\n                    \"data\": {\n                                   \"id\": 1,\n                             \"memberid\": 1,\n                          \"description\": \"looking a simple and peaceful career ...being simple\",\n                            \"createdAt\": \"2020-05-14T18:41:49.861Z\",\n                            \"updatedAt\": \"2020-05-14T18:41:49.861Z\"\n                             }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "introductionNotFound",
            "description": "<p>contat with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find introduction with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/introductionRoutes.js",
    "groupTitle": "Introduction"
  },
  {
    "type": "post",
    "url": "/introduction/",
    "title": "add introduction information",
    "name": "Getintroduction",
    "group": "Introduction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                  \"status\": \"success\",\n                    \"message\": \"introduction Added!\",\n                       \"data\": {\n                                      \"id\": 2,\n                                \"memberid\": 2,\n                             \"description\": \"looking a simple and peaceful career ...being simple\",\n                               \"updatedAt\": \"2020-05-16T09:30:38.410Z\",\n                               \"createdAt\": \"2020-05-16T09:30:38.410Z\"\n                                }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "introduction",
            "description": "<p>cannot post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post introduction \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/introductionRoutes.js",
    "groupTitle": "Introduction"
  },
  {
    "type": "put",
    "url": "/introduction/:id",
    "title": "Update introduction information",
    "name": "Updateintroduction",
    "group": "Introduction",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>introduction unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                  \"status\": \"success\",\n                    \"message\": \"introduction updated!\",\n                       \"data\": {\n                                      \"id\": 2,\n                                \"memberid\": 2,\n                             \"description\": \"looking a simple and peaceful career ...being simple\",\n                               \"updatedAt\": \"2020-05-16T09:30:38.410Z\",\n                               \"createdAt\": \"2020-05-16T09:30:38.410Z\"\n                                }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "introduction",
            "description": "<p>cannot updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot updated introduction \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/introductionRoutes.js",
    "groupTitle": "Introduction"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "add User information",
    "name": "AddUser_information",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "aadharno",
            "description": "<p>aadharno of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "dob",
            "description": "<p>dob of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "onbehalf",
            "description": "<p>onbehalf of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>premium of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "contactobj",
            "description": "<p>contactobj of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"aadharno\":\"12323242424\",\n     \"firstname\": \"gokmathiakka\",\n        \"lastname\": \"ambika\",\n        \"gender\": \"female\",\n        \"dob\": \"2012-04-23T18:25:43.511Z\",\n        \"onbehalf\": \"self\",\n        \"password\": \"goms@11\",\n        \"premium\": true,\n        \"imgurl\":\"https://testingbook-demo.herokuapp.com/Anandh.jpg\",\n        \"contactobj\": {\n            \"mobile\": 122772332,\n            \"email\": \"kodi@gmail.com\",\n            \"facebook\": null,\n            \"linkedin\": null,\n            \"UserMemberid\": 1,\n            \"createdAt\": \"2020-05-14T17:02:49.008Z\",\n            \"updatedAt\": \"2020-05-14T17:02:49.008Z\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/UserRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete specific User information",
    "name": "DeleteUser_information",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       \"status\": \"success\",\n      \"message\": \"User deleted\"\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find User with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/UserRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Request get all User information",
    "name": "GetAllUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"firstname\": \"Manojkumar\",\n        \"lastname\": \"manikkam\",\n        \"gender\": \"male\",\n        \"dob\": \"2012-04-23T18:25:43.511Z\",\n        \"onbehalf\": \"self\",\n        \"password\": \"manojkumar@11\",\n        \"premium\": true,\n        \"Contactinfo\": {\n            \"mobile\": 122772332,\n            \"email\": \"manojkumar11tpr@gmail.com\",\n            \"facebook\": null,\n            \"linkedin\": null,\n            \"UserMemberid\": 1,\n            \"createdAt\": \"2020-05-16T07:52:31.620Z\",\n            \"updatedAt\": \"2020-05-16T07:52:31.620Z\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/UserRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Request specific User information",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"firstname\": \"gokmathiakka\",\n        \"lastname\": \"ambika\",\n        \"gender\": \"female\",\n        \"dob\": \"2012-04-23T18:25:43.511Z\",\n        \"onbehalf\": \"self\",\n        \"password\": \"goms@11\",\n        \"premium\": true,\n        \"Contactinfo\": {\n            \"mobile\": 122772332,\n            \"email\": \"kodi@gmail.com\",\n            \"facebook\": null,\n            \"linkedin\": null,\n            \"UserMemberid\": 1,\n            \"createdAt\": \"2020-05-14T17:02:49.008Z\",\n            \"updatedAt\": \"2020-05-14T17:02:49.008Z\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find User with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/UserRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update specific User information",
    "name": "UpdateUser_information",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "dob",
            "description": "<p>dob of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "onbehalf",
            "description": "<p>onbehalf of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>premium of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Contactinfo",
            "description": "<p>Contactinfo of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n    \"status\": \"success\",\n    \"message\": \"User updated\",\n    \"data\": {\n        \"aadharno\": \"12345436464\",\n        \"firstname\": \"MAnojkumar\",\n        \"lastname\": \"manikkam\",\n        \"gender\": \"male\",\n        \"dob\": \"2012-04-23T18:25:43.511Z\",\n        \"onbehalf\": \"self\",\n        \"password\": \"manojkumar@11\",\n        \"premium\": true,\n        \"contactobj\": {\n            \"mobile\": 122772332,\n            \"email\": \"manojkumarssaug6@gmail.com\"\n        }\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find User with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/UserRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/sigin",
    "title": "signin User",
    "name": "login_user",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "aadharno",
            "description": "<p>aadharnumber of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"Found User\",\n    \"data\": {\n        \"auth\": true,\n        \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE5MDQxMjYsImV4cCI6MTU5MTk5MDUyNn0.TkmFPGLvI_ykRsZuSxiGBcemDdRiNhyJqlWfn4gexLY\",\n        \"data\": {\n            \"aadharno\": \"1223223\",\n            \"firstname\": \"Manojkumar\",\n            \"lastname\": \"manikkam\",\n            \"gender\": \"male\",\n            \"dob\": \"2012-04-23T18:25:43.511Z\",\n            \"memberid\": 1,\n            \"onbehalf\": \"self\",\n            \"password\": \"manojkumar@11\",\n            \"premium\": true,\n            \"imgurl\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTojYs59LJ19HQR9HEf6vds1to-FQW1kItsFJp-7Rnv-_13rLZ4&usqp=CAU\",\n            \"createdAt\": \"2020-06-11T19:34:40.136Z\",\n            \"updatedAt\": \"2020-06-11T19:34:40.136Z\",\n            \"Contactinfo\": {\n                \"mobile\": \"122772332\",\n                \"email\": \"manojkumar18tpr@gmail.com\",\n                \"facebook\": null,\n                \"linkedin\": null,\n                \"UserMemberid\": 1,\n                \"createdAt\": \"2020-06-11T19:34:40.164Z\",\n                \"updatedAt\": \"2020-06-11T19:34:40.164Z\"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The aadharno of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/UserRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/community/:id",
    "title": "Delete specific community information",
    "name": "Deletecommunity_information",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>community unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"community deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "communityNotFound",
            "description": "<p>The id of the community was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find community with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/communityRoutes.js",
    "groupTitle": "community"
  },
  {
    "type": "get",
    "url": "/community/",
    "title": "Request get all community information",
    "name": "GetAllcommunity",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"communitys retrieved\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"religion\": \"Hindu\",\n            \"community\": \"goundar\",\n            \"caste\": \"Kongu Vellala Goundar\",\n            \"subcaste\": \" Aanthuvan - அந்துவன்\",\n            \"kuladeivam\": \"keernaar\",\n            \"place\": \"chennai\",\n            \"familystatus\": \"Low Class\\t\\n\",\n            \"familyvalue\": \"Moderate\",\n            \"memberid\": 1,\n            \"createdAt\": \"2020-06-11T17:48:45.846Z\",\n            \"updatedAt\": \"2020-06-11T17:48:45.846Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "communityNotfound",
            "description": "<p>community was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"communityNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/communityRoutes.js",
    "groupTitle": "community"
  },
  {
    "type": "get",
    "url": "/community/:id",
    "title": "Request specific community information",
    "name": "Get_Specific_community",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>community unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"Found community\",\n    \"data\": {\n        \"id\": 1,\n        \"religion\": \"Hindu\",\n        \"community\": \"goundar\",\n        \"caste\": \"Kongu Vellala Goundar\",\n        \"subcaste\": \" Aanthuvan - அந்துவன்\",\n        \"kuladeivam\": \"keernaar\",\n        \"place\": \"chennai\",\n        \"familystatus\": \"Low Class\\t\\n\",\n        \"familyvalue\": \"Moderate\",\n        \"memberid\": 1,\n        \"createdAt\": \"2020-06-11T17:48:45.846Z\",\n        \"updatedAt\": \"2020-06-11T17:48:45.846Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "communityNotFound",
            "description": "<p>community with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find community with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/communityRoutes.js",
    "groupTitle": "community"
  },
  {
    "type": "post",
    "url": "/community/",
    "title": "add community information",
    "name": "Getcommunity",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "religion",
            "description": "<p>religion of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "community",
            "description": "<p>community of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caste",
            "description": "<p>caste  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subcaste",
            "description": "<p>subcaste  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "kuladeivam",
            "description": "<p>kuladeivam  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>place  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familystatus",
            "description": "<p>familystatus  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familyvalue",
            "description": "<p>familyvalue  of the community.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"community Added!\",\n\"data\": {\n    \"id\": 1,\n    \"religion\": \"Hindu\",\n    \"community\": \"goundar\",\n    \"caste\": \"Kongu Vellala Goundar\",\n    \"subcaste\": \" Aanthuvan - அந்துவன்\",\n    \"kuladeivam\": \"keernaar\",\n    \"place\": \"chennai\",\n    \"familystatus\": \"Low Class\\t\\n\",\n    \"familyvalue\": \"Moderate\",\n    \"memberid\": 1,\n    \"updatedAt\": \"2020-06-11T17:48:45.846Z\",\n    \"createdAt\": \"2020-06-11T17:48:45.846Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "communityNotFound",
            "description": "<p>community was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post community \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/communityRoutes.js",
    "groupTitle": "community"
  },
  {
    "type": "put",
    "url": "/community/:id",
    "title": "Update specific community information",
    "name": "Updatecommunity_information",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>community unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "religion",
            "description": "<p>religion of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "community",
            "description": "<p>community of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caste",
            "description": "<p>caste  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subcaste",
            "description": "<p>subcaste  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "kuladeivam",
            "description": "<p>kuladeivam  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>place  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familystatus",
            "description": "<p>familystatus  of the community.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familyvalue",
            "description": "<p>familyvalue  of the community.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"community updated\",\n    \"data\": {\n        \"religion\": \"Hindu\",\n        \"community\": \"goundar\",\n        \"caste\": \"Kongu Vellala Goundar\",\n        \"subcaste\": \" Aanthuvan - அந்துவன்\",\n        \"kuladeivam\": \"keernaar\",\n        \"place\": \"chennai\",\n        \"familystatus\": \"Low class\",\n        \"familyvalue\": \"Moderate\",\n        \"memberid\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "communityNotFound",
            "description": "<p>The id of the community was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find community with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/communityRoutes.js",
    "groupTitle": "community"
  },
  {
    "type": "delete",
    "url": "/education/:id",
    "title": "Delete specific education information",
    "name": "Deleteeducation_information",
    "group": "education",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>education unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"education deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "educationNotFound",
            "description": "<p>The id of the education was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find education with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/educationRoutes.js",
    "groupTitle": "education"
  },
  {
    "type": "get",
    "url": "/education/",
    "title": "Request get all education information",
    "name": "GetAlleducation",
    "group": "education",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": \"success\",\n        \"message\": \"educations retrieved\",\n           \"data\": [\n                         {\n                                  \"id\": 1,\n                       \"primaryschool\": \"govt high school morattupalayam\",\n                          \"primaryyop\": 2012,\n                          \"highschool\": \"govt boys higher secondary school uthukkuli\",\n                             \"highyop\": 2014,\n                  \"firstdegreecollege\": \"MPNMJEnginerring college\",\n                      \"firstdegreeyop\": 2018,\n                   \"lastdegreecollege\": \"Nandha college\",\n                       \"lastdegreeyop\": 2020,\n                            \"memberid\": 1,\n                           \"createdAt\": \"2020-05-14T18:11:41.380Z\",\n                           \"updatedAt\": \"2020-05-14T18:11:41.380Z\"\n                        }\n                   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "educationNotfound",
            "description": "<p>education was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"educationNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/educationRoutes.js",
    "groupTitle": "education"
  },
  {
    "type": "get",
    "url": "/education/:id",
    "title": "Request specific education information",
    "name": "Get_Specific_education",
    "group": "education",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>education unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\nstatus\": \"success\", \n \"message\": \"Found education\",\n    \"data\": {\n        \"id\": 1,\n        \"primaryschool\": \"govt high school morattupalayam\",\n        \"primaryyop\": 2012,\n        \"highschool\": \"govt boys higher secondary school uthukkuli\",\n        \"highyop\": 2014,\n        \"firstdegreecollege\": \"MPNMJEnginerring college\",\n        \"firstdegreeyop\": 2018,\n        \"lastdegreecollege\": \"Nandha college\",\n        \"lastdegreeyop\": 2020,\n        \"memberid\": 1,\n        \"createdAt\": \"2020-05-14T18:11:41.380Z\",\n        \"updatedAt\": \"2020-05-14T18:11:41.380Z\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "educationNotFound",
            "description": "<p>education with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find education with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/educationRoutes.js",
    "groupTitle": "education"
  },
  {
    "type": "post",
    "url": "/education/",
    "title": "add education information",
    "name": "Geteducation",
    "group": "education",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "primaryschool",
            "description": "<p>primaryschool of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "primaryyop",
            "description": "<p>primarschool year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "highschool",
            "description": "<p>highschool of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "highyop",
            "description": "<p>highschool year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstdegreecollege",
            "description": "<p>firstdegree college of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "firstdegreeyop",
            "description": "<p>firstdegree year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastdegreecollege",
            "description": "<p>lastdegree college of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "lastdegreeyop",
            "description": "<p>lastdegreeyop year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n                   \"status\": \"success\",\n                     \"message\": \"education Added!\",\n                        \"data\": {\n                                       \"id\": 2,\n                            \"primaryschool\": \"govt high school morattupalayam\",\n                               \"primaryyop\": 2012,\n                               \"highschool\": \"govt boys higher secondary school uthukkuli\",\n                                  \"highyop\": 2014,\n                       \"firstdegreecollege\": \"MPNMJEnginerring college\",\n                           \"firstdegreeyop\": 2018,\n                        \"lastdegreecollege\": \"Nandha college\",\n                            \"lastdegreeyop\": 2020,\n                                 \"memberid\": 2,\n                                \"updatedAt\": \"2020-05-16T10:12:53.174Z\",\n                                \"createdAt\": \"2020-05-16T10:12:53.174Z\"\n                                }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "educationNotFound",
            "description": "<p>education was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post education \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/educationRoutes.js",
    "groupTitle": "education"
  },
  {
    "type": "put",
    "url": "/education/:id",
    "title": "Update specific education information",
    "name": "Updateeducation_information",
    "group": "education",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>education unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "primaryschool",
            "description": "<p>primaryschool of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "primaryyop",
            "description": "<p>primarschool year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "highschool",
            "description": "<p>highschool of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "highyop",
            "description": "<p>highschool year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstdegreecollege",
            "description": "<p>firstdegree college of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "firstdegreeyop",
            "description": "<p>firstdegree year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastdegreecollege",
            "description": "<p>lastdegree college of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "lastdegreeyop",
            "description": "<p>lastdegreeyop year of passing of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n     \"status\": \"success\",\n    \"message\": \"education updated\",\n       \"data\": {\n                        \"id\": 1,\n             \"primaryschool\": \"govt high school morattupalayam\",\n                \"primaryyop\": 2012,\n                \"highschool\": \"govt boys higher secondary school uthukkuli\",\n                   \"highyop\": 2014,\n        \"firstdegreecollege\": \"MPNMJEnginerring college\",\n            \"firstdegreeyop\": 2018,\n         \"lastdegreecollege\": \"Nandha college\",\n             \"lastdegreeyop\": 2020,\n                  \"memberid\": 1,\n                 \"createdAt\": \"2020-05-14T18:11:41.380Z\",\n                 \"updatedAt\": \"2020-05-14T18:11:41.380Z\"\n    }\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "educationNotFound",
            "description": "<p>The id of the education was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find education with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/educationRoutes.js",
    "groupTitle": "education"
  },
  {
    "type": "delete",
    "url": "/familyinfo/:id",
    "title": "Delete specific familyinfo information",
    "name": "Deletefamilyinfo_information",
    "group": "familyinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>familyinfo unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"familyinfo deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "familyinfoNotFound",
            "description": "<p>The id of the familyinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find familyinfo with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/familyinfoRoutes.js",
    "groupTitle": "familyinfo"
  },
  {
    "type": "get",
    "url": "/familyinfo/",
    "title": "Request get all familyinfo information",
    "name": "GetAllfamilyinfo",
    "group": "familyinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"familyinfos retrieved\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"fathersdetail\": \"KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n\",\n            \"mothersdetail\": \"Mother LAKSMI Dies one year ago , she was house wife .\\n\",\n            \"sistersdetail\": \"Vennila -working\",\n            \"brothersdetail\": \"nil\",\n            \"otherrelationdetails\": \"Muthusamy - advocate\\n\",\n            \"memberid\": 1,\n            \"createdAt\": \"2020-06-11T18:35:33.993Z\",\n            \"updatedAt\": \"2020-06-11T18:35:33.993Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "familyinfoNotfound",
            "description": "<p>familyinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"familyinfoNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/familyinfoRoutes.js",
    "groupTitle": "familyinfo"
  },
  {
    "type": "get",
    "url": "/familyinfo/:id",
    "title": "Request specific familyinfo information",
    "name": "Get_Specific_familyinfo",
    "group": "familyinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>familyinfo unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"Found familyinfo\",\n    \"data\": {\n        \"id\": 1,\n        \"fathersdetail\": \"KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n\",\n        \"mothersdetail\": \"Mother LAKSMI Dies one year ago , she was house wife .\\n\",\n        \"sistersdetail\": \"Vennila -working\",\n        \"brothersdetail\": \"nil\",\n        \"otherrelationdetails\": \"Muthusamy - advocate\\n\",\n        \"memberid\": 1,\n        \"createdAt\": \"2020-06-11T18:35:33.993Z\",\n        \"updatedAt\": \"2020-06-11T18:35:33.993Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "familyinfoNotFound",
            "description": "<p>familyinfo with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find familyinfo with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/familyinfoRoutes.js",
    "groupTitle": "familyinfo"
  },
  {
    "type": "post",
    "url": "/familyinfo/",
    "title": "add familyinfo information",
    "name": "Getfamilyinfo",
    "group": "familyinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fathersdetail",
            "description": "<p>fathersdetail of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mothersdetail",
            "description": "<p>mothersdetail of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sistersdetail",
            "description": "<p>sistersdetail  of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brothersdetail",
            "description": "<p>brothersdetail  of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otherrelationdetails",
            "description": "<p>otherrelationdetails  of the familyinfo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"familyinfo Added!\",\n    \"data\": {\n        \"id\": 1,\n        \"fathersdetail\": \"KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n\",\n        \"mothersdetail\": \"Mother LAKSMI Dies one year ago , she was house wife .\\n\",\n        \"sistersdetail\": \"Vennila -working\",\n        \"brothersdetail\": \"nil\",\n        \"otherrelationdetails\": \"Muthusamy - advocate\\n\",\n        \"memberid\": 1,\n        \"updatedAt\": \"2020-06-11T18:35:33.993Z\",\n        \"createdAt\": \"2020-06-11T18:35:33.993Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "familyinfoNotFound",
            "description": "<p>familyinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post familyinfo \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/familyinfoRoutes.js",
    "groupTitle": "familyinfo"
  },
  {
    "type": "put",
    "url": "/familyinfo/:id",
    "title": "Update specific familyinfo information",
    "name": "Updatefamilyinfo_information",
    "group": "familyinfo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>familyinfo unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fathersdetail",
            "description": "<p>fathersdetail of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mothersdetail",
            "description": "<p>mothersdetail of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sistersdetail",
            "description": "<p>sistersdetail  of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brothersdetail",
            "description": "<p>brothersdetail  of the familyinfo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otherrelationdetails",
            "description": "<p>otherrelationdetails  of the familyinfo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"familyinfo updated\",\n    \"data\": {\n        \"fathersdetail\": \"KS CHINNASAMY He Died 2 yrs ago , he was former and business ma n\",\n        \"mothersdetail\": \"Mother LAKSMI Dies one year ago , she was house wife .\\n\",\n        \"sistersdetail\": \"Vennila -working.\",\n        \"brothersdetail\": \"nil\",\n        \"otherrelationdetails\": \"Muthusamy - advocate\\n\",\n        \"memberid\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "familyinfoNotFound",
            "description": "<p>The id of the familyinfo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find familyinfo with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/familyinfoRoutes.js",
    "groupTitle": "familyinfo"
  },
  {
    "type": "delete",
    "url": "/followed/:id",
    "title": "Delete specific followedusers information",
    "name": "Deletefollowedusers_information",
    "group": "followedusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>followedusers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"followed deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "followedusersNotFound",
            "description": "<p>The id of the followedusers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find followedusers with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/followedRoutes.js",
    "groupTitle": "followedusers"
  },
  {
    "type": "get",
    "url": "/followed/",
    "title": "Request get all followed user information",
    "name": "GetAllfollowedusers",
    "group": "followedusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"followeds retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"memberid\": 2,\n          \"followedmemberid\": [\n              1,\n              2\n          ],\n          \"createdAt\": \"2020-05-16T15:24:31.807Z\",\n          \"updatedAt\": \"2020-05-16T15:24:31.807Z\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "followedsNotfound",
            "description": "<p>followed was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"followedsNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/followedRoutes.js",
    "groupTitle": "followedusers"
  },
  {
    "type": "get",
    "url": "/followed/:id",
    "title": "Request specific followedusers information",
    "name": "Get_Specific_user_followedusers",
    "group": "followedusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>followedusers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found followed\",\n \"data\": {\n     \"id\": 2,\n     \"memberid\": 1,\n     \"followedmemberid\": [\n         1,\n         2,\n         3\n     ],\n     \"createdAt\": \"2020-05-16T15:29:32.537Z\",\n     \"updatedAt\": \"2020-05-16T15:29:32.537Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "followedusersNotFound",
            "description": "<p>followedusers with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find followedusers with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/followedRoutes.js",
    "groupTitle": "followedusers"
  },
  {
    "type": "put",
    "url": "/followed/:id",
    "title": "Update specific followedusers information",
    "name": "Updatefollowedusers_information",
    "group": "followedusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>followedusers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "followedmemberid",
            "description": "<p>followedmemberids of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   {\n\"status\": \"success\",\n\"message\": \"followed updated\",\n\"data\": {\n    \"memberid\": 2,\n    \"followedmemberid\": [\n        1,\n        2,\n        3,\n        4\n    ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "followedusersNotFound",
            "description": "<p>The id of the followedusers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find followedusers with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/followedRoutes.js",
    "groupTitle": "followedusers"
  },
  {
    "type": "post",
    "url": "/followed/",
    "title": "add followedusers information",
    "name": "addfollowedusers",
    "group": "followedusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "followedmemberid",
            "description": "<p>followedmemberids of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"followed Added!\",\n  \"data\": {\n      \"id\": 2,\n      \"memberid\": 1,\n      \"followedmemberid\": [\n          1,\n          2,\n          3\n      ],\n      \"updatedAt\": \"2020-05-16T15:29:32.537Z\",\n      \"createdAt\": \"2020-05-16T15:29:32.537Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "followedNotFound",
            "description": "<p>followed was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post followed \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/followedRoutes.js",
    "groupTitle": "followedusers"
  },
  {
    "type": "delete",
    "url": "/ignored/:id",
    "title": "Delete specific ignored users information",
    "name": "Delete_ignored_users_list_of_a_user",
    "group": "ignoredusers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ignoredusers unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"ignored deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ignoredusersNotFound",
            "description": "<p>The id of the ignoredusers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find ignoredusers with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ignoredRoutes.js",
    "groupTitle": "ignoredusers"
  },
  {
    "type": "get",
    "url": "/ignored/",
    "title": "Request get all ignored user information",
    "name": "GetAll_ignored_users",
    "group": "ignoredusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"ignoreds retrieved\",\n \"data\": [\n     {\n         \"id\": 1,\n         \"memberid\": 2,\n         \"ignoredmemberid\": [\n             1,\n             2,\n             3,\n             4\n         ],\n         \"createdAt\": \"2020-05-16T15:39:43.963Z\",\n         \"updatedAt\": \"2020-05-16T15:39:43.963Z\"\n     }\n ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ignoredNotfound",
            "description": "<p>ignored was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ignoredNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ignoredRoutes.js",
    "groupTitle": "ignoredusers"
  },
  {
    "type": "get",
    "url": "/ignored/:id",
    "title": "Request specific ignored users information",
    "name": "Get_Specific_ignored_userlist_of_a_user",
    "group": "ignoredusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ignoredusers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found ignored\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 2,\n     \"ignoredmemberid\": [\n         1,\n         2,\n         3,\n         4\n     ],\n     \"createdAt\": \"2020-05-16T15:39:43.963Z\",\n     \"updatedAt\": \"2020-05-16T15:39:43.963Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ignoredusersNotFound",
            "description": "<p>ignoredusers with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find ignoredusers with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ignoredRoutes.js",
    "groupTitle": "ignoredusers"
  },
  {
    "type": "put",
    "url": "/ignored/:id",
    "title": "Update specific ignored  users information",
    "name": "Update_ignored_users_information",
    "group": "ignoredusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ignoredusers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "ignoredmemberid",
            "description": "<p>ignoredmemberids of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"ignored updated\",\n \"data\": {\n     \"memberid\": 2,\n     \"ignoredmemberid\": [\n         1,\n         2,\n         3\n     ]\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ignoredusersNotFound",
            "description": "<p>The id of the ignoredusers was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find ignoredusers with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ignoredRoutes.js",
    "groupTitle": "ignoredusers"
  },
  {
    "type": "post",
    "url": "/ignored/",
    "title": "add ignored users information",
    "name": "addignored_users",
    "group": "ignoredusers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "ignoredmemberid",
            "description": "<p>ignoredmemberids of the Users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"ignored Added!\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 2,\n     \"ignoredmemberid\": [\n         1,\n         2,\n         3,\n         4\n     ],\n     \"updatedAt\": \"2020-05-16T15:39:43.963Z\",\n     \"createdAt\": \"2020-05-16T15:39:43.963Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ignoredNotfound",
            "description": "<p>ignored was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ignoredNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/ignoredRoutes.js",
    "groupTitle": "ignoredusers"
  },
  {
    "type": "delete",
    "url": "/knowndetail/:id",
    "title": "Delete specific knowndetail information",
    "name": "Deleteknowndetail_information",
    "group": "knowndetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>knowndetail unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"knowndetail deleted\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "knowndetailNotFound",
            "description": "<p>The id of the knowndetail was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find knowndetail with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/knowndetailRoutes.js",
    "groupTitle": "knowndetail"
  },
  {
    "type": "get",
    "url": "/knowndetail/",
    "title": "Request get all knowndetail information",
    "name": "GetAllknowndetail",
    "group": "knowndetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"knowndetails retrieved\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"relative\": \"kumaran- working builder\",\n            \"friend\": \"anbu - working IT engineer\",\n            \"memberid\": 1,\n            \"createdAt\": \"2020-06-11T18:46:42.197Z\",\n            \"updatedAt\": \"2020-06-11T18:46:42.197Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "knowndetailNotfound",
            "description": "<p>knowndetail was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"knowndetailNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/knowndetailRoutes.js",
    "groupTitle": "knowndetail"
  },
  {
    "type": "get",
    "url": "/knowndetail/:id",
    "title": "Request specific knowndetail information",
    "name": "Get_Specific_knowndetail",
    "group": "knowndetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>knowndetail unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"Found knowndetail\",\n    \"data\": {\n        \"id\": 1,\n        \"relative\": \"kumaran- working builder\",\n        \"friend\": \"anbu - working IT engineer\",\n        \"memberid\": 1,\n        \"createdAt\": \"2020-06-11T18:46:42.197Z\",\n        \"updatedAt\": \"2020-06-11T18:46:42.197Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "knowndetailNotFound",
            "description": "<p>knowndetail with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find knowndetail with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/knowndetailRoutes.js",
    "groupTitle": "knowndetail"
  },
  {
    "type": "post",
    "url": "/knowndetail/",
    "title": "add knowndetail information",
    "name": "Getknowndetail",
    "group": "knowndetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the knowndetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relative",
            "description": "<p>relative of the knowndetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friend",
            "description": "<p>friend of the knowndetail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"knowndetail Added!\",\n    \"data\": {\n        \"id\": 1,\n        \"relative\": \"kumaran- working builder\",\n        \"friend\": \"anbu - working IT engineer\",\n        \"memberid\": 1,\n        \"updatedAt\": \"2020-06-11T18:46:42.197Z\",\n        \"createdAt\": \"2020-06-11T18:46:42.197Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "knowndetailNotFound",
            "description": "<p>knowndetail was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post knowndetail \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/knowndetailRoutes.js",
    "groupTitle": "knowndetail"
  },
  {
    "type": "put",
    "url": "/knowndetail/:id",
    "title": "Update specific knowndetail information",
    "name": "Updateknowndetail_information",
    "group": "knowndetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>knowndetail unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the knowndetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relative",
            "description": "<p>relative of the knowndetail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friend",
            "description": "<p>friend of the knowndetail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"knowndetail updated\",\n    \"data\": {\n        \"relative\": \"kumaran- working builder\",\n        \"friend\": \"Anbu - working IT engineer\",\n        \"memberid\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "knowndetailNotFound",
            "description": "<p>The id of the knowndetail was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find knowndetail with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/knowndetailRoutes.js",
    "groupTitle": "knowndetail"
  },
  {
    "type": "delete",
    "url": "/myinterest/:id",
    "title": "Delete specific myinterest users information",
    "name": "Delete_myinterest_users_list_of_a_user",
    "group": "myinterest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>myinterest unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"myinterest deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "myinterestNotFound",
            "description": "<p>The id of the myinterest was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find myinterest with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/myinterestRoutes.js",
    "groupTitle": "myinterest"
  },
  {
    "type": "get",
    "url": "/myinterest/",
    "title": "Request get all myinterest user information",
    "name": "GetAll_myinterest_users",
    "group": "myinterest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"myinterests retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"memberid\": 1,\n          \"intrestedmemberid\": [\n              1,\n              2,\n              3\n          ],\n          \"createdAt\": \"2020-05-16T15:55:04.725Z\",\n          \"updatedAt\": \"2020-05-16T15:55:04.725Z\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "myinterestNotfound",
            "description": "<p>myinterest was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"myinterestNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/myinterestRoutes.js",
    "groupTitle": "myinterest"
  },
  {
    "type": "get",
    "url": "/myinterest/:id",
    "title": "Request specific myinterest users information",
    "name": "Get_Specific_myinterest_userlist",
    "group": "myinterest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>myinterest unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found myinterest\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 2,\n     \"ignoredmemberid\": [\n         1,\n         2,\n         3,\n         4\n     ],\n     \"createdAt\": \"2020-05-16T15:39:43.963Z\",\n     \"updatedAt\": \"2020-05-16T15:39:43.963Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "myinterestNotFound",
            "description": "<p>myinterest with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find myinterest with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/myinterestRoutes.js",
    "groupTitle": "myinterest"
  },
  {
    "type": "put",
    "url": "/myinterest/:id",
    "title": "Update specific myinterest  users information",
    "name": "Update_myinterest_users_information",
    "group": "myinterest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>myinterest unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "intrestedmemberid",
            "description": "<p>intrestedmemberids of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"myinterest updated\",\n \"data\": {\n     \"memberid\": 2,\n     \"intrestedmemberid\": [\n         1,\n         2,\n         3\n     ]\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "myinterestsNotFound",
            "description": "<p>The id of the myinterest was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find myinterest with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/myinterestRoutes.js",
    "groupTitle": "myinterest"
  },
  {
    "type": "post",
    "url": "/myinterest/",
    "title": "add myinterest users information",
    "name": "add_myinterest_users",
    "group": "myinterest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "intrestedmemberid",
            "description": "<p>intrestedmemberids of the Users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"myinterest Added!\",\n \"data\": {\n     \"id\": 2,\n     \"memberid\": 2,\n     \"intrestedmemberid\": [\n         1,\n         2,\n         3,\n         4\n     ],\n     \"updatedAt\": \"2020-05-16T15:58:50.526Z\",\n     \"createdAt\": \"2020-05-16T15:58:50.526Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "myinterestfound",
            "description": "<p>myinterest was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"myinterestNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/myinterestRoutes.js",
    "groupTitle": "myinterest"
  },
  {
    "type": "delete",
    "url": "/partnerexpectation/:id",
    "title": "Delete specific partnerexpectation information of user",
    "name": "Delete_partnerexpectation_information",
    "group": "partnerexpectation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>partnerexpectation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"partnerexpectation deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "partnerexpectationNotFound",
            "description": "<p>The id of the partnerexpectation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find partnerexpectation with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/partnerexpectationRoutes.js",
    "groupTitle": "partnerexpectation"
  },
  {
    "type": "get",
    "url": "/partnerexpectation/",
    "title": "Request get all partnerexpectation information of the user",
    "name": "GetAll_partnerexpectation_info",
    "group": "partnerexpectation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"partnerexpectations retrieved\",\n \"data\": [\n     {\n         \"expectedmatchingstars\": [\n             {\n                 \"star\": \"maham\"\n             },\n             {\n                 \"star\": \"pooram\"\n             },\n             {\n                 \"star\": \"uthiraadam\"\n             }\n         ],\n         \"expectedhoroscopematch\": [\n             {\n                 \"star\": \"maham\"\n             },\n             {\n                 \"star\": \"pooram\"\n             },\n             {\n                 \"star\": \"uthiraadam\"\n             }\n         ],\n         \"id\": 1,\n         \"memberid\": 1,\n         \"generalrequirement\": \"simple and well educated homely\",\n         \"age\": 25,\n         \"height\": \"6.5\",\n         \"weight\": \"75kgs\",\n         \"bodytype\": \"tall\",\n         \"healthstatus\": \"good\",\n         \"complexion\": \"no\",\n         \"familystatus\": \"good\",\n         \"religion\": \"Hindu\",\n         \"caste\": \"kavuundar\",\n         \"subcaste\": \"devendira\",\n         \"education\": \"B.E\",\n         \"profession\": \"Software Engineer\",\n         \"prefferedbusiness\": \"IT industrry\",\n         \"work\": \"technical lead\",\n         \"expectedincome\": \"4-5 lakh\",\n         \"prefferedworkingcountry\": \"US,UK\",\n         \"prefferedworkingstate\": \"tamilnadu\",\n         \"prefferednativeplace\": \"tiruppur\",\n         \"prefferedlivingstate\": \"kerala\",\n         \"diet\": \"yes\",\n         \"drinkinghabits\": \"NO\",\n         \"smokinghabits\": \"NO\",\n         \"maritialstatus\": \"single\",\n         \"children\": \"no\",\n         \"createdAt\": \"2020-05-16T16:30:26.902Z\",\n         \"updatedAt\": \"2020-05-16T16:30:26.902Z\"\n     }\n ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "partnerexpectationNotfound",
            "description": "<p>partnerexpectation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"partnerexpectationNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/partnerexpectationRoutes.js",
    "groupTitle": "partnerexpectation"
  },
  {
    "type": "get",
    "url": "/partnerexpectation/:id",
    "title": "Request specific partnerexpectation information of user",
    "name": "Get_Specific_partnerexpectation",
    "group": "partnerexpectation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>partnerexpectation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found partnerexpectation\",\n \"data\": {\n     \"expectedmatchingstars\": [\n         {\n             \"star\": \"maham\"\n         },\n         {\n             \"star\": \"pooram\"\n         },\n         {\n             \"star\": \"uthiraadam\"\n         }\n     ],\n     \"expectedhoroscopematch\": [\n         {\n             \"star\": \"maham\"\n         },\n         {\n             \"star\": \"pooram\"\n         },\n         {\n             \"star\": \"uthiraadam\"\n         }\n     ],\n     \"id\": 1,\n     \"memberid\": 1,\n     \"generalrequirement\": \"simple and well educated homely\",\n     \"age\": 25,\n     \"height\": \"6.5\",\n     \"weight\": \"75kgs\",\n     \"bodytype\": \"tall\",\n     \"healthstatus\": \"good\",\n     \"complexion\": \"no\",\n     \"familystatus\": \"good\",\n     \"religion\": \"Hindu\",\n     \"caste\": \"kavuundar\",\n     \"subcaste\": \"devendira\",\n     \"education\": \"B.E\",\n     \"profession\": \"Software Engineer\",\n     \"prefferedbusiness\": \"IT industrry\",\n     \"work\": \"technical lead\",\n     \"expectedincome\": \"4-5 lakh\",\n     \"prefferedworkingcountry\": \"US,UK\",\n     \"prefferedworkingstate\": \"tamilnadu\",\n     \"prefferednativeplace\": \"tiruppur\",\n     \"prefferedlivingstate\": \"kerala\",\n     \"diet\": \"yes\",\n     \"drinkinghabits\": \"NO\",\n     \"smokinghabits\": \"NO\",\n     \"maritialstatus\": \"single\",\n     \"children\": \"no\",\n     \"createdAt\": \"2020-05-16T16:30:26.902Z\",\n     \"updatedAt\": \"2020-05-16T16:30:26.902Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "partnerexpectationNotFound",
            "description": "<p>partnerexpectation with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find partnerexpectation with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/partnerexpectationRoutes.js",
    "groupTitle": "partnerexpectation"
  },
  {
    "type": "post",
    "url": "/partnerexpectation/",
    "title": "add partnerexpectation information",
    "name": "Getpartnerexpectation_of_user",
    "group": "partnerexpectation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "generalrequirement",
            "description": "<p>generalrequirement of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>height of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bodytype",
            "description": "<p>bodytype  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "healthstatus",
            "description": "<p>healthstatus  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>complexion of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familystatus",
            "description": "<p>familystatus  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "religion",
            "description": "<p>religion  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caste",
            "description": "<p>caste  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subcaste",
            "description": "<p>subcaste  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>education  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>profession  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedbusiness",
            "description": "<p>prefferedbusiness  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>work  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expectedincome",
            "description": "<p>expectedincome  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedworkingcountry",
            "description": "<p>prefferedworkingcountry  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedworkingstate",
            "description": "<p>prefferedworkingstate  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferednativeplace",
            "description": "<p>prefferednativeplace  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedlivingstate",
            "description": "<p>prefferedlivingstate  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "expectedmatchingstars",
            "description": "<p>expectedmatchingstars  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "expectedhoroscopematch",
            "description": "<p>expectedhoroscopematch  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diet",
            "description": "<p>diet  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drinkinghabits",
            "description": "<p>drinkinghabits  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smokinghabits",
            "description": "<p>smokinghabits  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "maritialstatus",
            "description": "<p>maritialstatus  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "children",
            "description": "<p>children  of the user have.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"partnerexpectation Added!\",\n \"data\": {\n     \"expectedmatchingstars\": [\n         {\n             \"star\": \"maham\"\n         },\n         {\n             \"star\": \"pooram\"\n         },\n         {\n             \"star\": \"uthiraadam\"\n         }\n     ],\n     \"expectedhoroscopematch\": [\n         {\n             \"star\": \"maham\"\n         },\n         {\n             \"star\": \"pooram\"\n         },\n         {\n             \"star\": \"uthiraadam\"\n         }\n     ],\n     \"id\": 1,\n     \"memberid\": 1,\n     \"generalrequirement\": \"simple and well educated homely\",\n     \"age\": 25,\n     \"height\": \"6.5\",\n     \"weight\": \"75kgs\",\n     \"bodytype\": \"tall\",\n     \"healthstatus\": \"good\",\n     \"complexion\": \"no\",\n     \"familystatus\": \"good\",\n     \"religion\": \"Hindu\",\n     \"caste\": \"kavuundar\",\n     \"subcaste\": \"devendira\",\n     \"education\": \"B.E\",\n     \"profession\": \"Software Engineer\",\n     \"prefferedbusiness\": \"IT industrry\",\n     \"work\": \"technical lead\",\n     \"expectedincome\": \"4-5 lakh\",\n     \"prefferedworkingcountry\": \"US,UK\",\n     \"prefferedworkingstate\": \"tamilnadu\",\n     \"prefferednativeplace\": \"tiruppur\",\n     \"prefferedlivingstate\": \"kerala\",\n     \"diet\": \"yes\",\n     \"drinkinghabits\": \"NO\",\n     \"smokinghabits\": \"NO\",\n     \"maritialstatus\": \"single\",\n     \"children\": \"no\",\n     \"updatedAt\": \"2020-05-16T16:30:26.902Z\",\n     \"createdAt\": \"2020-05-16T16:30:26.902Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "partnerexpectationNotFound",
            "description": "<p>partnerexpectation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post partnerexpectation \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/partnerexpectationRoutes.js",
    "groupTitle": "partnerexpectation"
  },
  {
    "type": "put",
    "url": "/partnerexpectation/:id",
    "title": "Update specific partnerexpectation information",
    "name": "Update_partnerexpectation_information",
    "group": "partnerexpectation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>partnerexpectation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "generalrequirement",
            "description": "<p>generalrequirement of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>height of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bodytype",
            "description": "<p>bodytype  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "healthstatus",
            "description": "<p>healthstatus  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>complexion of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familystatus",
            "description": "<p>familystatus  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "religion",
            "description": "<p>religion  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caste",
            "description": "<p>caste  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subcaste",
            "description": "<p>subcaste  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "education",
            "description": "<p>education  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>profession  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedbusiness",
            "description": "<p>prefferedbusiness  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>work  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expectedincome",
            "description": "<p>expectedincome  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedworkingcountry",
            "description": "<p>prefferedworkingcountry  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedworkingstate",
            "description": "<p>prefferedworkingstate  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferednativeplace",
            "description": "<p>prefferednativeplace  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prefferedlivingstate",
            "description": "<p>prefferedlivingstate  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "expectedmatchingstars",
            "description": "<p>expectedmatchingstars  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "expectedhoroscopematch",
            "description": "<p>expectedhoroscopematch  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diet",
            "description": "<p>diet  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drinkinghabits",
            "description": "<p>drinkinghabits  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smokinghabits",
            "description": "<p>smokinghabits  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "maritialstatus",
            "description": "<p>maritialstatus  of the user have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "children",
            "description": "<p>children  of the user have.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n     \"status\": \"success\",\n    \"message\": \"partnerexpectation updated\",\n    \"data\": {\n        \"memberid\": 2,\n        \"generalrequirement\": \"simple and well educated homely\",\n        \"age\": 25,\n        \"height\": \"6.5\",\n        \"weight\": \"95kgs\",\n        \"bodytype\": \"tall\",\n        \"healthstatus\": \"good\",\n        \"complexion\": \"no\",\n        \"familystatus\": \"good\",\n        \"religion\": \"Hindu\",\n        \"caste\": \"kavuundar\",\n        \"subcaste\": \"devendira\",\n        \"education\": \"B.E\",\n        \"profession\": \"Software Engineer\",\n        \"prefferedbusiness\": \"IT industrry\",\n        \"work\": \"technical lead\",\n        \"expectedincome\": \"4-5 lakh\",\n        \"prefferedworkingcountry\": \"US,UK\",\n        \"prefferedworkingstate\": \"tamilnadu\",\n        \"prefferednativeplace\": \"tiruppur\",\n        \"prefferedlivingstate\": \"kerala\",\n        \"expectedmatchingstars\": [\n            {\n                \"star\": \"maham\"\n            },\n            {\n                \"star\": \"pooram\"\n            },\n            {\n                \"star\": \"uthiraadam\"\n            }\n        ],\n        \"expectedhoroscopematch\": [\n            {\n                \"star\": \"maham\"\n            },\n            {\n                \"star\": \"pooram\"\n            },\n            {\n                \"star\": \"uthiraadam\"\n            }\n        ],\n        \"diet\": \"yes\",\n        \"drinkinghabits\": \"NO\",\n        \"smokinghabits\": \"NO\",\n        \"maritialstatus\": \"single\",\n        \"children\": \"no\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "partnerexpectationNotFound",
            "description": "<p>The id of the partnerexpectation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find partnerexpectation with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/partnerexpectationRoutes.js",
    "groupTitle": "partnerexpectation"
  },
  {
    "type": "post",
    "url": "/personeldetails/",
    "title": "add personeldetails information",
    "name": "Add_personeldetails",
    "group": "personeldetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smoke",
            "description": "<p>smoke of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drink",
            "description": "<p>drink of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hobby",
            "description": "<p>hobby  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "interest",
            "description": "<p>interest of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sports",
            "description": "<p>sports of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fitness",
            "description": "<p>fitness of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diet",
            "description": "<p>diet of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "politicalview",
            "description": "<p>politicalview of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "humor",
            "description": "<p>humor of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dresstyle",
            "description": "<p>dresstyle of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"personeldetails Added!\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 1,\n     \"smoke\": \"NO\",\n     \"drink\": \"NO\",\n     \"hobby\": \"cricket\",\n     \"interest\": \"in cricket\",\n     \"sports\": \"cricket,volleyball\",\n     \"fitness\": \"GYM\",\n     \"diet\": \"yes\",\n     \"politicalview\": \"strong political view\",\n     \"humor\": \"lot\",\n     \"dresstyle\": \"adoptable\",\n     \"updatedAt\": \"2020-05-16T16:57:23.993Z\",\n     \"createdAt\": \"2020-05-16T16:57:23.993Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "personeldetailsNotFound",
            "description": "<p>personeldetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post personeldetails \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/personeldetailsRoutes.js",
    "groupTitle": "personeldetails"
  },
  {
    "type": "delete",
    "url": "/personeldetails/:id",
    "title": "Delete specific personeldetails  information",
    "name": "Delete_personeldetails_information",
    "group": "personeldetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>personeldetails unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"personeldetails deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "personeldetailsNotFound",
            "description": "<p>The id of the personeldetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find personeldetails with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/personeldetailsRoutes.js",
    "groupTitle": "personeldetails"
  },
  {
    "type": "get",
    "url": "/personeldetails/",
    "title": "Request get all personeldetails information",
    "name": "GetAll_personeldetails",
    "group": "personeldetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"personeldetailss retrieved\",\n \"data\": [\n     {\n         \"id\": 1,\n         \"memberid\": 1,\n         \"smoke\": \"NO\",\n         \"drink\": \"NO\",\n         \"hobby\": \"cricket\",\n         \"interest\": \"in cricket\",\n         \"sports\": \"cricket,volleyball\",\n         \"fitness\": \"GYM\",\n         \"diet\": \"yes\",\n         \"politicalview\": \"strong political view\",\n         \"humor\": \"lot\",\n         \"dresstyle\": \"adoptable\",\n         \"createdAt\": \"2020-05-16T16:57:23.993Z\",\n         \"updatedAt\": \"2020-05-16T16:57:23.993Z\"\n     }\n ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "personeldetailsNotfound",
            "description": "<p>personeldetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"personeldetails Notfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/personeldetailsRoutes.js",
    "groupTitle": "personeldetails"
  },
  {
    "type": "get",
    "url": "/personeldetails/:id",
    "title": "Request specific personeldetails information",
    "name": "Get_Specific_user_personeldetails",
    "group": "personeldetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>personeldetails unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found personeldetails\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 1,\n     \"smoke\": \"NO\",\n     \"drink\": \"NO\",\n     \"hobby\": \"cricket\",\n     \"interest\": \"in cricket\",\n     \"sports\": \"cricket,volleyball\",\n     \"fitness\": \"GYM\",\n     \"diet\": \"yes\",\n     \"politicalview\": \"strong political view\",\n     \"humor\": \"lot\",\n     \"dresstyle\": \"adoptable\",\n     \"createdAt\": \"2020-05-16T16:57:23.993Z\",\n     \"updatedAt\": \"2020-05-16T16:57:23.993Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "personeldetailsNotFound",
            "description": "<p>personeldetails with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find personeldetails with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/personeldetailsRoutes.js",
    "groupTitle": "personeldetails"
  },
  {
    "type": "put",
    "url": "/personeldetails/:id",
    "title": "Update specific personeldetails of user information",
    "name": "Update_personeldetails_information_of_a_user",
    "group": "personeldetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>personeldetails unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smoke",
            "description": "<p>smoke of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "drink",
            "description": "<p>drink of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hobby",
            "description": "<p>hobby  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "interest",
            "description": "<p>interest of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sports",
            "description": "<p>sports of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fitness",
            "description": "<p>fitness of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diet",
            "description": "<p>diet of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "politicalview",
            "description": "<p>politicalview of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "humor",
            "description": "<p>humor of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dresstyle",
            "description": "<p>dresstyle of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   {\n \"status\": \"success\",\n\"message\": \"personeldetails updated\",\n\"data\": {\n    \"memberid\": 1,\n    \"smoke\": \"yes\",\n    \"drink\": \"NO\",\n    \"hobby\": \"cricket\",\n    \"interest\": \"in cricket\",\n    \"sports\": \"cricket,volleyball\",\n    \"fitness\": \"GYM\",\n    \"diet\": \"yes\",\n    \"politicalview\": \"strong political view\",\n    \"humor\": \"lot\",\n    \"dresstyle\": \"adoptable\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "personeldetailsNotFound",
            "description": "<p>The id of the personeldetails was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find personeldetails with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/personeldetailsRoutes.js",
    "groupTitle": "personeldetails"
  },
  {
    "type": "delete",
    "url": "/physicalappearance/:id",
    "title": "Delete specific physicalappearance information",
    "name": "Deletephysicalappearance_information",
    "group": "physicalappearance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>physicalappearance unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"physicalappearance deleted\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "physicalappearanceNotFound",
            "description": "<p>The id of the physicalappearance was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find physicalappearance with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/physicalappearanceRoutes.js",
    "groupTitle": "physicalappearance"
  },
  {
    "type": "get",
    "url": "/physicalappearance/",
    "title": "Request get all physicalappearance information",
    "name": "GetAllphysicalappearance",
    "group": "physicalappearance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"success\",\n    \"message\": \"physicalappearances retrieved\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"height\": \"1.83 Feet\",\n            \"weight\": \"89\",\n            \"complexion\": \"FAIR\",\n            \"bloodgroup\": \"O+\",\n            \"bodytype\": \"FAT\",\n            \"disability\": \"YES\",\n            \"criticaldisease\": \"YES\",\n            \"normaldisease\": \"no\",\n            \"fertilitytest\": \"DONE\",\n            \"pressuresugarcount\": \"NORMAL\",\n            \"memberid\": 1,\n            \"createdAt\": \"2020-06-11T18:59:30.481Z\",\n            \"updatedAt\": \"2020-06-11T18:59:30.481Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "physicalappearanceNotfound",
            "description": "<p>physicalappearance was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"physicalappearanceNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/physicalappearanceRoutes.js",
    "groupTitle": "physicalappearance"
  },
  {
    "type": "get",
    "url": "/physicalappearance/:id",
    "title": "Request specific physicalappearance information",
    "name": "Get_Specific_physicalappearance",
    "group": "physicalappearance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>physicalappearance unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"Found physicalappearance\",\n    \"data\": {\n        \"id\": 1,\n        \"height\": \"1.83 Feet\",\n        \"weight\": \"89\",\n        \"complexion\": \"FAIR\",\n        \"bloodgroup\": \"O+\",\n        \"bodytype\": \"FAT\",\n        \"disability\": \"YES\",\n        \"criticaldisease\": \"YES\",\n        \"normaldisease\": \"no\",\n        \"fertilitytest\": \"DONE\",\n        \"pressuresugarcount\": \"NORMAL\",\n        \"memberid\": 1,\n        \"createdAt\": \"2020-06-11T18:59:30.481Z\",\n        \"updatedAt\": \"2020-06-11T18:59:30.481Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "physicalappearanceNotFound",
            "description": "<p>physicalappearance with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find physicalappearance with the id 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/physicalappearanceRoutes.js",
    "groupTitle": "physicalappearance"
  },
  {
    "type": "post",
    "url": "/physicalappearance/",
    "title": "add physicalappearance information",
    "name": "Getphysicalappearance",
    "group": "physicalappearance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>height of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>complexion of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bloodgroup",
            "description": "<p>bloodgroup of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bodytype",
            "description": "<p>bodytype of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>disability of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "criticaldisease",
            "description": "<p>criticaldisease of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normaldisease",
            "description": "<p>normaldisease of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fertilitytest",
            "description": "<p>fertilitytest of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pressuresugarcount",
            "description": "<p>pressuresugarcount of the physicalappearance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"physicalappearance Added!\",\n    \"data\": {\n        \"id\": 1,\n        \"height\": \"1.83 Feet\",\n        \"weight\": \"89\",\n        \"complexion\": \"FAIR\",\n        \"bloodgroup\": \"O+\",\n        \"bodytype\": \"FAT\",\n        \"disability\": \"YES\",\n        \"criticaldisease\": \"YES\",\n        \"normaldisease\": \"no\",\n        \"fertilitytest\": \"DONE\",\n        \"pressuresugarcount\": \"NORMAL\",\n        \"memberid\": 1,\n        \"updatedAt\": \"2020-06-11T18:59:30.481Z\",\n        \"createdAt\": \"2020-06-11T18:59:30.481Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "physicalappearanceNotFound",
            "description": "<p>physicalappearance was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post physicalappearance \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/physicalappearanceRoutes.js",
    "groupTitle": "physicalappearance"
  },
  {
    "type": "put",
    "url": "/physicalappearance/:id",
    "title": "Update specific physicalappearance information",
    "name": "Updatephysicalappearance_information",
    "group": "physicalappearance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>physicalappearance unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>height of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>complexion of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bloodgroup",
            "description": "<p>bloodgroup of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bodytype",
            "description": "<p>bodytype of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>disability of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "criticaldisease",
            "description": "<p>criticaldisease of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "normaldisease",
            "description": "<p>normaldisease of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fertilitytest",
            "description": "<p>fertilitytest of the physicalappearance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pressuresugarcount",
            "description": "<p>pressuresugarcount of the physicalappearance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"physicalappearance updated\",\n    \"data\": {\n        \"height\": \"1.83 Feet\",\n        \"weight\": \"91\",\n        \"complexion\": \"FAIR\",\n        \"bloodgroup\": \"O+\",\n        \"bodytype\": \"FAT\",\n        \"disability\": \"YES\",\n        \"criticaldisease\": \"YES\",\n        \"normaldisease\": \"no\",\n        \"fertilitytest\": \"DONE\",\n        \"pressuresugarcount\": \"NORMAL\",\n        \"memberid\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "physicalappearanceNotFound",
            "description": "<p>The id of the physicalappearance was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find physicalappearance with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/physicalappearanceRoutes.js",
    "groupTitle": "physicalappearance"
  },
  {
    "type": "delete",
    "url": "/shortlisted/:id",
    "title": "Delete specific shortlisted users information",
    "name": "Delete_shortlisted_users_list_of_a_user",
    "group": "shortlisted",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>shortlisted unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"shortlisted deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "shortlistedNotFound",
            "description": "<p>The id of the shortlisted was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find shortlisted with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/shortlistedRoutes.js",
    "groupTitle": "shortlisted"
  },
  {
    "type": "get",
    "url": "/shortlisted/",
    "title": "Request get all shortlisted user information",
    "name": "GetAll_shortlisted_users",
    "group": "shortlisted",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"shortlisteds retrieved\",\n \"data\": [\n     {\n         \"id\": 1,\n         \"memberid\": 1,\n         \"shortlistedmemberid\": [\n             1,\n             2,\n             3,\n             4\n         ],\n         \"createdAt\": \"2020-05-16T16:06:36.065Z\",\n         \"updatedAt\": \"2020-05-16T16:06:36.065Z\"\n     }\n ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "shortlistedNotfound",
            "description": "<p>shortlisted was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"shortlistedNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/shortlistedRoutes.js",
    "groupTitle": "shortlisted"
  },
  {
    "type": "get",
    "url": "/shortlisted/:id",
    "title": "Request specific shortlisted users information",
    "name": "Get_Specific_shortlisted_userlist",
    "group": "shortlisted",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>shortlisted unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found shortlisted\",\n \"data\": {\n     \"id\": 1,\n     \"memberid\": 1,\n     \"shortlistedmemberid\": [\n         1,\n         2,\n         3,\n         4\n     ],\n     \"createdAt\": \"2020-05-16T16:06:36.065Z\",\n     \"updatedAt\": \"2020-05-16T16:06:36.065Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "shortlistedNotFound",
            "description": "<p>shortlisted with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find shortlisted with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/shortlistedRoutes.js",
    "groupTitle": "shortlisted"
  },
  {
    "type": "put",
    "url": "/shortlisted/:id",
    "title": "Update specific shortlisted  users information",
    "name": "Update_shortlisted_users_information",
    "group": "shortlisted",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>shortlisted unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "shortlistedmemberid",
            "description": "<p>shortlistedmemberids of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"shortlisted updated\",\n \"data\": {\n     \"memberid\": 1,\n     \"shortlistedmemberid\": [\n         1,\n         2,\n         3\n     ]\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "shortlistedNotFound",
            "description": "<p>The id of the shortlisted was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find shortlisted with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/shortlistedRoutes.js",
    "groupTitle": "shortlisted"
  },
  {
    "type": "post",
    "url": "/shortlisted/",
    "title": "add shortlisted users information",
    "name": "add_shortlisted_users",
    "group": "shortlisted",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "ARRAY",
            "optional": false,
            "field": "shortlistedmemberid",
            "description": "<p>shortlistedmemberids of the Users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"shortlisted Added!\",\n \"data\": {\n     \"id\": 2,\n     \"memberid\": 2,\n     \"shortlistedmemberid\": [\n         1,\n         2,\n         3,\n         4\n     ],\n     \"updatedAt\": \"2020-05-16T15:58:50.526Z\",\n     \"createdAt\": \"2020-05-16T15:58:50.526Z\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "shortlistedidNotfound",
            "description": "<p>myinterest was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"shortlistedridNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/shortlistedRoutes.js",
    "groupTitle": "shortlisted"
  },
  {
    "type": "post",
    "url": "/socialbackround/",
    "title": "add socialbackround information",
    "name": "Add_socialbackround",
    "group": "socialbackround",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "religion",
            "description": "<p>religion of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "community",
            "description": "<p>community of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caste",
            "description": "<p>caste  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "subcaste",
            "description": "<p>subcaste of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "kuladeivam",
            "description": "<p>kuladeivam of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>place of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familystatus",
            "description": "<p>familystatus of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familyvalue",
            "description": "<p>familyvalue of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"socialbackround Added!\",\n  \"data\": {\n      \"id\": 1,\n      \"memberid\": 1,\n      \"religion\": \"Hindu\",\n      \"community\": \"BC\",\n      \"caste\": \"koundar\",\n      \"subcaste\": \"Devendira\",\n      \"kuladeivam\": \"pathraklai\",\n      \"place\": \"tiruppur\",\n      \"familystatus\": \"medium\",\n      \"familyvalue\": \"good\",\n      \"updatedAt\": \"2020-05-16T17:14:27.811Z\",\n      \"createdAt\": \"2020-05-16T17:14:27.811Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "socialbackroundNotFound",
            "description": "<p>socialbackround was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot post socialbackround \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/socialbackroundRoutes.js",
    "groupTitle": "socialbackround"
  },
  {
    "type": "delete",
    "url": "/socialbackround/:id",
    "title": "Delete specific socialbackround information of user",
    "name": "Delete_socialbackround_information",
    "group": "socialbackround",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>socialbackround unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n      \"status\": \"success\",\n    \"message\": \"socialbackround deleted\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "socialbackroundNotFound",
            "description": "<p>The id of the socialbackround was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find socialbackround with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/socialbackroundRoutes.js",
    "groupTitle": "socialbackround"
  },
  {
    "type": "get",
    "url": "/socialbackround/",
    "title": "Request get all socialbackround information",
    "name": "GetAll_socialbackround",
    "group": "socialbackround",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"socialbackrounds retrieved\",\n\"data\": [\n    {\n        \"id\": 1,\n        \"memberid\": 1,\n        \"religion\": \"Hindu\",\n        \"community\": \"BC\",\n        \"caste\": \"koundar\",\n        \"subcaste\": \"Devendira\",\n        \"kuladeivam\": \"pathraklai\",\n        \"place\": \"tiruppur\",\n        \"familystatus\": \"medium\",\n        \"familyvalue\": \"good\",\n        \"createdAt\": \"2020-05-16T17:14:27.811Z\",\n        \"updatedAt\": \"2020-05-16T17:14:27.811Z\"\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "socialbackrounddetailsNotfound",
            "description": "<p>socialbackround was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"socialbackround Notfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/socialbackroundRoutes.js",
    "groupTitle": "socialbackround"
  },
  {
    "type": "get",
    "url": "/socialbackround/:id",
    "title": "Request specific socialbackround information",
    "name": "Get_Specific_socialbackround_of_user",
    "group": "socialbackround",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>socialbackround unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n\"message\": \"Found socialbackround\",\n\"data\": {\n    \"id\": 1,\n    \"memberid\": 1,\n    \"religion\": \"Hindu\",\n    \"community\": \"BC\",\n    \"caste\": \"koundar\",\n    \"subcaste\": \"Devendira\",\n    \"kuladeivam\": \"pathraklai\",\n    \"place\": \"tiruppur\",\n    \"familystatus\": \"medium\",\n    \"familyvalue\": \"good\",\n    \"createdAt\": \"2020-05-16T17:14:27.811Z\",\n    \"updatedAt\": \"2020-05-16T17:14:27.811Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "socialbackroundNotFound",
            "description": "<p>socialbackround with id was not  found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n   \"message\": \"Cannot find socialbackround with the id 1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/socialbackroundRoutes.js",
    "groupTitle": "socialbackround"
  },
  {
    "type": "put",
    "url": "/socialbackround/:id",
    "title": "Update specific socialbackround information of user",
    "name": "Update_socialbackround_information",
    "group": "socialbackround",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>socialbackround unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "memberid",
            "description": "<p>memberid of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "religion",
            "description": "<p>religion of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "community",
            "description": "<p>community of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "caste",
            "description": "<p>caste  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "subcaste",
            "description": "<p>subcaste of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "kuladeivam",
            "description": "<p>kuladeivam of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>place of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familystatus",
            "description": "<p>familystatus of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "familyvalue",
            "description": "<p>familyvalue of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       {\n    \"status\": \"success\",\n    \"message\": \"socialbackround updated\",\n    \"data\": {\n        \"memberid\": 1,\n        \"religion\": \"Hindu\",\n        \"community\": \"BC\",\n        \"caste\": \"koundar\",\n        \"subcaste\": \"vellalar\",\n        \"kuladeivam\": \"pathraklai\",\n        \"place\": \"tiruppur\",\n        \"familystatus\": \"medium\",\n        \"familyvalue\": \"good\"\n    }\n}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "socialbackroundNotFound",
            "description": "<p>The id of the socialbackround was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find socialbackround with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/socialbackroundRoutes.js",
    "groupTitle": "socialbackround"
  },
  {
    "type": "post",
    "url": "/templestories/",
    "title": "add templestories information",
    "name": "Addtemplestories_information",
    "group": "templestories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the templestories.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdby",
            "description": "<p>createdby of the templestories.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the templestories.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the templestories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": \"success\",\n    \"message\": \"templestories Added!\",\n    \"data\": {\n        \"id\": 2,\n        \"title\": \"Demo Happy Story Title 2\",\n        \"createdby\": \"Slade Bennett\",\n        \"description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.\",\n        \"imgurl\": \"https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg\",\n        \"updatedAt\": \"2020-06-08T07:36:00.474Z\",\n        \"createdAt\": \"2020-06-08T07:36:00.474Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "templestoriesNotFound",
            "description": "<p>The id of the templestories was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"templestoriesNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/templestoriesRoutes.js",
    "groupTitle": "templestories"
  },
  {
    "type": "delete",
    "url": "/templestories/:id",
    "title": "Delete specific templestories information",
    "name": "Deletetemplestories_information",
    "group": "templestories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"message\": \"templestories deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "templestoriesNotFound",
            "description": "<p>The id of the templestories was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Example",
            "description": "<p>Error-Response: HTTP/1.1 404 Not Found { &quot;status&quot;: &quot;error&quot;, &quot;message&quot;: &quot;Cannot find templestories with the id: 2&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/server/routes/templestoriesRoutes.js",
    "groupTitle": "templestories"
  },
  {
    "type": "get",
    "url": "/templestories/",
    "title": "Request get all templestories information",
    "name": "GetAlltemplestories",
    "group": "templestories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"status\": \"success\",\n    \"message\": \"templestoriess retrieved\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"title\": \"Demo Happy Story Title 1\",\n            \"createdby\": \"Slade Bennett\",\n            \"description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.\",\n            \"imgurl\": \"https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg\",\n            \"createdAt\": \"2020-06-08T07:30:34.435Z\",\n            \"updatedAt\": \"2020-06-08T07:30:34.435Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "templestoriesNotFound",
            "description": "<p>The id of the templestories was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"templestoriesNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/templestoriesRoutes.js",
    "groupTitle": "templestories"
  },
  {
    "type": "get",
    "url": "/templestories/:id",
    "title": "Request specific templestories information",
    "name": "Gettemplestories",
    "group": "templestories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>templestories unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": \"success\",\n    \"message\": \"Found templestories\",\n    \"data\": {\n        \"id\": 1,\n        \"title\": \"Demo Happy Story Title 1\",\n        \"createdby\": \"Slade Bennett\",\n        \"description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.\",\n        \"imgurl\": \"https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg\",\n        \"createdAt\": \"2020-06-08T07:30:34.435Z\",\n        \"updatedAt\": \"2020-06-08T07:30:34.435Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "templestoriesNotFound",
            "description": "<p>The id of the templestories was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find templestories with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/templestoriesRoutes.js",
    "groupTitle": "templestories"
  },
  {
    "type": "put",
    "url": "/templestories/:id",
    "title": "Update specific templestories information",
    "name": "Updatetemplestories_information",
    "group": "templestories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the templestories.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdby",
            "description": "<p>createdby of the templestories.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the templestories.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the templestories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": \"success\",\n    \"message\": \"templestories updated\",\n    \"data\": {\n        \"title\": \"Demo Happy Story Title 2\",\n        \"createdby\": \"Slad walker\",\n        \"description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi, temporibus, optio necessitatibus harum quis eaque, asperiores illo velit veniam, quod quas deleniti corrupti officia cumque fugiat ipsum odio a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt labore nobis corporis reiciendis quisquam reprehenderit, rem porro consectetur aut architecto temporibus. Praesentium dicta aut, alias est? Voluptatum, iusto, minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem debitis nesciunt dolor beatae delectus cumque sequi accusamus voluptatum, nihil fugiat, consequatur ratione iusto! Laboriosam minus sit quia illo sapiente.\",\n        \"imgurl\": \"https://www.mythirumanam.com/matrimonials/images/tamil_matrimony.jpg\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "templestoriesNotFound",
            "description": "<p>The id of the templestories was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find templestories with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/templestoriesRoutes.js",
    "groupTitle": "templestories"
  }
] });
