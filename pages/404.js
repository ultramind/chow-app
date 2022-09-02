import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout/Layout'

const PageNotFound = () => {
  return (
    <div className='container-fluid'>
      <div className='text-center py-5 my-lg-5'>
        <div className='error mx-auto mt-lg-5 pt-lg-5' data-text='404'>
          404
        </div>
        <p className='lead text-gray-800 mb-5'>Page Not Found</p>
        <p className='text-gray-500 mb-0'>
          It looks like you lost your way...
        </p>
        <Link href='/'>
          <a>&larr; Back to Dashboard</a>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
