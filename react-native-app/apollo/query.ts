import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query Products($productsLimit2: Int, $productsPage2: Int) {
  products(limit: $productsLimit2, page: $productsPage2) {
    count
    data {
      amount
      currency
      id
      imageUrl
      name
      price
    }
    page
    limit
  }
}
`;