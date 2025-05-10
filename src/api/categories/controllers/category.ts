/**
 * categories controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::categories.category",
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },
    async create(ctx) {
      const { data, meta } = await super.create(ctx);
      return { data, meta };
    },
    async update(ctx) {
      const { id } = ctx.params;
      const { data, meta } = await super.update(ctx);
      return { data, meta };
    },
    async delete(ctx) {
      const { id } = ctx.params;
      const { data, meta } = await super.delete(ctx);
      return { data, meta };
    },
  })
);
