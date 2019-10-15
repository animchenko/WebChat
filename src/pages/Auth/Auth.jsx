import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm } from '../../modules';
import { RegisterForm } from '../../modules';

const Auth = () => (
    <section>
        <div>
            <Route exact path={['/', '/singin']} component={LoginForm} />
            <Route exact path={['/singup']} component={RegisterForm} />
        </div>
    </section>
);

export default Auth;