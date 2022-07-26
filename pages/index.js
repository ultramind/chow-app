import Head from 'next/head'

export default function Home () {
  return (
    <div className='container-fluid'>
      <div className='d-flex align-items-center justify-content-between mb-3 mt-2'>
        <h5 className='mb-0'>Explore categories</h5>
        <a href='listing.html' className='small font-weight-bold text-dark'>
          See all <i className='mdi mdi-chevron-right mr-2'></i>
        </a>
      </div>
      <div className='row'>
        {/* <!-- Popular --> */}
        <a
          href='listing.html'
          className='text-decoration-none col-xl-2 col-md-4 mb-4'
        >
          <div className='rounded py-4 bg-white shadow-sm text-center'>
            <i className='mdi mdi-fire bg-danger text-white osahan-icon mx-auto rounded-pill'></i>
            <h6 className='mb-1 mt-3'>Popular</h6>
            <p className='mb-0 small'>286+ options</p>
          </div>
        </a>
        {/* <!-- fast delivery --> */}
        <a
          href='listing.html'
          className='text-decoration-none col-xl-2 col-md-4 mb-4'
        >
          <div className='rounded py-4 bg-white shadow-sm text-center'>
            <i className='mdi mdi-motorbike bg-primary text-white osahan-icon mx-auto rounded-pill'></i>
            <h6 className='mb-1 mt-3'>Fast Delivery</h6>
            <p className='mb-0 small'>1,843+ options</p>
          </div>
        </a>
        {/* <!-- high class --> */}
        <a
          href='listing.html'
          className='text-decoration-none col-xl-2 col-md-4 mb-4'
        >
          <div className='rounded py-4 bg-white shadow-sm text-center'>
            <i className='mdi mdi-wallet-outline bg-warning text-white osahan-icon mx-auto rounded-pill'></i>
            <h6 className='mb-1 mt-3'>High class</h6>
            <p className='mb-0 small'>25+ options</p>
          </div>
        </a>
        {/* <!-- Dine in --> */}
        <a
          href='listing.html'
          className='text-decoration-none col-xl-2 col-md-4 mb-4'
        >
          <div className='rounded py-4 bg-white shadow-sm text-center'>
            <i className='mdi mdi-silverware-variant bg-danger text-white osahan-icon mx-auto rounded-pill'></i>
            <h6 className='mb-1 mt-3'>Dine in</h6>
            <p className='mb-0 small'>182+ options</p>
          </div>
        </a>
        {/* <!-- Pick up --> */}
        <a
          href='listing.html'
          className='text-decoration-none col-xl-2 col-md-4 mb-4'
        >
          <div className='rounded py-4 bg-white shadow-sm text-center'>
            <i className='mdi mdi-home-variant-outline bg-primary text-white osahan-icon mx-auto rounded-pill'></i>
            <h6 className='mb-1 mt-3'>Pick up</h6>
            <p className='mb-0 small'>3,548+ options</p>
          </div>
        </a>
        {/* <!-- Nearest --> */}
        <a
          href='listing.html'
          className='text-decoration-none col-xl-2 col-md-4 mb-4'
        >
          <div className='rounded py-4 bg-white shadow-sm text-center'>
            <i className='mdi mdi-map-outline bg-warning text-white osahan-icon mx-auto rounded-pill'></i>
            <h6 className='mb-1 mt-3'>Nearest</h6>
            <p className='mb-0 small'>44+ options</p>
          </div>
        </a>
      </div>
      {/* <!-- Page Heading --> */}
      <div className='d-flex align-items-center justify-content-between mb-3 mt-2'>
        <h5 className='mb-0'>Featured Vendors</h5>
        <a href='listing.html' className='small font-weight-bold text-dark'>
          See all <i className='mdi mdi-chevron-right mr-2'></i>
        </a>
      </div>
      {/* <!-- Content Row --> */}
      <div className='row'>
        {/* <!-- Featured Vendors --> */}
        <a
          href='detail.html'
          className='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
        >
          <div className='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
            <div className='bg-light p-3 rounded'>
              <img src='img/burgerking.png' className='img-fluid' />
            </div>
            <div className='mx-3 py-2 w-100'>
              <p className='mb-2 text-black'>Burger King</p>
              <p className='small mb-2'>
                <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                <span className='font-weight-bold text-dark'>0.8</span> (873)
                <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                Burger
                <i className='mdi mdi-currency-inr ml-3'></i> 340/-
              </p>
              <p className='mb-0 text-muted d-flex align-items-center'>
                <span className='badge badge-light'>
                  <i className='mdi mdi-truck-fast-outline'></i> Free delivery
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
              <img src='img/pizzahut.png' className='img-fluid' />
            </div>
            <div className='mx-3 py-2 w-100'>
              <p className='mb-2 text-black'>Pizza Hut</p>
              <p className='small mb-2'>
                <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                <span className='font-weight-bold text-dark'>0.5</span> (34)
                <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                Pizza
                <i className='mdi mdi-currency-inr ml-3'></i> 150/-
              </p>
              <p className='mb-0 text-muted d-flex align-items-center'>
                <span className='badge badge-info'>
                  <i className='mdi mdi-truck-fast-outline'></i> Free delivery
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
              <img src='img/kfc.png' className='img-fluid' />
            </div>
            <div className='mx-3 py-2 w-100'>
              <p className='mb-2 text-black'>KFC</p>
              <p className='small mb-2'>
                <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                <span className='font-weight-bold text-dark'>0.8</span> (873)
                <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                Burger
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
      {/* <!-- Content Row --> */}
      <div className='row'>
        {/* <!-- Featured Vendors --> */}
        <a
          href='detail.html'
          className='text-dark text-decoration-none col-xl-4 col-lg-12 col-md-12'
        >
          <div className='bg-white shadow-sm rounded d-flex align-items-center p-1 mb-4 osahan-list'>
            <div className='bg-light p-3 rounded'>
              <img src='img/macd.png' className='img-fluid' />
            </div>
            <div className='mx-3 py-2 w-100'>
              <p className='mb-2 text-black'>Mac Donalds</p>
              <p className='small mb-2'>
                <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                <span className='font-weight-bold text-dark'>0.5</span> (223)
                <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                Fires
                <i className='mdi mdi-currency-inr ml-3'></i> 220/-
              </p>
              <p className='mb-0 text-muted d-flex align-items-center'>
                <span className='badge badge-light'>
                  <i className='mdi mdi-truck-fast-outline'></i> Free delivery
                </span>
                <span className='small ml-auto'>
                  <i className='mdi mdi-map-marker'></i> 30 MIN
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
              <img src='img/domino.png' className='img-fluid' />
            </div>
            <div className='mx-3 py-2 w-100'>
              <p className='mb-2 text-black'>Dominos</p>
              <p className='small mb-2'>
                <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                <span className='font-weight-bold text-dark'>0.8</span> (873)
                <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                Pizza
                <i className='mdi mdi-currency-inr ml-3'></i> 340/-
              </p>
              <p className='mb-0 text-muted d-flex align-items-center'>
                <span className='badge badge-light'>
                  <i className='mdi mdi-truck-fast-outline'></i> Free delivery
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
              <img src='img/subway.png' className='img-fluid' />
            </div>
            <div className='mx-3 py-2 w-100'>
              <p className='mb-2 text-black'>Subway</p>
              <p className='small mb-2'>
                <i className='mdi mdi-star text-warning mr-1'></i>{' '}
                <span className='font-weight-bold text-dark'>0.8</span> (200)
                <i className='mdi mdi-silverware-fork-knife ml-3 mr-1'></i>{' '}
                Sub's
                <i className='mdi mdi-currency-inr ml-3'></i> 400/-
              </p>
              <p className='mb-0 text-muted d-flex align-items-center'>
                <span className='badge badge-success'>
                  <i className='mdi mdi-ticket-percent-outline'></i> 55% OFF
                </span>
                <span className='small ml-auto'>
                  <i className='mdi mdi-map-marker'></i> 35 Min
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      {/* <!-- Page Heading --> */}
      <div className='d-flex align-items-center justify-content-between mb-3 mt-2'>
        <h5 className='mb-0'>Asian food</h5>
        <a href='listing.html' className='small font-weight-bold text-dark'>
          See all <i className='mdi mdi-chevron-right mr-2'></i>
        </a>
      </div>
      {/* <!-- Content Row --> */}
      <div className='row'>
        {/* <!-- Asian list --> */}
        <a
          href='#'
          className='text-decoration-none col-xl-4 col-md-4 mb-4'
          data-toggle='modal'
          data-target='#myitemsModal'
        >
          <img src='img/food1.jpg' className='img-fluid rounded' />
          <div className='d-flex align-items-center mt-3'>
            <p className='text-black h6 m-0'>Spicy Na Thai Pizza</p>
            <span className='badge badge-light ml-auto'>
              <i className='mdi mdi-truck-fast-outline'></i> Free delivery
            </span>
          </div>
        </a>
        <a
          href='#'
          className='text-decoration-none col-xl-4 col-md-4 mb-4'
          data-toggle='modal'
          data-target='#myitemsModal'
        >
          <img src='img/food2.jpg' className='img-fluid rounded' />
          <div className='d-flex align-items-center mt-3'>
            <p className='text-black h6 m-0'>Special Burger</p>
            <span className='badge badge-light ml-auto'>
              <i className='mdi mdi-truck-fast-outline'></i> Free delivery
            </span>
          </div>
        </a>
        <a
          href='#'
          className='text-decoration-none col-xl-4 col-md-4 mb-4'
          data-toggle='modal'
          data-target='#myitemsModal'
        >
          <img src='img/food3.jpg' className='img-fluid rounded' />
          <div className='d-flex align-items-center mt-3'>
            <p className='text-black h6 m-0'>Tandoori</p>
            <span className='badge badge-light ml-auto'>
              <i className='mdi mdi-truck-fast-outline'></i> Free delivery
            </span>
          </div>
        </a>
      </div>
      {/* <!-- Content Row --> */}
    </div>
  )
}
