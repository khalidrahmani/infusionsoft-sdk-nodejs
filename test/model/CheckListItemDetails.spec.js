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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InfusionsoftRestApi);
  }
}(this, function(expect, InfusionsoftRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InfusionsoftRestApi.CheckListItemDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CheckListItemDetails', function() {
    it('should create an instance of CheckListItemDetails', function() {
      // uncomment below and update the code to test CheckListItemDetails
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be.a(InfusionsoftRestApi.CheckListItemDetails);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property doneDate (base name: "done_date")', function() {
      // uncomment below and update the code to test the property doneDate
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "instance_id")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property itemOrder (base name: "item_order")', function() {
      // uncomment below and update the code to test the property itemOrder
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instane = new InfusionsoftRestApi.CheckListItemDetails();
      //expect(instance).to.be();
    });

  });

}));
