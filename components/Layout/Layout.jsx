import Cart from '../RightPane/Cart/Cart'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Address from '../RightPane/Address/Address'
import Filter from '../RightPane/Filter/Filter'
import Payment from '../RightPane/PaymentMethod/Payment'

function Layout ({ children }) {
  return (
    <div id='wrapper'>
      {/* Side bar */}
      <SideBar />
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          {/* Nav/Header */}
          <Header />
          {/* page content */}
          <div className='container-fluid'>{children}</div>
        </div>
        <Cart />
        <Address/>
        <Filter/>
        <Payment/>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
