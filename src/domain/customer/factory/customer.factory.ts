import { hashPassword } from "../../../lib/hash.js";
import Customer from "../entity/customer.js";
import { randomUUID } from 'node:crypto';

export default class CustomerFactory {
  public static create(name: string, email: string, password: string): Customer {
    const passwordHash = hashPassword(password);
    return new Customer(randomUUID(), name, email, passwordHash);
  }
}