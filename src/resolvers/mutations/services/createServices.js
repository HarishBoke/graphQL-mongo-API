const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newServices = await models.Services.create(input);
    return newServices
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
