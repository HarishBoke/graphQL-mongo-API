const { gql } = require('apollo-server');

module.exports = gql`

type fields {
  googleAddress: String
  postalCode: String
  street:String
  streetNumber:String
}

type customerSettingKeyType {
  index:Int
  name:String
  data:[String]
}

input customerSettingKeyInput {
  index:Int!
  name:String!
  data:[String]
}
input customerSettingKeyInputUpdate {
  index:Int
  name:String
  data:[String]
}

input fields2 {
  googleAddress: String
  postalCode: String
  street:String
  streetNumber:String
}

  type CustomerEntityFields {
    id: ID!
    title: String!
    slug: String!
    value: String!
    type: String!
    is_required:Boolean!
    customerSettingKeyType:customerSettingKeyType
    dependentFields:fields
  }

  input CreateCustomerEntityFieldsInput {
    title: String!
    slug: String!
    value: String!
    data: [String]
    type: String!
    is_required:Boolean
    customerSettingKeyType:customerSettingKeyInput
    dependentFields:fields2
  }

  input UpdateCustomerEntityFieldsInput {
    title: String
    slug: String
    value: String
    
    type: String
    is_required:Boolean
    customerSettingKeyType:customerSettingKeyInputUpdate
    dependentFields: fields2
    
  }

  input DeleteCustomerEntityFieldsInput {
    id: ID!
  }

  type DeleteCustomerEntityFields{
    id: ID!
  }

  extend type Query {
    customerEntityFields: [CustomerEntityFields]
  }


  extend type Mutation {
    createCustomerEntityFields(input: CreateCustomerEntityFieldsInput!): CustomerEntityFields!
    updateCustomerEntityFields(id: ID!, input: UpdateCustomerEntityFieldsInput!): CustomerEntityFields!
    deleteCustomerEntityFields(id: ID!): DeleteCustomerEntityFields!
    findCustomerEntityFields(customerEntity:String!):[CustomerEntityFields]!
  }
  
`;
