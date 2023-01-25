// Loads in the inquirer dependancy
const inquirer = require('inquirer');
const {mainQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRole}

const EmployeeDatabse = require('./db/employeedatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Gundamexia2007!',
    database: 'employee_db'
});

// connects to the employee database
db.connect();
