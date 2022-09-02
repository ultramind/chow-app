import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout/Layout'

const index = () => {
  return (
    <Layout>
      <div className='container-fluid'>
        <ul className='nav nav-tabs border-0 mb-4' id='myTab' role='tablist'>
          <li className='nav-item' role='presentation'>
            <a
              className='nav-link active border-0 bg-primary text-white rounded'
              id='home-tab'
              data-toggle='tab'
              href='#home'
              role='tab'
              aria-controls='home'
              aria-selected='true'
            >
              <i className='mdi mdi-home-variant-outline mr-2'></i>Vendors (8)
            </a>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div
            className='tab-pane fade show active'
            id='home'
            role='tabpanel'
            aria-labelledby='home-tab'
          >
            <div className='row'>
              <a
                href='detail.html'
                className='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
              >
                <div className='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
                  <div className='bg-light p-3 rounded'>
                    <Image
                      src='/img/burgerking.png'
                      className='img-fluid'
                      width='100'
                      height='100'
                    />
                  </div>
                  <div className='mx-3 py-2 w-100'>
                    <p className='mb-2 text-black'>Ntachi Osa</p>
                    <p className='small mb-2'>
                      <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                      <span className='font-weight-bold text-dark'>0.8</span>{' '}
                      (873)
                      <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                      Burger
                      <i className='mdi mdi-currency-inr ml-3'></i> 340/-
                    </p>
                    <p className='mb-0 text-muted d-flex align-items-center'>
                      <span className='badge badge-light'>
                        <i className='mdi mdi-truck-fast-outline'></i> Free
                        delivery
                      </span>
                      <span className='small ml-auto'>
                        <i className='mdi mdi-map-marker'></i> 0.3 km
                      </span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                href='detail.html'
                className='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
              >
                <div className='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
                  <div className='bg-light p-3 rounded'>
                    <Image
                      src='/img/pizzahut.png'
                      className='img-fluid'
                      width='100'
                      height='100'
                    />
                  </div>
                  <div className='mx-3 py-2 w-100'>
                    <p className='mb-2 text-black'>Open Sharaton</p>
                    <p className='small mb-2'>
                      <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                      <span className='font-weight-bold text-dark'>0.5</span>{' '}
                      (34)
                      <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                      Food
                      <i className='mdi mdi-currency-inr ml-3'></i> 150/-
                    </p>
                    <p className='mb-0 text-muted d-flex align-items-center'>
                      <span className='badge badge-info'>
                        <i className='mdi mdi-truck-fast-outline'></i> Free
                        delivery
                      </span>
                      <span className='small ml-auto'>
                        <i className='mdi mdi-map-marker'></i> 15 MIN
                      </span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                href='detail.html'
                className='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
              >
                <div className='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
                  <div className='bg-light p-3 rounded'>
                    <Image
                      src='/img/kfc.png'
                      className='img-fluid'
                      width='100'
                      height='100'
                    />
                  </div>
                  <div className='mx-3 py-2 w-100'>
                    <p className='mb-2 text-black'>Dolphine</p>
                    <p className='small mb-2'>
                      <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                      <span className='font-weight-bold text-dark'>0.8</span>{' '}
                      (873)
                      <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                      Food
                      <i className='mdi mdi-currency-inr ml-3'></i> 340/-
                    </p>
                    <p className='mb-0 text-muted d-flex align-items-center'>
                      <span className='badge badge-primary'>
                        <i className='mdi mdi-wallet-outline'></i> Cashback
                      </span>
                      <span className='small ml-auto'>
                        <i className='mdi mdi-map-marker'></i> 0.3 km
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
