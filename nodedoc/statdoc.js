/**
 * Copyright (c) 2015, Jozef Stefan Institute, Quintelligence d.o.o. and contributors
 * All rights reserved.
 * 
 * This source code is licensed under the FreeBSD license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* Statistics module.
* @module statistics
* @example
* // TODO
*/
/**
	* returns mean of vector.
	* @param {(module:la.Vector | module:la.Matrix)} input - input can be vector or a matrix.
	* @returns {(number | module:la.Vector)}
	* <br>1. Number, if input parameters is {@link module:la.Vector}.
    * <br>2. {@link module:la.Vector}, if parameter is {@link module:la.Matrix}.
	*/
 exports.mean = function (input) { return input instanceof Object.create(require('qminer').la.Vector) ? 0.0 : Object.create(require('qminer').la.Vector); }
/**
	* returns vector containing the standard deviation of each column from input matrix.
	* @param {(module:la.Vector | module:la.Matrix)} input - input can be vector or a matrix.
	* @param {number} [flag=0] - Set `flag` to 0 to normalize Y by n-1; set flag to 1 to normalize by n.
	* @param {number} [dim=1] - Computes the standard deviations along the dimension of `mat` specified by parameter `dim`. 1 is col std, 2 is row std.
	* @returns {(number | module:la.Vector)}
	* <br>1. Number, if input parameters is {@link module:la.Vector}.
    * <br>2. {@link module:la.Vector}, if parameter is {@link module:la.Matrix}.
	*/
 exports.std = function (input, flag, dim) { return input instanceof Object.create(require('qminer').la.Vector) ? 0.0 : Object.create(require('qminer').la.Vector); }
/**
	* returns `zscoreResult` containing the standard deviation `zscoreResult.sigma` of each column from matrix `mat`, mean vector `zscoreResult.mu` and z-score matrix `zscoreResult.Z`.
	* @param {module:la.Matrix} input - Matrix
	* @param {number} [flag=0] - Set `flag` to 0 to normalize Y by n-1; set flag to 1 to normalize by n.
	* @param {number} [dim=1] - Computes the standard deviations along the dimension of `mat` specified by parameter `dim`. 1 is col std, 2 is row std.
	* @returns {zscoreResult}
	* <br>zscoreResult.sigma - Standard deviation of input used to compute the z-scores.
	* <br>zscoreResult.mu - Mean of input used to compute the z-scores.
	* <br>zscoreResult.Z - A vector of z-scores has mean 0 and variance 1.
	*/
 exports.zscoreResult = function (mat, flag, dim) { return {sigma:'', mu:'', Z:''}; }
