export class Person {
    id:number | undefined;
    name:string | undefined;
    email:string | undefined;
    active:boolean | undefined;
    picture:any;
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

}