
export class User implements IUser {
    uid?: string
    firstName: string;
    lastName: string;
    email: string;
    password?: string;

    static create(user: User){
        if(!user) return
        let u = new User()
        u = {...user}

        return u
    }
}


export interface IUser {
    uid?: string
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
}