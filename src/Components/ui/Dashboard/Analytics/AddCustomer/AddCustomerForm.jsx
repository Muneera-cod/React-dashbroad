import React from 'react'
import { IconX ,IconCameraFilled} from '@tabler/icons-react'
import { useFormik } from 'formik';
function AddCustomerForm(props) {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phonenumber:'',
          gender:'',
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            return errors;
          },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }, });
  return (
    <div className='basis-4/12 w-full h-full bg-white px-6 py-10 flex flex-col gap-14'>
        <div className='basis-1/3 w-full h-full flex flex-col  gap-10'>
            <div className='flex-1 flex justify-between items-start '>
                <p className='text-2xl flex-grow flex justify-end flex-col pb-3 text-gray-600 font-semibold'>Add Customer</p>
                <div onClick={() => props.setActive(!props.active)} className='w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-full'>
                    <IconX width={14} height={14}/>
                </div> 
            </div>
            <div className='flex-grow flex items-center justify-center'>
                <div className='w-32 h-32 bg-zinc-100 rounded-full flex items-center justify-center'>
                    <IconCameraFilled className='text-gray-700'/>
                </div>
            </div>
        
        </div>
        <div className='basis-2/3 w-full h-full'>
           <form className='flex flex-col gap-12' onSubmit={formik.handleSubmit}>
                <fieldset className='flex flex-col gap-4'>
                        <label className='w-full flex flex-col gap-2 text-gray-700'>First Name 
                            <input id='firstName' name='firstName' type='text' className='block w-full p-3 bg-zinc-100 rounded-md' onChange={formik.handleChange} value={formik.values.firstName} />
                        </label>{formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
                        <label className='w-full flex flex-col gap-2 text-gray-700'>Last Name 
                            <input  id='lastName' name='lastName' type='text' className='block w-full p-3  bg-zinc-100 rounded-md' onChange={formik.handleChange} value={formik.values.lastName}/>
                        </label>
                        <label className='w-full flex flex-col gap-2 text-gray-700'>Email
                            <input id='email' name='email' type='text' className='block w-full p-3  bg-zinc-100 rounded-md' onChange={formik.handleChange} value={formik.values.email}/>
                        </label>{formik.touched.email && formik.errors.email ? ( <div>{formik.errors.email}</div>) : null}
                        <label className='w-full flex flex-col gap-2 text-gray-700'>Phone Number
                            <input id='phonenumber' name='phonenumber' type='text' className='block w-full p-3  bg-zinc-100 rounded-md' onChange={formik.handleChange} value={formik.values.phonenumber}/>
                        </label>
                        <label className='w-full flex flex-col gap-2 text-gray-700'>Gender
                            <select  id='gender' type='text' className='block w-full p-3  bg-zinc-100' onChange={formik.handleChange} value={formik.values.gender}>
                                <option>select</option>
                                <option>Male</option>
                            <option>Female</option>
                            </select>
                        </label>
                </fieldset>
                <button type="submit" className='bg-indigo-500 p-4 w-full rounded-lg text-white'>Add customer</button>
           </form>
        </div>
    </div>    
  )
}

export default AddCustomerForm