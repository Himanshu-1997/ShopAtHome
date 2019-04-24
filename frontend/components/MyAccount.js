import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Form from './styles/Form';
import Error from './ErrorMessage';

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($name: String!) {
    resetuser(name: $name) {
      id
      name
      email
    }
  }
`;
class MyAccount extends React.Component {
  state = {
    name: ''
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { me }, loading, error }) => {
          console.log(me.name);
          if (loading) return <p>loading...</p>;
          if (error) return <Error error={error} />;
          return (
            <Mutation mutation={UPDATE_USER_MUTATION} variables={this.state}>
              {(resetuser, { loading, error }) => (
                <div>
                  <p>My Account</p>
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await resetuser();
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label>
                        User Name
                        <input
                          type='text'
                          placeholder='Edit Your Name'
                          defaultValue={me.name}
                          onChange={this.handleChange}
                        />
                      </label>

                      <button type='submit'>Sav{loading ? 'ing' : 'e'} Changes</button>
                    </fieldset>
                  </Form>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default MyAccount;
