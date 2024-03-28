const express= require('express')
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router()
//routes
//Add Inventory || POST
router.post('/create-inventory',authMiddleware,createInventoryController);
// Get ALL BLOOD RECORDS 
router.get('/get-inventory',authMiddleware,getInventoryController);
module.exports=router