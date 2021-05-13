import { createUser } from './createUser';

it('should be able to create a new user with identification', () => {
    const user = createUser({
        name: "Rubens Mititaka Kishimoto",
        email: "mititaka@gmail.com",
        password: "Rubensmk99",
        age: 18,

    });
    expect(user).toHaveProperty('id');
});

it('should not be able to create a new user with a invalid e-mail', () => {
    const user = createUser({
        name: "Rubens Mititaka Kishimoto",
        email: "mititaka@gmail.com",
        password: "Rubensmk99",
        age: 18,

    });
    expect(user.email).toMatch(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i);
});

it('should be able to create user with a password containing minimum 8 char, at least 1 uppercase letter and 1 number and 1 special char ', () => {
    const user = createUser({
        name: "Matheus Moraes de Brito",
        email: "matheus.brito@gmail.com",
        password: "@Matheus10",
        age: 18,

    });
    expect(user.password).toMatch(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
});


it('should not be able to create a new user below age 18 ', () => {
    const user = createUser({
        name: "Matheus Moraes de Brito",
        email: "matheus.brito@gmail.com",
        password: "@SenhadoMatheus10",
        age: 18,

    });
    expect(user.age).toBeGreaterThanOrEqual(18);
});