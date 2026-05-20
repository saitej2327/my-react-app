import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f4f6f9' }}
    >
      <div
        className="card shadow p-4"
        style={{ width: '420px', borderRadius: '10px' }}
      >
        <div className="text-center mb-4">
          <h2>Register</h2>
          <p className="text-muted">Create a new account to access the dashboard</p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            navigate('/dashboard')
          }}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="termsCheckbox"
              required
            />
            <label className="form-check-label" htmlFor="termsCheckbox">
              I agree to the <a href="#" onClick={(e) => e.preventDefault()}>terms</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted mb-3">- OR -</p>
          <button
            type="button"
            className="btn btn-primary w-100 mb-2"
            onClick={() => navigate('/')}
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-danger w-100"
            onClick={() => navigate('/')}
          >
            Sign in using Google+
          </button>
        </div>
      </div>
    </div>
  )
}
