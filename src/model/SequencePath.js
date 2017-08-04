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
import Item from './Item';





/**
* The SequencePath model module.
* @module model/SequencePath
* @version V1.0
*/
export default class SequencePath {
    /**
    * Constructs a new <code>SequencePath</code>.
    * @alias module:model/SequencePath
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SequencePath</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SequencePath} obj Optional instance to populate.
    * @return {module:model/SequencePath} The populated <code>SequencePath</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SequencePath();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {Array.<module:model/Item>} items
    */
    items = undefined;








}


