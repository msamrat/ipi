var countryOtherData = [
    {
        "FIELD1":"New Zealand",
        "FIELD3":"33760",
        "FIELD4":"4509700",
        "FIELD5":"86.251",
        "FIELD6":"82.78"
    },
    {
        "FIELD1":"United Kingdom",
        "FIELD3":"38370",
        "FIELD4":"64510376",
        "FIELD5":"82.345",
        "FIELD6":"89.8441"
    },
    {
        "FIELD1":"France",
        "FIELD3":"39720",
        "FIELD4":"66201365",
        "FIELD5":"79.289",
        "FIELD6":"81.9198"
    },
    {
        "FIELD1":"United States",
        "FIELD3":"55860",
        "FIELD4":"318857056",
        "FIELD5":"81.447",
        "FIELD6":"84.2"
    }
];
var countrydata = [
  {
    "countryname":"New Zealand",
    "region":"APAC",
    "income_class":"High income",
    "income_class_shortcode":"h",
    "IPI":56.2,
    'rank': 1,
    "Judicial Independence":{'rank': 1, 'country_score': 10.00, 'world_everage': '04.95', 'income_group_everage': '06.55', 'regional_everage': '05.20'},
    "Administrative Simplicity":{'rank': 1, 'country_score': 10.00, 'world_everage': '07.57', 'income_group_everage': '08.76', 'regional_everage': '07.25'},
    "Trade Openness":{'rank': 14, 'country_score': '08.83', 'world_everage': '06.96', 'income_group_everage': '08.66', 'regional_everage': '06.99'},
    "Budget Transparency":{'rank': 1, 'country_score': 10.00, 'world_everage': '05.39', 'income_group_everage': '07.25', 'regional_everage': '05.66'},
    "E-Transparency":{'rank': 7, 'country_score': '08.51', 'world_everage': '04.99', 'income_group_everage': '07.16', 'regional_everage': '05.36'},
    "Digital Citizens":{'rank': 4, 'country_score': '08.86', 'world_everage': '04.85', 'income_group_everage': '07.13', 'regional_everage': '04.77'},
    "flag_image": "New Zealand"
  },
  {
    "countryname":"United Kingdom",
    "countrycode":"GBR",
    "region":"EURNA",
    "income_class":"High income",
    "income_class_shortcode":"h",
    "IPI":55.9,
    'rank': 2,
    "Judicial Independence":{'rank': 3, 'country_score': 9.12, 'world_everage': 4.95, 'income_group_everage': 6.55, 'regional_everage': 6.00},
    "Administrative Simplicity":{'rank': 13, 'country_score': 9.01, 'world_everage': 7.57, 'income_group_everage': 8.76, 'regional_everage': 8.68},
    "Trade Openness":{'rank': 4, 'country_score': 9.37, 'world_everage': 6.96, 'income_group_everage': 8.66, 'regional_everage': 8.99},
    "Budget Transparency":{'rank': 3, 'country_score': 9.52, 'world_everage': 5.39, 'income_group_everage': 7.25, 'regional_everage': 7.78},
    "E-Transparency":{'rank': 6, 'country_score': 9.03, 'world_everage': 4.99, 'income_group_everage': 7.16, 'regional_everage': 6.62},
    "Digital Citizens":{'rank': 2, 'country_score': 9.81, 'world_everage': 4.85, 'income_group_everage': 7.13, 'regional_everage': 6.96},
    "flag_image": "United Kingdom"
  },
  {
    "countryname":"France",
    "countrycode":"FRA",
    "region":"EURNA",
    "income_class":"High income",
    "income_class_shortcode":"h",
    "IPI":54.1,
    'rank': 3,
    "Judicial Independence":{'rank': 12, 'country_score': 7.76, 'world_everage': 4.95, 'income_group_everage': 6.55, 'regional_everage': 6.00},
    "Administrative Simplicity":{'rank': 9, 'country_score': 9.24, 'world_everage': 7.57, 'income_group_everage': 8.76, 'regional_everage': 8.68},
    "Trade Openness":{'rank': 2, 'country_score': 9.89, 'world_everage': 6.96, 'income_group_everage': 8.66, 'regional_everage': 8.99},
    "Budget Transparency":{'rank': 5, 'country_score': 9.03, 'world_everage': 5.29, 'income_group_everage': 7.25, 'regional_everage': 7.78},
    "E-Transparency":{'rank': 1, 'country_score': 10.00, 'world_everage': 4.99, 'income_group_everage': 7.16, 'regional_everage': 6.62},
    "Digital Citizens":{'rank': 5, 'country_score': 8.82, 'world_everage': 4.85, 'income_group_everage': 7.13, 'regional_everage': 6.96},
    "flag_image": "France"
  },
  {
    "countryname":"United States",
    "countrycode":"USA",
    "region":"EURNA",
    "income_class":"High income",
    "income_class_shortcode":"h",
    "IPI":53.3,
    'rank': 4,
    "Judicial Independence":{'rank': 10, 'country_score': 7.37, 'world_everage': 4.95, 'income_group_everage': 6.55, 'regional_everage': 6.00},
    "Administrative Simplicity":{'rank': 15, 'country_score': 8.94, 'world_everage': 7.57, 'income_group_everage': 8.76, 'regional_everage': 8.68},
    "Trade Openness":{'rank': 6, 'country_score': 9.33, 'world_everage': 6.96, 'income_group_everage': 8.66, 'regional_everage': 8.99},
    "Budget Transparency":{'rank': 7, 'country_score': 8.65, 'world_everage': 5.39, 'income_group_everage': 7.25, 'regional_everage': 7.78},
    "E-Transparency":{'rank': 3, 'country_score': 9.48, 'world_everage': 4.99, 'income_group_everage': 7.16, 'regional_everage': 6.62},
    "Digital Citizens":{'rank': 3, 'country_score': 9.57, 'world_everage': 4.85, 'income_group_everage': 7.13, 'regional_everage': 6.96},
    "flag_image": "United States" 
  },
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {
    "countryname":"Tajikistan",
    "countrycode":"TJK",
    "region":"EECA",
    "income_class":"Low income",
    "income_class_shortcode":"l",
    "IPI":19.3,
    'rank': 86,
    "Judicial Independence":{'rank': 36, 'country_score': 4.96, 'world_everage': 4.95, 'income_group_everage': 4.12, 'regional_everage': 4.14},
    "Administrative Simplicity":{'rank': 69, 'country_score': 6.63, 'world_everage': 7.57, 'income_group_everage': 7.00, 'regional_everage': 8.17},
    "Trade Openness":{'rank': 87, 'country_score': 2.73, 'world_everage': 6.96, 'income_group_everage': 4.54, 'regional_everage': 6.31},
    "Budget Transparency":{'rank': 72, 'country_score': 2.65, 'world_everage': 5.39, 'income_group_everage': 4.30, 'regional_everage': 5.28},
    "E-Transparency":{'rank': 86, 'country_score': 1.15, 'world_everage': 4.99, 'income_group_everage': 2.62, 'regional_everage': 4.51},
    "Digital Citizens":{'rank': 86, 'country_score': 1.22, 'world_everage': 4.85, 'income_group_everage': 2.12, 'regional_everage': 4.58},
    "flag_image": "Tajikistan" 
  },
  {
    "countryname":"Benin",
    "countrycode":"BEN",
    "region":"AFR",
    "income_class":"Low income",
    "income_class_shortcode":"l",
    "IPI":19,
    'rank': 87,
    "Judicial Independence":{'rank': 69, 'country_score': 3.59, 'world_everage': 4.95, 'income_group_everage':4.12, 'regional_everage': 4.74},
    "Administrative Simplicity":{'rank': 59, 'country_score': 7.00, 'world_everage': 7.57, 'income_group_everage': 7.00, 'regional_everage': 7.07},
    "Trade Openness":{'rank': 79, 'country_score': 4.06, 'world_everage': 6.96, 'income_group_everage': 4.54, 'regional_everage': 5.09},
    "Budget Transparency":{'rank': 86, 'country_score': 1.10, 'world_everage': 5.39, 'income_group_everage': 4.30, 'regional_everage': 4.34},
    "E-Transparency":{'rank': 83, 'country_score': 1.60, 'world_everage': 4.99, 'income_group_everage': 2.62, 'regional_everage': 3.30},
    "Digital Citizens":{'rank': 82, 'country_score': 1.64, 'world_everage': 4.85, 'income_group_everage': 2.12, 'regional_everage': 2.55},
    "flag_image": "Benin" 
  },
  {
    "countryname":"Chad",
    "countrycode":"TCD",
    "region":"AFR",
    "income_class":"Low income",
    "income_class_shortcode":"l",
    "IPI":11.9,
    'rank': 88,
    "Judicial Independence":{'rank': 83, 'country_score': 2.71, 'world_everage': 4.95, 'income_group_everage': 4.12, 'regional_everage': 4.74},
    "Administrative Simplicity":{'rank': 85, 'country_score': 4.89, 'world_everage': 7.57, 'income_group_everage': 7.00, 'regional_everage': 7.07},
    "Trade Openness":{'rank': 88, 'country_score': 1.00, 'world_everage': 6.96, 'income_group_everage': 4.54, 'regional_everage': 5.09},
    "Budget Transparency":{'rank': 85, 'country_score': 1.29, 'world_everage': 5.39, 'income_group_everage': 4.30, 'regional_everage': 4.34},
    "E-Transparency":{'rank': 87, 'country_score': 1.00, 'world_everage': 4.99, 'income_group_everage': 2.62, 'regional_everage': 3.30},
    "Digital Citizens":{'rank': 88, 'country_score': 1.00, 'world_everage': 4.85, 'income_group_everage': 2.12, 'regional_everage': 2.55},
    "flag_image": "Chad" 
  }
];