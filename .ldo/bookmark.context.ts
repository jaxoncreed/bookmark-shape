import { LdoJsonldContext } from "@ldo/jsonld-dataset-proxy";

/**
 * =============================================================================
 * bookmarkContext: JSONLD Context for bookmark
 * =============================================================================
 */
export const bookmarkContext: LdoJsonldContext = {
  Bookmark: {
    "@id": "http://www.w3.org/2002/01/bookmark#Bookmark",
    "@context": {
      type: {
        "@id": "@type",
      },
      label: {
        "@id": "http://www.w3.org/2000/01/rdf-schema#label",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      hasTopic: {
        "@id": "http://www.w3.org/2002/01/bookmark#hasTopic",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      id: {
        "@id": "http://www.w3.org/2002/01/bookmark#id",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      recalls: {
        "@id": "http://www.w3.org/2002/01/bookmark#recalls",
        "@type": "@id",
      },
      createdcreated: {
        "@id": "http://purl.org/dc/terms/createdcreated",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      createdcreator: {
        "@id": "http://purl.org/dc/terms/createdcreator",
        "@type": "@id",
      },
    },
  },
  Topic: {
    "@id": "http://www.w3.org/2002/01/bookmark#Topic",
    "@context": {
      type: {
        "@id": "@type",
      },
      subTopicOf: {
        "@id": "http://www.w3.org/2002/01/bookmark#subTopicOf",
        "@type": "@id",
      },
    },
  },
};
