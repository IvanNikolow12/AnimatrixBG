
import { Form, Link, useActionData, useSearchParams } from 'react-router-dom';
import './LoginRegisterForm.css'

function LoginRegisterForm() {
    const data = useActionData();
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    setTimeout(() => {
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      console.log('U are loged out')
  }, 1200000)

    return <div className='login-form-wrapper'>
    <section className='login-section'> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    
    <div className="signin"> 

    <div className="content"> 

    <h2>{isLogin ? 'Login' : 'Create account'}</h2>

     <Form method='post' className="form"> 
     {data && data.errors && (
      <ul>
        {Object.values(data.errors).map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
     )}
     {data && data.message && <p className='login-error-list'>{data.message} !</p>}
      <div className="inputBox"> 
       <input id='email-input' type="email" name='email' required/> <i>Email</i> 
      </div> 
      <div className="inputBox"> 
       <input id='password-input' type="password" name='password' required/> <i>Password</i> 
      </div> 
      {!isLogin && <div className="inputBox"> 
       <input id='rePassword-input' type="password" name='repeatPassword' required/> <i>Repeat Password</i> 
      </div>} 
      <div className="links"> <Link to="/">Forgot Password ?</Link> <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            <button >{isLogin ? 'Sign up' : 'Already have account ?'}</button>
          </Link>
      </div> 
      <div className="inputBox"> 
       <input type="submit" value={isLogin ? 'Login' : 'Sign up'}/> 
      </div> 
     </Form> 
    </div> 
   </div> 
  </section>
    </div>
}

export default LoginRegisterForm;