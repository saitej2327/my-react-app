import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../api/authService'

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRegister = async (event) => {
    event.preventDefault()

    if (!name || !email || !password) {
      alert('Please fill in all fields')
      return
    }

    try {
      setIsSubmitting(true)

      await register({ name, email, password })

      alert('Registration successful! You can now log in.')
      navigate('/')
    } catch (error) {
      console.error(error)
      alert(error?.response?.data?.message || 'Registration failed')
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
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
