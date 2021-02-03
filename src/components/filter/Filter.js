import React from "react";
import { connect } from "react-redux";
import { onHandleFilter } from "../../redux/actions/phonebookActions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, state, onHandleFilter }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.inputName}>Find contacts by name</h3>
      <input
        className={styles.filter}
        type="text"
        name="filter"
        value={value}
        placeholder="Filter Name"
        onChange={onHandleFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = (state) => ({
  state: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleFilter: (data) => {
      dispatch(onHandleFilter(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
