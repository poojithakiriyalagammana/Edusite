const mongoose = require('mongoose')
const Users=require('../models/student')


// get all user
const getUsers = async (req, res) => {
    const user = await Users.find({}).sort({createdAt: -1})
  
    res.status(200).json(user)
  }
  
  // get a single user
  const getUserID = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such student'})
    }
  
    const user = await Users.findById(id)
  
    if (!user) {
      return res.status(404).json({error: 'No such student'})
    }
  
    res.status(200).json(user)
  }
  

  const createUser = async (req, res) => {
    const {SID,FirstName,LastName,email,NearCity,Course,Guardian,Subjects} = req.body
  
  
    // add to the database
    try {
      const user = await Users.create({ SID,FirstName,LastName,email,NearCity,Course,Guardian,Subjects })
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // delete a user
  const deleteUser = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such student'})
    }
  
    const user = await Users.findOneAndDelete({_id: id})
  
    if(!user) {
      return res.status(400).json({error: 'No such student'})
    }
  
    res.status(200).json(user)
  }
  
  // update a Financial
  const updateUser = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such student'})
    }
  
    const user = await Users.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!user) {
      return res.status(400).json({error: 'No such student'})
    }
  
    res.status(200).json(user)
  }


  module.exports={
    getUserID,
    getUsers,
    createUser,
    updateUser,
    deleteUser

  }