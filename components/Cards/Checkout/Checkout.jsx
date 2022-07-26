import React from 'react'

export default function Checkout () {
  return (
    <div
      clasName='modal fade'
      id='checkoutModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div clasName='modal-dialog'>
        <div clasName='modal-content'>
          <div clasName='modal-header'>
            <h5 clasName='modal-title' id='exampleModalLabel'>
              Checkout
            </h5>
            <button
              type='button'
              clasName='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div clasName='modal-body'>
            <p clasName='text-dark mb-2 small'>Payment methods</p>
            <div
              clasName='btn-group btn-group-toggle mb-3'
              data-toggle='buttons'
            >
              <label clasName='btn osahan-radio btn-light btn-sm rounded active'>
                <input type='radio' name='options' id='option1' checked />{' '}
                <i clasName='mdi mdi-credit-card-outline'></i> Card
              </label>
              <label clasName='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' />{' '}
                <i clasName='mdi mdi-currency-usd'></i> COD
              </label>
              <label clasName='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' />{' '}
                <i clasName='fab fa-paypal'></i> Paypal
              </label>
            </div>
            <h6 clasName='mb-3'>
              My cards <span clasName='small'>(2)</span>
            </h6>
            <div
              clasName='btn-group btn-group-toggle osahan-card'
              data-toggle='buttons'
            >
              <label clasName='btn osahan-radio osahan-card-pay btn-light btn-sm rounded mb-2 active w-100'>
                <input type='radio' name='options' id='option1' checked />
                <div clasName='d-flex align-items-center card-detials small mb-3'>
                  <p clasName='small'>
                    <i clasName='mdi mdi-chip'></i>
                  </p>
                  <p clasName='ml-auto d-flex align-items-center'>
                    <span clasName='card-no mr-2'>
                      <i clasName='mdi mdi-circle'></i>{' '}
                      <i clasName='mdi mdi-circle'></i>{' '}
                      <i clasName='mdi mdi-circle'></i>{' '}
                      <i clasName='mdi mdi-circle'></i>
                    </span>
                    <span clasName='small'>1211</span>
                  </p>
                </div>
                <h1 clasName='mb-0'>Mastercard</h1>
                <p clasName='small mb-1'>Platinum</p>
                <p clasName='text-right mb-0'>
                  <i clasName='fab fa-cc-mastercard text-warning'></i>
                </p>
              </label>
              <label clasName='btn osahan-radio osahan-card-pay btn-light btn-sm rounded mb-2 w-100'>
                <input type='radio' name='options' id='option2' />
                <div clasName='d-flex align-items-center card-detials small mb-3'>
                  <p clasName='small'>
                    <i clasName='mdi mdi-chip'></i>
                  </p>
                  <p clasName='ml-auto d-flex align-items-center'>
                    <span clasName='card-no mr-2'>
                      <i clasName='mdi mdi-circle'></i>{' '}
                      <i clasName='mdi mdi-circle'></i>{' '}
                      <i clasName='mdi mdi-circle'></i>{' '}
                      <i clasName='mdi mdi-circle'></i>
                    </span>
                    <span clasName='small'>2277</span>
                  </p>
                </div>
                <h1 clasName='mb-0'>Visa Debit</h1>
                <p clasName='small mb-1'>Plantinum</p>
                <p clasName='text-right mb-0'>
                  <i clasName='fab fa-cc-visa'></i>
                </p>
              </label>
            </div>
            <a
              href='#'
              data-toggle='modal'
              data-target='#paymentsModal'
              clasName='btn btn-light btn-block'
            >
              <i clasName='mdi mdi-plus'></i> Add
            </a>
          </div>
          <div clasName='modal-footer justify-content-start'>
            <a href='orders.html' clasName='btn btn-primary btn-block'>
              Confirm payment ($53.00)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
