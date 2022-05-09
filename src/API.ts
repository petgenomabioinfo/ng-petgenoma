/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userID: string,
  username: string,
};

export type ModelUserConditionInput = {
  userID?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  userID?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateKitInput = {
  id?: string | null,
  kitNb: string,
  kitType: string,
  kitID: string,
};

export type ModelKitConditionInput = {
  kitNb?: ModelStringInput | null,
  kitType?: ModelStringInput | null,
  kitID?: ModelIDInput | null,
  and?: Array< ModelKitConditionInput | null > | null,
  or?: Array< ModelKitConditionInput | null > | null,
  not?: ModelKitConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateKitInput = {
  id: string,
  kitNb?: string | null,
  kitType?: string | null,
  kitID?: string | null,
};

export type DeleteKitInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelKitFilterInput = {
  id?: ModelIDInput | null,
  kitNb?: ModelStringInput | null,
  kitType?: ModelStringInput | null,
  kitID?: ModelIDInput | null,
  and?: Array< ModelKitFilterInput | null > | null,
  or?: Array< ModelKitFilterInput | null > | null,
  not?: ModelKitFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateKitMutationVariables = {
  input: CreateKitInput,
  condition?: ModelKitConditionInput | null,
};

export type CreateKitMutation = {
  createKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateKitMutationVariables = {
  input: UpdateKitInput,
  condition?: ModelKitConditionInput | null,
};

export type UpdateKitMutation = {
  updateKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteKitMutationVariables = {
  input: DeleteKitInput,
  condition?: ModelKitConditionInput | null,
};

export type DeleteKitMutation = {
  deleteKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetKitQueryVariables = {
  id: string,
};

export type GetKitQuery = {
  getKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListKitsQueryVariables = {
  filter?: ModelKitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKitsQuery = {
  listKits:  {
    __typename: "ModelKitConnection",
    items:  Array< {
      __typename: "Kit",
      id: string,
      kitNb: string,
      kitType: string,
      kitID: string,
      user:  {
        __typename: "User",
        id: string,
        userID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    kits:  {
      __typename: "ModelKitConnection",
      items:  Array< {
        __typename: "Kit",
        id: string,
        kitNb: string,
        kitType: string,
        kitID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateKitSubscription = {
  onCreateKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateKitSubscription = {
  onUpdateKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteKitSubscription = {
  onDeleteKit:  {
    __typename: "Kit",
    id: string,
    kitNb: string,
    kitType: string,
    kitID: string,
    user:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      kits:  {
        __typename: "ModelKitConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
