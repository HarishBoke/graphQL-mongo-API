const { gql } = require('apollo-server');

module.exports = gql`

  type CustomerEntity {
    id:ID
    slug: String
    value: String
  }
 
  type GetCustomerFormField {
    customerEntityValues : [CustomerEntity]
  }
  
   type Query {
    customerEntities: [CustomerEntity]
  }

  input customerFormField {
    id:ID
    slug: String
    value: String
  }

   input CreateCustomerEntityInput {
    customerEntityValues : [customerFormField]
  }

   type Mutation {
    createCustomerEntity(input: CreateCustomerEntityInput!): GetCustomerFormField
  }
  
`;
