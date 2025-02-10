# @ldshape/bookmark

Shapes for bookmarks on Solid.

This project includes shapes and generated files for [LDO](https://ldo.js.org).

## Installation

```bash
npm i @ldshape/bookmark
```


## bookmark

### Usage with LDO

```typescript
import { createLdoDataset } from "@ldo/ldo";
import { BookmarkShapeShapeType, BookmarkTopicShapeType } from "@ldshape/bookmark";
import type { BookmarkShape, BookmarkTopic } from "@ldshape/bookmark";
const ldoDataset = createLdoDataset();

const example0: BookmarkShape = ldoDataset
  .usingType(BookmarkShapeShapeType)
  .fromSubject("http://example.com/example0");

const example1: BookmarkTopic = ldoDataset
  .usingType(BookmarkTopicShapeType)
  .fromSubject("http://example.com/example1");

```

### ShEx Typings

```shex
PREFIX srs: <https://shaperepo.com/schemas/Bookmark#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX boo: <http://www.w3.org/2002/01/bookmark#>
PREFIX dct: <http://purl.org/dc/terms/created>

srs:BookmarkShape EXTRA a {
  a [ boo:Bookmark ];
  rdfs:label xsd:string ?;
  boo:hasTopic xsd:string ;
  boo:id xsd:string ?;
  boo:recalls IRI ;
  dct:created xsd:dateTime ?;
  dct:creator IRI ?;
}

srs:BookmarkTopic EXTRA a {
  a [boo:Topic] ;
  boo:subTopicOf @srs:BookmarkTopic ?;
}


```

### TypeScript Typings

```typescript
import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for bookmark
 * =============================================================================
 */

/**
 * BookmarkShape Type
 */
export interface BookmarkShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Bookmark";
  };
  label?: string;
  hasTopic: string;
  id?: string;
  recalls: {
    "@id": string;
  };
  createdcreated?: string;
  createdcreator?: {
    "@id": string;
  };
}

/**
 * BookmarkTopic Type
 */
export interface BookmarkTopic {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Topic";
  };
  subTopicOf?: BookmarkTopic;
}

```

