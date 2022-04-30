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

export const projectDetailQuery = (slug: string) => {
  return qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      ...populateAll,
    },
    {
      ...encodeValuesOnly,
    }
  );
};
