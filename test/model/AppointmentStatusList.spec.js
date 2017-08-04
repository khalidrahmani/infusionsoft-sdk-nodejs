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
    instance = new InfusionsoftRestApi.AppointmentStatusList();
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

  describe('AppointmentStatusList', function() {
    it('should create an instance of AppointmentStatusList', function() {
      // uncomment below and update the code to test AppointmentStatusList
      //var instane = new InfusionsoftRestApi.AppointmentStatusList();
      //expect(instance).to.be.a(InfusionsoftRestApi.AppointmentStatusList);
    });

    it('should have the property appointmentStatuses (base name: "appointment_statuses")', function() {
      // uncomment below and update the code to test the property appointmentStatuses
      //var instane = new InfusionsoftRestApi.AppointmentStatusList();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new InfusionsoftRestApi.AppointmentStatusList();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instane = new InfusionsoftRestApi.AppointmentStatusList();
      //expect(instance).to.be();
    });

    it('should have the property previous (base name: "previous")', function() {
      // uncomment below and update the code to test the property previous
      //var instane = new InfusionsoftRestApi.AppointmentStatusList();
      //expect(instance).to.be();
    });

    it('should have the property syncToken (base name: "sync_token")', function() {
      // uncomment below and update the code to test the property syncToken
      //var instane = new InfusionsoftRestApi.AppointmentStatusList();
      //expect(instance).to.be();
    });

  });

}));
