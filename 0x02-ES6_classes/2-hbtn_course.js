import { get } from 'http';

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of stringsn');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this.length;
  }

  set students(value) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
