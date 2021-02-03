import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// ========================= redux toolkit========================

export const addContact = createAction("phone/add", (data) => {
  return {
    payload: { ...data, id: uuidv4() },
  };
});

// правильний запис але можна скоротити як показано нижче, id буде приходити бо його ід і  так буде приходити
// const deleteContact = createAction("phone/delete", (id) => ({ payload: id }));
export const deleteContact = createAction("phone/delete", (e) => {
  const id = e.target.dataset.id;
  return {
    payload: id,
  };
});

export const onHandleFilter = createAction("phone/filter", (e) => {
  const { value } = e.target;
  return {
    payload: value,
  };
});

export const alertContacts = createAction("phone/alert");

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
