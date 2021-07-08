import React from 'react';
import { userData } from './index';

const Profile = props => {
    return (
        <div className="profile__name">
            {`${userData.firstName} ${userData.lastName} Was born ${userData.birthDate} in ${userData.birthPlace}`}
            </div>
    );
}

export default Profile;