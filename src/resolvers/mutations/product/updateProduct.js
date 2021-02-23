const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const ProductToUpdate = await models.Product.findOne({_id: id});

    if(!ProductToUpdate) throw new ApolloError(`Could not find Product with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      ProductToUpdate[value] = input[value];
    });

    const updatedProduct = await ProductToUpdate.save();

    return updatedProduct
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  