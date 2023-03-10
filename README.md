# Employee Tracker 

## Creating an Employee Tracker

### User Story

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

### Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Issues identified and corrected

- Adding the questions

When writing my questions, I used role.name from my question bank and when i tried to use this in my function as newRole.name, my results kept on coming out as 'null'. I had to go back and change my question from role.name to role_name.

## Future work
  
- Add a delete function to the employee database
- More questions asked to improve the quality of the ReadMe

I have added commenting to help any future edits by making it easier to see what the different elements are in the code so that if any collaboration work will be done in the future, it will be easiser to track and change.

## Screenshot

![about me](https://user-images.githubusercontent.com/113479774/220926647-9d0c9517-2279-4fdc-a8d4-3b662618097f.jpg)
![contact](https://user-images.githubusercontent.com/113479774/220926666-a814bd27-aeb7-4fb6-825e-ebb36ad75283.jpg)
![portfolio](https://user-images.githubusercontent.com/113479774/220926704-db392d14-ccdc-44c4-a59e-2a934d7af2f6.jpg)
![resume](https://user-images.githubusercontent.com/113479774/220926742-cdb0f852-cc08-4f42-bf25-a81bc84545d5.jpg)

## Link to deployed application

N/A

## Authors and acknowledgment

Jordan Gibbs - Novice Coder

## License

N/A
