import { checkPropTypes } from 'prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */

export const storeFactory = initialState => {
	return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val Value of data-test attribute for search
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		// eslint-disable-next-line react/forbid-foreign-prop-types
		component.propTypes,
		conformingProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined();
};