# GraphQL Schema (v1)

This project contains the GraphQL schema definition. It is not feature-complete yet.


## Changelogs (most recent to oldest)

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


