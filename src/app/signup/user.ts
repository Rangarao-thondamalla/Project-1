export class User{
  constructor(
     public fullName: string,
     public email: string,
     public phone: Number,
     public dob: Date,
     public password: any,
     public gender: string,
     public address: string,
  ){}
}