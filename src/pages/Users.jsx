import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import apiClient from '../api/apiClient'

import {
  FaEdit,
  FaTrash,
  FaPlus
} from 'react-icons/fa'

function Users() {

  // USERS STATE
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get(
        '/api/users'
      )
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Employee')

  const [editingId, setEditingId] = useState(null)


  const addUser = async () => {
    if (!name || !email) {
      alert('Please fill all fields')
      return
    }

    try {
      const response = await apiClient.post(
        '/api/users',
        { name, email, role }
      )

      setUsers([...users, response.data])
      setName('')
      setEmail('')
      setRole('Employee')
    } catch (error) {
      console.error('Error adding user:', error)
      alert('Failed to add user')
    }
  }

  const deleteUser = async (id) => {
    try {
      await apiClient.delete(
        `/api/users/${id}`
      )

      const filteredUsers =
        users.filter((user) => user._id !== id)

      setUsers(filteredUsers)
    } catch (error) {
      console.log(error)
    }
  }

  const editUser = (user) => {
    setEditingId(user._id)

    setName(user.name)
    setEmail(user.email)
    setRole(user.role)
  }

  
 const updateUser = async () => {
  try {
    const response = await apiClient.put(
      `/api/users/${editingId}`,
      {
        name,
        email,
        role
      }
    )

    const updatedUsers = users.map((user) => {
      if (user._id === editingId) {
        return response.data
      }

      return user
    })

    setUsers(updatedUsers)
    setEditingId(null)
    setName('')
    setEmail('')
    setRole('Employee')
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>

      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div
          className="p-4 w-100"
          style={{ backgroundColor: '#f4f6f9' }}
        >

          <h2 className="mb-4">
            Users Management
          </h2>


          <div className="card shadow border-0 p-4 mb-4">

            <h4 className="mb-3">

              {editingId
                ? 'Edit User'
                : 'Add New User'}

            </h4>

            <div className="row">


              <div className="col-md-4 mb-3">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>


              <div className="col-md-4 mb-3">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>


              <div className="col-md-4 mb-3">

                <select
                  className="form-select"
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                >

                  <option>
                    Employee
                  </option>

                  <option>
                    Manager
                  </option>

                  <option>
                    Admin
                  </option>

                </select>

              </div>

            </div>


            {
              editingId ? (

                <button
                  className="btn btn-warning"
                  onClick={updateUser}
                >
                  Update User
                </button>

              ) : (

                <button
                  className="btn btn-primary"
                  onClick={addUser}
                >
                  <FaPlus className="me-2" />
                  Add User
                </button>

              )
            }

          </div>


          <div className="card shadow border-0 p-3">

            <table className="table table-hover">

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {
                  users.map((user) => (

                    <tr key={user._id}>

                      <td>{user._id}</td>

                      <td>{user.name}</td>

                      <td>{user.email}</td>

                      <td>{user.role}</td>

                      <td>


                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => editUser(user)}
                        >
                          <FaEdit />
                        </button>


                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteUser(user._id)}
                        >
                          <FaTrash />
                        </button>

                      </td>

                    </tr>

                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Users