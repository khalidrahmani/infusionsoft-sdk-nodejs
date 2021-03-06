/**
 * Infusionsoft REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Order from '../model/Order';
import OrderList from '../model/OrderList';
import Transaction from '../model/Transaction';
import TransactionList from '../model/TransactionList';

/**
* ECommerce service.
* @module api/ECommerceApi
* @version V1.0
*/
export default class ECommerceApi {

    /**
    * Constructs a new ECommerceApi. 
    * @alias module:api/ECommerceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the loadOrderUsingGET operation.
     * @callback module:api/ECommerceApi~loadOrderUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Order
     * Retrieves a single order
     * @param {Number} orderId orderId
     * @param {module:api/ECommerceApi~loadOrderUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    loadOrderUsingGET(orderId, callback) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling loadOrderUsingGET");
      }


      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Order;

      return this.apiClient.callApi(
        '/orders/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET1 operation.
     * @callback module:api/ECommerceApi~searchUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Orders
     * Retrieves a list of all orders using the specified search criteria
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60;
     * @param {String} opts.until Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60;
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Boolean} opts.paid Sets paid status of items to return
     * @param {String} opts.order Attribute to order items by
     * @param {Number} opts.contactId Returns orders for the provided contact id
     * @param {Number} opts.productId Returns orders containing the provided product id
     * @param {module:api/ECommerceApi~searchUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderList}
     */
    searchUsingGET1(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'paid': opts['paid'],
        'order': opts['order'],
        'contact_id': opts['contactId'],
        'product_id': opts['productId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OrderList;

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET2 operation.
     * @callback module:api/ECommerceApi~searchUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Transactions
     * Retrieves a list transactions for a given contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60;
     * @param {String} opts.until Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60;
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Number} opts.contactId Returns transactions for the provided contact id
     * @param {module:api/ECommerceApi~searchUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionList}
     */
    searchUsingGET2(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'contact_id': opts['contactId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionList;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionByIdUsingGET operation.
     * @callback module:api/ECommerceApi~transactionByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Transaction
     * Retrieves a single transaction
     * @param {Number} transactionId transactionId
     * @param {module:api/ECommerceApi~transactionByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    transactionByIdUsingGET(transactionId, callback) {
      let postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling transactionByIdUsingGET");
      }


      let pathParams = {
        'transactionId': transactionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsForOrderUsingGET operation.
     * @callback module:api/ECommerceApi~transactionsForOrderUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Order Transactions
     * Retrieves a list of all transactions on a given order using the specified search criteria
     * @param {String} orderId orderId
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Date to start searching from ex. &#x60;2017-01-01T22:17:59.039Z&#x60;
     * @param {String} opts.until Date to search to ex. &#x60;2017-01-01T22:17:59.039Z&#x60;
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Number} opts.contactId Returns transactions for the provided contact id
     * @param {module:api/ECommerceApi~transactionsForOrderUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionList}
     */
    transactionsForOrderUsingGET(orderId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling transactionsForOrderUsingGET");
      }


      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'contact_id': opts['contactId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionList;

      return this.apiClient.callApi(
        '/orders/{orderId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
