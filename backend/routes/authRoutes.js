// this saitej branch is for authentication and authorization features
const express = require('express')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const AuthUser =
  require('../models/AuthUser')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router()

/*
  REGISTER
*/

router.post('/register', async (req, res) => {

  try {

    const { name, email, password } = req.body

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10)

    const user = new AuthUser({
      name,
      email,
      password: hashedPassword
    })

    await user.save()

    res.json({
      message: 'User Registered'
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
})

/*
  LOGIN
*/

router.post('/login', async (req, res) => {

  try {

    const { email, password } = req.body

    const user =
      await AuthUser.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: 'User not found'
      })
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: 'Invalid credentials'
      })
    }

    // CREATE JWT TOKEN
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.json({
      token
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
})

// Get current authenticated user
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await AuthUser.findById(req.userId).select('-password')
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
