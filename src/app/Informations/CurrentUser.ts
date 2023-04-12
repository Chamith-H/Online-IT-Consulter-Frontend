export class CurrentUser {
    private _id: number;
    private _name: string;
    private _email: string;

    constructor(id: number, name: string, email: string) {
        this._id = id;
        this._name = name;
        this._email = email;
    }

    fetch(): any {
        const user = {
            id: this._id,
            name: this._name,
            email: this._email
        };
        return user;
    }
}