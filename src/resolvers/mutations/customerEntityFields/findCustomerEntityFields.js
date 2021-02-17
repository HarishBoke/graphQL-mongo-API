const { ApolloError } = require("apollo-server");

module.exports = async (_, {customerEntity}, {models}) => {

  try{
    const searchedCustomerEntityFields = await models.CustomerEntityFields.find({type: customerEntity});

    return searchedCustomerEntityFields
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  