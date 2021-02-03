import React from "react";
import { connect } from "react-redux";
import phoneActions from "../../redux/phonebook/phoneActions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onHandleFilter }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.inputName}>Find contacts by name</h3>
      <input
        className={styles.filter}
        type="text"
        // name="filter"
        value={value}
        placeholder="Filter Name"
        onChange={(e) => onHandleFilter(e.target.value)}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = (state) => ({
  value: state.tasks.filter,
});

const mapDispatchToProps = { onHandleFilter: phoneActions.onHandleFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
