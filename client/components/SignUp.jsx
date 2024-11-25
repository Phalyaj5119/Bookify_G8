import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../contect/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [error,setError] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const fors = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password).then((userCredential) => {
            // SignUp
            const user = userCredential.user;
            alert("SignUp successfully!!")
            navigate(from, {replace: true})
            // .....
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
  return (
   <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
       <div className="relative py-3 sm:max-w-xl sm: mx-auto">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-1g transform-skew-y-6 sm: skew-y-0 sm:-rotate-6 sm: rounded-3x1">
           </div>
                <div className="relative px-4 py-10 bg-white shadow-1g sm:rounded-3x1 sm:p-20">
                   <div className="max-w-md mx-auto">
                      <div>
                         <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
                      </div>
                    <div className="divide-y divide-gray-200">
                       <form onSubmit={handleSignUp}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                             <div className="relative">
                                 <input autocomplete="off" id="email" name="email" type="text" className="peer
                                placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 
                                focus:outline-none focus:borer-rose-600" pLaceholder="Email address" />
                              </div>
                              <div className="relative">
                              <input autocomplete="off" id="password" name="password" type="password"
                              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300
                               text-grav-900 focus:outline-none focus:borer-rose-600" pLaceholder="Password"/>
                               </div>
                               
                               <p>If you already have an account, Please <Link to="/login" className='text-blue-600 -bottom-600
                               underline'>Login</Link>Here</p>
                               <div className="relative">
                               <button className="bg-blue-500 text-white rounded-md px-6 py-2">Sign Up</button>
                               </div>
                         </form>
                      </div>
                 </div>
               </div>
         </div>
     </div>
     
    )
}

export default SignUp