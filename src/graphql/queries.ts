/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userID
      username
      kits {
        items {
          id
          kitNb
          kitType
          kitID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        username
        kits {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKit = /* GraphQL */ `
  query GetKit($id: ID!) {
    getKit(id: $id) {
      id
      kitNb
      kitType
      kitID
      user {
        id
        userID
        username
        kits {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listKits = /* GraphQL */ `
  query ListKits(
    $filter: ModelKitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        kitNb
        kitType
        kitID
        user {
          id
          userID
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
