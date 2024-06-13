import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const GithubLogin = () => {
  const {githubLogin} = useAuth();
  const handleGoogleSingIn = () => {
    githubLogin()
    .then((data) => {
      console.log(data)
    //     if(data?.user?.email){
    //         const userInfo = {
    //             email: data?.user?.email,
    //             name: data?.user?.displayName,
    //         }
    //         fetch("https://medical-corner-server.onrender.com/user",{
    //           method: "POST",
    //           headers: {
    //               "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(userInfo)
    //     }).then((res) => res.json())
    //     .then((data) => {
    //       localStorage.setItem("token", data?.token);
    //     });
    //   }
  })
}
  return (
    <button onClick={handleGoogleSingIn} className='btn w-full'>
       <div className='flex items-center gap-2'>
       <FaGithubSquare />
       <p>Github</p>
       </div>
        </button>
  )
}

export default GithubLogin