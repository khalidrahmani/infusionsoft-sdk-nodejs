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
* The BasicContact model module.
* @module model/BasicContact
* @version V1.0
*/
export default class BasicContact {
    /**
    * Constructs a new <code>BasicContact</code>.
    * @alias module:model/BasicContact
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BasicContact</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BasicContact} obj Optional instance to populate.
    * @return {module:model/BasicContact} The populated <code>BasicContact</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicContact();

            
            
            

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} last_name
    */
    last_name = undefined;








}


