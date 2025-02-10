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
