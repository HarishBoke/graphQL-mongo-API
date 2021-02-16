const { gql } = require('apollo-server');

module.exports = gql`

type Setting {
  id:ID
  header: Header
}

type Header {
  headerBgColor: String
  headerIconsColor: String
  logoURL: String
  primaryColor: String
}

  input HeaderInput {
    headerBgColor: String
    headerIconsColor: String
    logoURL: String
    primaryColor: String
  }

   input CreateSettingInput {
    header : HeaderInput
  }

  extend type Query {
    setting: [Setting]
  }

   extend type Mutation {
    createSetting(input: CreateSettingInput!): Setting
    updateSetting(id:ID!, input: CreateSettingInput!): Setting
  }
  
`;
