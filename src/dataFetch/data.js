import { AUTH, DOMAIN } from "../Util";

export const getEducations = async (setState) => {
  const res = await fetch(DOMAIN + "/api/educations", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
    },
  });
  const data = await res.json();
  // setState((currentState) => {
  //   return { ...currentState, education: data.data };
  // });
  return { educations: data.data };
};

export const getExperiences = async (setState) => {
  const res = await fetch(DOMAIN + "/api/experiences?populate=company_logo", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
    },
  });
  const data = await res.json();
  // setState((currentState) => {
  //   return { ...currentState, experience: data.data };
  // });
  return { experiences: data.data };
};

export const getAchievements = async (setState) => {
  const res = await fetch(DOMAIN + "/api/achivements", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
    },
  });
  const data = await res.json();

  // setState((currentState) => {
  //   return { ...currentState, achievement: data.data };
  // });

  return { achievements: data.data };
};

export const getPublications = async (setState) => {
  const res = await fetch(DOMAIN + "/api/publications?populate=thumbnail", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
    },
  });
  const data = await res.json();

  // setState((currentState) => {
  //   return { ...currentState, publication: data.data };
  // });
  return { publications: data.data };
};

export const getVideosAndAppearances = async (setState) => {
  const res = await fetch(DOMAIN + "/api/videos-and-Appearances?populate=thumbnail", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
    },
  });
  const data = await res.json();

  // setState((currentState) => {
  //   return { ...currentState, publication: data.data };
  // });
  return { getVideosAndAppearances: data.data.reverse() };
};
