import React from 'react'

export default function ProductDetails () {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>List Detail</h6>
      </div>
      <div className='card-body p-0'>
        <div className='modal-content-page osahan-item-detail-pop'>
          <div className='modal-header border-0'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Rice choice
            </h5>
          </div>
          <div className='modal-body px-3 pt-0 pb-3'>
            <div className='pb-3 position-relative'>
              <div className='position-absolute heart-fav'>
                <a href='#'>
                  <i className='mdi mdi-heart'></i>
                </a>
              </div>
              <img
                src='img/food-banner.png'
                className='img-fluid col-md-12 p-0 rounded'
              />
            </div>

            <h4 className='mb-2'>Char-Broiled Chicken Shish</h4>
            <p>
              Served with basmati rice or bulgur pilaf, skewered with grilled
              vegetables
            </p>
            <div className='d-flex align-items-center mb-3'>
              <p className='text-danger mb-0'>Rice choice</p>
              <p className='bg-primary text-white rounded px-2 py-1 mb-0 small ml-auto'>
                Required
              </p>
            </div>
            <form className='mb-2'>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck1'
                  checked=''
                />
                <label
                  className='custom-control-label font-weight-bold text-dark'
                  for='customCheck1'
                >
                  Basmati rice
                </label>
              </div>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck2'
                />
                <label
                  className='custom-control-label font-weight-bold text-dark'
                  for='customCheck2'
                >
                  Brown rice
                </label>
              </div>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck3'
                />
                <label
                  className='custom-control-label font-weight-bold text-dark'
                  for='customCheck3'
                >
                  Bulgur pilaf
                </label>
              </div>
            </form>
            <p className='mb-0'>
              <a href='#' className='text-decoration-none text-primary'>
                <i className='fas fa-plus mr-2 bg-light rounded p-2'></i> Add
                special instructions
              </a>
            </p>
          </div>
          <div className='modal-footer'>
            <button
              data-toggle='modal'
              data-target='#cartModal'
              className='btn btn-primary btn-block'
            >
              Add ($15.00)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
