# infusionsoft_rest_api

InfusionsoftRestApi - JavaScript client for infusionsoft_rest_api
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: V1.0
- Package version: V1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://developer.infusionsoft.com/get-support/](https://developer.infusionsoft.com/get-support/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install infusionsoft_rest_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/infusionsoft_rest_api
then install it via:

```shell
    npm install YOUR_USERNAME/infusionsoft_rest_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var api = new InfusionsoftRestApi.AppointmentApi()

var opts = { 
  'since': "since_example", // {String} Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // {String} Date to search to ex. `2017-01-01T22:17:59.039Z`
  'limit': 56, // {Number} Sets a total of items to return
  'offset': 56 // {Number} Sets a beginning range of items to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.appointmentsUsingGET(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*InfusionsoftRestApi.AppointmentApi* | [**appointmentsUsingGET**](docs/AppointmentApi.md#appointmentsUsingGET) | **GET** /appointments | List Appointments
*InfusionsoftRestApi.AppointmentApi* | [**createAppointmentUsingPOST**](docs/AppointmentApi.md#createAppointmentUsingPOST) | **POST** /appointments | Create an Appointment
*InfusionsoftRestApi.AppointmentApi* | [**loadAppointmentUsingGET**](docs/AppointmentApi.md#loadAppointmentUsingGET) | **GET** /appointments/{appointmentId} | Retrieve an Appointment
*InfusionsoftRestApi.AppointmentApi* | [**removeAppointmentUsingDELETE**](docs/AppointmentApi.md#removeAppointmentUsingDELETE) | **DELETE** /appointments/{appointmentId} | Delete an Appointment
*InfusionsoftRestApi.AppointmentApi* | [**replaceAppointmentUsingPUT**](docs/AppointmentApi.md#replaceAppointmentUsingPUT) | **PUT** /appointments/{appointmentId} | Replace an Appointment
*InfusionsoftRestApi.AppointmentApi* | [**searchUsingGET**](docs/AppointmentApi.md#searchUsingGET) | **GET** /appointments/search | Search Appointments
*InfusionsoftRestApi.AppointmentApi* | [**syncUsingGET**](docs/AppointmentApi.md#syncUsingGET) | **GET** /appointments/sync | Retrieve Synced Appointments
*InfusionsoftRestApi.AppointmentApi* | [**updateAppointmentUsingPATCH**](docs/AppointmentApi.md#updateAppointmentUsingPATCH) | **PATCH** /appointments/{appointmentId} | Update an Appointment
*InfusionsoftRestApi.CampaignApi* | [**addContactsToCampaignSequenceUsingPOST**](docs/CampaignApi.md#addContactsToCampaignSequenceUsingPOST) | **POST** /campaigns/{campaignId}/sequences/{sequenceId}/contacts/{contactId} | Add to Campaign Sequence
*InfusionsoftRestApi.CampaignApi* | [**addContactsToCampaignSequenceUsingPOST1**](docs/CampaignApi.md#addContactsToCampaignSequenceUsingPOST1) | **POST** /campaigns/{campaignId}/sequences/{sequenceId}/contacts | Add Multiple to Campaign Sequence
*InfusionsoftRestApi.CampaignApi* | [**getAllCampaignsUsingGET**](docs/CampaignApi.md#getAllCampaignsUsingGET) | **GET** /campaigns | List Campaigns
*InfusionsoftRestApi.CampaignApi* | [**getCampaignUsingGET**](docs/CampaignApi.md#getCampaignUsingGET) | **GET** /campaigns/{campaignId} | Retrieve a Campaign
*InfusionsoftRestApi.CampaignApi* | [**removeContactsFromCampaignSequenceUsingDELETE**](docs/CampaignApi.md#removeContactsFromCampaignSequenceUsingDELETE) | **DELETE** /campaigns/{campaignId}/sequences/{sequenceId}/contacts/{contactId} | Remove from Campaign Sequence
*InfusionsoftRestApi.CampaignApi* | [**removeContactsFromCampaignSequenceUsingDELETE1**](docs/CampaignApi.md#removeContactsFromCampaignSequenceUsingDELETE1) | **DELETE** /campaigns/{campaignId}/sequences/{sequenceId}/contacts | Remove Multiple from Campaign Sequence
*InfusionsoftRestApi.ContactApi* | [**applyTagsToContactIdUsingPOST**](docs/ContactApi.md#applyTagsToContactIdUsingPOST) | **POST** /contacts/{contactId}/tags | Apply Tags
*InfusionsoftRestApi.ContactApi* | [**createContactUsingPOST**](docs/ContactApi.md#createContactUsingPOST) | **POST** /contacts | Create a Contact
*InfusionsoftRestApi.ContactApi* | [**createOrUpdateContactUsingPUT**](docs/ContactApi.md#createOrUpdateContactUsingPUT) | **PUT** /contacts | Create or Update a Contact
*InfusionsoftRestApi.ContactApi* | [**deleteContactUsingDELETE**](docs/ContactApi.md#deleteContactUsingDELETE) | **DELETE** /contacts/{contactId} | Delete a Contact
*InfusionsoftRestApi.ContactApi* | [**listAppliedTagsUsingGET**](docs/ContactApi.md#listAppliedTagsUsingGET) | **GET** /contacts/{contactId}/tags | List Applied Tags
*InfusionsoftRestApi.ContactApi* | [**listContactsUsingGET**](docs/ContactApi.md#listContactsUsingGET) | **GET** /contacts | List Contacts
*InfusionsoftRestApi.ContactApi* | [**listCustomFieldsUsingGET**](docs/ContactApi.md#listCustomFieldsUsingGET) | **GET** /contactCustomFields | List Contact Custom Fields
*InfusionsoftRestApi.ContactApi* | [**loadUsingGET**](docs/ContactApi.md#loadUsingGET) | **GET** /contacts/{id} | Retrieve a Contact
*InfusionsoftRestApi.ContactApi* | [**removeTagsFromContactUsingDELETE**](docs/ContactApi.md#removeTagsFromContactUsingDELETE) | **DELETE** /contacts/{contactId}/tags/{tagId} | Remove Applied Tag
*InfusionsoftRestApi.ContactApi* | [**removeTagsFromContactUsingDELETE1**](docs/ContactApi.md#removeTagsFromContactUsingDELETE1) | **DELETE** /contacts/{contactId}/tags | Remove Applied Tags
*InfusionsoftRestApi.ContactApi* | [**updateContactUsingPATCH**](docs/ContactApi.md#updateContactUsingPATCH) | **PATCH** /contacts/{contactId} | Update a Contact
*InfusionsoftRestApi.ECommerceApi* | [**loadOrderUsingGET**](docs/ECommerceApi.md#loadOrderUsingGET) | **GET** /orders/{orderId} | Retrieve an Order
*InfusionsoftRestApi.ECommerceApi* | [**searchUsingGET1**](docs/ECommerceApi.md#searchUsingGET1) | **GET** /orders | List Orders
*InfusionsoftRestApi.ECommerceApi* | [**searchUsingGET2**](docs/ECommerceApi.md#searchUsingGET2) | **GET** /transactions | List Transactions
*InfusionsoftRestApi.ECommerceApi* | [**transactionByIdUsingGET**](docs/ECommerceApi.md#transactionByIdUsingGET) | **GET** /transactions/{transactionId} | Retrieve a Transaction
*InfusionsoftRestApi.ECommerceApi* | [**transactionsForOrderUsingGET**](docs/ECommerceApi.md#transactionsForOrderUsingGET) | **GET** /orders/{orderId}/transactions | Retrieve Order Transactions
*InfusionsoftRestApi.OpportunityApi* | [**createOpportunityUsingPOST**](docs/OpportunityApi.md#createOpportunityUsingPOST) | **POST** /opportunities | Create an Opportunity
*InfusionsoftRestApi.OpportunityApi* | [**getOpportunityUsingGET**](docs/OpportunityApi.md#getOpportunityUsingGET) | **GET** /opportunities/{opportunityId} | Retrieve an Opportunity
*InfusionsoftRestApi.OpportunityApi* | [**getStagePipelineUsingGET**](docs/OpportunityApi.md#getStagePipelineUsingGET) | **GET** /opportunity/stage_pipeline | List Opportunity Stage Pipeline
*InfusionsoftRestApi.OpportunityApi* | [**listOpportunitiesUsingGET**](docs/OpportunityApi.md#listOpportunitiesUsingGET) | **GET** /opportunities | List Opportunities
*InfusionsoftRestApi.OpportunityApi* | [**replaceOpportunityUsingPUT**](docs/OpportunityApi.md#replaceOpportunityUsingPUT) | **PUT** /opportunities | Replace an Opportunity
*InfusionsoftRestApi.OpportunityApi* | [**updateOpportunityUsingPATCH**](docs/OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /opportunities/{opportunityId} | Update an Opportunity
*InfusionsoftRestApi.ProductApi* | [**loadProductUsingGET**](docs/ProductApi.md#loadProductUsingGET) | **GET** /products/{productId} | Retrieve a Product
*InfusionsoftRestApi.ProductApi* | [**searchUsingGET3**](docs/ProductApi.md#searchUsingGET3) | **GET** /products/search | List Products
*InfusionsoftRestApi.ProductApi* | [**syncUsingGET1**](docs/ProductApi.md#syncUsingGET1) | **GET** /products/sync | Retrieve Synced Products
*InfusionsoftRestApi.RESTHooksApi* | [**createAHookSubscription**](docs/RESTHooksApi.md#createAHookSubscription) | **POST** /hooks | Create a Hook Subscription
*InfusionsoftRestApi.RESTHooksApi* | [**deleteAHookSubscription**](docs/RESTHooksApi.md#deleteAHookSubscription) | **DELETE** /hooks/{key} | Delete a Hook Subscription
*InfusionsoftRestApi.RESTHooksApi* | [**listHookEventTypes**](docs/RESTHooksApi.md#listHookEventTypes) | **GET** /hooks/event_keys | List Hook Event Types
*InfusionsoftRestApi.RESTHooksApi* | [**listStoredHookSubscriptions**](docs/RESTHooksApi.md#listStoredHookSubscriptions) | **GET** /hooks | List Stored Hook Subscriptions
*InfusionsoftRestApi.RESTHooksApi* | [**retrieveAHookSubscription**](docs/RESTHooksApi.md#retrieveAHookSubscription) | **GET** /hooks/{key} | Retrieve a Hook Subscription
*InfusionsoftRestApi.RESTHooksApi* | [**updateAHookSubscription**](docs/RESTHooksApi.md#updateAHookSubscription) | **PUT** /hooks/{key} | Update a Hook Subscription
*InfusionsoftRestApi.RESTHooksApi* | [**verifyAHookSubscription**](docs/RESTHooksApi.md#verifyAHookSubscription) | **POST** /hooks/{key}/verify | Verify a Hook Subscription
*InfusionsoftRestApi.TaskApi* | [**createTaskUsingPOST**](docs/TaskApi.md#createTaskUsingPOST) | **POST** /tasks | Create a Task
*InfusionsoftRestApi.TaskApi* | [**loadTaskUsingGET**](docs/TaskApi.md#loadTaskUsingGET) | **GET** /tasks/{taskId} | Retrieve a Task
*InfusionsoftRestApi.TaskApi* | [**removeTaskUsingDELETE**](docs/TaskApi.md#removeTaskUsingDELETE) | **DELETE** /tasks/{taskId} | Delete a Task
*InfusionsoftRestApi.TaskApi* | [**replaceTaskUsingPUT**](docs/TaskApi.md#replaceTaskUsingPUT) | **PUT** /tasks/{taskId} | Replace a Task
*InfusionsoftRestApi.TaskApi* | [**searchUsingGET4**](docs/TaskApi.md#searchUsingGET4) | **GET** /tasks/search | Search Tasks
*InfusionsoftRestApi.TaskApi* | [**syncUsingGET2**](docs/TaskApi.md#syncUsingGET2) | **GET** /tasks/sync | Retrieve Synced Tasks
*InfusionsoftRestApi.TaskApi* | [**tasksUsingGET**](docs/TaskApi.md#tasksUsingGET) | **GET** /tasks | List Tasks
*InfusionsoftRestApi.TaskApi* | [**updateTaskUsingPATCH**](docs/TaskApi.md#updateTaskUsingPATCH) | **PATCH** /tasks/{taskId} | Update a Task


## Documentation for Models

 - [InfusionsoftRestApi.Address](docs/Address.md)
 - [InfusionsoftRestApi.Appointment](docs/Appointment.md)
 - [InfusionsoftRestApi.AppointmentList](docs/AppointmentList.md)
 - [InfusionsoftRestApi.AppointmentStatus](docs/AppointmentStatus.md)
 - [InfusionsoftRestApi.AppointmentStatusList](docs/AppointmentStatusList.md)
 - [InfusionsoftRestApi.BasicContact](docs/BasicContact.md)
 - [InfusionsoftRestApi.Campaign](docs/Campaign.md)
 - [InfusionsoftRestApi.CampaignList](docs/CampaignList.md)
 - [InfusionsoftRestApi.CheckListItemDetails](docs/CheckListItemDetails.md)
 - [InfusionsoftRestApi.Company](docs/Company.md)
 - [InfusionsoftRestApi.ContactList](docs/ContactList.md)
 - [InfusionsoftRestApi.ContactTag](docs/ContactTag.md)
 - [InfusionsoftRestApi.ContactTagList](docs/ContactTagList.md)
 - [InfusionsoftRestApi.CustomFieldMetaData](docs/CustomFieldMetaData.md)
 - [InfusionsoftRestApi.CustomFieldOption](docs/CustomFieldOption.md)
 - [InfusionsoftRestApi.CustomFieldValue](docs/CustomFieldValue.md)
 - [InfusionsoftRestApi.EmailAddress](docs/EmailAddress.md)
 - [InfusionsoftRestApi.Entrylongstring](docs/Entrylongstring.md)
 - [InfusionsoftRestApi.FaxNumber](docs/FaxNumber.md)
 - [InfusionsoftRestApi.FullContact](docs/FullContact.md)
 - [InfusionsoftRestApi.Goal](docs/Goal.md)
 - [InfusionsoftRestApi.HistoricalCounts](docs/HistoricalCounts.md)
 - [InfusionsoftRestApi.Item](docs/Item.md)
 - [InfusionsoftRestApi.Opportunity](docs/Opportunity.md)
 - [InfusionsoftRestApi.OpportunityContact](docs/OpportunityContact.md)
 - [InfusionsoftRestApi.OpportunityList](docs/OpportunityList.md)
 - [InfusionsoftRestApi.Order](docs/Order.md)
 - [InfusionsoftRestApi.OrderContactDetails](docs/OrderContactDetails.md)
 - [InfusionsoftRestApi.OrderItem](docs/OrderItem.md)
 - [InfusionsoftRestApi.OrderList](docs/OrderList.md)
 - [InfusionsoftRestApi.PhoneNumber](docs/PhoneNumber.md)
 - [InfusionsoftRestApi.Product](docs/Product.md)
 - [InfusionsoftRestApi.ProductList](docs/ProductList.md)
 - [InfusionsoftRestApi.ProductOption](docs/ProductOption.md)
 - [InfusionsoftRestApi.ProductOptionValue](docs/ProductOptionValue.md)
 - [InfusionsoftRestApi.ProductStatus](docs/ProductStatus.md)
 - [InfusionsoftRestApi.ProductStatusList](docs/ProductStatusList.md)
 - [InfusionsoftRestApi.Relationship](docs/Relationship.md)
 - [InfusionsoftRestApi.RestHook](docs/RestHook.md)
 - [InfusionsoftRestApi.RestHookRequest](docs/RestHookRequest.md)
 - [InfusionsoftRestApi.SalesPipeline](docs/SalesPipeline.md)
 - [InfusionsoftRestApi.Sequence](docs/Sequence.md)
 - [InfusionsoftRestApi.SequencePath](docs/SequencePath.md)
 - [InfusionsoftRestApi.SetOfIds](docs/SetOfIds.md)
 - [InfusionsoftRestApi.ShippingInformation](docs/ShippingInformation.md)
 - [InfusionsoftRestApi.SimpleOpportunityStage](docs/SimpleOpportunityStage.md)
 - [InfusionsoftRestApi.SimpleProduct](docs/SimpleProduct.md)
 - [InfusionsoftRestApi.SimpleTag](docs/SimpleTag.md)
 - [InfusionsoftRestApi.SimpleUser](docs/SimpleUser.md)
 - [InfusionsoftRestApi.StageDetails](docs/StageDetails.md)
 - [InfusionsoftRestApi.SubscriptionPlan](docs/SubscriptionPlan.md)
 - [InfusionsoftRestApi.TagId](docs/TagId.md)
 - [InfusionsoftRestApi.Task](docs/Task.md)
 - [InfusionsoftRestApi.TaskList](docs/TaskList.md)
 - [InfusionsoftRestApi.TaskStatus](docs/TaskStatus.md)
 - [InfusionsoftRestApi.TaskStatusList](docs/TaskStatusList.md)
 - [InfusionsoftRestApi.Transaction](docs/Transaction.md)
 - [InfusionsoftRestApi.TransactionList](docs/TransactionList.md)
 - [InfusionsoftRestApi.UpsertContact](docs/UpsertContact.md)


## Documentation for Authorization

 All endpoints do not require authorization.

