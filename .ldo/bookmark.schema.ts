import { Schema } from "shexj";

/**
 * =============================================================================
 * bookmarkSchema: ShexJ Schema for bookmark
 * =============================================================================
 */
export const bookmarkSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://shaperepo.com/schemas/Bookmark#BookmarkShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://www.w3.org/2002/01/bookmark#Bookmark"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2000/01/rdf-schema#label",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2002/01/bookmark#hasTopic",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2002/01/bookmark#id",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2002/01/bookmark#recalls",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://purl.org/dc/terms/createdcreated",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://purl.org/dc/terms/createdcreator",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/Bookmark#BookmarkTopic",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://www.w3.org/2002/01/bookmark#Topic"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2002/01/bookmark#subTopicOf",
              valueExpr: "https://shaperepo.com/schemas/Bookmark#BookmarkTopic",
              min: 0,
              max: 1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
