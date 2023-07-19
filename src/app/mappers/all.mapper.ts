import { GetUserQuery, GetDogQuery, UpdateUserInput, CreateDogInput, CreateKitInput, ListDogsQuery, ListKitsQuery } from '../API.service';
import { UserFront, DogFront, KitFront } from '../models/all.model';

export function mapUserAPItoFront(userAPI: GetUserQuery): UserFront {
	return {
		id: userAPI.id? userAPI.id : null,
		firstname: userAPI.firstname? userAPI.firstname : null,
		lastname: userAPI.lastname? userAPI.lastname : null,
		street: userAPI.street?	userAPI.street : null,
		city: userAPI.city? userAPI.city : null,
		postalCode: userAPI.postalCode? userAPI.postalCode : null,
		country: userAPI.country? userAPI.country : null,
		phoneNb: userAPI.phoneNb? userAPI.phoneNb : null,
		email: userAPI.email? userAPI.email : null,
		researchAuthorization: userAPI.researchAuthorization? userAPI.researchAuthorization : null,
		surveyAuthorization: userAPI.surveyAuthorization? userAPI.surveyAuthorization : null
	};
}

export function mapDogAPItoFront(dogAPI: any): DogFront {
	return {
		id: dogAPI.id? dogAPI.id : null,
		name: dogAPI.name? dogAPI.name : null,
		breed: dogAPI.breed? dogAPI.breed : null,
		gender: dogAPI.gender? dogAPI.gender : null,
		age: dogAPI.age? dogAPI.age : null,
		microchip: dogAPI.microchip? dogAPI.microchip : null,
		conditions: dogAPI.conditions? dogAPI.conditions : null,
		userDogsId: dogAPI.userDogsId? dogAPI.userDogsId : null
	};
}

export function mapListDogsAPItoFront(dogsAPI: ListDogsQuery): DogFront[] {
	const dogsFront: DogFront[] = [];
	for (const dogAPI of dogsAPI.items) {
		dogsFront.push(mapDogAPItoFront(dogAPI));
	}
	return dogsFront;
}

export function mapKitAPItoFront(kitAPI: any): KitFront {
	return {
		id: kitAPI.id? kitAPI.id : null,
		kitType: kitAPI.kitType? kitAPI.kitType : null,
		kitBatchNb: kitAPI.kitBatchNb? kitAPI.kitBatchNb : null,
		processStatus: kitAPI.processStatus? kitAPI.processStatus : null,
		registrationDate: kitAPI.registrationDate? kitAPI.registrationDate : null,
		collectionDate: kitAPI.collecionDate? kitAPI.collecionDate : null,
		dogKitsId: kitAPI.dogKitsId? kitAPI.dogKitsId : null,
		petName: kitAPI.dog.name? kitAPI.dog.name : null,
		userKitsId: kitAPI.userKitsId? kitAPI.userKitsId : null
	};
}

export function mapListKitsAPItoFront(kitAPI: ListKitsQuery): KitFront[] {
	const kitsFront: KitFront[] = [];
	for (const kitsAPI of kitAPI.items) {
		kitsFront.push(mapKitAPItoFront(kitsAPI));
	}
	return kitsFront;
}

export function mapUserFrontToAPI(userFront: UserFront): UpdateUserInput {
	const user: UpdateUserInput = {
		id: userFront.id? userFront.id : null,
		firstname: userFront.firstname? userFront.firstname : null,
		lastname: userFront.lastname? userFront.lastname : null,
		street: userFront.street? userFront.street : null,
		city: userFront.city? userFront.city : null,
		postalCode: userFront.postalCode? userFront.postalCode : null,
		country: userFront.country? userFront.country : null,
		phoneNb: userFront.phoneNb? userFront.phoneNb : null,
		email: userFront.email? userFront.email : null,
		researchAuthorization: userFront.researchAuthorization? userFront.researchAuthorization : null,
		surveyAuthorization: userFront.surveyAuthorization? userFront.surveyAuthorization : null
	};
	console.log(user);
	return user;
}

export function mapDogFronttoAPI(dogFront: DogFront): CreateDogInput {
	return {
		id: dogFront.id? dogFront.id : null,
		name: dogFront.name? dogFront.name : null,
		breed: dogFront.breed? dogFront.breed : null,
		gender: dogFront.gender? dogFront.gender : null,
		age: dogFront.age? dogFront.age : null,
		microchip: dogFront.microchip? dogFront.microchip : null,
		conditions: dogFront.conditions? dogFront.conditions : null,
		userDogsId: dogFront.userDogsId? dogFront.userDogsId : null
	};
}

export function mapKitFrontToAPI(kitFront: KitFront): CreateKitInput {
	return {
		id: kitFront.id? kitFront.id : null,
		kitType: kitFront.kitType? kitFront.kitType : null,
		kitBatchNb: kitFront.kitBatchNb? kitFront.kitBatchNb : null,
		processStatus: kitFront.processStatus? kitFront.processStatus : null,
		registrationDate: kitFront.registrationDate? kitFront.registrationDate : null,
		collecionDate: kitFront.collectionDate? kitFront.collectionDate : null,
		dogKitsId: kitFront.dogKitsId? kitFront.dogKitsId : null,
		userKitsId: kitFront.userKitsId? kitFront.userKitsId : null
	};
}

