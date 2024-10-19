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

export interface IapiResponse {
  msg?: string;
  error?: string;
  data?: any;
}
