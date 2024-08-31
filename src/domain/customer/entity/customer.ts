export default class Customer {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
  }
  
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._email.length === 0) {
      throw new Error("Email is required");
    }
  }
}