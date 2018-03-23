# GraphQL Schema (v1)

This project contains the GraphQL schema definition. It is not feature-complete yet.


## Changelogs (most recent to oldest)

### 2018-03-23

* Added `ActionActivityTypeType` enum
* Added `ActionCompletionStatusType` enum
* Added `ActionFormTypeType` enum
* Added `ActionPriorityType` enum
* Added `ActionReDayType` enum
* Added `ActionReModeType` enum
* Added `ActionReNthDayType` enum
* Added `ActionReNthWhenType` enum
* Added `ActionReRecurrenceType` enum
* Added `ActionReYearMonthType` enum
* Added `ActionSequenceTypeType` enum

### 2017-05-17

* Added `abbreviation` field to `OrganizationContact` type
* Field `initials` now only belongs to `IndividualContact` type
* Root query `fieldValues` argument `type` is now mandatory (non-null)
* Field `country` in `Address` is now of type `String` instead of `FieldValue`
* Added `EMAIL_TYPE` to `FieldValueType` enum
* Added `ADDRESS_CITY` to `FieldValueType` enum


### 2017-05-02

* Splitted `Contact` type in two distinct types: `OrganizationContact` and `IndividualContact`.
* `Contact` was made into an interface implemented by `OrganizationContact` and `IndividualContact`.
* Removed `isOrganization` from `Contact` entity.
* Modified `Contact` interface:
	- Remaining fields: `contactType`, `categories`, `referredBy`, `addresses`, `phones`, `emails`, `activities`, `plans`, `policies`, `creationDate`, `lastUpdateDate`, `rank`, and `distributionLists`.
	- Added fields `websites`, `notes`, and `initials`
* Added `IndividualContact` type:
	- Implements interface `Contact`
	- Added fields `greeting`, `websites`, `notes`, and `intials`
	- Field `hobbies` can no longer return null (returns an empty array instead)
* Added `OrganizationContact` type:
	- Implements interface `Contact`
	- Added fields `websites`, `notes`, and `initials`
* Modified `Address` type:
	- Added fields `dateSince`, and `city`
	- Field `country` is now a `FieldValue`
* Modified `Phone` type:
	- Added field `extension`
* Modified `Activity` type:
	- Renamed field `alarmDelay` with `reminderDelay`
	- Renamed field `description` with `notes`
	- Added field `hasReminder`
	- Altered `startDate` and `endDate` fields:
		- `startDate` and `endDate` now only contains the date
		- `startTime` and `endTime` only contains the time
		- `startDateTime` and `endDateTime` now contains the date & time
* Added type `Website`
* Added scalar type `Time` (format: hh:ii (example: 23:58))
* Added a new `FieldValueType` enum entry: `ADDRESS_COUNTRY` for fetching existing countries
* Added optional `filters` argument to root query `fieldValues` field. 
* Added input type `FieldValueFilter` for describing a filter applied to the root field value query.
	- The `locale` field inside is required in order to know which label to filter with.


### 2017-04-25

* Removed `contact` field from type `Activity` (cannot handle recursion as of now).
* Added contact segments to `FieldValueType` enum, defined by `CONTACT_SEGMENT_1`, `CONTACT_SEGMENT_2`, `CONTACT_SEGMENT_3`, `CONTACT_SEGMENT_4`, `CONTACT_SEGMENT_5`, and `CONTACT_SEGMENT_6`
* Added `corporationName` field to type `Contact`.

### 2017-04-10

* Added new field `isOrganization` to type `Contact` (individual if false, organization if true).
* The enumeration `ContactType` now contains either `CUS` or `OTHER` instead of its former values.

### 2017-03-17

* Added `InterestCompoundFrequency` and `InterestInstallmentMode` enums.
* Added fields `initialAmount`, `initialAmountDate`, `compound`, `interestInstallmentMode`, and `interestRates` to `PlanAccount` type.
* Added `InterestRate` type.


