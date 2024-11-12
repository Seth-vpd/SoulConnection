const express = require('express');
const router = express.Router();
const {
    createEmployee, 
    getEmployees,
    getCurrentEmployee,
    getEmployeeById,
    getEmployeeProfile
} = require('../controllers/employeeController');

const { createCustomer, getCustomers } = require('../controllers/customersController');

const { getEvents, getEventById } = require('../controllers/eventsController');
const getTips = require('../controllers/tips');
const { auth, canAccess }= require('../middlewares/accessRoutes')

router.post('/createEmployee', auth, canAccess(["VP of Marketing"]), createEmployee);
router.get('/Coaches', auth, canAccess(["VP of Marketing"]), getEmployees);
router.get('/employees/me', auth, canAccess(["Coach", "VP of Marketing"]), getCurrentEmployee);
router.get('/employees/:id', auth, canAccess(["VP of Marketing"]), getEmployeeById); // But the coach should not be able to see personal informations about the employee
router.get('/employees/:id/profile', auth, canAccess(["Coach", "VP of Marketing"]), getEmployeeProfile);

router.post('/createCustomer', auth, canAccess(["VP of Marketing"]), createCustomer);
router.get('/customers', auth, canAccess(["Coach", "VP of Marketing"]), getCustomers);

router.get('/events', auth, canAccess(["Coach", "VP of Marketing"]), getEvents);
router.get('/events/:id', auth, canAccess(["Coach", "VP of Marketing"]), getEventById);

router.get('/tips', auth, canAccess(["Coach", "VP of Marketing"]), getTips);

module.exports = router;
