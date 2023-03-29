export class User {
    constructor(
        public id: number,
        public username: string,
        public firstname:string,
        public middlename:string,
        public lastname:string,
        public userDetails:any,
        public userRole:any,
        public email:string,
        public password: string,
        public street_address: string,
        public city:string,
        public state:string,
        public country: string,
        public zip:string,
        public role_id:number,
        public status:boolean,
        // public user_details_id:number
      ) {}
    
}
