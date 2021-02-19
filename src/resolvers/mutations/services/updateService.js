const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const ServicesToUpdate = await models.Services.findOne({_id: id});

    if(!ServicesToUpdate) throw new ApolloError(`Could not find Services with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      ServicesToUpdate[value] = input[value];
    });

    const updatedServices = await ServicesToUpdate.save();

    return updatedServices
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  