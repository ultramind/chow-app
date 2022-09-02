import Image from 'next/image'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const index = () => {
  return (
    <Layout>
      <div className='container-fluid pb-4'>
        <div className='d-flex align-items-center justify-content-between mb-3 mt-2'>
          <h5 className='mb-0'>Settings</h5>
        </div>
        <p className='mb-2'>General</p>
        <a
          href='#'
          className='text-decoration-none text-dark d-flex align-items-center rounded bg-white shadow-sm p-3 mb-1'
          data-toggle='modal'
          data-target='#personalModal'
        >
          <p className='mb-0 h5 text-primary'>
            <i className='mdi mdi-account-outline'></i>
          </p>
          <p className='ml-3 mb-0'>Personal information</p>
          <p className='mb-0 h5 ml-auto'>
            <i className='mdi mdi-chevron-right'></i>
          </p>
        </a>
        <a
          href='#'
          className='text-decoration-none text-dark d-flex align-items-center rounded bg-white shadow-sm p-3 mb-1'
          data-toggle='modal'
          data-target='#addressModal'
        >
          <p className='mb-0 h5 text-danger'>
            <i className='mdi mdi-bookmark-outline'></i>
          </p>
          <p className='ml-3 mb-0'>Saved addresses</p>
          <p className='mb-0 h5 ml-auto'>
            <i className='mdi mdi-chevron-right'></i>
          </p>
        </a>
        <p className='mt-4 mb-2'>Payments</p>
        <a
          href='#'
          className='text-decoration-none text-dark d-flex align-items-center rounded bg-white shadow-sm p-3 mb-1'
          data-toggle='modal'
          data-target='#paymentsModal'
        >
          <p className='mb-0 h5 text-primary'>
            <i className='mdi mdi-wallet'></i>
          </p>
          <p className='ml-3 mb-0'>Payments methods</p>
          <p className='mb-0 h5 ml-auto'>
            <i className='mdi mdi-chevron-right'></i>
          </p>
        </a>

        <p className='mt-4 mb-2'>Other</p>
        <a
          href='#'
          className='text-decoration-none text-dark d-flex align-items-center rounded bg-white shadow-sm p-3 mb-1'
          data-toggle='modal'
          data-target='#supportModal'
        >
          <p className='mb-0 h5 text-primary'>
            <i className='mdi mdi-progress-question'></i>
          </p>
          <p className='ml-3 mb-0'>Support</p>
          <p className='mb-0 h5 ml-auto'>
            <i className='mdi mdi-chevron-right'></i>
          </p>
        </a>
        <a
          href='#'
          className='text-decoration-none text-dark d-flex align-items-center rounded bg-white shadow-sm p-3 mb-1'
          data-toggle='modal'
          data-target='#discountsModal'
        >
          <p className='mb-0 h5 text-warning'>
            <i className='mdi mdi-currency-usd-circle'></i>
          </p>
          <p className='ml-3 mb-0'>Discounts</p>
          <p className='mb-0 h5 ml-auto'>
            <i className='mdi mdi-chevron-right'></i>
          </p>
        </a>
      </div>
      {/* Modal boxes */}

      <div
        className='modal fade'
        id='supportModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Support
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
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='mdi mdi-email-outline'></i>
                </div>
                <div>
                  <p className='small font-weight-bold text-dark mb-0'>
                    LIVE CHAT
                  </p>
                  <p className='mb-0 small'>
                    Waiting time:{' '}
                    <span className='font-weight-bold text-dark'>5 min</span>
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='mdi mdi-book-open'></i>
                </div>
                <div>
                  <p className='small font-weight-bold text-dark mb-0'>FAQ</p>
                  <p className='mb-0 small'>182 Cletus Estates Suite 423</p>
                </div>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='fas fa-phone-alt'></i>
                </div>
                <div>
                  <p className='small font-weight-bold text-dark mb-0'>
                    PHONE NUMBER
                  </p>
                  <p className='mb-0 small'>+1 (987) 1234 098</p>
                </div>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button
                data-dismiss='modal'
                aria-label='Close'
                className='btn btn-primary btn-block'
              >
                DONE?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade'
        id='paymentsModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Payment Methods
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
              <div className='accordion' id='accordionExample'>
                <div className='d-flex'>
                  <button
                    className='btn btn-primary btn-block btn-sm my-0 py-2'
                    data-toggle='collapse'
                    data-target='#collapseOne'
                    aria-expanded='false'
                    aria-controls='collapseOne'
                  >
                    <i className='far fa-credit-card'></i>
                    <span className='ml-2'>Card</span>
                  </button>
                  <button
                    className='btn btn-light btn-block btn-sm mx-2 my-0 py-2'
                    data-toggle='collapse'
                    data-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    <i className='mdi mdi-wallet'></i>
                    <span className='ml-2'>Netbanking</span>
                  </button>
                  <button
                    className='btn btn-light btn-block btn-sm my-0 py-2'
                    data-toggle='collapse'
                    data-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    <i className='far fa-money-bill-alt'></i>
                    <span className='ml-2'>COD</span>
                  </button>
                </div>
                <div
                  id='collapseOne'
                  className='collapse show'
                  aria-labelledby='headingOne'
                  data-parent='#accordionExample'
                >
                  <div className='osahan-card-body pt-3'>
                    <h6 className='m-0'>Add new card</h6>
                    <p className='small'>
                      WE ACCEPT{' '}
                      <span className='osahan-card ml-2 font-weight-bold'>
                        ( Master Card / Visa Card / Rupay )
                      </span>
                    </p>
                    <form>
                      <div className='form-row'>
                        <div className='col-md-12 form-group'>
                          <label className='form-label font-weight-bold small'>
                            Card number
                          </label>
                          <div className='input-group'>
                            <input
                              placeholder='Card number'
                              type='number'
                              className='form-control'
                            />
                            <div className='input-group-append'>
                              <button
                                id='button-addon2'
                                type='button'
                                className='btn btn-outline-secondary'
                              >
                                <i
                                  className='fa fa-credit-card'
                                  aria-hidden='true'
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-8 form-group'>
                          <label className='form-label font-weight-bold small'>
                            Valid through(MM/YY)
                          </label>
                          <input
                            placeholder='Enter Valid through(MM/YY)'
                            type='number'
                            className='form-control'
                          />
                        </div>
                        <div className='col-md-4 form-group'>
                          <label className='form-label font-weight-bold small'>
                            CVV
                          </label>
                          <input
                            placeholder='Enter CVV Number'
                            type='number'
                            className='form-control'
                          />
                        </div>
                        <div className='col-md-12 form-group'>
                          <label className='form-label font-weight-bold small'>
                            Name on card
                          </label>
                          <input
                            placeholder='Enter Card name'
                            type='text'
                            className='form-control'
                          />
                        </div>
                        <div className='col-md-12 form-group'>
                          <div className='custom-control custom-checkbox'>
                            <input
                              type='checkbox'
                              id='custom-checkbox1'
                              className='custom-control-input'
                            />
                            <label
                              title=''
                              type='checkbox'
                              htmlFor='custom-checkbox1'
                              className='custom-control-label'
                            >
                              Securely save this card for a faster checkout next
                              time.
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id='collapseTwo'
                  className='collapse'
                  aria-labelledby='headingTwo'
                  data-parent='#accordionExample'
                >
                  <div className='osahan-card-body pt-3'>
                    <form>
                      <div
                        className='btn-group btn-group-toggle w-100'
                        data-toggle='buttons'
                      >
                        <label className='btn btn-radio btn-light active'>
                          <input type='radio' name='options' id='option1' />{' '}
                          HDFC
                        </label>
                        <label className='btn btn-radio btn-light'>
                          <input type='radio' name='options' id='option2' />{' '}
                          ICICI
                        </label>
                        <label className='btn btn-radio btn-light'>
                          <input type='radio' name='options' id='option3' />{' '}
                          AXIS
                        </label>
                      </div>
                      <div className='form-row pt-3'>
                        <div className='col-md-12 form-group'>
                          <label className='form-label small font-weight-bold'>
                            Select Bank
                          </label>
                          <br />
                          <select className='custom-select form-control'>
                            <option>Bank</option>
                            <option>KOTAK</option>
                            <option>SBI</option>
                            <option>UCO</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id='collapseThree'
                  className='collapse'
                  aria-labelledby='headingThree'
                  data-parent='#accordionExample'
                >
                  <div>
                    <div className='osahan-card-body pt-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='gridCheck1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='gridCheck1'
                        >
                          <h6 className='mb-2 mt-0font-weight-bold'>Cash</h6>
                          <p className='m-0'>
                            Please keep exact change handy to help us serve you
                            better
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button
                type='button'
                data-dismiss='modal'
                aria-label='Close'
                className='btn btn-primary btn-block'
              >
                Update preferences
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade'
        id='personalModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Personal Information
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
              <p className='text-dark mb-2 small'>Profile image</p>
              <div className='d-flex align-items-center mb-4'>
                <Image
                  src='/img/user1.png'
                  width='50'
                  height='50'
                  className='img-fluid mr-1 rounded-circle'
                />
                <button className='btn btn-primary ml-3 mr-1 btn-sm px-3'>
                  Upload
                </button>
                <button className='btn btn-outline-primary btn-sm px-3'>
                  Delete
                </button>
              </div>
              <p className='text-dark mb-2 small'>Profile details</p>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='mdi mdi-account-outline'></i>
                </div>
                <div className='w-100'>
                  <p className='mb-0 small font-weight-bold text-dark'>
                    Full Name
                  </p>
                  <input
                    type='text'
                    className='form-control form-control-sm p-0 border-input border-0 rounded-0'
                    value='Gurdeep Singh'
                  />
                </div>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='mdi mdi-email-outline'></i>
                </div>
                <div className='w-100'>
                  <p className='mb-0 small font-weight-bold text-dark'>
                    Email Address
                  </p>
                  <input
                    type='email'
                    className='form-control form-control-sm p-0 border-input border-0 rounded-0'
                    value='gurdeep1998@gmail.com'
                  />
                </div>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i className='fas fa-phone-alt'></i>
                </div>
                <div className='w-100'>
                  <p className='mb-0 small font-weight-bold text-dark'>
                    Phone Number
                  </p>
                  <input
                    type='number'
                    className='form-control form-control-sm p-0 border-input border-0 rounded-0'
                    value='8568098765'
                  />
                </div>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button
                type='button'
                data-dismiss='modal'
                aria-label='Close'
                className='btn btn-primary btn-block'
              >
                Update profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade'
        id='discountsModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Discounts
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
              <div className='bg-light rounded border d-flex justify-content-between align-items-center flex-column px-4 py-3 mb-2'>
                <h1 className='text-primary mb-0'>KL7L24</h1>
                <p className='mb-0 smal'>* valid until 30 Sep 2020</p>
              </div>
              <div className='bg-light rounded border d-flex justify-content-between align-items-center flex-column px-4 py-3 mb-2'>
                <h1 className='text-danger mb-0'>AQ1P70</h1>
                <p className='mb-0 smal'>* valid until 15 Nov 2020</p>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button
                data-dismiss='modal'
                aria-label='Close'
                className='btn btn-primary btn-block'
              >
                DONE?
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
