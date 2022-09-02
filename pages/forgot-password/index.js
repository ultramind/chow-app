import Link from 'next/link'
import { useContext, useReducer, useState } from 'react'
import axios from '../../axios'
import Store from '../../context/context'

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, loading: true }
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, msg: 'Login Successfull!' }
    case 'LOGIN_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function Index () {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state
  // console.log(userInfo)

  // local reducer
  const [{ loading, error, msg }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
    msg: ''
  })

  const [number, setNumber] = useState('')
  const [pin, setPin] = useState('')

  const submit = async e => {
    e.preventDefault()
    // alert(userInfo.name)
    const { data } = await axios.post('/auth/login', {
      phone_number: number,
      pin: pin
    })
    console.log(data)
  }
  return (
    <div className='row osahan-login m-0'>
      <div className='col-md-6 osahan-login-left px-0'></div>
      <div className='col-md-6 d-flex justify-content-center flex-column px-0'>
        <div className='col-lg-6 mx-auto'>
          <h3 className='mb-1'>Forgot Password</h3>
          <p className='mb-5'>Please kindly enter Email address</p>
          <form onSubmit={submit}>
            <div className='d-flex align-items-center mb-4'>
              <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                <i className='mdi mdi-email-outline'></i>
              </div>
              <div className='w-100'>
                <p className='mb-0 small font-weight-bold text-dark'>
                  Email Address
                </p>
                <input
                  type='email'
                  className='form-control form-control-sm p-0 border-input border-0 rounded-0'
                  placeholder='Enter Your Email'
                />
              </div>
            </div>
            <div className='mb-3'>
              <button className='btn btn-primary btn-block mb-3'>Submit</button>
              <p className='text-center'>
                You already have an acoount?
                <Link href='/login'>
                  <a className='text-danger text-decoration-none'>Login</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
