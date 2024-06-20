export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'error 1'],
      [2, 'error 2'], 
      [3, 'error 3']     
    ]);
  }
  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code)
    }
    else throw new Error('Unknown error');
  }
}