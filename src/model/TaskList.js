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
import Task from './Task';





/**
* The TaskList model module.
* @module model/TaskList
* @version V1.0
*/
export default class TaskList {
    /**
    * Constructs a new <code>TaskList</code>.
    * @alias module:model/TaskList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TaskList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TaskList} obj Optional instance to populate.
    * @return {module:model/TaskList} The populated <code>TaskList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('sync_token')) {
                obj['sync_token'] = ApiClient.convertToType(data['sync_token'], 'String');
            }
            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = ApiClient.convertToType(data['tasks'], [Task]);
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
    * @member {String} previous
    */
    previous = undefined;
    /**
    * @member {String} sync_token
    */
    sync_token = undefined;
    /**
    * @member {Array.<module:model/Task>} tasks
    */
    tasks = undefined;








}


