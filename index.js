const employee = {
    name: "Joey Johnson",
    streetAddress: "10 Center St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deleted, ...rest } = employee;
    return rest;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
  }