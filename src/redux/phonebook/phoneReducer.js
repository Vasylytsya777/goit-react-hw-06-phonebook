import { combineReducers } from "redux";
import actionsTypes from "./phoneActionsTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD:
      return [...state, payload.phone];

    case actionsTypes.DELETE:
      return state.filter((task) => task.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = "", action) => state;

export default combineReducers({ items, filter });

// const deleteContact = (e) => {
//   const contactId = e.target.dataset.id;
//   setState((prevState) => ({
//     ...prevState,
//     contacts: prevState.contacts.filter((item) => item.id !== contactId),
//   }));
// };

// const addContact = (newContacts) => {
//   const contact = {
//     id: uuidv4(),
//     name: newContacts.name,
//     number: newContacts.number,
//   };

//   if (!newContacts.name.length) {
//     getVisibleAlert("Please, enter your name");
//   } else if (!newContacts.number.length) {
//     getVisibleAlert("Please, enter your number");
//   } else {
//     if (
//       state.contacts.some(
//         (contact) =>
//           contact.name.toLowerCase() === newContacts.name.toLowerCase()
//       )
//     ) {
//       getVisibleAlert(`${newContacts.name} is already in contacts.`);
//     } else {
//       setState((prev) => ({
//         ...prev,
//         contacts: [...state.contacts, contact],
//       }));
//     }
//   }
// };

// const onHandleFilter = (e) => {
//   console.log(e.target.value);
//   setState((prevState) => ({ ...prevState, filter: e.target.value }));
// };

// const getFilteredContact = () => {
//   const { contacts, filter } = state;
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
