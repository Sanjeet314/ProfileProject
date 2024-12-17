import { Employee } from '../../utilities/utilities';


export interface EmployeeFilterState {
  id?: string;
  name?: string;
  designation?: string;
  experience?: number;
  dateJoined?: string;
  reportingManager?: { id?: string; name?: string };
  currentTeam?: { name?: string; location?: string };
}


export interface EmployeeState {
  employees: Employee[];
  filteredEmployees: Employee[];
  filterCriteria: EmployeeFilterState;
  error: any;
}


export const initialFilterState: EmployeeFilterState = {
  id: '',
  name: '',
  designation: '',
  experience: undefined,
  dateJoined: '',
  reportingManager: {},
  currentTeam: {},
};

export const initialState: EmployeeState = {
  employees: [],
  filteredEmployees: [],
  filterCriteria: initialFilterState,
  error: null,
};
