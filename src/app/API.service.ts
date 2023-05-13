/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import { API, graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  id?: string | null;
  username: string;
  phoneNb: string;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  phoneNb?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  phoneNb?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateKitInput = {
  id?: string | null;
  kitType: string;
  userID: string;
  kitBatchNb?: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
};

export type ModelKitConditionInput = {
  kitType?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  kitBatchNb?: ModelStringInput | null;
  processStatus?: ModelStringInput | null;
  registrationDate?: ModelStringInput | null;
  petName?: ModelStringInput | null;
  and?: Array<ModelKitConditionInput | null> | null;
  or?: Array<ModelKitConditionInput | null> | null;
  not?: ModelKitConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateKitInput = {
  id: string;
  kitType?: string | null;
  userID?: string | null;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate?: string | null;
  petName?: string | null;
};

export type DeleteKitInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  phoneNb?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelKitFilterInput = {
  id?: ModelIDInput | null;
  kitType?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  kitBatchNb?: ModelStringInput | null;
  processStatus?: ModelStringInput | null;
  registrationDate?: ModelStringInput | null;
  petName?: ModelStringInput | null;
  and?: Array<ModelKitFilterInput | null> | null;
  or?: Array<ModelKitFilterInput | null> | null;
  not?: ModelKitFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateKitMutation = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateKitMutation = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteKitMutation = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    phoneNb: string;
    kits: {
      __typename: "ModelKitConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetKitQuery = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

export type ListKitsQuery = {
  __typename: "ModelKitConnection";
  items: Array<{
    __typename: "Kit";
    id: string;
    kitType: string;
    userID: string;
    kitBatchNb: string | null;
    processStatus: string;
    registrationDate: string;
    petName: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  phoneNb: string;
  kits: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      userID: string;
      kitBatchNb: string | null;
      processStatus: string;
      registrationDate: string;
      petName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateKitSubscription = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateKitSubscription = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteKitSubscription = {
  __typename: "Kit";
  id: string;
  kitType: string;
  userID: string;
  kitBatchNb: string | null;
  processStatus: string;
  registrationDate: string;
  petName: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateKit(
    input: CreateKitInput,
    condition?: ModelKitConditionInput
  ): Promise<CreateKitMutation> {
    const statement = `mutation CreateKit($input: CreateKitInput!, $condition: ModelKitConditionInput) {
        createKit(input: $input, condition: $condition) {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateKitMutation>response.data.createKit;
  }
  async UpdateKit(
    input: UpdateKitInput,
    condition?: ModelKitConditionInput
  ): Promise<UpdateKitMutation> {
    const statement = `mutation UpdateKit($input: UpdateKitInput!, $condition: ModelKitConditionInput) {
        updateKit(input: $input, condition: $condition) {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateKitMutation>response.data.updateKit;
  }
  async DeleteKit(
    input: DeleteKitInput,
    condition?: ModelKitConditionInput
  ): Promise<DeleteKitMutation> {
    const statement = `mutation DeleteKit($input: DeleteKitInput!, $condition: ModelKitConditionInput) {
        deleteKit(input: $input, condition: $condition) {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteKitMutation>response.data.deleteKit;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            phoneNb
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetKit(id: string): Promise<GetKitQuery> {
    const statement = `query GetKit($id: ID!) {
        getKit(id: $id) {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetKitQuery>response.data.getKit;
  }
  async ListKits(
    filter?: ModelKitFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListKitsQuery> {
    const statement = `query ListKits($filter: ModelKitFilterInput, $limit: Int, $nextToken: String) {
        listKits(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            kitType
            userID
            kitBatchNb
            processStatus
            registrationDate
            petName
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListKitsQuery>response.data.listKits;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          phoneNb
          kits {
            __typename
            items {
              __typename
              id
              kitType
              userID
              kitBatchNb
              processStatus
              registrationDate
              petName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateKitListener: Observable<OnCreateKitSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateKit {
        onCreateKit {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateKitSubscription>;

  OnUpdateKitListener: Observable<OnUpdateKitSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateKit {
        onUpdateKit {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateKitSubscription>;

  OnDeleteKitListener: Observable<OnDeleteKitSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteKit {
        onDeleteKit {
          __typename
          id
          kitType
          userID
          kitBatchNb
          processStatus
          registrationDate
          petName
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteKitSubscription>;
}
