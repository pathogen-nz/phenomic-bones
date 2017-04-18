import React, { PropTypes } from "react"
import { connect } from 'react-redux'

import Protected from '../../components/Protected'

import styles from "./index.css"

const Profile = ({ user, }) => {
    return (
        <section className={styles.profile}>

            <Protected>
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
            </Protected>

        </section>
    )
}

Profile.propTypes = {
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(
    mapStateToProps
)(Profile)