import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f4f6f9' }}
    >
      <div
        className="card shadow p-4"
        style={{ width: '400px', borderRadius: '10px' }}
      >
        <div className="text-center mb-4">
          <h2>Admin Login</h2>
          <p className="text-muted">
            Please login to start your session
          </p>
        </div>

        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button
  className="btn btn-primary w-100"
  onClick={() => navigate('/dashboard')}
>
  Sign In
</button>
        </form>
      </div>
    </div>
  )
}

export default Login