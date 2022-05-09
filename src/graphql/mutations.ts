/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createKit = /* GraphQL */ `
  mutation CreateKit(
    $input: CreateKitInput!
    $condition: ModelKitConditionInput
  ) {
    createKit(input: $input, condition: $condition) {
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
export const updateKit = /* GraphQL */ `
  mutation UpdateKit(
    $input: UpdateKitInput!
    $condition: ModelKitConditionInput
  ) {
    updateKit(input: $input, condition: $condition) {
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
export const deleteKit = /* GraphQL */ `
  mutation DeleteKit(
    $input: DeleteKitInput!
    $condition: ModelKitConditionInput
  ) {
    deleteKit(input: $input, condition: $condition) {
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
