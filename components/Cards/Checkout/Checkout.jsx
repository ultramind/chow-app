import React from 'react'

export default function Checkout () {
  return (
    <div
      className='modal fade'
      id='checkoutModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Checkout
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
          <div className='modal-body'>
            <p className='text-dark mb-2 small'>Payment methods</p>
            <div
              className='btn-group btn-group-toggle mb-3'
              data-toggle='buttons'
            >
              <label className='btn osahan-radio btn-light btn-sm rounded active'>
                <input type='radio' name='options' id='option1' />{' '}
                <i className='mdi mdi-credit-card-outline'></i> Card
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' />{' '}
                <i className='mdi mdi-currency-usd'></i> COD
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' />{' '}
                <i className='fab fa-paypal'></i> Paypal
              </label>
            </div>
            <h6 className='mb-3'>
              My cards <span className='small'>(2)</span>
            </h6>
            <div
              className='btn-group btn-group-toggle osahan-card'
              data-toggle='buttons'
            >
              <label className='btn osahan-radio osahan-card-pay btn-light btn-sm rounded mb-2 active w-100'>
                <input type='radio' name='options' id='option1' />
                <div className='d-flex align-items-center card-detials small mb-3'>
                  <p className='small'>
                    <i className='mdi mdi-chip'></i>
                  </p>
                  <p className='ml-auto d-flex align-items-center'>
                    <span className='card-no mr-2'>
                      <i className='mdi mdi-circle'></i>{' '}
                      <i className='mdi mdi-circle'></i>{' '}
                      <i className='mdi mdi-circle'></i>{' '}
                      <i className='mdi mdi-circle'></i>
                    </span>
                    <span className='small'>1211</span>
                  </p>
                </div>
                <h1 className='mb-0'>Mastercard</h1>
                <p className='small mb-1'>Platinum</p>
                <p className='text-right mb-0'>
                  <i className='fab fa-cc-mastercard text-warning'></i>
                </p>
              </label>
              <label className='btn osahan-radio osahan-card-pay btn-light btn-sm rounded mb-2 w-100'>
                <input type='radio' name='options' id='option2' />
                <div className='d-flex align-items-center card-detials small mb-3'>
                  <p className='small'>
                    <i className='mdi mdi-chip'></i>
                  </p>
                  <p className='ml-auto d-flex align-items-center'>
                    <span className='card-no mr-2'>
                      <i className='mdi mdi-circle'></i>{' '}
                      <i className='mdi mdi-circle'></i>{' '}
                      <i className='mdi mdi-circle'></i>{' '}
                      <i className='mdi mdi-circle'></i>
                    </span>
                    <span className='small'>2277</span>
                  </p>
                </div>
                <h1 className='mb-0'>Visa Debit</h1>
                <p className='small mb-1'>Plantinum</p>
                <p className='text-right mb-0'>
                  <i className='fab fa-cc-visa'></i>
                </p>
              </label>
            </div>
            <a
              href='#'
              data-toggle='modal'
              data-target='#paymentsModal'
              className='btn btn-light btn-block'
            >
              <i className='mdi mdi-plus'></i> Add
            </a>
          </div>
          <div className='modal-footer justify-content-start'>
            <a href='orders.html' className='btn btn-primary btn-block'>
              Confirm payment ($53.00)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
