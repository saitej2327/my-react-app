const express = require('express')

const router = express.Router()

const User = require('../models/User')

/*
  GET USERS
*/

router.get('/', async (req, res) => {

  try {

    const users = await User.find()

    res.json(users)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
})

/*
  CREATE USER
*/

router.post('/', async (req, res) => {

  try {

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
    })

    const savedUser =
      await newUser.save()

    res.status(201).json(savedUser)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
})

/*
  UPDATE USER
*/

router.put('/:id', async (req, res) => {

  try {

    const updatedUser =
      await User.findByIdAndUpdate(

        req.params.id,

        {
          name: req.body.name,
          email: req.body.email,
          role: req.body.role
        },

        {
          new: true
        }

      )

    res.json(updatedUser)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
})

/*
  DELETE USER
*/

router.delete('/:id', async (req, res) => {

  try {

    await User.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message: 'User deleted'
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
})

module.exports = router