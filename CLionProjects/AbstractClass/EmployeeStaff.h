//
// Created by Geoffrey Nix on 10/10/22.
//

#ifndef EMPLOYEESTAFF_H
#define EMPLOYEESTAFF_H

#include "EmployeePerson.h"
#include <iostream>
#include <string>
using namespace std;

class EmployeeStaff : public EmployeePerson {
public:
    EmployeeStaff();
    EmployeeStaff(string reportsTo);
    string GetManagerName();
    void PrintInfo();
    int GetAnnualBonus();
private:
    string managerName;
};

#endif