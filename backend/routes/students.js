const express =require('express')
const router =express.Router();

const{
    getUsers,
    getUserID,
    createUser,
    updateUser,
    deleteUser
}=require('../controllers/studentController');

router.get('/',getUsers);
router.get('/:id',getUserID);
router.post('/add',createUser);
router.put('/:id',updateUser);
router.delete('/delete/:id', deleteUser);

module.exports=router;