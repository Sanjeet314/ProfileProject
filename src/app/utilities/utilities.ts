export interface DropdownOption {
    label: string;
    value: string | number;
    isSelected: boolean;
}

export interface Alarm {
    id: string;
    severity: 'low' | 'medium' | 'high';
    timestamp: Date;
}

export interface Notification<T> {
    eventType: string;
    markedRead?: boolean;
    message?: string;
    data: T
}

export interface Team {
    id: string;
    name: string;
    location: string;
    emplist?: Employee[];
}

export interface ContactTypes {
    address: string;
    typeOfConact:string;
    logo: string;
}

export interface Employee {
    id: string;
    profilePhoto: string;
    name: string;
    designation: string;
    experience: number;
    dateJoined: Date;
    currentTeam: Team;
    reportingManager?: { id: string; name: string; };
    phoneNumber: number;
    companyMailAdd: string;
    contactList: ContactTypes[];
}