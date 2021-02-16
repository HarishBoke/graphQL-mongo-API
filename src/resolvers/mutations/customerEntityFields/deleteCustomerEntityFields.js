const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deleteCustomerEntityFields = await models.CustomerEntityFields.deleteOne({_id: id})

  if(deleteCustomerEntityFields.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};