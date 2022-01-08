
export class User implements IUser {
    userId?: string
    firstName: string;
    lastName: string;
    email: string;
    password?: string;

    static create(user: User){
        let u = new User()
        if(!user) return u
        u = {...user}

        return u
    }
}


export interface IUser {
    userId?: string
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
}