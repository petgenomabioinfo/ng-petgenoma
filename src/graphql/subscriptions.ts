/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateKit = /* GraphQL */ `
  subscription OnCreateKit {
    onCreateKit {
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
export const onUpdateKit = /* GraphQL */ `
  subscription OnUpdateKit {
    onUpdateKit {
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
export const onDeleteKit = /* GraphQL */ `
  subscription OnDeleteKit {
    onDeleteKit {
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
