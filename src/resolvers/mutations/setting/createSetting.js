const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newSetting = await models.Setting.create(input);
    return newSetting
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
