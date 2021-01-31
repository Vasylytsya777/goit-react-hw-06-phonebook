import { v4 as uuidv4 } from "uuid";

const addContact = (newContacts) => ({
  type: "phone/add",
  payload: {
    phone: {
      id: uuidv4(),
      name: newContacts.name,
      number: newContacts.number,
    },
  },
});

const deleteContact = (e) => ({
  type: "phone/delete",
  payload: {
    phone: {
      e,
    },
  },
});
