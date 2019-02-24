import {combineReducers} from 'redux'
import AuthReducers from './AuthReducers'
import EmployeeFormReducers from './EmployeeFormReducers'

export default combineReducers({
    auth: AuthReducers,
    employeeForm : EmployeeFormReducers
})