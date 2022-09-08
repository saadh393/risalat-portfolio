export const DOMAIN = "https://strapi-risalat-siddik.herokuapp.com";
export const AUTH =
  "Bearer 7a5bbf27ae84d55dfaf1423cc8e7aa1d5809680bdb2cad59f38658f9d10d2277e2c03f42fbd59ddd390ec6944242e92ea6609b9915ccecdfd820ce885e5fc2e0d9266f639ae7578648592386c5f56b1db56fa49562b339b3c000df7ea3854446441e977c160ca90ca9b12cc3e62c0963d7a7feeb70941f37a62766a254cbfd79";

export const getYear = (year) => {
  return new Date(year).getUTCFullYear();
};

export const getMonth = (year) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[new Date(year).getUTCMonth()];
};
