export interface IUser {
  id: number;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: number,
  lng: number;
}

export interface ICompany {
  name: string;
  catchPrase: string;
  bs: string;
}
