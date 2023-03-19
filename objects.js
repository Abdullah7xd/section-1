let user={name:'Raju',email:'raju@mail.com',password:'4328563'}
console.log(user.email);
// console.log(user['name]);
user.address='Lucknow';
console.log(user);
user.email='raju@hotmail.com';
console.log(user);
delete user.password;
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
let smartphone={
    brand:'samsung',
    model:'S23 Ultra',
    price:78000,
    color: 'white'
}
console.log(smartphone.color);
smartphone.color=['White','Red','Black'];
console.log(smartphone);
console.log(smartphone.color[1]);
smartphone.color.push('blue');
console.log(smartphone);

