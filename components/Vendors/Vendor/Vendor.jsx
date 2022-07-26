import React from 'react'

export default function Vendor () {
  return (
    <>
      <a
        href='detail.html'
        clasName='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
      >
        <div clasName='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
          <div clasName='bg-light p-3 rounded'>
            <img src='img/burgerking.png' clasName='img-fluid' />
          </div>
          <div clasName='mx-3 py-2 w-100'>
            <p clasName='mb-2 text-black'>Ntachi Kitchen</p>
            <p clasName='small mb-2'>
              <i clasName='mdi mdi-star text-warning mr-1'></i>{' '}
              <span clasName='font-weight-bold text-dark'>0.8</span> (873)
              <i clasName='mdi mdi-silverware-fork-knife ml-3 mr-1'></i> Burger
              <i clasName='mdi mdi-currency-inr ml-3'></i> 340/-
            </p>
            <p clasName='mb-0 text-muted d-flex align-items-center'>
              <span clasName='badge badge-light'>
                <i clasName='mdi mdi-truck-fast-outline'></i> Free delivery
              </span>
              <span clasName='small ml-auto'>
                <i clasName='mdi mdi-map-marker'></i> 0.3 km
              </span>
            </p>
          </div>
        </div>
      </a>
    </>
  )
}
