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
import Opportunity from './Opportunity';





/**
* The OpportunityList model module.
* @module model/OpportunityList
* @version V1.0
*/
export default class OpportunityList {
    /**
    * Constructs a new <code>OpportunityList</code>.
    * @alias module:model/OpportunityList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OpportunityList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OpportunityList} obj Optional instance to populate.
    * @return {module:model/OpportunityList} The populated <code>OpportunityList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpportunityList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('opportunities')) {
                obj['opportunities'] = ApiClient.convertToType(data['opportunities'], [Opportunity]);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {String} next
    */
    next = undefined;
    /**
    * @member {Array.<module:model/Opportunity>} opportunities
    */
    opportunities = undefined;
    /**
    * @member {String} previous
    */
    previous = undefined;








}


