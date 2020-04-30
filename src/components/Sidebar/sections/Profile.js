import React, { useState, useContext } from 'react';
import TextField from '../../../shared/TextField';
import Card from '../../../shared/Card';

import { updateProfile, updateSocial } from '../../../redux/profile'
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch()

  const [profile, setProfile] = useState({
    name: '',
    address: '',
  })

  const [social, setSocial] = useState({
    github: '',
  })

  const onChange = (e, type) => {
    switch (type) {
      case "profile":
        setProfile({ ...profile, [e.target.name]: e.target.value })
        break;
      case "social":
        setSocial({ ...social, [e.target.name]: e.target.value })
        break;
      default:
        break;
    }
    
  }

  return (
    <div>
      <Card title="Personal information">
        <TextField
          className=""
          placeholder="John Doe"
          value={profile.name}
          name="name"
          label="Name"
          onChange={e => onChange(e, "profile")}
          onBlur={e => dispatch(updateProfile(profile))}
        />

        <TextField
          className=""
          placeholder="127 Guild Street, N13 1FR, LONDON"
          value={profile.address}
          name="address"
          label="Address"
          onChange={e => onChange(e, "profile")}
          onBlur={e => dispatch(updateProfile(profile))}
        />

        <TextField
          className=""
          placeholder="(+33) 0 00 00 00 00"
          value={social.phone}
          name="phone"
          label="Phone Number"
          onChange={e => onChange(e, "social")}
          onBlur={e => dispatch(updateSocial(social))}
        />

      <TextField
          className=""
          placeholder="address@email.me"
          value={social.email}
          name="email"
          label="Email"
          onChange={e => onChange(e, "social")}
          onBlur={e => dispatch(updateSocial(social))}
        />
      </Card>

      <Card title="Social">
        <TextField
          placeholder="@quelhasu"
          value={social.github}
          name="github"
          label="GitHub"
          onChange={e => onChange(e, "social")}
          onBlur={e => dispatch(updateSocial(social))}
        />
        <TextField
          placeholder="@quelhasugo"
          value={social.linkedin}
          name="linkedin"
          label="LinkedIn"
          onChange={e => onChange(e, "social")}
          onBlur={e => dispatch(updateSocial(social))}
        />
      </Card>

    </div>
  );
};

export default Profile;