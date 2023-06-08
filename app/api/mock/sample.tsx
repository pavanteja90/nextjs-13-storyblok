const record = {
  brand: "Guzman y Gomez",
  brandCode: "GUZYGO",
  brandId: "1874",
  year: "2023",
  "Absolute O.S": 8.5,
  imageUrl:
    "https://cdn.canstarblue.com.au/bluesr/images/brands/blue_small_GUZYGO_logo.png",
  isMonetised: true,
  url: "https://www.guzmanygomez.com.au/",
  columns: [5, 5, 5, -1, 5, 5, 5],
  userRatings: [
    {
      author: "Ricky",
      opinion: "This is a good place to go on a weekend",
    },
  ],
};

const data = {
  category: "Quick service restaurants",
  tableCode: "quick-service-restaurants-1",
  lastUpdatedOn: "2023-01-01 00:00:00 +10:00 UTC",
  columns: [
    {
      label: "Overall satisfaction",
      standardColumn: true,
    },
    {
      label: "Overall satisfaction2",
      standardColumn: false,
    },
    {
      label: "Overall satisfaction3",
      standardColumn: false,
    },
    {
      label: "Overall satisfaction4",
      standardColumn: false,
    },
    {
      label: "Overall satisfaction5",
      standardColumn: true,
    },
    {
      label: "Overall satisfaction6",
      standardColumn: true,
    },
  ],
  records: [record, record, record, record, record, record, record],
};


export default data;