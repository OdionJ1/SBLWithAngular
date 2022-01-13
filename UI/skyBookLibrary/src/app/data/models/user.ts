
export class User implements IUser {
    userId?: string
    firstName: string;
    lastName: string;
    email: string;
    password?: string;

    static create(user: IUser){
        if(!user) return user
        let u = new User()
        u.userId = user.userId
        u.firstName = user.firstName
        u.lastName = user.lastName
        u.email = user.email
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