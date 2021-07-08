import React from 'react';
import { userData } from './index.jsx';
import moment from 'moment';

const Profile = props => {
    const date = moment(userData.birthDate).format('DD MMM YY');
    return (
        <div className="profile__name">
            {`${userData.firstName} ${userData.lastName} Was born ${date} in ${userData.birthPlace}`}
            </div>
    );
}

export default Profile;