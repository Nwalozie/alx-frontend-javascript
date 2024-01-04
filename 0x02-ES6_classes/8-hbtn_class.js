export default class HolbertonClass {
  constructor(size, location) {
    // Validate and set the size attribute
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;

    // Validate and set the location attribute
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
