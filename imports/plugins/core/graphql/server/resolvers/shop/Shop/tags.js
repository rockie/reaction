import { getPaginatedResponse } from "@reactioncommerce/reaction-graphql-utils";
import { decodeShopOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/shop";

/**
 * Arguments passed by the client for a tags query
 * @typedef {ConnectionArgs} TagConnectionArgs - An object of all arguments that were sent by the client
 * @property {ConnectionArgs} args - An object of all arguments that were sent by the client. {@link ConnectionArgs|See default connection arguments}
 * @property {Boolean} args.includeDeleted - If set to true, include deleted. Default false.
 * @property {Boolean} args.isTopLevel - If set to a boolean, filter by this.
 * @property {Number} args.sortBy - Sort results by a TagSortByField enum value of `_id`, `name`, `position`, `createdAt`, `updatedAt`
 */

/**
 * @name tags
 * @method
 * @summary Returns the tags for the parent resolver shop
 * @param {Object} _ - unused
 * @param {TagConnectionArgs} args - arguments sent by the client {@link ConnectionArgs|See default connection arguments}
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object[]>} Promise that resolves with array of Tag objects
 */
export default async function tags({ _id }, connectionArgs, context) {
  const dbShopId = decodeShopOpaqueId(_id);

  const query = await context.queries.tags(context, dbShopId, connectionArgs);

  return getPaginatedResponse(query, connectionArgs);
}