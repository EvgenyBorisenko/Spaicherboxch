import React, { useState, useEffect } from 'react';
import s from './UserPage.module.css';
import { getProfile } from '../../helpers/api';
import UserInformation from '../UserInformation/UserInformation';

const UserPage = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile()
      .then(data => {
        setProfile({ profile: data });
      })
      .catch(error => error);
  }, []);
  return (
    <div className={s.Info}>
      {/* <p> dssdgdsgsdggs {profile.email}</p> */}
      <UserInformation info={profile} />
      {console.log('profileeee', profile)}
    </div>
  );
};

export default UserPage;
