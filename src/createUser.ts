
import { uuid } from 'uuidv4';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    age: number;
}

export function createUser<User>({ name, email, password, age }) {
    const user = {
        id: uuid(),
        name,
        email,
        password,
        age,
    }
    return user;
}
