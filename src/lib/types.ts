export interface IinitialState {
  userData: IuserData | null;
}

export interface IuserData {
  id: string;
  name: string;
  phone: string;
  companyEmail: string;
  companyName: string;
  employeeSize: number;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  token?: string;
}

export interface Ijob {
  jobDescription: string;
  jobTitle: string;
  experienceLevel: string;
  endDate: Date;
  candidates: string[];
}

export interface IapiResponse<T> {
  msg?: string;
  error?: string;
  data?: T;
}
