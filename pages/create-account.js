import React from 'react';
import Layout from '../components/layout/Layout';

import {Form, Field, SubmitBtn} from '../components/ui/Formulary'



export default function CreateAccount() {
  return (
    <div>
      <Layout>
        <Form>
          <h1>Create Account</h1>
            <Field>
              <label htmlFor="name">Name</label>
              <input 
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name" 
                />
            </Field>

            <Field>
              <label htmlFor="email">Email</label>
              <input 
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email" 
                />
            </Field>

            <Field>
              <label htmlFor="password">Password</label>
              <input 
                  type="password"
                  id="password"
                  placeholder="Name"
                  name="password" 
                />
            </Field>

            <SubmitBtn type="submit" value="Create Account" />

        </Form>

      </Layout>
    </div>

  )
}
