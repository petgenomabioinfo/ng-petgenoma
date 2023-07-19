/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateDog: OnCreateDogSubscription;
  onUpdateDog: OnUpdateDogSubscription;
  onDeleteDog: OnDeleteDogSubscription;
  onCreateKit: OnCreateKitSubscription;
  onUpdateKit: OnUpdateKitSubscription;
  onDeleteKit: OnDeleteKitSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
};

export type ModelUserConditionInput = {
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  phoneNb?: ModelStringInput | null;
  email?: ModelStringInput | null;
  street?: ModelStringInput | null;
  city?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  country?: ModelStringInput | null;
  researchAuthorization?: ModelStringInput | null;
  surveyAuthorization?: ModelStringInput | null;
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

export type User = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: ModelDogConnection | null;
  kits?: ModelKitConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelDogConnection = {
  __typename: "ModelDogConnection";
  items: Array<Dog | null>;
  nextToken?: string | null;
};

export type Dog = {
  __typename: "Dog";
  id: string;
  kits?: ModelKitConnection | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: User;
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type ModelKitConnection = {
  __typename: "ModelKitConnection";
  items: Array<Kit | null>;
  nextToken?: string | null;
};

export type Kit = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: Dog;
  user: User;
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type UpdateUserInput = {
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email?: string | null;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateDogInput = {
  id?: string | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  userDogsId?: string | null;
};

export type ModelDogConditionInput = {
  name?: ModelStringInput | null;
  breed?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  age?: ModelStringInput | null;
  microchip?: ModelStringInput | null;
  conditions?: ModelStringInput | null;
  and?: Array<ModelDogConditionInput | null> | null;
  or?: Array<ModelDogConditionInput | null> | null;
  not?: ModelDogConditionInput | null;
  userDogsId?: ModelIDInput | null;
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

export type UpdateDogInput = {
  id: string;
  name?: string | null;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  userDogsId?: string | null;
};

export type DeleteDogInput = {
  id: string;
};

export type CreateKitInput = {
  id?: string | null;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type ModelKitConditionInput = {
  kitType?: ModelStringInput | null;
  kitBatchNb?: ModelStringInput | null;
  processStatus?: ModelStringInput | null;
  registrationDate?: ModelStringInput | null;
  collecionDate?: ModelStringInput | null;
  and?: Array<ModelKitConditionInput | null> | null;
  or?: Array<ModelKitConditionInput | null> | null;
  not?: ModelKitConditionInput | null;
  userKitsId?: ModelIDInput | null;
  dogKitsId?: ModelIDInput | null;
};

export type UpdateKitInput = {
  id: string;
  kitType?: string | null;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate?: string | null;
  collecionDate?: string | null;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type DeleteKitInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  phoneNb?: ModelStringInput | null;
  email?: ModelStringInput | null;
  street?: ModelStringInput | null;
  city?: ModelStringInput | null;
  postalCode?: ModelStringInput | null;
  country?: ModelStringInput | null;
  researchAuthorization?: ModelStringInput | null;
  surveyAuthorization?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelDogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  breed?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  age?: ModelStringInput | null;
  microchip?: ModelStringInput | null;
  conditions?: ModelStringInput | null;
  and?: Array<ModelDogFilterInput | null> | null;
  or?: Array<ModelDogFilterInput | null> | null;
  not?: ModelDogFilterInput | null;
  userDogsId?: ModelIDInput | null;
};

export type ModelKitFilterInput = {
  id?: ModelIDInput | null;
  kitType?: ModelStringInput | null;
  kitBatchNb?: ModelStringInput | null;
  processStatus?: ModelStringInput | null;
  registrationDate?: ModelStringInput | null;
  collecionDate?: ModelStringInput | null;
  and?: Array<ModelKitFilterInput | null> | null;
  or?: Array<ModelKitFilterInput | null> | null;
  not?: ModelKitFilterInput | null;
  userKitsId?: ModelIDInput | null;
  dogKitsId?: ModelIDInput | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstname?: ModelSubscriptionStringInput | null;
  lastname?: ModelSubscriptionStringInput | null;
  phoneNb?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  street?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  postalCode?: ModelSubscriptionStringInput | null;
  country?: ModelSubscriptionStringInput | null;
  researchAuthorization?: ModelSubscriptionStringInput | null;
  surveyAuthorization?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionDogFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  breed?: ModelSubscriptionStringInput | null;
  gender?: ModelSubscriptionStringInput | null;
  age?: ModelSubscriptionStringInput | null;
  microchip?: ModelSubscriptionStringInput | null;
  conditions?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDogFilterInput | null> | null;
  or?: Array<ModelSubscriptionDogFilterInput | null> | null;
};

export type ModelSubscriptionKitFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  kitType?: ModelSubscriptionStringInput | null;
  kitBatchNb?: ModelSubscriptionStringInput | null;
  processStatus?: ModelSubscriptionStringInput | null;
  registrationDate?: ModelSubscriptionStringInput | null;
  collecionDate?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionKitFilterInput | null> | null;
  or?: Array<ModelSubscriptionKitFilterInput | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDogMutation = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type UpdateDogMutation = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type DeleteDogMutation = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type CreateKitMutation = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type UpdateKitMutation = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type DeleteKitMutation = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetDogQuery = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type ListDogsQuery = {
  __typename: "ModelDogConnection";
  items: Array<{
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetKitQuery = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type ListKitsQuery = {
  __typename: "ModelKitConnection";
  items: Array<{
    __typename: "Kit";
    id: string;
    kitType: string;
    kitBatchNb?: string | null;
    processStatus?: string | null;
    registrationDate: string;
    collecionDate?: string | null;
    dog: {
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    };
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userKitsId?: string | null;
    dogKitsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  phoneNb?: string | null;
  email: string;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  researchAuthorization?: string | null;
  surveyAuthorization?: string | null;
  dogs?: {
    __typename: "ModelDogConnection";
    items: Array<{
      __typename: "Dog";
      id: string;
      name: string;
      breed?: string | null;
      gender?: string | null;
      age?: string | null;
      microchip?: string | null;
      conditions?: string | null;
      createdAt: string;
      updatedAt: string;
      userDogsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDogSubscription = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type OnUpdateDogSubscription = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type OnDeleteDogSubscription = {
  __typename: "Dog";
  id: string;
  kits?: {
    __typename: "ModelKitConnection";
    items: Array<{
      __typename: "Kit";
      id: string;
      kitType: string;
      kitBatchNb?: string | null;
      processStatus?: string | null;
      registrationDate: string;
      collecionDate?: string | null;
      createdAt: string;
      updatedAt: string;
      userKitsId?: string | null;
      dogKitsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  name: string;
  breed?: string | null;
  gender?: string | null;
  age?: string | null;
  microchip?: string | null;
  conditions?: string | null;
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userDogsId?: string | null;
};

export type OnCreateKitSubscription = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type OnUpdateKitSubscription = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
};

export type OnDeleteKitSubscription = {
  __typename: "Kit";
  id: string;
  kitType: string;
  kitBatchNb?: string | null;
  processStatus?: string | null;
  registrationDate: string;
  collecionDate?: string | null;
  dog: {
    __typename: "Dog";
    id: string;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    name: string;
    breed?: string | null;
    gender?: string | null;
    age?: string | null;
    microchip?: string | null;
    conditions?: string | null;
    user: {
      __typename: "User";
      id: string;
      firstname?: string | null;
      lastname?: string | null;
      phoneNb?: string | null;
      email: string;
      street?: string | null;
      city?: string | null;
      postalCode?: string | null;
      country?: string | null;
      researchAuthorization?: string | null;
      surveyAuthorization?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    userDogsId?: string | null;
  };
  user: {
    __typename: "User";
    id: string;
    firstname?: string | null;
    lastname?: string | null;
    phoneNb?: string | null;
    email: string;
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
    researchAuthorization?: string | null;
    surveyAuthorization?: string | null;
    dogs?: {
      __typename: "ModelDogConnection";
      nextToken?: string | null;
    } | null;
    kits?: {
      __typename: "ModelKitConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  userKitsId?: string | null;
  dogKitsId?: string | null;
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
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
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
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
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
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
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
  async CreateDog(
    input: CreateDogInput,
    condition?: ModelDogConditionInput
  ): Promise<CreateDogMutation> {
    const statement = `mutation CreateDog($input: CreateDogInput!, $condition: ModelDogConditionInput) {
        createDog(input: $input, condition: $condition) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
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
    return <CreateDogMutation>response.data.createDog;
  }
  async UpdateDog(
    input: UpdateDogInput,
    condition?: ModelDogConditionInput
  ): Promise<UpdateDogMutation> {
    const statement = `mutation UpdateDog($input: UpdateDogInput!, $condition: ModelDogConditionInput) {
        updateDog(input: $input, condition: $condition) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
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
    return <UpdateDogMutation>response.data.updateDog;
  }
  async DeleteDog(
    input: DeleteDogInput,
    condition?: ModelDogConditionInput
  ): Promise<DeleteDogMutation> {
    const statement = `mutation DeleteDog($input: DeleteDogInput!, $condition: ModelDogConditionInput) {
        deleteDog(input: $input, condition: $condition) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
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
    return <DeleteDogMutation>response.data.deleteDog;
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
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
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
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
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
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
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
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
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
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
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
  async GetDog(id: string): Promise<GetDogQuery> {
    const statement = `query GetDog($id: ID!) {
        getDog(id: $id) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDogQuery>response.data.getDog;
  }
  async ListDogs(
    filter?: ModelDogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDogsQuery> {
    const statement = `query ListDogs($filter: ModelDogFilterInput, $limit: Int, $nextToken: String) {
        listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
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
    return <ListDogsQuery>response.data.listDogs;
  }
  async GetKit(id: string): Promise<GetKitQuery> {
    const statement = `query GetKit($id: ID!) {
        getKit(id: $id) {
          __typename
          id
          kitType
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
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
            kitBatchNb
            processStatus
            registrationDate
            collecionDate
            dog {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userKitsId
            dogKitsId
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
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          firstname
          lastname
          phoneNb
          email
          street
          city
          postalCode
          country
          researchAuthorization
          surveyAuthorization
          dogs {
            __typename
            items {
              __typename
              id
              name
              breed
              gender
              age
              microchip
              conditions
              createdAt
              updatedAt
              userDogsId
            }
            nextToken
          }
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateDogListener(
    filter?: ModelSubscriptionDogFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDog">>
  > {
    const statement = `subscription OnCreateDog($filter: ModelSubscriptionDogFilterInput) {
        onCreateDog(filter: $filter) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDog">>
    >;
  }

  OnUpdateDogListener(
    filter?: ModelSubscriptionDogFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDog">>
  > {
    const statement = `subscription OnUpdateDog($filter: ModelSubscriptionDogFilterInput) {
        onUpdateDog(filter: $filter) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDog">>
    >;
  }

  OnDeleteDogListener(
    filter?: ModelSubscriptionDogFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDog">>
  > {
    const statement = `subscription OnDeleteDog($filter: ModelSubscriptionDogFilterInput) {
        onDeleteDog(filter: $filter) {
          __typename
          id
          kits {
            __typename
            items {
              __typename
              id
              kitType
              kitBatchNb
              processStatus
              registrationDate
              collecionDate
              createdAt
              updatedAt
              userKitsId
              dogKitsId
            }
            nextToken
          }
          name
          breed
          gender
          age
          microchip
          conditions
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userDogsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDog">>
    >;
  }

  OnCreateKitListener(
    filter?: ModelSubscriptionKitFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateKit">>
  > {
    const statement = `subscription OnCreateKit($filter: ModelSubscriptionKitFilterInput) {
        onCreateKit(filter: $filter) {
          __typename
          id
          kitType
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateKit">>
    >;
  }

  OnUpdateKitListener(
    filter?: ModelSubscriptionKitFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateKit">>
  > {
    const statement = `subscription OnUpdateKit($filter: ModelSubscriptionKitFilterInput) {
        onUpdateKit(filter: $filter) {
          __typename
          id
          kitType
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateKit">>
    >;
  }

  OnDeleteKitListener(
    filter?: ModelSubscriptionKitFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteKit">>
  > {
    const statement = `subscription OnDeleteKit($filter: ModelSubscriptionKitFilterInput) {
        onDeleteKit(filter: $filter) {
          __typename
          id
          kitType
          kitBatchNb
          processStatus
          registrationDate
          collecionDate
          dog {
            __typename
            id
            kits {
              __typename
              nextToken
            }
            name
            breed
            gender
            age
            microchip
            conditions
            user {
              __typename
              id
              firstname
              lastname
              phoneNb
              email
              street
              city
              postalCode
              country
              researchAuthorization
              surveyAuthorization
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            userDogsId
          }
          user {
            __typename
            id
            firstname
            lastname
            phoneNb
            email
            street
            city
            postalCode
            country
            researchAuthorization
            surveyAuthorization
            dogs {
              __typename
              nextToken
            }
            kits {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          userKitsId
          dogKitsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteKit">>
    >;
  }
}
