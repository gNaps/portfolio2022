import qs from "qs";

const populateAll = {
  populate: "*",
};

const encodeValuesOnly = {
  encodeValuesOnly: true,
};

export const baseQuery = qs.stringify(
  { ...populateAll },
  { ...encodeValuesOnly }
);

export const projectsHomeQuery = qs.stringify(
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
