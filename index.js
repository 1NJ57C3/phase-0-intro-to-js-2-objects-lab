const employee = {
    name: 'John Smith',
    streetAddress: '123 Fake Street',
}

const updateEmployeeWithKeyAndValue = (employee, key, value) =>  {
    return { ...employee,[key]: value };
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const updatedEmployee = { ...employee }
    delete updatedEmployee[key];
    return updatedEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}