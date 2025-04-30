export default {
  beforeCreate(event) {
    const { data, where, select, populate } = event;
  },
  afterCreate(event) {
    const { result, params } = event;
  },
};
