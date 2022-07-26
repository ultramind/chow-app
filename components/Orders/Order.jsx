import React from 'react'

export default function Order () {
  return (
    <div clasName='col-md-6 col-lg-4'>
      <div clasName='bg-white shadow-sm p-3 rounded mb-4'>
        <div clasName='d-flex align-items-center mb-3'>
          <p clasName='font-weight-bold text-black mb-0'>Pizza Hut</p>
          <p clasName='badge badge-light mb-0 ml-auto'>
            <i clasName='mdi mdi-map-clock'></i> On the way
          </p>
        </div>
        <div clasName='d-flex align-items-center mb-4'>
          <div>
            <p clasName='mb-0 bg-light rounded p-2 osahan-icon'>
              <i clasName='mdi mdi-clock-outline'></i>
            </p>
          </div>
          <div clasName='ml-3'>
            <p clasName='mb-0'>Estimated arrival</p>
            <p clasName='font-weight-bold mb-0 text-dark h5'>35 min</p>
          </div>
          <div clasName='ml-auto'>
            <a
              clasName='btn btn-primary text-white'
              data-toggle='modal'
              data-target='#trackModal'
            >
              Track
            </a>
          </div>
        </div>
        <div clasName='row m-0'>
          <div clasName='col-2 p-0'>
            <div clasName='progress osahan-progress'>
              <div
                clasName='progress-bar bg-success'
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
          <div clasName='col-4 px-1'>
            <div clasName='progress osahan-progress'>
              <div
                clasName='progress-bar bg-success'
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
          <div clasName='col-6 p-0'>
            <div clasName='progress osahan-progress'>
              <div
                clasName='progress-bar'
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
