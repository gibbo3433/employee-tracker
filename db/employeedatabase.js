const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(info) {
        super(info);
    } 

    // This will grab all of the departments in the db
    getDepartments() {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            this.db.query('SELECT * FROM department', (err, results) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                resolve(results);
            });
        });
    }

     // This will grab all of the roles in the db
     getRoles() {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            this.db.query('SELECT role.id, role.title, role.salary, department.name as department_name FROM role INNER JOIN department ON role.department_id = department.id ', (err, results) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                resolve(results);
            });
        });
    }

     // This will grab all of the employees in the db
     getEmployees() {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            this.db.query(
                `SELECT 
            employee.id, 
            employee.first_name, 
            employee.last_name, 
            role.title as JobTitle, 
            role.salary as Salary, 
            department.name as Department,
            IF (CONCAT(manager.first_name, ' ', manager.last_name) IS NULL, '', CONCAT(manager.first_name, ' ', manager.last_name)) as Manager
             
            FROM employee
            INNER JOIN role ON employee.role_id = role.id
            INNER JOIN department ON role.department_id = department.id
            LEFT JOIN employee as manager ON employee.manager_id = manager.id`,(err, results) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                resolve(results);
            });
        });
    }

     // This will add a new department into the db
     addDepartment(newDepartment) {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            // Here we are adding a new department by SET and then telling the name of the department into the {} area
            this.db.query('INSERT INTO department SET ?', { name: newDepartment.department_name }, (err) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                // We can also use a template literal to see the new department name added
                resolve(` You have have added ${newDepartment.department_name} into the database `);
            });
        });
    }

     // This will add a new role into the db
     addRole(newRole) {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            console.log(newRole)
            this.db.query('INSERT INTO role SET ?', { title: newRole.title, salary: newRole.salary, department_id: newRole.department_id, }, (err,) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                // We can also use a template literal to see the new role added
                resolve(` You have have added a new role called ${newRole.title} into the database `);
            });
        });
    }

     // This will add a new employee into the database
     addEmployee(newEmployee) {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            console.log(newEmployee)
            this.db.query('INSERT INTO employee SET ?', {first_name: newEmployee.first_name, last_name: newEmployee.last_name, role_id: newEmployee.role_id, manager_id: newEmployee.manager_id}, (err,) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                // We can also use a template literal to see the new employee added
                resolve(` You have have added a new employee called ${newEmployee.first_name} ${' '} ${newEmployee.last_name} into the database `);
            });
        });
    }

     // This will update an exsisting emplpyee
     updateEmployee(updateEmployee) {

        return new Promise((resolve, reject) => {
            // This is a db.query methid which we putting into a promise, which will give us an error or results object
            this.db.query('UPDATE employee SET role_id=? WHERE id=?', [updateEmployee.employee_id, updateEmployee.role_id], (err,) => {
                if (err) { 
                    // Any errors will will reject the promise
                    reject(err);
                }
                // If succesful, we will resolve the promise
                // We can also use a template literal to see the updated employee
                resolve(` You have have edited an employee role to ${updateEmployee.role_id} into the database `);
            });
        });
    }

}

module.exports = EmployeeDatabase