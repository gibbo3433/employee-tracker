const MainQuestions = [
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: 
      ['view_departments', 
      'view_roles', 
      'view_employees', 
      'add_new_department', 
      'add_new_role', 
      'add_employee', 
      'update_role',]
    },
  ];

  const DepartmentQuestions = [
    {
      type: 'input',
      name: 'department_name',
      message: 'What is the name of the new department?',
    },
  ];

  const RoleQuestions = [
    {
      type: 'input',
      name: 'role.title',
      message: 'What is the name of the new role?',
    },
    {
      type: 'input',
      name: 'role.salary',
      message: 'What is the salary of the new role?',
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'Which department does this new role belong to?',
      choices: [],
    },
  ];

  const EmployeeQuestions = [
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the first name of the employee?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name of the employee?',
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'What is the new employee’s role?',
      choices: [],
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'Who is the Employee’s manager?',
      choices: [],
    },
  ];

  const UpdatedEmployeeQuestions = [
    {
      type: 'list',
      name: 'employee_id',
      message: 'Which employee’s role do you want to Update?',
      choices: [],
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Which role do you want to assign to the selected employee?',
      choices: [],
    },
  ];

  module.exports = {
    MainQuestions,
    DepartmentQuestions,
    RoleQuestions,
    EmployeeQuestions,
    UpdatedEmployeeQuestions,
  };