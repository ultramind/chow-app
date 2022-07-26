import React from 'react'

export default function Filter () {
  return (
    <div
      class='modal fade'
      id='filtersModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title' id='exampleModalLabel'>
              Search filters
            </h5>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body'>
            <p class='text-dark mb-2 small'>Sort by</p>
            <div class='btn-group btn-group-toggle mb-3' data-toggle='buttons'>
              <label class='btn osahan-radio btn-light btn-sm active rounded'>
                <input type='radio' name='options' id='option1' checked />{' '}
                <i class='mdi mdi-fire'></i> Most popular
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' />{' '}
                <i class='mdi mdi-clock-outline'></i> Delivery time
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' />{' '}
                <i class='mdi mdi-star'></i> Rating
              </label>
            </div>
            <p class='text-dark mb-2 small mt-3'>Price range</p>
            <div class='btn-group btn-group-toggle mb-3' data-toggle='buttons'>
              <label class='btn osahan-radio btn-light active btn-sm rounded'>
                <input type='radio' name='options' id='option1' checked /> $
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' /> $$
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' /> $$$
              </label>
            </div>
            <p class='text-dark mb-2 small mt-3'>Categories</p>
            <div class='btn-group btn-group-toggle' data-toggle='buttons'>
              <label class='btn osahan-radio btn-light active btn-sm rounded'>
                <input type='radio' name='options' id='option1' checked />{' '}
                Burger
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option2' /> Fast food
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option3' /> American food
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option4' /> Pizza
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option5' /> Asian
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option6' /> Desert
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option7' /> Mexican
              </label>
              <label class='btn osahan-radio btn-light btn-sm rounded'>
                <input type='radio' name='options' id='option8' /> Breakfast
              </label>
            </div>
          </div>
          <div class='modal-footer justify-content-start'>
            <a href='listing.html' class='btn btn-primary btn-block mt-2'>
              Apply filters
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
