const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newCustomerEntityFields = await models.CustomerEntityFields.create(input);
    return newCustomerEntityFields
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
