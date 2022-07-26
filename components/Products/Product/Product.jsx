import React from 'react'

export default function Product () {
  return (
    <>
      <a
        href='#'
        clasName='text-decoration-none col-xl-4 col-md-4 mb-4'
        data-toggle='modal'
        data-target='#myitemsModal'
      >
        <img src='img/food6.jpg' clasName='img-fluid rounded' />
        <div clasName='d-flex align-items-center mt-3'>
          <p clasName='text-black h6 m-0'>Sandwich</p>
          <span clasName='badge badge-light ml-auto'>
            <i clasName='mdi mdi-truck-fast-outline'></i> Free delivery
          </span>
        </div>
      </a>
    </>
  )
}
