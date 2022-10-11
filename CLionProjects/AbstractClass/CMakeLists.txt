cmake_minimum_required(VERSION 3.23)
project(AbstractClass)

set(CMAKE_CXX_STANDARD 14)

add_executable(AbstractClass main.cpp EmployeePerson.h EmployeePerson.cpp EmployeeManager.h EmployeeManager.cpp EmployeeStaff.h EmployeeStaff.cpp)
