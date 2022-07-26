const SideBar = () => {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'
    >
      <a className='sidebar-brand d-flex align-items-center' href='index.html'>
        <div className='sidebar-brand-icon'>
          <img src='img/logo.png' className='img-fluid' />
        </div>
      </a>
      <li className='nav-item active'>
        <a className='nav-link' href='index.html'>
          <i className='mdi mdi-home-variant-outline'></i>
          <span>Home</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='explore.html'>
          <i className='mdi mdi-grid-large'></i>
          <span>Explore</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='favourities.html'>
          <i className='mdi mdi-bookmark-outline'></i>
          <span>Favourities</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='favourities.html'>
          <i className='mdi mdi-bookmark-outline'></i>
          <span>Vendors</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='orders.html'>
          <i className='mdi mdi-book-open'></i>
          <span>Orders</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='settings.html'>
          <i className='mdi mdi-cog'></i>
          <span>Settings</span>
        </a>
      </li>
      
      <div
        className='bg-white m-3 p-3 sidebar-alert rounded text-center alert fade show d-none d-md-inline'
        role='alert'
      >
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <i className='mdi mdi-food mb-3'></i>
        <p className='text-black mb-1'>
          Free delivery on
          <br />
          all orders over <span className='text-primary'>$25</span>
        </p>
        <p className='small'>It is a limited time offer that will expire soon.</p>
        <a href='explore.html' className='btn btn-primary btn-block btn-sm'>
          Order now <i className='pl-3 fas fa-long-arrow-alt-right'></i>
        </a>
      </div>
      <div className='d-none d-md-block'>
        <div className='user d-flex align-items-center p-3'>
          <div className='pr-3'>
            <i className='mdi mdi-account-circle-outline text-white h3 mb-0'></i>
          </div>
          <div>
            <p className='mb-0 text-white'>Mark Clarke</p>
            <p className='mb-0 text-white-50 small'>example@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className='sidebar-divider d-none d-md-block' />
      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle'></button>
      </div>
    </ul>
  )
}

export default SideBar
