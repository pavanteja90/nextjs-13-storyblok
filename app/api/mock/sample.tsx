const data = [
  // Quick service restaurants
  {
    category: "Quick service restaurants",
    tableCode: "quick-service-restaurants-1",
    lastUpdatedOn: "2023-01-01 00:00:00 +10:00 UTC",
    columns: [
      {
        label: "Overall satisfaction*",
        standardColumn: true,
      },
      {
        label: "Taste and freshness of ingredients / meals",
        standardColumn: true,
      },
      {
        label: "Value for money",
        standardColumn: true,
      },
      {
        label: "Speed of service",
        standardColumn: true,
      },
    ],
    records: [
      {
        brand: "Guzman y Gomez",
        brandCode: "GUZYGO",
        brandId: "1874",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_GUZYGO_logo.png",
        isMonetised: true,
        url: "https://www.guzmanygomez.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Subway",
        brandCode: "SUBW",
        brandId: "559",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_SUBW_logo.png",
        isMonetised: true,
        url: "https://www.subway.com/en-au",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Zambrero's",
        brandCode: "ZAMBRO",
        brandId: "2843",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_ZAMBRO_logo.png",
        isMonetised: true,
        url: "https://www.zambrero.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Red Rooster",
        brandCode: "REDRO",
        brandId: "511",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_REDRO_logo.png",
        isMonetised: true,
        url: "https://www.redrooster.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Nando's",
        brandCode: "NAND",
        brandId: "417",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_NAND_logo.png",
        isMonetised: true,
        url: "https://www.nandos.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Grill'd",
        brandCode: "GRILLD",
        brandId: "1873",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_GRILLD_logo.png",
        isMonetised: true,
        url: "https://www.grilld.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Hungry Jack's",
        brandCode: "HUNJA",
        brandId: "297",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_HUNJA_logo.png",
        isMonetised: true,
        url: "https://www.hungryjacks.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "KFC",
        brandCode: "KFC",
        brandId: "340",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_KFC_logo.png",
        isMonetised: true,
        url: "https://www.kfc.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Oporto",
        brandCode: "OPOR",
        brandId: "450",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_OPOR_logo.png",
        isMonetised: true,
        url: "https://www.oporto.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "McDonald's",
        brandCode: "MCDO",
        brandId: "386",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_MCDO_logo.png",
        isMonetised: true,
        url: "https://mcdonalds.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
    ],
  },
  // Supermarkets
  {
    category: "Supermarkets",
    tableCode: "Supermarkets-1",
    lastUpdatedOn: "2023-01-01 00:00:00 +10:00 UTC",
    columns: [
      {
        label: "Overall satisfaction*",
        standardColumn: true,
      },
      {
        label: "Value for money",
        standardColumn: true,
      },
      {
        label: "Customer service",
        standardColumn: true,
      },
      {
        label: "Layout & presentation of store",
        standardColumn: true,
      },
    ],
    records: [
      {
        brand: "ALDI",
        brandCode: "ALDI",
        brandId: "18",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_ALDI_logo.png",
        isMonetised: true,
        url: "https://www.aldi.com.au/",
        columns: [3, 2, 3, 4],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Woolworths",
        brandCode: "WOOL",
        brandId: "653",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_WOOL_logo.png",
        isMonetised: true,
        url: "https://supermarkets.4emhls.net/yRqQmB",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Coles",
        brandCode: "COLE",
        brandId: "142",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_COLE_logo.png",
        isMonetised: true,
        url: "https://www.coles.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "IGA",
        brandCode: "IGA",
        brandId: "301",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_IGA_logo.png",
        isMonetised: true,
        url: "http://www.iga.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
    ],
  },
  // Electronics Retailers
  {
    category: "Electronics Retailers",
    tableCode: "electronics-retailers-1",
    lastUpdatedOn: "2023-01-01 00:00:00 +10:00 UTC",
    columns: [
      {
        label: "Overall satisfaction*",
        standardColumn: true,
      },
      {
        label: "Customer service",
        standardColumn: true,
      },
      {
        label: "Value for money",
        standardColumn: true,
      },
      {
        label: "Checkout experience",
        standardColumn: true,
      },
    ],
    records: [
      {
        brand: "Appliances Online",
        brandCode: "APPLO",
        brandId: "1611",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_APPLO_logo.png",
        isMonetised: true,
        url: "https://prf.hn/click/camref:1100leSrA/pubref:1Star-Ratings-2Electronics-Retailers3GENERIC/ar:1Star-Ratings-2Electronics-Retailers3GENERIC/destination:https%3A%2F%2Fwww.appliancesonline.com.au%2F/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Harvey Norman",
        brandCode: "HARNO",
        brandId: "271",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_HARNO_logo.png",
        isMonetised: true,
        url: "https://www.harveynorman.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "The Good Guys",
        brandCode: "THGOGU",
        brandId: "587",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_THGOGU_logo.png",
        isMonetised: true,
        url: "https://prf.hn/click/camref:1100ljkMT/pubref:1Star-Ratings2Electronics-Retailers3The-Good-Guys/ar:1Star-Ratings2Electronics-Retailers3The-Good-Guys/destination:https%3A%2F%2Fwww.thegoodguys.com.au%2F",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Officeworks",
        brandCode: "OFFWO",
        brandId: "1234",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_OFFWO_logo.png",
        isMonetised: true,
        url: "https://www.officeworks.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "JB Hi-Fi",
        brandCode: "JBHIF",
        brandId: "316",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_JBHIF_logo.png",
        isMonetised: true,
        url: "https://www.jbhifi.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Kogan",
        brandCode: "KOGA",
        brandId: "347",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_KOGA_logo.png",
        isMonetised: true,
        url: "https://www.kogan.com/au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Betta",
        brandCode: "BETTA",
        brandId: "297",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_BETTA_logo.png",
        isMonetised: true,
        url: "https://www.betta.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Bing Lee",
        brandCode: "BINLE",
        brandId: "340",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_BINLE_logo.png",
        isMonetised: true,
        url: "https://t.cfjump.com/59612/t/60101?Url=https%3a%2f%2fwww.binglee.com.au%2f&UniqueId=star-ratings&UniqueId2=electronics-retailers",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
    ],
  },
  // Real Estate Agents
  {
    category: "Real Estate Agents",
    tableCode: "real-estate-agents-1",
    lastUpdatedOn: "2023-01-01 00:00:00 +10:00 UTC",
    columns: [
      {
        label: "Overall satisfaction*",
        standardColumn: true,
      },
      {
        label: "Problem resolution",
        standardColumn: true,
      },
      {
        label: "Contract handling",
        standardColumn: true,
      },
      {
        label: "Marketing",
        standardColumn: true,
      },
    ],
    records: [
      {
        brand: "Century 21",
        brandCode: "CENT2",
        brandId: "704",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_CENT2_logo.png",
        isMonetised: true,
        url: "http://www.century21.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "RE/MAX",
        brandCode: "RMAX",
        brandId: "2439",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_RMAX_logo.png",
        isMonetised: true,
        url: "https://www.remax.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Elders Real Estate",
        brandCode: "ELDERS",
        brandId: "587",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_ELDERS_logo.png",
        isMonetised: true,
        url: "https://www.eldersrealestate.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Belle Property",
        brandCode: "BLLPRY",
        brandId: "2027",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_BLLPRY_logo.png",
        isMonetised: true,
        url: "https://www.belleproperty.com/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Ray White",
        brandCode: "RAYWH",
        brandId: "760",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_RAYWH_logo.png",
        isMonetised: true,
        url: "https://www.raywhite.com/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Stockdale & Leggo",
        brandCode: "STOCL",
        brandId: "2441",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_STOCL_logo.png",
        isMonetised: true,
        url: "https://www.stockdaleleggo.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "LJ Hooker",
        brandCode: "LJHO",
        brandId: "737",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_LJHO_logo.png",
        isMonetised: true,
        url: "http://www.ljhooker.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
      {
        brand: "Harcourts",
        brandCode: "HARC",
        brandId: "726",
        year: "2023",
        "Absolute O.S": 8.5,
        imageUrl:
          "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_HARC_logo.png",
        isMonetised: true,
        url: "http://harcourts.com.au/",
        columns: [3, 2, 3, 4], //, 5, 3],
        userRatings: [
          {
            author: "Ricky",
            opinion: "This is a good place to go on a weekend",
          },
        ],
      },
    ],
  },
];

export default data;
