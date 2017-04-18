import React, { PropTypes } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as Actions } from '../../redux.js';
import { userState } from '../../constants.js';

import styles from "./index.css";

const Protected = React.createClass({
  propTypes: {
    actions: PropTypes.object,
    children: PropTypes.node.isRequired,
    user: PropTypes.object,
  },

  render() {
    const { actions, children, user } = this.props;

    return (user.state !== userState.AUTHENTICATED)
      ? (
        <section className={styles.protected}>
          <h4>
            {'you must sign in to view this page'}
          </h4>

          <button
            onClick={() => {
              if (user.state === userState.AUTHENTICATED) {
                actions.userLogout();
              }
              else {
                actions.userLogin();
              }
            }}>
            {(user.state === userState.AUTHENTICATED) ? 'sign out' : 'sign in'}
          </button>
        </section>
      )
      : children
  },
})

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Protected)