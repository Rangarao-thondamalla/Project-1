export class User{
  constructor(
     public fullName: string,
     public email: string,
     public phone: Number,
     public dob: Number,
     public password: any,
     public address: string,
  ){}
}