import React, { PropTypes } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from "phenomic"

import { actions as Actions } from '../../redux.js';
import { userState } from '../../constants.js';

import styles from "./index.css";

const Header = React.createClass({
  propTypes: {
    actions: PropTypes.object,
    user: PropTypes.object,
  },

  render() {
    const { actions, user } = this.props;
    const { metadata: { title } } = this.context;

    return (
      <header className={styles.header}>
        <nav className={styles.nav}>

          <h1>
            <Link
              to={"/"}
            >
              {title}
            </Link>
          </h1>

          <h3>
            <Link
              to={'/profile'}>
              {'profile'}
            </Link>
          </h3>

        </nav>

        <div className={styles.user}>
          <div>
            {user.state}
          </div>

          <button
            onClick={() => {
              if (user.state !== userState.AUTHENTICATED) {
                actions.userLogout();
              }
              else {
                actions.userLogin();
              }
            }}>
            {(user.state === userState.AUTHENTICATED) ? 'sign out' : 'sign in'}
          </button>
        </div>
      </header>
    )
  },
})

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)