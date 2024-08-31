import Customer from "../../../../domain/customer/entity/customer.js";
import { CustomerRepositoryInterface } from "../../../../domain/customer/repository/customer.repository.js";
import { prismaClient } from "../../../../lib/prisma-client.js";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async find(id: string): Promise<Customer> {
    const user = await prismaClient.customer.findUnique({
      where: {
        id
      }
    })

    if (!user) {
      throw new Error("Customer not found");
    }

    const customer = new Customer(user.id, user.name, user.email, user.password);

    return customer;
  }
  findAll(): Promise<Customer[]> {
    throw new Error("Method not implemented.");
  }
  async create(customer: Customer): Promise<void> {
    await prismaClient.customer.create({
      data: {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        password: customer.password
      }
    })
  }
}