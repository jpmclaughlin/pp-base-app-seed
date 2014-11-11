'use strict';

/**
 * @ngdoc overview
 * @name ppBaseAppSeedApp
 * @description
 * # ppBaseAppSeedApp
 *
 * Main module of the application.
 */

var basesApp = angular.module('basesApp', ['ui.bootstrap']);

basesApp.controller('BaseListCtrl', ['$scope', 'filterFilter', function($scope, filterFilter) {

  // init values
  $scope.sizesModel = { };
  $scope.gaugesModel = { };
  $scope.selectedGauge = { };
  $scope.sbModel = { };
  $scope.rbModel = { };

  $scope.sizes = [
  { "size": "3.5 OD",
    "gauges": [
      { "gauge": "0.120",
        "sizingBases" : [
          {
            "name" : "SA",
            "settings" : { "S1F": "4.5", "S1B": "4.5", "S2F": "2.3", "S2B": "2.3" }
          },
          {
            "name" : "SB",
            "settings" : { "S1F": "7.5", "S1B": "3.3", "S2F": "4.2", "S2B": "5.2" }
          },
          {
            "name" : "SC",
            "settings" : { "S1F": "4.5", "S1B": "4.5", "S2F": "2.3", "S2B": "2.3" }
          },
          {
            "name" : "SD",
            "settings" : { "S1F": "9.5", "S1B": "58.5", "S2F": "52.2", "S2B": "26.2" }
          }
        ],
        "reshapingBases" : [
          {
            "name" : "RSA",
            "settings" : { "RS1F": "3.5", "RS1B": "5.5", "RS2F": "8.2", "RS2B": "1.2" }
          },
          {
            "name" : "RSB",
            "settings" : { "RS1F": "5.5", "RS1B": "9.5", "RS2F": "3.2", "RS2B": "2.2" }
          },
          {
            "name" : "RSC",
            "settings" : { "RS1F": "8.5", "RS1B": "4.5", "RS2F": "8.2", "RS2B": "12.2" }
          },
          {
            "name" : "RSD",
            "settings" : { "RS1F": "4.5", "RS1B": "0.5", "RS2F": "3.2", "RS2B": "1.2" }
          }
        ]
      },
      { "gauge": "0.216",
        "sizingBases" : [
          {
            "name" : "SA",
            "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
          },
          {
            "name" : "SB",
            "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
          },
          {
            "name" : "SC",
            "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
          },
          {
            "name" : "SD",
            "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
          }
        ],
        "reshapingBases" : [
          {
            "name" : "RSA",
            "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
          },
          {
            "name" : "RSB",
            "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
          },
          {
            "name" : "RSC",
            "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
          },
          {
            "name" : "RSD",
            "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
          }
        ]
      },
      { "gauge": "0.280",
        "sizingBases" : [
          {
            "name" : "SA",
            "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
          },
          {
            "name" : "SB",
            "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
          },
          {
            "name" : "SC",
            "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
          },
          {
            "name" : "SD",
            "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
          }
        ],
        "reshapingBases" : [
          {
            "name" : "RSA",
            "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
          },
          {
            "name" : "RSB",
            "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
          },
          {
            "name" : "RSC",
            "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
          },
          {
            "name" : "RSD",
            "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
          }
        ]
      },
      { "gauge": "0.300",
        "sizingBases" : [
          {
            "name" : "SA",
            "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
          },
          {
            "name" : "SB",
            "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
          },
          {
            "name" : "SC",
            "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
          },
          {
            "name" : "SD",
            "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
          }
        ],
        "reshapingBases" : [
          {
            "name" : "RSA",
            "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
          },
          {
            "name" : "RSB",
            "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
          },
          {
            "name" : "RSC",
            "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
          },
          {
            "name" : "RSD",
            "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
          }
        ]
      }
    ]},
    { "size": "4.0 OD",
      "gauges": [
        { "gauge": "0.109",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "4.5", "S2F": "2.3", "S2B": "2.3" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "56.5", "S1B": "35.5", "S2F": "27.2", "S2B": "15.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "4.5", "S1B": "4.5", "S2F": "2.3", "S2B": "2.3" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "9.5", "S1B": "58.5", "S2F": "52.2", "S2B": "26.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "3.5", "RS1B": "5.5", "RS2F": "8.2", "RS2B": "1.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "5.5", "RS1B": "9.5", "RS2F": "3.2", "RS2B": "2.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "8.5", "RS1B": "4.5", "RS2F": "8.2", "RS2B": "12.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "4.5", "RS1B": "0.5", "RS2F": "3.2", "RS2B": "1.2" }
            }
          ]
        },
        { "gauge": "0.120",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        },
        { "gauge": "0.134",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        },
        { "gauge": "0.148",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        },
        { "gauge": "0.188",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        },
        { "gauge": "0.226",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        },
        { "gauge": "0.250",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        },
        { "gauge": "0.318",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        }
      ]},
    { "size": "4.0 x 5.0",
      "gauges": [
        { "gauge": "0.625",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "12.5", "S1B": "24.5", "S2F": "18.2", "S2B": "17.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "56.5", "S1B": "35.5", "S2F": "27.2", "S2B": "15.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "23.5", "S1B": "78.5", "S2F": "64.2", "S2B": "18.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "9.5", "S1B": "58.5", "S2F": "52.2", "S2B": "26.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "3.5", "RS1B": "5.5", "RS2F": "8.2", "RS2B": "1.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "5.5", "RS1B": "9.5", "RS2F": "3.2", "RS2B": "2.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "8.5", "RS1B": "4.5", "RS2F": "8.2", "RS2B": "12.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "4.5", "RS1B": "0.5", "RS2F": "3.2", "RS2B": "1.2" }
            }
          ]
        },
        { "gauge": "0.750",
          "sizingBases" : [
            {
              "name" : "SA",
              "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SB",
              "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
            },
            {
              "name" : "SC",
              "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
            },
            {
              "name" : "SD",
              "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
            }
          ],
          "reshapingBases" : [
            {
              "name" : "RSA",
              "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
            },
            {
              "name" : "RSB",
              "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
            },
            {
              "name" : "RSC",
              "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
            },
            {
              "name" : "RSD",
              "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
            }
          ]
        }
      ]},
      { "size": "5.0 OD",
        "gauges": [
          { "gauge": "0.120",
            "sizingBases" : [
              {
                "name" : "SA",
                "settings" : { "S1F": "4.5", "S1B": "4.5", "S2F": "2.3", "S2B": "2.3" }
              },
              {
                "name" : "SB",
                "settings" : { "S1F": "56.5", "S1B": "35.5", "S2F": "27.2", "S2B": "15.2" }
              },
              {
                "name" : "SC",
                "settings" : { "S1F": "4.5", "S1B": "4.5", "S2F": "2.3", "S2B": "2.3" }
              },
              {
                "name" : "SD",
                "settings" : { "S1F": "9.5", "S1B": "58.5", "S2F": "52.2", "S2B": "26.2" }
              }
            ],
            "reshapingBases" : [
              {
                "name" : "RSA",
                "settings" : { "RS1F": "3.5", "RS1B": "5.5", "RS2F": "8.2", "RS2B": "1.2" }
              },
              {
                "name" : "RSB",
                "settings" : { "RS1F": "5.5", "RS1B": "9.5", "RS2F": "3.2", "RS2B": "2.2" }
              },
              {
                "name" : "RSC",
                "settings" : { "RS1F": "8.5", "RS1B": "4.5", "RS2F": "8.2", "RS2B": "12.2" }
              },
              {
                "name" : "RSD",
                "settings" : { "RS1F": "4.5", "RS1B": "0.5", "RS2F": "3.2", "RS2B": "1.2" }
              }
            ]
          },
          { "gauge": "0.148",
            "sizingBases" : [
              {
                "name" : "SA",
                "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
              },
              {
                "name" : "SB",
                "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
              },
              {
                "name" : "SC",
                "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
              },
              {
                "name" : "SD",
                "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
              }
            ],
            "reshapingBases" : [
              {
                "name" : "RSA",
                "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
              },
              {
                "name" : "RSB",
                "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
              },
              {
                "name" : "RSC",
                "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
              },
              {
                "name" : "RSD",
                "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
              }
            ]
          },
          { "gauge": "0.188",
            "sizingBases" : [
              {
                "name" : "SA",
                "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
              },
              {
                "name" : "SB",
                "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
              },
              {
                "name" : "SC",
                "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
              },
              {
                "name" : "SD",
                "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
              }
            ],
            "reshapingBases" : [
              {
                "name" : "RSA",
                "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
              },
              {
                "name" : "RSB",
                "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
              },
              {
                "name" : "RSC",
                "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
              },
              {
                "name" : "RSD",
                "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
              }
            ]
          },
          { "gauge": "0.250",
            "sizingBases" : [
              {
                "name" : "SA",
                "settings" : { "S1F": "4.5", "S1B": "2.5", "S2F": "1.2", "S2B": "2.2" }
              },
              {
                "name" : "SB",
                "settings" : { "S1F": "8.5", "S1B": "7.5", "S2F": "6.2", "S2B": "5.2" }
              },
              {
                "name" : "SC",
                "settings" : { "S1F": "9.5", "S1B": "0.5", "S2F": "1.2", "S2B": "2.2" }
              },
              {
                "name" : "SD",
                "settings" : { "S1F": "6.5", "S1B": "5.5", "S2F": "4.2", "S2B": "3.2" }
              }
            ],
            "reshapingBases" : [
              {
                "name" : "RSA",
                "settings" : { "RS1F": "4.5", "RS1B": "4.5", "RS2F": "3.2", "RS2B": "3.2" }
              },
              {
                "name" : "RSB",
                "settings" : { "RS1F": "2.5", "RS1B": "3.5", "RS2F": "6.2", "RS2B": "4.2" }
              },
              {
                "name" : "RSC",
                "settings" : { "RS1F": "11.5", "RS1B": "9.5", "RS2F": "5.2", "RS2B": "8.2" }
              },
              {
                "name" : "RSD",
                "settings" : { "RS1F": "3.5", "RS1B": "7.5", "RS2F": "9.2", "RS2B": "0.2" }
              }
            ]
          }
        ]}
  ]

  $scope.setSize = function(size) {

    // first, reset the selections
    $scope.gaugesModel = {};
    $scope.sbModel = {};
    $scope.rbModel = {};

    $scope.selectedSize = filterFilter($scope.sizes, size);

    for (var i = 0; i < $scope.selectedSize.length; i++) {
      if ($scope.selectedSize[i].size === size) {
        $scope.gauges = angular.copy($scope.selectedSize[i].gauges);
      }
    };
  };

  // $scope.setSize($scope.sizesModel.size);

  $scope.setGauge = function(gauge) {

    // first, reset the selections
    $scope.sbModel = {};
    $scope.rbModel = {};

    $scope.selectedGauge = filterFilter($scope.gauges, gauge);

    for (var i = 0; i < $scope.selectedGauge.length; i++) {
      if ($scope.selectedGauge[i].gauge === gauge) {
        $scope.sizingBases = angular.copy($scope.selectedGauge[i].sizingBases);
        $scope.reshapingBases = angular.copy($scope.selectedGauge[i].reshapingBases);
      }
    };
  };

}]);
