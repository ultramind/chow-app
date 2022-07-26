import React from 'react'

export default function OrderDetails () {
  return (
    <div clasName='card shadow mb-4'>
      <div clasName='card-header py-3'>
        <h6 clasName='m-0 font-weight-bold text-primary'>Order Details</h6>
      </div>
      <div clasName='card-body p-0'>
        <div clasName='modal-content-page'>
          <div clasName='modal-header'>
            <h5 clasName='modal-title' id='exampleModalLabel'>
              Order Details
            </h5>
          </div>
          <div clasName='modal-body'>
            <div clasName='d-flex align-items-center mb-3'>
              <div clasName=''>
                <p clasName='mb-1 text-danger'>Delivered to</p>
                <p clasName='mb-0 font-weight-bold text-dark'>
                  300 Post Street San Francico, CA
                </p>
              </div>
              <div clasName='ml-auto'>
                <p clasName='mb-0'>
                  <i clasName='mdi mdi-chevron-right'></i>
                </p>
              </div>
            </div>
            <div clasName='details-page border-top pt-3'>
              <h6 clasName='mb-3'>Pizza Hut</h6>
              <div clasName='d-flex align-items-center'>
                <p clasName='bg-light rounded px-2 mr-3'>2</p>
                <p clasName='text-dark'>Large Pizza</p>
                <p clasName='ml-auto'>$22</p>
              </div>
              <div clasName='d-flex align-items-center'>
                <p clasName='bg-light rounded px-2 mr-3'>1</p>
                <p clasName='text-dark'>Medium Fries</p>
                <p clasName='ml-auto'>$4</p>
              </div>
              <div clasName='d-flex align-items-center'>
                <p clasName='bg-light rounded px-2 mr-3'>1</p>
                <p clasName='text-dark'>Coca Cola</p>
                <p clasName='ml-auto'>$3</p>
              </div>
              <div clasName='d-flex align-items-center py-2 border-top'>
                <p clasName='text-dark m-0'>Subtotal</p>
                <p clasName='ml-auto text-danger m-0'>$52</p>
              </div>
              <div clasName='d-flex align-items-center py-2 border-top'>
                <p clasName='text-dark m-0'>Delivery fee</p>
                <p clasName='ml-auto text-danger m-0'>$4</p>
              </div>
              <div clasName='d-flex align-items-center py-3 border-top'>
                <p clasName='text-dark h6 m-0'>Total</p>
                <p clasName='ml-auto text-danger h6 m-0'>$56</p>
              </div>
              <div clasName='d-flex align-items-center mb-3 bg-light rounded p-3'>
                <p clasName='text-dark m-0'>Credit card</p>
                <p clasName='ml-auto d-flex align-items-center mb-0'>
                  <i clasName='fab fa-cc-mastercard mr-2 mb-0'></i>
                  <span clasName='dots-circle mr-2'>
                    <i clasName='mdi mdi-circle'></i>{' '}
                    <i clasName='mdi mdi-circle'></i>{' '}
                    <i clasName='mdi mdi-circle'></i>{' '}
                    <i clasName='mdi mdi-circle'></i>
                  </span>
                  <span>1211</span>
                </p>
              </div>
              <p clasName='text-dark mb-0'>Review your order</p>
              <div clasName='rating-star d-flex align-items-center'>
                <i clasName='fas fa-star text-warning mr-2'></i>{' '}
                <i clasName='fas fa-star text-warning mr-2'></i>{' '}
                <i clasName='fas fa-star text-warning mr-2'></i>{' '}
                <i clasName='fas fa-star text-warning mr-2'></i>{' '}
                <i clasName='fas fa-star mr-2'></i>
                <button clasName='btn btn-primary ml-auto'>Submit</button>
              </div>
            </div>
          </div>
          <div clasName='modal-footer justify-content-start'>
            <div clasName='row w-100'>
              <div clasName='col-3 px-0'>
                <a href='detail.html' clasName='btn btn-warning btn-block'>
                  <i clasName='mdi mdi-account-plus-outline'></i>
                </a>
              </div>
              <div clasName='col-9 pr-0'>
                <a href='explore.html' clasName='btn btn-primary btn-block'>
                  Place new order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
