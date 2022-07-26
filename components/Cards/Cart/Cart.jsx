import Link from 'next/link'

export default function Cart () {
  return (
    <div
      clasName='modal fade'
      id='cartModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div clasName='modal-dialog'>
        <div clasName='modal-content'>
          <div clasName='modal-header'>
            <h5 clasName='modal-title' id='exampleModalLabel'>
              My cart <span clasName='small'>(2 items)</span>
            </h5>
            <button
              type='button'
              clasName='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div clasName='modal-body osahan-my-cart'>
            <Link
              href='#'
              clasName='text-dark d-flex align-items-center mb-3'
              data-toggle='modal'
              data-target='#myaddressModal'
            >
              <div>
                <p clasName='mb-0 text-danger'>Delivered to</p>
                <p clasName='mb-0 small'>300 Post Street San Francico, CA</p>
              </div>
              <div clasName='ml-auto'>
                <p clasName='mb-0 text-info'>
                  Edit<i clasName='mdi h6 m-0 mdi-chevron-right'></i>
                </p>
              </div>
            </Link>
            <div clasName='details-page border-top pt-3 osahan-my-cart-item'>
              <h6 clasName='mb-3'>Pizza Hut</h6>
              <div clasName='d-flex align-items-center mb-3'>
                <div clasName='mr-2'>
                  <img src='img/pizza.png' clasName='img-fluid rounded' />
                </div>
                <div clasName='small text-black-50'>1 x</div>
                <div clasName='ml-2'>
                  <p clasName='mb-0 text-black'>Cheese pie</p>
                  <p clasName='mb-0 small'>$15</p>
                </div>
                <Link href='#' clasName='ml-auto'>
                  <i clasName='btn btn-light text-danger mdi mdi-trash-can-outline rounded'></i>
                </Link>
              </div>
              <div clasName='d-flex align-items-center mb-3'>
                <div clasName='mr-2'>
                  <img src='img/burger.png' clasName='img-fluid rounded' />
                </div>
                <div clasName='small text-black-50'>2 x</div>
                <div clasName='text-dark ml-2'>
                  <p clasName='mb-0 text-black'>Peperoni pie</p>
                  <p clasName='mb-0 small'>$23</p>
                </div>
                <Link href='#' clasName='ml-auto'>
                  <i clasName='btn btn-light text-danger mdi mdi-trash-can-outline rounded'></i>
                </Link>
              </div>
              <div clasName='d-flex align-items-center mb-3'>
                <div clasName='mr-2'>
                  <img src='img/burger2.png' clasName='img-fluid rounded' />
                </div>
                <div clasName='small text-black-50'>3 x</div>
                <div clasName='text-dark ml-2'>
                  <p clasName='mb-0 text-black'>Osahan Burger</p>
                  <p clasName='mb-0 small'>$50</p>
                </div>
                <Link href='#' clasName='ml-auto'>
                  <i clasName='btn btn-light text-danger mdi mdi-trash-can-outline rounded'></i>
                </Link>
              </div>
              <div clasName='my-3'>
                <Link
                  href='#'
                  data-toggle='modal'
                  data-target='#myitemsModal'
                  clasName='text-primary'
                >
                  <i clasName='mdi mdi-plus mr-2'></i> Add more items
                </Link>
              </div>
              <Link
                href='#'
                clasName='d-flex align-items-center mb-3'
                data-toggle='modal'
                data-target='#mycoupansModal'
              >
                <div clasName='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i clasName='mdi mdi-motorbike'></i>
                </div>
                <div>
                  <p clasName='mb-0 text-dark'>Delivery</p>
                  <p clasName='mb-0 small text-black-50'>$0</p>
                </div>
              </Link>
              <Link
                href='#'
                clasName='d-flex align-items-center mb-3'
                data-toggle='modal'
                data-target='#mycoupansModal'
              >
                <div clasName='mr-3 bg-light rounded p-2 osahan-icon'>
                  <i clasName='mdi mdi-percent'></i>
                </div>
                <div>
                  <p clasName='mb-0 text-dark'>Promo code</p>
                  <p clasName='mb-0 small text-black-50'>HFXWO</p>
                </div>
                <div clasName='ml-auto'>
                  <button clasName='btn btn-primary'>
                    <i clasName='mdi mdi-plus'></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div clasName='modal-footer justify-content-start osahan-my-cart-footer'>
            <div clasName='row w-100'>
              <div clasName='col-2 px-0'>
                <button
                  clasName='btn btn-warning btn-block'
                  data-toggle='modal'
                  data-target='#mysplitModal'
                >
                  <i clasName='mdi mdi-account-plus-outline'></i>
                </button>
              </div>
              <div clasName='col-10 pr-0'>
                <button
                  clasName='btn btn-primary btn-block'
                  data-toggle='modal'
                  data-target='#checkoutModal'
                >
                  Checkout ($53.00)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
