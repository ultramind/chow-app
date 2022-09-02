export default function TrackStatus () {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>Track Status</h6>
      </div>
      <div className='card-body p-0'>
        <div className='modal-content-page'>
          <div className='modal-body p-0'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6858.444749509847!2d76.7782701760045!3d30.740254526537857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0afe5003d3%3A0x8f47abe9f2044934!2sSector%2017%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1603964943092!5m2!1sen!2sin'
              width='100%'
              height='415'
              frameborder='0'
              style='border:0;'
              allowfullscreen=''
              aria-hidden='false'
              tabindex='0'
            ></iframe>
            <div className='sta_track p-3'>
              <div className='row mb-3'>
                <div className='col-md-6 d-flex align-items-center'>
                  <div>
                    <p className='h5 font-weight-bold text-danger mb-0'>
                      <i className='mdi mdi-clock-outline'></i>
                    </p>
                  </div>
                  <div className='ml-3'>
                    <p className='mb-0 small'>Estimated arrival</p>
                    <p className='font-weight-bold mb-0 text-dark h5'>35 min</p>
                  </div>
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                  <div>
                    <p className='h5 font-weight-bold text-warning mb-0'>
                      <i className='far fa-map'></i>
                    </p>
                  </div>
                  <div className='ml-3'>
                    <p className='mb-0 small'>Distance</p>
                    <p className='font-weight-bold mb-0 text-dark h5'>3.6 km</p>
                  </div>
                </div>
              </div>
              <div className='row mx-0 mb-4'>
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
                      title=''
                      data-original-title='Order Confirmed'
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
                      title=''
                      data-original-title='Order Packed'
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
                      title=''
                      data-original-title='On the way'
                    ></div>
                  </div>
                </div>
              </div>
              <p>
                <i className='text-dark far fa-clock mr-3 bg-light p-2 rounded'></i>
                Delivered
              </p>
              <div className='d-flex align-items-center mb-3'>
                <p className='mb-0 small'>
                  <i className='fas fa-check mr-3 bg-primary text-white rounded p-1'></i>
                </p>
                <p className='mb-0 text-dark font-weight-bold'>On the way</p>
                <span className='ml-auto'>12:48 am</span>
              </div>
              <div className='d-flex align-items-center mb-3'>
                <p className='mb-0 small'>
                  <i className='fas fa-check mr-3 bg-primary text-white rounded p-1'></i>
                </p>
                <p className='mb-0 text-dark font-weight-bold'>Food is ready</p>
                <span className='ml-auto'>12:42 am</span>
              </div>
              <div className='d-flex align-items-center text-primary'>
                <p className='mb-0'>See more</p>
                <p className='ml-auto mb-0'>
                  <i className='mdi mdi-chevron-down'></i>
                </p>
              </div>
            </div>
          </div>
          <div className='modal-footer justify-content-start'>
            <div className='row w-100'>
              <div className='col-3 px-0'>
                <a
                  href='messages.html'
                  className='btn btn-outline-primary btn-block'
                >
                  <i className='far fa-comment-alt'></i>
                </a>
              </div>
              <div className='col-9 pr-0'>
                <a href='orders.html' className='btn btn-primary btn-block'>
                  Call to (Edward)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
