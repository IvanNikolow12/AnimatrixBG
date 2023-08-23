import { redirect } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if(!token) return null;

    return token;
}

export function getAuthEmail() {
    const email = localStorage.getItem('email');

    if(!email) return null;
    

    return email;
}

export function tokenLoader() {
    return getAuthToken();
}

export function emailLoader() {
    return getAuthEmail();
}

export function checkAuthLoader() {
    const token = getAuthToken();
    
    if(!token) return redirect('/auth?mode=login');

    return token;
}

export function LogoutAction() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    return redirect('/')
}

export function checkIsAdmin() {
    let isAdmin = false;
    let email = getAuthEmail();
    if(email) {
        email = email.split('@')[0];
    }
    if(email === 'admin') {
        isAdmin = true;
    }

    return isAdmin;
}