const { gql } = require('apollo-server');

module.exports = gql`

input servicesInput {
 slug:String!
 value:String!
 plan1:Boolean!
 plan2:Boolean!
 plan3:Boolean!
}

input updateServicesInput {
  slug:String
  value:String
  plan1:Boolean
  plan2:Boolean
  plan3:Boolean
 }

type Services {
    id:ID,
    slug:String
    value:String
    plan1:Boolean
    plan2:Boolean
    plan3:Boolean
   }

  extend type Query {
    services: [Services]
  }

   extend type Mutation {
    createServices(input: servicesInput!): Services
    updateService(id:ID,input: updateServicesInput!): Services
    deleteService(id:ID): Services

  }
  
`;
