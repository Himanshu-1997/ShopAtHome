import React from 'react';
import Link from 'next/link';

const login = () => {
  return (
    <div>
      <p>Thank You 😊 </p>
      <Link
        href={{
          pathname: '/signup'
        }}
      >
        <a>
          <u>
            <i>Click Here</i>
          </u>
          {'   '}
          to login again
        </a>
      </Link>
    </div>
  );
};

export default login;
