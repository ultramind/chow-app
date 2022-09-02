import React from 'react'

export default function Cart () {
  return (
    <div
      className='modal fade'
      id='cartModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              My cart <span className='small'>(2 items)</span>
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body osahan-my-cart'>
            <a
              href='#'
              className='text-dark d-flex align-items-center mb-3'
              data-toggle='modal'
              data-target='#myaddressModal'
            >
              <div>
                <p className='mb-0 text-danger'>Delivered to</p>
                <p className='mb-0 small'>300 Post Street San Francico, CA</p>
              </div>
              <div className='ml-auto'>
                <p className='mb-0 text-info'>
                  Edit<i className='mdi h6 m-0 mdi-chevron-right'></i>
                </p>
              </div>
            </a>
            <div className='details-page border-top pt-3 osahan-my-cart-item'>
              <h6 className='mb-3'>Pizza Hut</h6>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-2'>
                  <img src='img/pizza.png' className='img-fluid rounded' />
                </div>
                <div className='small text-black-50'>1 x</div>
                <div className='ml-2'>
                  <p className='mb-0 text-black'>Cheese pie</p>
                  <p className='mb-0 small'>$15</p>
                </div>
                <a href='#' className='ml-auto'>
                  <i className='btn btn-light text-danger mdi mdi-trash-can-outline rounded'></i>
                </a>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-2'>
                  <img src='img/burger.png' className='img-fluid rounded' />
                </div>
                <div className='small text-black-50'>2 x</div>
                <div className='text-dark ml-2'>
                  <p className='mb-0 text-black'>Peperoni pie</p>
                  <p className='mb-0 small'>$23</p>
                </div>
                <a href='#' className='ml-auto'>
                  <i className='btn btn-light text-danger mdi mdi-trash-can-outline rounded'></i>
                </a>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-2'>
                  <img src='img/burger2.png' className='img-fluid rounded' />
                </div>
                <div className='small text-black-50'>3 x</div>
                <div className='text-dark ml-2'>
                  <p className='mb-0 text-black'>Osahan Burger</p>
                  <p className='mb-0 small'>$50</p>
                </div>
                <a href='#' className='ml-auto'>
                  <i className='btn btn-light text-danger mdi mdi-trash-can-outline rounded'></i>
                </a>
              </div>
              <div className='my-3'>
                <a
                  href='#'
                  data-toggle='modal'
                  data-target='#myitemsModal'
                  className='text-primary'
                >
                  <i className='mdi mdi-plus mr-2'></i> Add more items
                </a>
              </div>
              <a
                href='#'
                className='d-flex align-items-center mb-3'
                data-toggle='modal'
                data-target='#mycoupansModal'
              >
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='mdi mdi-motorbike'></i>
                </div>
                <div>
                  <p className='mb-0 text-dark'>Delivery</p>
                  <p className='mb-0 small text-black-50'>$0</p>
                </div>
              </a>
              <a
                href='#'
                className='d-flex align-items-center mb-3'
                data-toggle='modal'
                data-target='#mycoupansModal'
              >
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='mdi mdi-percent'></i>
                </div>
                <div>
                  <p className='mb-0 text-dark'>Promo code</p>
                  <p className='mb-0 small text-black-50'>HFXWO</p>
                </div>
                <div className='ml-auto'>
                  <button className='btn btn-primary'>
                    <i className='mdi mdi-plus'></i>
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className='modal-footer justify-content-start osahan-my-cart-footer'>
            <div className='row w-100'>
              <div className='col-2 px-0'>
                <button
                  className='btn btn-warning btn-block'
                  data-toggle='modal'
                  data-target='#mysplitModal'
                >
                  <i className='mdi mdi-account-plus-outline'></i>
                </button>
              </div>
              <div className='col-10 pr-0'>
                <button
                  className='btn btn-primary btn-block'
                  data-toggle='modal'
                  data-target='#checkoutModal'
                >
                  Checkout ($53.00)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
