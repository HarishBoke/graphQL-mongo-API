const { gql } = require('apollo-server');

module.exports = gql`

type Price {
  id: ID!
  product_id: Int!
  year: Int!
  base_price: Float!
  unit_price: Float!
  included_quantity: Float!
  min_pct: Float!
  mid_pct: Float!
  max_pct: Float!
}

input PriceCreate {
  product_id: Int!
  year: Int!
  base_price: Float!
  unit_price: Float!
  included_quantity: Float!
  min_pct: Float!
  mid_pct: Float!
  max_pct: Float!
}

input PriceUpdate {
  product_id: Int!
  year: Int!
  base_price: Float!
  unit_price: Float!
  included_quantity: Float!
  min_pct: Float!
  mid_pct: Float!
  max_pct: Float!
}

type Product {
  id:ID!
  name: String!
  is_bundle: Boolean!
  check_min_max_range_custom_price: Boolean!
  is_a_la_carte: Boolean!
  is_specific_to_address_type: Boolean!
  is_upscalable: Boolean!
  order_limit: Int!
  prices: [Int]
  bundles: [Int]
  price: Price
}

input ProductCreate {
  name: String!
  is_bundle: Boolean!
  check_min_max_range_custom_price: Boolean!
  is_a_la_carte: Boolean!
  is_specific_to_address_type: Boolean!
  is_upscalable: Boolean!
  order_limit: Int!
  prices: [Int]
  bundles: [Int]
  price: PriceCreate
}

input ProductUpdate {
  name: String!
  is_bundle: Boolean!
  check_min_max_range_custom_price: Boolean!
  is_a_la_carte: Boolean!
  is_specific_to_address_type: Boolean!
  is_upscalable: Boolean!
  order_limit: Int!
  prices: [Int]
  bundles: [Int]
  price: PriceUpdate
}


  extend type Query {
    products: [Product]
  }

   extend type Mutation {
    createProduct(input: ProductCreate!): Product
    updateProduct(id:ID,input: ProductUpdate!): Product
    deleteProduct(id:ID): Product

  }
  
`;
