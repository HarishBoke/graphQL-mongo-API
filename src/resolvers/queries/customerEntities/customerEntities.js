module.exports = async (_, {}, {models}) => {
  return await models.CustomerEntity.find();
};


