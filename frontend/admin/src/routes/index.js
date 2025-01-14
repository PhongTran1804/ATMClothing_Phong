/* eslint-disable import/no-useless-path-segments */
/* eslint-disable indent */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Login from '../pages/auth';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import User from '../pages/users/User';
import EditUser from './../pages/users/EditUser';
import AddUser from './../pages/users/AddUser';

const Navigation = () => {
    const authenticated = true;
    return (
        <main>
            <Routes>
                <Route path="/login" name="login" element={<Login />} />
                <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
                    <Route path="/home" name="home" element={<Home />} />
                </Route>
                <Route path="/users" element={<User />} />
                <Route path="/users/editUser" element={<EditUser />} />
                <Route path="/users/addUser" element={<AddUser />} />
                <Route path="*" name="notFound" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Navigation;
