export const DOMAIN = "https://api.risalatsiddique.com";
export const AUTH =
  "Bearer ad71cdc972f849e905176ddcd6990da8621c7717041789bd9649ea5ad9de2b4fe37446a772ac79f0355353614594f47486f15a5bb0907512ecc07c58a7760c80343f681bc06f4b329e9ff91fa852ced86c1eada871e3af0572465aeb36aa095058141c9145500bd01ea3c2363528ddc6c39668caa304f03c2e790a6b6e5aea38";

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
