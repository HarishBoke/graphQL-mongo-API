const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const CustomerEntityFieldsToUpdate = await models.CustomerEntityFields.findOne({_id: id});

    if(!CustomerEntityFieldsToUpdate) throw new ApolloError(`Could not find CustomerEntityFields with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      CustomerEntityFieldsToUpdate[value] = input[value];
    });

    const updatedCustomerEntityFields = await CustomerEntityFieldsToUpdate.save();

    return updatedCustomerEntityFields
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  