declare module 'conf-store' {
  export default class Store {
    constructor(document: {})
    get(key: string, criteria: {}): any
  }
}
