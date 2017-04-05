import React, { PropTypes } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from "phenomic"

import { actions as Actions } from '../../redux.js';

import styles from "./index.css";

const Header = ({ actions, user }, { metadata: { title } }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <h1>
          <Link
            className={styles.link}
            to={"/"}
          >
            {title}
          </Link>
        </h1>

      </nav>

      <div className={styles.user}>
        <button
          onClick={() => {
            if (user.loggedin) {
              actions.userLogout();
            }
            else {
              actions.userLogin();
            }
          }}>
          {(user.loggedin) ? 'sign out' : 'sign in'}
        </button>
      </div>
    </header>
  )
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

Header.propTypes = {
  actions: PropTypes.object,
  user: PropTypes.object,
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