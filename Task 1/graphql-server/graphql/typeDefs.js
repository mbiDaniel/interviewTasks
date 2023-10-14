import {gql} from "apollo-server"

const typeDefs = gql`
type Product {
    id: ID!
    name: String!
    imageUrl: String!
    amount: Int!
    price: Float!
    currency: String!
  }
  
  input ProductInput {
    name: String!
    imageUrl: String!
    amount: Int!
    price: Float!
    currency: String!
  }

  type ProductList {
    limit: Int
    page: Int
    count: Int
    data: [Product]
  }
  type Query {
    product (id: ID!): Product
    products (name: String, limit: Int, page: Int): ProductList
  }

  type Mutation {
    create (productInput: ProductInput!): Product!
    update (id: ID!, productInput: ProductInput!): Product!
    delete (id: ID!): Boolean
  }
`;

export default typeDefs