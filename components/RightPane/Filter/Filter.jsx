import React from 'react'

export default function Filter () {
  return (
    <div
      className='modal fade'
      id='filtersModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Search filters
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
            <p className='text-dark mb-2 small'>Sort by</p>
            <div
              className='btn-group btn-group-toggle mb-3'
              data-toggle='buttons'
            >
              <label className='btn osahan-radio btn-light btn-sm active rounded'>
                <input type='radio' name='options' id='option1' checked />{' '}
                <i className='mdi mdi-fire'></i> Most popular
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' />{' '}
                <i className='mdi mdi-clock-outline'></i> Delivery time
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' />{' '}
                <i className='mdi mdi-star'></i> Rating
              </label>
            </div>
            <p className='text-dark mb-2 small mt-3'>Price range</p>
            <div
              className='btn-group btn-group-toggle mb-3'
              data-toggle='buttons'
            >
              <label className='btn osahan-radio btn-light active btn-sm rounded'>
                <input type='radio' name='options' id='option1' checked /> $
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' /> $$
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' /> $$$
              </label>
            </div>
            <p className='text-dark mb-2 small mt-3'>Categories</p>
            <div className='btn-group btn-group-toggle' data-toggle='buttons'>
              <label className='btn osahan-radio btn-light active btn-sm rounded'>
                <input type='radio' name='options' id='option1' checked />{' '}
                Burger
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' /> Fast food
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' /> American food
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option4' /> Pizza
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option5' /> Asian
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option6' /> Desert
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option7' /> Mexican
              </label>
              <label className='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option8' /> Breakfast
              </label>
            </div>
          </div>
          <div className='modal-footer justify-content-start'>
            <a href='listing.html' className='btn btn-primary btn-block mt-2'>
              Apply filters
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
