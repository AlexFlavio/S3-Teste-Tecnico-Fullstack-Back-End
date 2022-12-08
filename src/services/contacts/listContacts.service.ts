import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contacts.entity";

import { AppError } from "../../errors/appError";

const listContactsService = async (id: string): Promise<any> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const contacts = await contactsRepository.find({
    relations: { user: true },
    where: { user: { id: id } },
  });

  if (!contacts) {
    throw new AppError(
      "Contact not found or user does not own the contact",
      400
    );
  }

  return contacts;
};

export default listContactsService;
