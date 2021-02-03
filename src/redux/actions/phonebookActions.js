import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// ========================= redux toolkit========================

const addContact = createAction("phone/add", (newContacts) => ({
  payload: {
    phone: {
      id: uuidv4(),
      name: newContacts.name,
      number: newContacts.number,
    },
  },
}));

// правильний запис але можна скоротити як показано нижче, id буде приходити бо його ід і  так буде приходити
// const deleteContact = createAction("phone/delete", (id) => ({ payload: id }));
const deleteContact = createAction("phone/delete");

const onHandleFilter = createAction("phone/filter");

export default {
  addContact,
  deleteContact,
  onHandleFilter,
};

// ========================= react - redux ========================

// import { v4 as uuidv4 } from "uuid";
// import actionsTypes from "../reducers/phoneActionsTypes";

// const addContact = (newContacts) => ({
//   type: actionsTypes.ADD,
//   payload: {
//     phone: {
//       id: uuidv4(),
//       name: newContacts.name,
//       number: newContacts.number,
//     },
//   },
// });

// const deleteContact = (id) => ({
//   type: actionsTypes.DELETE,
//   payload: id,
// });

// const onHandleFilter = (filter) => ({
//   type: actionsTypes.FILTER,
//   payload: filter,
// });

// export default {
//   addContact,
//   deleteContact,
//   onHandleFilter,
// };
