// jest-changed-files

// getChangedFilesForRoots - returns a promise that resolves to an object with the changed files and repos
const { getChangedFilesForRoots } = require('jest-changed-files');

// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(['./'], {
  lastCommit: true,
}).then(result => console.log(result.changedFiles));

// jest-diff

const { diff } = require('jest-diff');

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

const result = diff(a, b);

// print diff
console.log(result);

// jest-docblock

const { parseWithComments } = require('jest-docblock');

const code = `
/**
 * This is a sample
 *
 * @flow
 */

 console.log('Hello World!');
`;

const parsed = parseWithComments(code);

// prints an object with two attributes: comments and pragmas.
console.log(parsed);

// jest-get-type

const { getType } = require('jest-get-type');

const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;

// prints 'array'
console.log(getType(array));
// prints 'null'
console.log(getType(nullValue));
// prints 'undefined'
console.log(getType(undefinedValue));

// jest-validate - validate(config, validationOptions) => {hasDeprecationWarnings: boolean, isValid: boolean}

const { validate } = require('jest-validate');

const configByUser = {
  transform: '<rootDir>/node_modules/my-custom-transform',
};

const result = validate(configByUser, {
  comment: '  Documentation: http://custom-docs.com',
  exampleConfig: { transform: '<rootDir>/node_modules/babel-jest' },
});

console.log(result);

// pretty-format
const { format: prettyFormat } = require('pretty-format');

const val = { object: {} };
val.circularReference = val;
val[Symbol('foo')] = 'foo';
val.map = new Map([['prop', 'value']]);
val.array = [-0, Infinity, NaN];

console.log(prettyFormat(val));
