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
    instance = new InfusionsoftRestApi.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be.a(InfusionsoftRestApi.Product);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productDesc (base name: "product_desc")', function() {
      // uncomment below and update the code to test the property productDesc
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productOptions (base name: "product_options")', function() {
      // uncomment below and update the code to test the property productOptions
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productPrice (base name: "product_price")', function() {
      // uncomment below and update the code to test the property productPrice
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property productShortDesc (base name: "product_short_desc")', function() {
      // uncomment below and update the code to test the property productShortDesc
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property subCategoryId (base name: "sub_category_id")', function() {
      // uncomment below and update the code to test the property subCategoryId
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionOnly (base name: "subscription_only")', function() {
      // uncomment below and update the code to test the property subscriptionOnly
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionPlans (base name: "subscription_plans")', function() {
      // uncomment below and update the code to test the property subscriptionPlans
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new InfusionsoftRestApi.Product();
      //expect(instance).to.be();
    });

  });

}));
