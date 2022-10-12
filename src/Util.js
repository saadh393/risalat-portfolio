export const DOMAIN = "https://api.risalatsiddique.com";
export const AUTH =
  "Bearer ad71cdc972f849e905176ddcd6990da8621c7717041789bd9649ea5ad9de2b4fe37446a772ac79f0355353614594f47486f15a5bb0907512ecc07c58a7760c80343f681bc06f4b329e9ff91fa852ced86c1eada871e3af0572465aeb36aa095058141c9145500bd01ea3c2363528ddc6c39668caa304f03c2e790a6b6e5aea38";

// export const DOMAIN = "http://localhost:1337";
// export const AUTH =
//   "Bearer 488c6fcd465f58b8ebb8f540babd814a043e6b73245a6615e4d751d4317b0913d7ecf4a2dce3561d94def4adb5d79238492e90c4467ff2124333c0fa67d430e12fcb34301c2dedc810a72e137e146e51567c7f25f9038f81ba9ebf7a9078b665bbae827eeab89e60a7bc83604d86c48fd703650e5a29c2d4a816a12c4aeba82d";
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

export const notFound_600x400 = "https://dummyimage.com/600x400/031f47/ffffff&text=Image+not+found";
