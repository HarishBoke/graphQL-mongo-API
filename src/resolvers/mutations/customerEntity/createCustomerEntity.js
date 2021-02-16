const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newCustomerEntity = await models.CustomerEntity.create(input);
    return newCustomerEntity
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
