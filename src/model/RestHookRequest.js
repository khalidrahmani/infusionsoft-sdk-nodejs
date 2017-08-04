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


import ApiClient from '../ApiClient';





/**
* The RestHookRequest model module.
* @module model/RestHookRequest
* @version V1.0
*/
export default class RestHookRequest {
    /**
    * Constructs a new <code>RestHookRequest</code>.
    * @alias module:model/RestHookRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestHookRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestHookRequest} obj Optional instance to populate.
    * @return {module:model/RestHookRequest} The populated <code>RestHookRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestHookRequest();

            
            
            

            if (data.hasOwnProperty('eventKey')) {
                obj['eventKey'] = ApiClient.convertToType(data['eventKey'], 'String');
            }
            if (data.hasOwnProperty('hookUrl')) {
                obj['hookUrl'] = ApiClient.convertToType(data['hookUrl'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} eventKey
    */
    eventKey = undefined;
    /**
    * @member {String} hookUrl
    */
    hookUrl = undefined;








}


