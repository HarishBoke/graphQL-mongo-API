module.exports = async (_, {}, {models}) => {
  return await models.CustomerEntityFields.find();
};


