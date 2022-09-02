import React from 'react'

export default function OrderDetails () {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>Order Details</h6>
      </div>
      <div className='card-body p-0'>
        <div className='modal-content-page'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Order Details
            </h5>
          </div>
          <div className='modal-body'>
            <div className='d-flex align-items-center mb-3'>
              <div className=''>
                <p className='mb-1 text-danger'>Delivered to</p>
                <p className='mb-0 font-weight-bold text-dark'>
                  300 Post Street San Francico, CA
                </p>
              </div>
              <div className='ml-auto'>
                <p className='mb-0'>
                  <i className='mdi mdi-chevron-right'></i>
                </p>
              </div>
            </div>
            <div className='details-page border-top pt-3'>
              <h6 className='mb-3'>Pizza Hut</h6>
              <div className='d-flex align-items-center'>
                <p className='bg-light rounded px-2 mr-3'>2</p>
                <p className='text-dark'>Large Pizza</p>
                <p className='ml-auto'>$22</p>
              </div>
              <div className='d-flex align-items-center'>
                <p className='bg-light rounded px-2 mr-3'>1</p>
                <p className='text-dark'>Medium Fries</p>
                <p className='ml-auto'>$4</p>
              </div>
              <div className='d-flex align-items-center'>
                <p className='bg-light rounded px-2 mr-3'>1</p>
                <p className='text-dark'>Coca Cola</p>
                <p className='ml-auto'>$3</p>
              </div>
              <div className='d-flex align-items-center py-2 border-top'>
                <p className='text-dark m-0'>Subtotal</p>
                <p className='ml-auto text-danger m-0'>$52</p>
              </div>
              <div className='d-flex align-items-center py-2 border-top'>
                <p className='text-dark m-0'>Delivery fee</p>
                <p className='ml-auto text-danger m-0'>$4</p>
              </div>
              <div className='d-flex align-items-center py-3 border-top'>
                <p className='text-dark h6 m-0'>Total</p>
                <p className='ml-auto text-danger h6 m-0'>$56</p>
              </div>
              <div className='d-flex align-items-center mb-3 bg-light rounded p-3'>
                <p className='text-dark m-0'>Credit card</p>
                <p className='ml-auto d-flex align-items-center mb-0'>
                  <i className='fab fa-cc-mastercard mr-2 mb-0'></i>
                  <span className='dots-circle mr-2'>
                    <i className='mdi mdi-circle'></i>{' '}
                    <i className='mdi mdi-circle'></i>{' '}
                    <i className='mdi mdi-circle'></i>{' '}
                    <i className='mdi mdi-circle'></i>
                  </span>
                  <span>1211</span>
                </p>
              </div>
              <p className='text-dark mb-0'>Review your order</p>
              <div className='rating-star d-flex align-items-center'>
                <i className='fas fa-star text-warning mr-2'></i>{' '}
                <i className='fas fa-star text-warning mr-2'></i>{' '}
                <i className='fas fa-star text-warning mr-2'></i>{' '}
                <i className='fas fa-star text-warning mr-2'></i>{' '}
                <i className='fas fa-star mr-2'></i>
                <button className='btn btn-primary ml-auto'>Submit</button>
              </div>
            </div>
          </div>
          <div className='modal-footer justify-content-start'>
            <div className='row w-100'>
              <div className='col-3 px-0'>
                <Link href='detail.html' className='btn btn-warning btn-block'>
                  <i className='mdi mdi-account-plus-outline'></i>
                </Link>
              </div>
              <div className='col-9 pr-0'>
                <Link href='explore.html' className='btn btn-primary btn-block'>
                  Place new order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
