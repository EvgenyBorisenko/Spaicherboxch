import React from 'react';
import styled from 'styled-components';
// import s from './UserInfo.module.css';

const InfoDiv = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-color: lightgrey;
`;

const TittleText = styled.h2`
  padding-top: 100px;
  text-align: center;
`;

const UserInformation = info => {
  return (
    <InfoDiv>
      <TittleText>
        {/* {console.log('!!!!!!!!!!', info)} */}
        ...Some info about!!!
      </TittleText>
    </InfoDiv>
  );
};

export default UserInformation;
