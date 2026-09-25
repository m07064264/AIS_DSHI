import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import RecoveryPage from './pages/auth/RecoveryPage';
import RecoveryEmail from './pages/auth/RecoveryEmail';
import RecoveryPhone from './pages/auth/RecoveryPhone';
import SetNewPassword from './pages/auth/SetNewPassword';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Help from './pages/auth/LinkWithAdministrator'
import Dashboard from './pages/admin/DashboardPage';

const isAuth = false;
//подтверждение из смс или почты для перехода на страницу смены пароля
const isDataUserCorrect = false;

export default function App() {
   
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="/set-new-password" element={<SetNewPassword />} />
            <Route path="/RecoveryPage" element={<RecoveryPage />} />
            <Route path="/RecoveryEmail" element={<RecoveryEmail />} />
            <Route path="/RecoveryPhone" element={<RecoveryPhone />} />
            <Route path="/Help" element={<Help/>} />
            <Route 
            path="/SetNewPassword" 
            element={isDataUserCorrect ? <SetNewPassword /> : null} />
            <Route
                path="/"
                element={isAuth ? <ProfilePage /> : <Navigate to= "/auth" replace />}
            />

        <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </BrowserRouter>
    );
}

