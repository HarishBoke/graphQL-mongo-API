const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    const newProduct = await models.Product.create(input);
    return newProduct
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
