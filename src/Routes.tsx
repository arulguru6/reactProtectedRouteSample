import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './components/dashboardPage';
import MainContent from './components/mainContent';
import Settings from './components/settings';
import Tab1 from './components/tab1';
import Tab2 from './components/tab2';
import Tab3 from './components/tab3';
import Tabs from './components/tabs';
import Login from './components/login';
import ProtectedRoutes from './components/protectedRoutes';
import PublicRoutes from './components/publicRoutes';
import Users from './components/users';
import SingleUser from './components/singleUser';
import NewUser from './components/newUser';
import Denied from './components/denied';

const MainRoutes = () => {

    return (<div>
        <Routes>
            <Route path='/' element={<ProtectedRoutes />}>
                <Route path='/' element={<MainContent />}>
                    <Route path='/' element={<Navigate replace to="dashboard" />}></Route>
                    <Route path='dashboard' element={<DashboardPage />}></Route>
                    <Route path='tabs' element={<Tabs />}>
                        <Route path='/tabs' element={<Navigate replace to="tab1" />}></Route>
                        <Route path='tab1' element={<Tab1 />}></Route>
                        <Route path='tab2' element={<ProtectedRoutes roleRequired='USER' />}>
                            <Route path='/tabs/tab2' element={<Tab2 />}></Route>
                        </Route>

                        <Route path='tab3' element={<Tab3 />}></Route>
                    </Route>
                    <Route path='settings' element={<Settings />}></Route>
                    <Route path='users' element={<Users />}></Route>
                    <Route path='users/:userid' element={<SingleUser />}></Route>
                    <Route path='users/new' element={<NewUser />}></Route>
                </Route>
            </Route>

            <Route path='login' element={<PublicRoutes />}>
                <Route path='/login' element={<Login />}></Route>
            </Route>
            <Route path='denied' element={<Denied />}></Route>
        </Routes>
    </div>);



}

export default MainRoutes