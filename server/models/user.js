const con = require("./db_connect");
/*
const users = [
    {
        userId: 12345,
        userFirstName: "Jon"
        userLastName: "Seager"
        password: "Icecream@12"
        userBirthday:"10/26/1989"
        userEmail:"vernonseager@gmail.com"
    }
];
*/

async function userTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        userId INT NOT NULL AUTO_INCREMENT,
        userFirstName VARCHAR(25) NOT NULL,
        userLastName VARCHAR(50) NOT NULL,
        userPassword VARCHAR(255) NOT NULL,
        userBirthday VARCHAR(25),
        userEmail VARCHAR(25) NOT NULL UNIQUE,
        CONSTRAINT user_pk PRIMARY KEY(userId)
        
    )
    `;

    await con.query(sql);
}
userTable();
// CONSTRAINT user_fk FOREIGN KEY(userId) REFERENCES
let getUsers = async () => {
    const sql = "SELECT * FROM users";
    return await con.query(sql);
};
async function login(useremail,password) {
    const user = await userExists(useremail);
    if(!user[0]) throw Error('User not found')
    if(user[0].userPassword !== password) throw Error("Password is incorrect");

    return user[0];
}

async function register(user) {
    const u = userExists(user.userEmail);
    if (u.length>0) throw Error("Account already registered");

    const sql = `INSERT INTO users (userFirstName,userLastName, userPassword, userEmail)
    VALUES ("${user.userFirstName}","${user.userLastName}","${user.password}","${user.userEmail}")`;

    const insert = await con.query(sql);
    const newUser = await getUsers(user);
    return newUser[0];
}

async function deleteUser(userId) {
    const sql = `DELETE FROM users 
    WHERE userId = ${userId}`;
    
    await con.query(sql);
}

async function userExists(userEmail) {
    const sql = `SELECT * FROM users
    WHERE userEmail ="${userEmail}"
    `;

    return await con.query(sql);
}

module.exports = {getUsers, login, register, deleteUser, userTable};
