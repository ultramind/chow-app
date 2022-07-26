const Header = () => {
  return (
    <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow-sm osahan-nav-top'>
      <button
        id='sidebarToggleTop'
        className='btn btn-link d-md-none rounded-circle mr-3'
      >
        <i className='fa fa-bars'></i>
      </button>
      <ul className='navbar-nav'>
        <li className='nav-item dropdown no-arrow d-sm-none'>
          <a
            className='nav-link dropdown-toggle'
            href='#'
            id='searchDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <i className='fas fa-search fa-fw'></i>
          </a>
          <div
            className='dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in'
            aria-labelledby='searchDropdown'
          >
            <form className='form-inline mr-auto w-100 navbar-search'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control bg-light'
                  placeholder='Search for...'
                  aria-label='Search'
                  aria-describedby='basic-addon2'
                />
                <div className='input-group-append'>
                  <button className='btn btn-primary' type='button'>
                    <i className='mdi mdi-magnify'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className='nav-item dropdown no-arrow mx-2 osahan-t-loc'>
          <a
            className='nav-link dropdown-toggle text-dark'
            href='#'
            data-toggle='modal'
            data-target='#addressModal'
          >
            <span className='mdi mdi-crosshairs-gps'></span>
            <span className='ml-2'>San Frnciso, california</span>
          </a>
        </li>
        <li className='nav-item dropdown no-arrow mx-2 osahan-t-pu'>
          <a className='nav-link dropdown-toggle text-dark' href='orders.html'>
            <i className='mdi mdi-shopping text-danger'></i>
            <span className='ml-2'>Pick up</span>
          </a>
        </li>
        <li className='nav-item dropdown no-arrow mx-2 osahan-t-bd'>
          <a
            className='nav-link dropdown-toggle text-dark'
            data-toggle='modal'
            data-target='#mycoupansModal'
            href='#'
          >
            <i className='mdi mdi-sack-percent text-warning'></i>
            <span className='ml-2'>Best Deals</span>
          </a>
        </li>
      </ul>
      <div className='ml-auto'>
        <a href='search.html'>
          <form className='d-none d-sm-inline-block form-inline mx-2 my-2 my-md-0 mw-100 navbar-search'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control bg-light'
                placeholder='Search for...'
                aria-label='Search'
                aria-describedby='basic-addon2'
              />
              <div className='input-group-append'>
                <button className='btn btn-primary' type='button'>
                  <i className='mdi mdi-magnify'></i>
                </button>
              </div>
            </div>
          </form>
        </a>
        <a
          href='#'
          className='btn btn-primary '
          data-toggle='modal'
          data-target='#filtersModal'
        >
          <i className='mdi mdi-filter-variant'></i>
        </a>
        <a
          href='#'
          className='btn btn-danger ml-2'
          data-toggle='modal'
          data-target='#cartModal'
        >
          <i className='mdi mdi-shopping-outline'></i>
        </a>
      </div>
    </nav>
  )
}

export default Header
