import Link from 'next/link'

export default function Login() {
  return (
    <div className="row osahan-login m-0">
        <div className="col-md-6 osahan-login-left px-0">
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-column px-0">
            <div className="col-lg-6 mx-auto">
                <h3 className="mb-1">Login User</h3>
                <p className="mb-5">Please kindli login into your account</p>
                <form>
                    <div className="d-flex align-items-center mb-4">
                        <div className="mr-3 bg-light rounded p-2 osahan-icon"><i className="mdi mdi-email-outline"></i></div>
                        <div className="w-100">
                            <p className="mb-0 small font-weight-bold text-dark">Email Address</p>
                            <input type="email" className="form-control form-control-sm p-0 border-input border-0 rounded-0" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <div className="mr-3 bg-light rounded p-2 osahan-icon"><i className="mdi mdi-form-textbox-password"></i></div>
                        <div className="w-100">
                            <p className="mb-0 small font-weight-bold text-dark">Password</p>
                            <input type="password" className="form-control form-control-sm p-0 border-input border-0 rounded-0" placeholder="Enter Your Password" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <Link href="index.html" className="btn btn-primary btn-block mb-3">Create an account</Link>
                        <p className="text-center">Already have an account? <Link href="signin.html" className="text-danger text-decoration-none">Sign in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
