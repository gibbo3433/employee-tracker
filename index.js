// Loads in the inquirer dependancy
const inquirer = require('inquirer');
const {MainQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRole}

const EmployeeDatabse = require('./db/employeedatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Gundamexia2007!',
    database: 'employee_db'
});

// connects to the employee database
db.connect();

const MenuQuestions = () => {
    inquirer 
        .prompt(MainQuestions)
        .then((response) => {
            switch (response.option) {
                case 'view_departments':
                    view_departments();
                    break;
                case 'view_roles':
                    view_roles();
                    break;
                case 'view_employees':
                    view_employees();
                    break;
                case 'add_department':
                    add_department();
                    break;
                case 'add_role':
                    add_role();
                    break;
                case 'add_employee':
                    add_employee();
                    break;
                case 'update_role':
                    update_role();
                    break;
            }
        })
}

const view_departments = () => {
    // This grabs the departments table and then puts it into results
    db.getDepartments().then((results) => {
        // This shows the data in a console logged table in the terminal
        console.table(results);
        // Start over the main questions again
        MenuQuestions();
    });
}

const view_roles = () => {
    // This grabs the roles table and then puts it into results
    db.getRoles().then((results) => {
        // This shows the data in a console logged table in the terminal 
        console.table(results);
        // Start over the main questions again
        MenuQuestions();
    });
}

const view_employees = () => {
    // This grabs the employees table and then puts it into results
    db.getRoles().then((results) => {
        // This shows the data in a console logged table in the terminal 
        console.table(results);
        // Start over the main questions again
        MenuQuestions();
    });
}

