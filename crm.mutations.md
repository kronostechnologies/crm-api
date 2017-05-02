# Contacts

```
type BaseContact {
	firstName: String,
	lastName: String,
	corporationName: String,
	middleName: String,

	contactType: ContactType!,
	isOrganization: bool!,

	smoker: bool, 
	smokerEndDate: Date,

	civilStatus: ID,
	civilStatusSince: Date,

	territory: ID,

	seg1: ID,
	seg2: ID,
	seg3: ID,
	seg4: ID,
	seg5: ID,
	seg6: ID,

	gender: Gender,

	birthDate: Date,

	clientNb: String
}
```

* createContact(clientMutationId: String, batchId: String!): Contact

* selectContact(clientMutationId: String, batchId: String!, id: ID!): Contact

* setBaseContact(clientMutationId: String, batchId: String!, contact: BaseContact!): Contact

* setContactJob(batchId: String!, jobBatchId: String!)

* addCategory(batchId: String!, categoryId: ID!)
* removeCategory(batchId: String!, categoryId: ID!)
* setCategories(batchId: String!, categoriesIds: [ID!]!)

* addDistributionList(batchId: String!, distributionListId: ID!)
* removeDistributionList(batchId: String!, distributionListId: ID!)
* setDistributionLists(batchId: String!, distributionListsIds: [ID!]!)

* addHobby(batchId: String!, hobbyId: ID!)
* removeHobby(batchId: String!, hobbyId: ID!)
* setHobbies(batchId: String!, hobbiesIds: [ID!]!)

* addIndustry(batchId: String!, industryId: ID!)
* removeIndustry(batchId: String!, industryId: ID!)
* setIndustries(batchId: String!, industriesIds: [ID!]!)

* removePicture(batchId: String!)
* setPictureURL(batchId: String!, url: String)

* addAddress(batchId: String!, addressBatchId: String!)
* removeAddress(batchId: String!, addressBatchId: String!)

* addPhone(batchId: String!, phoneBatchId: String!)
* removePhone(batchId: String!, phoneBatchId: String!)

* addEmail(batchId: String!, emailBatchId: String!)
* removeEmail(batchId: String!, emailBatchId: String!)

* addActivity(batchId: String!, activityBatchId: String!)
* removeActivity(batchId: String!, activityBatchId: String!)

* ToDo: Plans
* ToDo: Policies


# Jobs

```
type BaseJob {
	occupation: String,

	employer: String
}
```

* createJob(clientMutationId: String, batchId: String!)

* selectJob(clientMutationId: String, batchId: String!, id: ID!)

* setBaseJob(clientMutationId: String, batchId: String!, job: BaseJob!)


# Addresses

```
type BaseAddress {
	main: Boolean!,
	postal: Boolean!,
	type: ID!,

	line1: String!,
	line2: String,

	stateProvince: String,
	country: String,
	postalCode: String
}
```

* createAddress(clientMutationId: String, batchId: String!)

* selectAddress(clientMutationId: String, batchId: String!, id: ID!)

* setBaseAddress(clientMutationId: String, batchId: String!, id: BaseAddress!)


# Phones

```
type BasePhone {
	main: Boolean!,
	type: ID!,

	number: String!,
	longDistance: Boolean,

	notes: String
}
```

* createPhone(clientMutationId: String, batchId: String!)

* selectPhone(clientMutationId: String, batchId: String!, id: ID!)

* setBasePhone(clientMutationId: String, batchId: String!, phone: BasePhone!)


# Emails

```
type BaseEmail {
	main: Boolean!,
	type: ID!,

	email: String!,

	notes: String
}
```

* createEmail(clientMutationId: String, batchId: String!)

* selectEmail(clientMutationId: String, batchId: String!, id: ID!)

* setBaseEmail(clientMutationId: String, batchId: String!, id: ID!)


# Activity

```
type BaseActivity {
	isCompleted: Boolean!,

	type: ActivityType!,

	subject: String!,

	startDate: Date,
	endDate: Date,

	startTime: Time,
	endTime: Time
}
```

* createActivity(clientMutationId: String, batchId: String!)

* selectActivity(clientMutationId: String, batchId: String!, id: ID!)

* setBaseActivity(clientMutationId: String, batchId: String!, activity: BaseActivity!)