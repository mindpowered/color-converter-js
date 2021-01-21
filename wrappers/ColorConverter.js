/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const colorconverter = require('../lib/colorconverter.js');

/**
 * An Library for Color Conversion
 */
class ColorConverter {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new colorconverter.colorconverter.ColorConverter(bus);
	}

	/**
	 * Convert from RGB
	 * @param {number} r 
	 * @param {number} g 
	 * @param {number} b 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FromRGB(r, g, b) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [r, g, b];
		let ret = jsbus.call('ColorConverter.FromRGB', args);
		return ret;
	}

	/**
	 * Convert from CIELAB
	 * @param {number} L 
	 * @param {number} a 
	 * @param {number} b 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FromCIELAB(L, a, b) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [L, a, b];
		let ret = jsbus.call('ColorConverter.FromCIELAB', args);
		return ret;
	}

	/**
	 * Convert from CMYK
	 * @param {number} c 
	 * @param {number} m 
	 * @param {number} y 
	 * @param {number} k 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FromCMYK(c, m, y, k) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [c, m, y, k];
		let ret = jsbus.call('ColorConverter.FromCMYK', args);
		return ret;
	}

	/**
	 * Convert from HEX
	 * @param {string} hex 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FromHEX(hex) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [hex];
		let ret = jsbus.call('ColorConverter.FromHEX', args);
		return ret;
	}

	/**
	 * Convert from XYZ
	 * @param {number} x 
	 * @param {number} y 
	 * @param {number} z 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FromXYZ(x, y, z) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [x, y, z];
		let ret = jsbus.call('ColorConverter.FromXYZ', args);
		return ret;
	}

	/**
	 * Convert from RGB using illumination and observer angles
	 * @param {number} r 
	 * @param {number} g 
	 * @param {number} b 
	 * @param {string} observer1 
	 * @param {string} observer2 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	ConvertRGB(r, g, b, observer1, observer2) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [r, g, b, observer1, observer2];
		let ret = jsbus.call('ColorConverter.ConvertRGB', args);
		return ret;
	}

	/**
	 * Convert from CIELAB using illumination and observer angles
	 * @param {number} L 
	 * @param {number} a 
	 * @param {number} b 
	 * @param {string} observer1 
	 * @param {string} observer2 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	ConvertCIELAB(L, a, b, observer1, observer2) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [L, a, b, observer1, observer2];
		let ret = jsbus.call('ColorConverter.ConvertCIELAB', args);
		return ret;
	}

	/**
	 * Convert from CMYK using illumination and observer angles
	 * @param {number} c 
	 * @param {number} m 
	 * @param {number} y 
	 * @param {number} k 
	 * @param {string} observer1 
	 * @param {string} observer2 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	ConvertCMYK(c, m, y, k, observer1, observer2) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [c, m, y, k, observer1, observer2];
		let ret = jsbus.call('ColorConverter.ConvertCMYK', args);
		return ret;
	}

	/**
	 * Convert from HEX using illumination and observer angles
	 * @param {string} hex 
	 * @param {string} observer1 
	 * @param {string} observer2 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	ConvertHEX(hex, observer1, observer2) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [hex, observer1, observer2];
		let ret = jsbus.call('ColorConverter.ConvertHEX', args);
		return ret;
	}

	/**
	 * Convert from XYZ using illumination and observer angles
	 * @param {number} x 
	 * @param {number} y 
	 * @param {number} z 
	 * @param {string} observer1 
	 * @param {string} observer2 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	ConvertXYZ(x, y, z, observer1, observer2) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [x, y, z, observer1, observer2];
		let ret = jsbus.call('ColorConverter.ConvertXYZ', args);
		return ret;
	}

	/**
	 * Add a reference color
	 * @param {string} system 
	 * @param {string} name 
	 * @param {string} description 
	 * @param {number} r 
	 * @param {number} g 
	 * @param {number} b 
	*/
	AddReferenceColorByRGB(system, name, description, r, g, b) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system, name, description, r, g, b];
		jsbus.call('ColorConverter.AddReferenceColorByRGB', args);
	}

	/**
	 * Add a reference color
	 * @param {string} system 
	 * @param {string} name 
	 * @param {string} description 
	 * @param {number} L 
	 * @param {number} a 
	 * @param {number} b 
	*/
	AddReferenceColorByCIELAB(system, name, description, L, a, b) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system, name, description, L, a, b];
		jsbus.call('ColorConverter.AddReferenceColorByCIELAB', args);
	}

	/**
	 * Add a reference color
	 * @param {string} system 
	 * @param {string} name 
	 * @param {string} description 
	 * @param {number} c 
	 * @param {number} m 
	 * @param {number} y 
	 * @param {number} k 
	*/
	AddReferenceColorByCMYK(system, name, description, c, m, y, k) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system, name, description, c, m, y, k];
		jsbus.call('ColorConverter.AddReferenceColorByCMYK', args);
	}

	/**
	 * Add a reference color
	 * @param {string} system 
	 * @param {string} name 
	 * @param {string} description 
	 * @param {string} hex 
	*/
	AddReferenceColorByHEX(system, name, description, hex) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system, name, description, hex];
		jsbus.call('ColorConverter.AddReferenceColorByHEX', args);
	}

	/**
	 * Add a reference color
	 * @param {string} system 
	 * @param {string} name 
	 * @param {string} description 
	 * @param {number} x 
	 * @param {number} y 
	 * @param {number} z 
	*/
	AddReferenceColorByXYZ(system, name, description, x, y, z) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system, name, description, x, y, z];
		jsbus.call('ColorConverter.AddReferenceColorByXYZ', args);
	}

	/**
	 * 
	 * @param {number} r 
	 * @param {number} g 
	 * @param {number} b 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FindReferenceColorByRGB(r, g, b) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [r, g, b];
		let ret = jsbus.call('ColorConverter.FindReferenceColorByRGB', args);
		return ret;
	}

	/**
	 * 
	 * @param {number} L 
	 * @param {number} a 
	 * @param {number} b 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FindReferenceColorByCIELAB(L, a, b) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [L, a, b];
		let ret = jsbus.call('ColorConverter.FindReferenceColorByCIELAB', args);
		return ret;
	}

	/**
	 * 
	 * @param {number} c 
	 * @param {number} m 
	 * @param {number} y 
	 * @param {number} k 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FindReferenceColorByCMYK(c, m, y, k) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [c, m, y, k];
		let ret = jsbus.call('ColorConverter.FindReferenceColorByCMYK', args);
		return ret;
	}

	/**
	 * 
	 * @param {string} hex 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FindReferenceColorByHEX(hex) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [hex];
		let ret = jsbus.call('ColorConverter.FindReferenceColorByHEX', args);
		return ret;
	}

	/**
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 * @param {number} z 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FindReferenceColorByXYZ(x, y, z) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [x, y, z];
		let ret = jsbus.call('ColorConverter.FindReferenceColorByXYZ', args);
		return ret;
	}

	/**
	 * 
	 * @param {string} system 
	 * @param {string} name 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	FindReferenceColor(system, name) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system, name];
		let ret = jsbus.call('ColorConverter.FindReferenceColor', args);
		return ret;
	}

	/**
	 * Remove reference color system and all reference colors
	 * @param {string} system 
	*/
	RemoveReferenceColorSystem(system) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system];
		jsbus.call('ColorConverter.RemoveReferenceColorSystem', args);
	}

	/**
	 * Get all reference color systems
	 * @return {Promise}  Promise will resolve to type array.
	*/
	GetReferenceColorSystems() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		let ret = jsbus.call('ColorConverter.GetReferenceColorSystems', args);
		return ret;
	}

	/**
	 * Get all reference colors in a color reference system
	 * @param {string} system 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	GetReferenceColors(system) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [system];
		let ret = jsbus.call('ColorConverter.GetReferenceColors', args);
		return ret;
	}

	/**
	 * Get supported illumination and observer angles
	 * @return {Promise}  Promise will resolve to type array.
	*/
	GetIlluminationObserverAngles() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		let ret = jsbus.call('ColorConverter.GetIlluminationObserverAngles', args);
		return ret;
	}

	/**
	 * Save reference colors
	 * @param {string} id 
	*/
	SaveReferenceColors(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ColorConverter.SaveReferenceColors', args);
	}

	/**
	 * Load reference colors
	 * @param {string} id 
	*/
	LoadReferenceColors(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ColorConverter.LoadReferenceColors', args);
	}

}
module.exports = ColorConverter;

