import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Link from 'next/link';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => {
  return (
    <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {signout => (
        <Link
          href={{
            pathname: '/login'
          }}
        >
          <button onClick={signout}>Sign Out</button>
        </Link>
      )}
    </Mutation>
  );
};

export default Signout;
