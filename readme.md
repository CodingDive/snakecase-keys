# snake-keys

Improved fork of [snakecase-keys](https://github.com/bendrucker/snakecase-keys)
that supports the whole word format viz turns `userID` into `user_id` instead of
`user_i_d` and the UPPER_CASE constant format, turning `FOO_BAR` into `foo_bar`
instead of `foo__bar`.

> Convert an object's keys to snake case

## Install

```
$ npm install snake-keys
$ yarn add snake-keys
```

## Usage

```js
const snakeCaseKeys = require("snake-keys");

snakeCaseKeys({ fooBar: "baz" });
//=> {foo_bar: 'baz'}

snakeCaseKeys({ "foo-bar": true, nested: { fooBaz: "bar" } });
//=> {foo_bar: true, nested: {foo_baz: 'bar'}}
```

## API

#### `snakeCaseKeys(obj, options)` -> `object`

##### obj

_Required_
Type: `object`

An object to transform into snake case (keys only).

##### options

_Optional_
Type: `object`

###### deep

Type: `boolean`
Default: `true`

Enables snake-casing of keys in nested objects.

## Related

- [camelcase-keys](https://github.com/sindresorhus/camelcase-keys)

## License

MIT
