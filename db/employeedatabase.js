const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(info) {
        super(info);
    } 

    getDepartments() {

        return new Promise((resolve, reject) => {
            this.db.query('', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(resolve);
            });
        });
    }

    getRoles() {

        return new Promise((resolve, reject) => {
            this.db.query('', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(resolve);
            });
        });
    }

    getEmployees() {

        return new Promise((resolve, reject) => {
            this.db.query('', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(resolve);
            });
        });
    }

    addDepartment() {

        return new Promise((resolve, reject) => {
            this.db.query('', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(resolve);
            });
        });
    }

    addRole() {

        return new Promise((resolve, reject) => {
            this.db.query('', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(resolve);
            });
        });
    }

    addEmployee() {

        return new Promise((resolve, reject) => {
            this.db.query('', (err, results) => {
                if (err) { 
                    reject(err);
                }
                resolve(resolve);
            });
        });
    }











}

module.exports = EmployeeDatabase