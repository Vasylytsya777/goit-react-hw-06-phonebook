import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./ContactForm.module.css";
import {
  addContact,
  alertContacts,
} from "../../redux/actions/phonebookActions";
import { Notification } from "../notification/Notification";
import { CSSTransition } from "react-transition-group";

const ContactForm = ({ contacts, text, addContact, alertContacts }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  //   componentDidMount
  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      const localContacts = JSON.parse(localStorage.getItem("contacts"));
      localContacts.length && contacts([...localContacts]);
    }
    // eslint-disable-next-line
  }, []);
  //   componentDidUpdate
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        alertContacts("");
      }, 2000);
    }
  }, [text, alertContacts]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const onHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prev) => ({ ...prev, [name]: value }));
  // const name = e.target.name;
  // this.setState({ [name]: e.target.value });
  // console.log("value", value);
  // console.log("name", name);
  // };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!state.name.length) {
      alertContacts("Please, enter your name");
    } else if (!state.number.length) {
      alertContacts("Please, enter your number");
    } else {
      if (
        contacts.some(
          (contact) => contact.name.toLowerCase() === state.name.toLowerCase()
        )
      ) {
        alertContacts(`${state.name} is already in contacts.`);
      } else {
        addContact({ ...state });
      }
    }

    setState({
      name: "",
      number: "",
    });
  };

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();

  //   addContact({
  //     ...state,
  //     // name: state.name,
  //     // number: state.number,
  //   });
  //   setState({ name: "", number: "" }); //як висипати стейт по іншому
  // };

  // const { name, number } = state;

  return (
    <>
      {text && (
        <CSSTransition
          in={true}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <Notification text={text} />
        </CSSTransition>
      )}
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.inputName}
            type="text"
            placeholder="Enter Name"
            value={state.name}
            name="name"
            onChange={onHandleChange}
          />
          {/* <label key={uuidv4()}> */}
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.inputNumber}
            type="text"
            placeholder="xxx-xx-xx"
            value={state.number}
            name="number"
            onChange={onHandleChange}
          />
        </label>

        <button className={styles.buttonAddContacts} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    text: state.contacts.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alertContacts: (data) => {
      dispatch(alertContacts(data));
    },
    addContact: (data) => {
      dispatch(addContact(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

//  =====================класові компоненти====================

// import React, { Component } from "react";
// import styles from "./ContactForm.module.css";

// export default class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//     // const name = e.target.name;
//     // this.setState({ [name]: e.target.value });
//     // console.log("value", value);
//     // console.log("name", name);
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addContact({
//       ...this.state,
//       // name: this.state.name,
//       // number: this.state.number,
//     });
//     this.setState({ name: "", number: "" }); //як висипати стейт по іншому
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.onHandleSubmit} s>
//         <label className={styles.label}>
//           Name
//           <input
//             className={styles.inputName}
//             type="text"
//             placeholder="Enter Name"
//             value={name}
//             name="name"
//             onChange={this.onHandleChange}
//           />
//           {/* <label key={uuidv4()}> */}
//         </label>
//         <label className={styles.label}>
//           Number
//           <input
//             className={styles.inputNumber}
//             type="text"
//             placeholder="xxx-xx-xx"
//             value={number}
//             name="number"
//             onChange={this.onHandleChange}
//           />
//         </label>

//         <button className={styles.buttonAddContacts} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
