import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
function Login() {
  const formik=useFormik(
    {
      initialValues:{
        userName:'',
        password:''
      },
      onSubmit: values=>{
        alert("Login Successfull") 
        navigate('/dashboard')
        //  alert(JSON.stringify(values,null,2));
      }
    }
  )
  const navigate=useNavigate()
  return (
   <>
   <div className='flex items-center h-screen w-screen justify-center bg-indigo-100'>
    <div className='w-2/6 flex justify-center  items-start h-2/3'><h2 className='text-2xl font-bold sm:hidden md:block'>Login here...</h2></div>
   <form onSubmit={formik.handleSubmit} className='flex flex-col bg-indigo-900 min-w-2/6 h-72  justify-center gap-4 rounded-lg p-6 items-center '>
      <div className='flex flex-col gap-5 h-2/3 w-ful justify-end'> 
          <fieldset className='flex gap-5'>
            <label htmlFor='userName' className='text-white font-bold text-xl'>Username</label>
            <input id="userName" type='text' name='userName' onChange={formik.handleChange} value={formik.values.userName} className='w-72 h-10 p-3 rounded'/>
          </fieldset>  
          <fieldset className='flex gap-6'>
            <label htmlFor='password'  className='text-white font-bold text-xl'>Password</label>
            <input id="password" name='password' type='text' onChange={formik.handleChange} value={formik.values.password} className='w-72 h-10 p-3 rounded'/>
          </fieldset>
        </div>    
       <div className='w-full flex justify-center h-1/3 items-center'><button type="submit" className='p-2 bg-white rounded min-w-1/3 h-10 text-indigo-900 font-bold border-2 border-white hover:border-2 hover:border-indigo-500' >Submit</button></div>
      

   </form>
   <div className='w-2/6'></div>
   </div>
   </>
  )
}

export default Login