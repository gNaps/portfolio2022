import qs from "qs";

const populateAll = {
  populate: "*",
};

const encodeValuesOnly = {
  encodeValuesOnly: true,
};

export const homeQuery = qs.stringify(
  { ...populateAll },
  { ...encodeValuesOnly }
);

export const projectsQuery = qs.stringify(
  {
    filters: {
      home: {
        $eq: true,
      },
    },
    ...populateAll,
  },
  {
    ...encodeValuesOnly,
  }
);
