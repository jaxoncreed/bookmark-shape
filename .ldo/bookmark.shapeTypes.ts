import { ShapeType } from "@ldo/ldo";
import { bookmarkSchema } from "./bookmark.schema";
import { bookmarkContext } from "./bookmark.context";
import { BookmarkShape, BookmarkTopic } from "./bookmark.typings";

/**
 * =============================================================================
 * LDO ShapeTypes bookmark
 * =============================================================================
 */

/**
 * BookmarkShape ShapeType
 */
export const BookmarkShapeShapeType: ShapeType<BookmarkShape> = {
  schema: bookmarkSchema,
  shape: "https://shaperepo.com/schemas/Bookmark#BookmarkShape",
  context: bookmarkContext,
};

/**
 * BookmarkTopic ShapeType
 */
export const BookmarkTopicShapeType: ShapeType<BookmarkTopic> = {
  schema: bookmarkSchema,
  shape: "https://shaperepo.com/schemas/Bookmark#BookmarkTopic",
  context: bookmarkContext,
};
