import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      navigate('/dashboard')
    }
  }, [navigate])

  // FORM STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // LOGIN FUNCTION
  const handleLogin = async () => {

    try {

      const response =
        await axios.post(

          'http://localhost:5000/api/auth/login',

          {
            email,
            password
          }

        )

      // STORE TOKEN
      localStorage.setItem(
        'token',
        response.data.token
      )

      alert('Login Successful')

      navigate('/dashboard')

    } catch (error) {

      console.log(error)

      alert('Invalid Credentials')
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: '#f4f6f9'
      }}
    >

      <div
        className="card shadow p-4"
        style={{
          width: '400px',
          borderRadius: '10px'
        }}
      >

        <div className="text-center mb-4">

          <h2>Admin Login</h2>

          <p className="text-muted">
            Sign in to continue
          </p>

        </div>

        {/* EMAIL */}

        <div className="mb-3">

          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        {/* PASSWORD */}

        <div className="mb-3">

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        {/* BUTTON */}

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login