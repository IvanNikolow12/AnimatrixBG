import { json, redirect } from "react-router-dom";
import LoginRegisterForm from "../components/LoginRegisterForm";

function LoginPage() {
    return <>
    <LoginRegisterForm/>
    </>
}

export default LoginPage;

export async function action({params, request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if(mode !== 'login' && mode !== 'signup') {
        return json({message: 'Unsupported mode.'}, {status: 422})
    }

    const data = await request.formData();

    let url;
    let authData;
    if(mode === 'login') {
        authData = {
            email: data.get('email'),
            password: data.get('password')
        };
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={API KEY}`
    } else {
        authData = {
            email: data.get('email'),
            password: data.get('password'),
            repeatPassword: data.get('repeatPassword')
        }
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={API KEY}`
    }

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.status === 422 || response.status === 401) {
        return response;
    }

    if(!response.ok) {
        return json({message: 'Wrong email or password. Try again.'}, {status: 500})
    }

    const resData = await response.json();
    const token = resData.idToken;
    const email = resData.email;

    localStorage.setItem('token', token);
    localStorage.setItem('email', email);

    return redirect('/');
}
