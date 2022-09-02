import React from 'react'
import Layout from '../../components/Layout/Layout'

const index = () => {
  return (
    <Layout>
      <div class='container-fluid'>
        <div class='d-flex align-items-center justify-content-between mb-3 mt-2'>
          <h5 class='mb-0'>Upcoming orders</h5>
          <a
            href='#'
            class='small text-dark bg-white shadow-sm px-2 py-1 rounded'
          >
            <i class='mdi mdi-map-outline mr-2'></i>20 km{' '}
            <i class='ml-1 mdi mdi-chevron-down'></i>
          </a>
        </div>
        <div class='row'>
          <div class='col-md-6 col-lg-4'>
            <div class='bg-white shadow-sm p-3 rounded mb-4'>
              <div class='d-flex align-items-center mb-3'>
                <p class='font-weight-bold text-black mb-0'>Pizza Hut</p>
                <p class='badge badge-light mb-0 ml-auto'>
                  <i class='mdi mdi-map-clock'></i> On the way
                </p>
              </div>
              <div class='d-flex align-items-center mb-4'>
                <div>
                  <p class='mb-0 bg-light rounded p-2 osahan-icon'>
                    <i class='mdi mdi-clock-outline'></i>
                  </p>
                </div>
                <div class='ml-3'>
                  <p class='mb-0'>Estimated arrival</p>
                  <p class='font-weight-bold mb-0 text-dark h5'>35 min</p>
                </div>
                <div class='ml-auto'>
                  <a
                    class='btn btn-primary text-white'
                    data-toggle='modal'
                    data-target='#trackModal'
                  >
                    Track
                  </a>
                </div>
              </div>
              <div class='row m-0'>
                <div class='col-2 p-0'>
                  <div class='progress osahan-progress'>
                    <div
                      class='progress-bar bg-success'
                      role='progressbar'
                      style={{ width: '100%' }}
                      aria-valuenow='100'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Order Confirmed'
                    ></div>
                  </div>
                </div>
                <div class='col-4 px-1'>
                  <div class='progress osahan-progress'>
                    <div
                      class='progress-bar bg-success'
                      role='progressbar'
                      style={{ width: '100%' }}
                      aria-valuenow='100'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Order Packed'
                    ></div>
                  </div>
                </div>
                <div class='col-6 p-0'>
                  <div class='progress osahan-progress'>
                    <div
                      class='progress-bar'
                      role='progressbar'
                      style={{ width: '50%' }}
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
          <div class='col-md-6 col-lg-4'>
            <div class='bg-white shadow-sm p-3 rounded mb-4'>
              <div class='d-flex align-items-center mb-3'>
                <p class='font-weight-bold text-black mb-0'>Burger king</p>
                <p class='badge badge-info mb-0 ml-auto'>
                  <i class='mdi mdi-timelapse'></i> Order Preparing
                </p>
              </div>
              <div class='d-flex align-items-center mb-4'>
                <div>
                  <p class='mb-0 bg-light rounded p-2 osahan-icon'>
                    <i class='mdi mdi-clock-outline'></i>
                  </p>
                </div>
                <div class='ml-3'>
                  <p class='mb-0'>Estimated arrival</p>
                  <p class='font-weight-bold mb-0 text-dark h5'>60 min</p>
                </div>
                <div class='ml-auto'>
                  <a
                    class='btn btn-primary text-white'
                    data-toggle='modal'
                    data-target='#trackModal'
                  >
                    Track
                  </a>
                </div>
              </div>
              <div class='row m-0'>
                <div class='col-2 p-0'>
                  <div class='progress osahan-progress'>
                    <div
                      class='progress-bar bg-success'
                      role='progressbar'
                      style={{ width: '100%' }}
                      aria-valuenow='100'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Order Confirmed'
                    ></div>
                  </div>
                </div>
                <div class='col-4 px-1'>
                  <div class='progress osahan-progress'>
                    <div
                      class='progress-bar'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Order Preparing'
                    ></div>
                  </div>
                </div>
                <div class='col-6 p-0'>
                  <div class='progress osahan-progress'>
                    <div
                      class='progress-bar'
                      role='progressbar'
                      style={{ width: '0%' }}
                      aria-valuenow='0'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='d-flex align-items-center justify-content-between mb-3 mt-2'>
          <h5 class='mb-0'>Previous orders</h5>
          <a
            href='#'
            class='small text-dark bg-white shadow-sm px-2 py-1 rounded'
          >
            <i class='mdi mdi-grid-large mr-2'></i>Today{' '}
            <i class='ml-1 mdi mdi-chevron-down'></i>
          </a>
        </div>
        <div class='row'>
          <div class='col-lg-4 col-md-6'>
            <div class='bg-white shadow-sm rounded p-3 mb-4'>
              <div class='d-flex align-items-center mb-1'>
                <h6 class='mb-0'>Mac Donalds</h6>
                <p class='badge badge-success mb-0 ml-auto'>
                  <i class='mdi mdi-check-circle'></i> Completed
                </p>
              </div>
              <div class='d-flex align-items-center'>
                <p class='small'>
                  <i class='mdi mdi-calendar mr-1'></i>September 16, 2021{' '}
                  <span class='ml-2'>
                    <i class='mdi mdi-clock-outline mr-1'></i>11:54 PM
                  </span>
                </p>
              </div>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>1</span>Delicious Cheese pie
              </p>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>2</span>Peperoni pie
              </p>
              <div class='d-flex align-items-center row pt-2 mt-3'>
                <div class='col-6 pr-2'>
                  <a
                    href='#'
                    class='btn btn-primary btn-block'
                    data-toggle='modal'
                    data-target='#detailsModal'
                  >
                    Detials
                  </a>
                </div>
                <div class='col-6 pl-2'>
                  <a
                    href='settings.html'
                    class='btn btn-outline-primary btn-block'
                  >
                    Get help
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-6'>
            <div class='bg-white shadow-sm rounded p-3 mb-4'>
              <div class='d-flex align-items-center mb-1'>
                <h6 class='mb-0'>Dominos</h6>
                <p class='badge badge-success mb-0 ml-auto'>
                  <i class='mdi mdi-check-circle'></i> Completed
                </p>
              </div>
              <div class='d-flex align-items-center'>
                <p class='small'>
                  <i class='mdi mdi-calendar mr-1'></i>September 16, 2021{' '}
                  <span class='ml-2'>
                    <i class='mdi mdi-clock-outline mr-1'></i>11:54 PM
                  </span>
                </p>
              </div>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>1</span>Delicious Cheese pie
              </p>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>2</span>Peperoni pie
              </p>
              <div class='d-flex align-items-center row pt-2 mt-3'>
                <div class='col-6 pr-2'>
                  <a
                    href='#'
                    class='btn btn-primary btn-block'
                    data-toggle='modal'
                    data-target='#detailsModal'
                  >
                    Detials
                  </a>
                </div>
                <div class='col-6 pl-2'>
                  <a
                    href='settings.html'
                    class='btn btn-outline-primary btn-block'
                  >
                    Get help
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-6'>
            <div class='bg-white shadow-sm rounded p-3 mb-4'>
              <div class='d-flex align-items-center mb-1'>
                <h6 class='mb-0'>Subway</h6>
                <p class='badge badge-success mb-0 ml-auto'>
                  <i class='mdi mdi-check-circle'></i> Completed
                </p>
              </div>
              <div class='d-flex align-items-center'>
                <p class='small'>
                  <i class='mdi mdi-calendar mr-1'></i>September 16, 2021{' '}
                  <span class='ml-2'>
                    <i class='mdi mdi-clock-outline mr-1'></i>11:54 PM
                  </span>
                </p>
              </div>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>1</span>Delicious Cheese pie
              </p>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>2</span>Peperoni pie
              </p>
              <div class='d-flex align-items-center row pt-2 mt-3'>
                <div class='col-6 pr-2'>
                  <a
                    href='#'
                    class='btn btn-primary btn-block'
                    data-toggle='modal'
                    data-target='#detailsModal'
                  >
                    Detials
                  </a>
                </div>
                <div class='col-6 pl-2'>
                  <a
                    href='settings.html'
                    class='btn btn-outline-primary btn-block'
                  >
                    Get help
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-6'>
            <div class='bg-white shadow-sm rounded p-3 mb-4'>
              <div class='d-flex align-items-center mb-1'>
                <h6 class='mb-0'>Burger King</h6>
                <p class='badge badge-success mb-0 ml-auto'>
                  <i class='mdi mdi-check-circle'></i> Completed
                </p>
              </div>
              <div class='d-flex align-items-center'>
                <p class='small'>
                  <i class='mdi mdi-calendar mr-1'></i>September 16, 2021{' '}
                  <span class='ml-2'>
                    <i class='mdi mdi-clock-outline mr-1'></i>11:54 PM
                  </span>
                </p>
              </div>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>1</span>Delicious Cheese pie
              </p>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>2</span>Peperoni pie
              </p>
              <div class='d-flex align-items-center row pt-2 mt-3'>
                <div class='col-6 pr-2'>
                  <a
                    href='#'
                    class='btn btn-primary btn-block'
                    data-toggle='modal'
                    data-target='#detailsModal'
                  >
                    Detials
                  </a>
                </div>
                <div class='col-6 pl-2'>
                  <a
                    href='settings.html'
                    class='btn btn-outline-primary btn-block'
                  >
                    Get help
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-4 col-md-6'>
            <div class='bg-white shadow-sm rounded p-3 mb-4'>
              <div class='d-flex align-items-center mb-1'>
                <h6 class='mb-0'>Osahan Eat</h6>
                <p class='badge badge-success mb-0 ml-auto'>
                  <i class='mdi mdi-check-circle'></i> Completed
                </p>
              </div>
              <div class='d-flex align-items-center'>
                <p class='small'>
                  <i class='mdi mdi-calendar mr-1'></i>September 16, 2021{' '}
                  <span class='ml-2'>
                    <i class='mdi mdi-clock-outline mr-1'></i>11:54 PM
                  </span>
                </p>
              </div>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>1</span>Delicious Cheese pie
              </p>
              <p class='text-dark mb-2'>
                <span class='mr-2 text-black'>2</span>Peperoni pie
              </p>
              <div class='d-flex align-items-center row pt-2 mt-3'>
                <div class='col-6 pr-2'>
                  <a
                    href='#'
                    class='btn btn-primary btn-block'
                    data-toggle='modal'
                    data-target='#detailsModal'
                  >
                    Detials
                  </a>
                </div>
                <div class='col-6 pl-2'>
                  <a
                    href='settings.html'
                    class='btn btn-outline-primary btn-block'
                  >
                    Get help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
