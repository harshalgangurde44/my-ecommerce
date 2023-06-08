'use strict';

/**
 * good-seller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::good-seller.good-seller');
