import React from 'react'

export default function Vendor () {
  return (
    <>
      <a
        href='detail.html'
        className='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
      >
        <div className='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
          <div className='bg-light p-3 rounded'>
            <img src='img/burgerking.png' className='img-fluid' />
          </div>
          <div className='mx-3 py-2 w-100'>
            <p className='mb-2 text-black'>Ntachi Kitchen</p>
            <p className='small mb-2'>
              <i className='mdi mdi-star text-warning mr-1'></i>{' '}
              <span className='font-weight-bold text-dark'>0.8</span> (873)
              <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i> Burger
              <i className='mdi mdi-currency-inr ml-3'></i> 340/-
            </p>
            <p className='mb-0 text-muted d-flex align-items-center'>
              <span className='badge badge-light'>
                <i className='mdi mdi-truck-fast-outline'></i> Free delivery
              </span>
              <span className='small ml-auto'>
                <i className='mdi mdi-map-marker'></i> 0.3 km
              </span>
            </p>
          </div>
        </div>
      </a>
    </>
  )
}
