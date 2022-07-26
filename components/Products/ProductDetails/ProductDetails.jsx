import React from 'react'

export default function ProductDetails () {
  return (
    <div clasName='card shadow mb-4'>
      <div clasName='card-header py-3'>
        <h6 clasName='m-0 font-weight-bold text-primary'>List Detail</h6>
      </div>
      <div clasName='card-body p-0'>
        <div clasName='modal-content-page osahan-item-detail-pop'>
          <div clasName='modal-header border-0'>
            <h5 clasName='modal-title' id='exampleModalLabel'>
              Rice choice
            </h5>
          </div>
          <div clasName='modal-body px-3 pt-0 pb-3'>
            <div clasName='pb-3 position-relative'>
              <div clasName='position-absolute heart-fav'>
                <a href='#'>
                  <i clasName='mdi mdi-heart'></i>
                </a>
              </div>
              <img
                src='img/food-banner.png'
                clasName='img-fluid col-md-12 p-0 rounded'
              />
            </div>

            <h4 clasName='mb-2'>Char-Broiled Chicken Shish</h4>
            <p>
              Served with basmati rice or bulgur pilaf, skewered with grilled
              vegetables
            </p>
            <div clasName='d-flex align-items-center mb-3'>
              <p clasName='text-danger mb-0'>Rice choice</p>
              <p clasName='bg-primary text-white rounded px-2 py-1 mb-0 small ml-auto'>
                Required
              </p>
            </div>
            <form clasName='mb-2'>
              <div clasName='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  clasName='custom-control-input'
                  id='customCheck1'
                  checked=''
                />
                <label
                  clasName='custom-control-label font-weight-bold text-dark'
                  for='customCheck1'
                >
                  Basmati rice
                </label>
              </div>
              <div clasName='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  clasName='custom-control-input'
                  id='customCheck2'
                />
                <label
                  clasName='custom-control-label font-weight-bold text-dark'
                  for='customCheck2'
                >
                  Brown rice
                </label>
              </div>
              <div clasName='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  clasName='custom-control-input'
                  id='customCheck3'
                />
                <label
                  clasName='custom-control-label font-weight-bold text-dark'
                  for='customCheck3'
                >
                  Bulgur pilaf
                </label>
              </div>
            </form>
            <p clasName='mb-0'>
              <a href='#' clasName='text-decoration-none text-primary'>
                <i clasName='fas fa-plus mr-2 bg-light rounded p-2'></i> Add
                special instructions
              </a>
            </p>
          </div>
          <div clasName='modal-footer'>
            <button
              data-toggle='modal'
              data-target='#cartModal'
              clasName='btn btn-primary btn-block'
            >
              Add ($15.00)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
