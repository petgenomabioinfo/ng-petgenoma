export class UserFront {
  constructor (
	public id: string,
	public firstname: string,
	public lastname: string,
	public street: string,
	public city: string,
	public postalCode: string,
	public country: string,
	public phoneNb: string,
	public email: string,
	public researchAuthorization: string,
	public surveyAuthorization: string,
  ) {
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.street = street;
	this.city = city;
	this.postalCode = postalCode;
	this.country = country;
	this.phoneNb = phoneNb;
	this.email = email;
	this.researchAuthorization = researchAuthorization;
	this.surveyAuthorization = surveyAuthorization;
  }
}

export class DogFront {
  constructor (
  public id: string,
  public name: string,
  public breed: string,
  public gender: string,
  public age: string,
  public microchip: string,
  public conditions: string,
  public userDogsId: string
  ) {
	this.id = id;
	this.name = name;
	this.breed = breed;
	this.gender = gender;
	this.age = age;
	this.microchip = microchip;
	this.conditions = conditions;
	this.userDogsId = userDogsId;
  }
}

export class KitFront {
  constructor (
  public id: string,
  public kitType: string,
  public kitBatchNb: string,
  public processStatus: string,
  public registrationDate: string,
  public collectionDate: string,
  public dogKitsId: string,
  public petName: string,
  public userKitsId: string
  ) {
	this.id = id;
	this.kitType = kitType;
	this.kitBatchNb = kitBatchNb;
	this.processStatus = processStatus;
	this.registrationDate = registrationDate;
	this.collectionDate = collectionDate;
	this.dogKitsId = dogKitsId;
	this.petName = petName;
	this.userKitsId = userKitsId;
  }
}