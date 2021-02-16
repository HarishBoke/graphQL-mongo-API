module.exports = async (_, {}, {models}) => {
  return await models.Setting.find();
};


