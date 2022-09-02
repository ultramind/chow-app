import React from 'react'

export default function Order () {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='bg-white shadow-sm p-3 rounded mb-4'>
        <div className='d-flex align-items-center mb-3'>
          <p className='font-weight-bold text-black mb-0'>Pizza Hut</p>
          <p className='badge badge-light mb-0 ml-auto'>
            <i className='mdi mdi-map-clock'></i> On the way
          </p>
        </div>
        <div className='d-flex align-items-center mb-4'>
          <div>
            <p className='mb-0 bg-light rounded p-2 osahan-icon'>
              <i className='mdi mdi-clock-outline'></i>
            </p>
          </div>
          <div className='ml-3'>
            <p className='mb-0'>Estimated arrival</p>
            <p className='font-weight-bold mb-0 text-dark h5'>35 min</p>
          </div>
          <div className='ml-auto'>
            <a
              className='btn btn-primary text-white'
              data-toggle='modal'
              data-target='#trackModal'
            >
              Track
            </a>
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-2 p-0'>
            <div className='progress osahan-progress'>
              <div
                className='progress-bar bg-success'
                role='progressbar'
                style='width: 100%'
                aria-valuenow='100'
                aria-valuemin='0'
                aria-valuemax='100'
                data-toggle='tooltip'
                data-placement='top'
                title='Order Confirmed'
              ></div>
            </div>
          </div>
          <div className='col-4 px-1'>
            <div className='progress osahan-progress'>
              <div
                className='progress-bar bg-success'
                role='progressbar'
                style='width: 100%'
                aria-valuenow='100'
                aria-valuemin='0'
                aria-valuemax='100'
                data-toggle='tooltip'
                data-placement='top'
                title='Order Packed'
              ></div>
            </div>
          </div>
          <div className='col-6 p-0'>
            <div className='progress osahan-progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style='width: 50%'
                aria-valuenow='50'
                aria-valuemin='0'
                aria-valuemax='100'
                data-toggle='tooltip'
                data-placement='top'
                title='On the way'
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
