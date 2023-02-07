// Loads in the inquirer dependancy
const inquirer = require('inquirer');
const {MainQuestions, DepartmentQuestions, RoleQuestions, EmployeeQuestions, UpdatedEmployeeQuestions} = require("./questions");

const EmployeeDatabase = require('./db/employeedatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Gundamexia2007!',
    database: 'employee_db'
});

// connects to the entire database
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
                case 'add_new_department':
                    add_new_department();
                    break;
                case 'add_new_role':
                    add_new_role();
                    break;
                case 'add_new_employee':
                    add_new_employee();
                    break;
                case 'update_role':
                    update_role();
                    break;
            }
        })
};

const view_departments = () => {
    // This grabs the departments table and then puts it into results
    db.getDepartments().then((results) => {
        // This shows the data in a console logged table in the terminal
        console.table(results);
        // Start over the main questions again
        MenuQuestions();
    });
};

const view_roles = () => {
    // This grabs the roles table and then puts it into results
    db.getRoles().then((results) => {
        // This shows the data in a console logged table in the terminal 
        console.table(results);
        // Start over the main questions again
        MenuQuestions();
    });
};

const view_employees = () => {
    // This grabs the employees table and then puts it into results
    db.getEmployees().then((results) => {
        // This shows the data in a console logged table in the terminal 
        console.table(results);
        // Start over the main questions again
        MenuQuestions();
    });
};

const add_new_department = () => {
    // Start up inquirer
    inquirer
        .prompt(DepartmentQuestions)
        .then((response) => {
            db.addDepartment(response).then((results) => {
                MenuQuestions();                                
            });
        })
};



const add_new_role = () => {
        // This grabs the departments table and then puts it into results
        db.getDepartments().then((results) => { 

            // once finding all departments, add them into the array in RoleQuestions question 3
            const AllDepartments = RoleQuestions[2];
            // for each department, push them into the choice for the user to chose from when we enter inquirer
            results.forEach((department) => {
                AllDepartments.choices.push({
                    value: department.id,
                    name: department.name
                })
            })
        });

        inquirer
        // Start up inquirer, take the newly generated role questions for the client
        // prompt the questions for the client
            .prompt(RoleQuestions)
            // Get the response from the client 
            .then((response) => {
                // Add the new role to the results
                db.addRole(response).then((results) => {
                    // show the results in a table
                    console.table(results);
                    // Start the beginner questions again
                    MenuQuestions();
                })
            })
}


const add_new_employee = () => {
    console.log('HELLO')
    // This grabs the roles table and then puts it into results for us to add into the array
    db.getRoles().then((results) => { 

        // once finding all roles, add them into the array in EmployeeQuestions Question 3
        const AllRoles = EmployeeQuestions[2];
        // for each role, push them into the choice for the user to chose from when we enter inquirer
        results.forEach((role) => {
            // Create a const linked to its role.id showing information about that specific role
            const roleInfo = `${role.title} ${role.department_name} ${role.salary}`
            // Push the different roles into the empty array for the client
            AllRoles.choices.push({
                value: role.id,
                name: roleInfo
            });
        });

        // Grab all the employees from database 
        db.getEmployees().then((results) => {
            // Push all of the employees into the final questions choosing what manager the employee will have
            const managerQuestion = EmployeeQuestions[3];
            results.forEach((employee) => {
                // gives the client the choice to give the new employee a manager from the list of current employees
                managerQuestion.choices.push({
                    value: employee.id,
                    name: employee.first_name + ' ' + employee.last_name
                });
            });
            // Add a choice of having no manager for the new employee
            managerQuestion.choices.push({
                value: null,
                name: 'no manager'

            });

             // Start up inquirer, take the newly generated role questions for the client
            // prompt the questions for the client
            inquirer
                .prompt(EmployeeQuestions)
                .then((response) => {
                    db.addEmployee(response).then((results) => {
                        console.table(results)
                        MenuQuestions();
                    })
                })
        });
    });    
}

const update_role = () => {
    // Grab all the employees from database 
    db.getEmployees().then((results) => {
        // Push all of the employees into the update employee first array question
        const employeeQuestionOne = UpdatedEmployeeQuestions[0];
        results.forEach((employee) => {
            // gives the client the choice to choose which employee to update
            employeeQuestionOne.choices.push({
                value: employee.id,
                name: employee.name
            });
        });

        // Grab all f the roles in the company
        db.getRoles().then((results) => {

            // add all of the different roles into the second question of the update employee role
            const employeeQuestionTwo = UpdatedEmployeeQuestions[1];
            results.forEach((role) =>  {
                employeeQuestionTwo.choices.push({
                    value: role.id,
                    name: role.title
                });
            });
            
            // Start up inquirer, take the newly generated role questions for the client
            // prompt the questions for the client
            inquirer
                .prompt(UpdatedEmployeeQuestions)
                .then((response) => {
                    db.updateEmployee(response).then((results) => {
                        console.table(results)
                        MenuQuestions();
                    })
                })
        });
    });    
}

MenuQuestions();