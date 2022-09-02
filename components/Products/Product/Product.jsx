import React from 'react'

export default function Product () {
  return (
    <>
      <a
        href='#'
        className='text-decoration-none col-xl-4 col-md-4 mb-4'
        data-toggle='modal'
        data-target='#myitemsModal'
      >
        <img src='img/food6.jpg' className='img-fluid rounded' />
        <div className='d-flex align-items-center mt-3'>
          <p className='text-black h6 m-0'>Sandwich</p>
          <span className='badge badge-light ml-auto'>
            <i className='mdi mdi-truck-fast-outline'></i> Free delivery
          </span>
        </div>
      </a>
    </>
  )
}
