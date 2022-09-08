export const DOMAIN = "https://strapi-risalat-siddik.herokuapp.com";
export const AUTH =
  "Bearer ef16088e6bc468b460b8625ec2b105f40653c8145b9499a3d380ee071fead5c373573a913d19fd734f86b43c975bc8b2784269ac73d09e542d98f9dfdf7148fecfc0bc8859f0c4e74ee14b8b682b5c4cccac3b1bb7bb4f877ab0c17e3403e1a9d71fb809e41529d7393226be8de74140363c6eafe57883d148062a7006b91ccf";

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
