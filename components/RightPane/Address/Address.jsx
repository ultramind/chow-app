import React from 'react'

export default function Address () {
  return (
    <div
      className='modal fade'
      id='myaddressModal'
      data-backdrop='static'
      data-keyboard='false'
      tabindex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='staticBackdropLabel'>
              Delivered address
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
            <form>
              <div className='form-group'>
                <label
                  for='inputAddress'
                  className='small font-weight-bold text-dark mb-0'
                >
                  Street Name
                </label>
                <input
                  type='text'
                  className='form-control form-control-sm border-0 p-0 border-input rounded-0'
                  id='inputAddress'
                  placeholder=''
                  value='300 Post Street'
                />
              </div>
              <div className='form-group'>
                <label
                  for='inputAddress'
                  className='small font-weight-bold text-dark mb-0'
                >
                  City
                </label>
                <input
                  type='text'
                  className='form-control form-control-sm border-0 p-0 border-input rounded-0'
                  id='inputAddress'
                  placeholder=''
                  value='San Francisco'
                />
              </div>
              <div className='form-group'>
                <label
                  for='inputAddress'
                  className='small font-weight-bold text-dark mb-0'
                >
                  State
                </label>
                <input
                  type='text'
                  className='form-control form-control-sm border-0 p-0 border-input rounded-0'
                  id='inputAddress'
                  placeholder=''
                  value='California'
                />
              </div>
              <div className='form-group'>
                <label
                  for='inputAddress'
                  className='small font-weight-bold text-dark mb-0'
                >
                  Zip Code
                </label>
                <input
                  type='text'
                  className='form-control form-control-sm border-0 p-0 border-input rounded-0'
                  id='inputAddress'
                  placeholder=''
                  value='123456'
                />
              </div>
            </form>
          </div>
          <div className='modal-footer border-0'>
            <button
              data-dismiss='modal'
              aria-label='Close'
              className='btn btn-primary btn-block'
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
