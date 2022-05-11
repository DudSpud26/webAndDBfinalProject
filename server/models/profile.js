const con = require("./db_connect");

async function profileTable() {
    let sql = `CREATE TABLE IF NOT EXISTS profiles (
        userId INT NOT NULL AUTO_INCREMENT,
        dogId INT NOT NULL AUTO_INCREMENT,
        pictureId INT AUTO_INCREMENT,
        dogPicture VARCHAR(100),
        dogName VARCHAR(25),
        dogAge INT,
        trait1 VARCHAR(25),
        trait2 VARCHAR(25),
        trait3 VARCHAR(25),
        trait4 VARCHAR(25),
        trait5 VARCHAR(25),
        CONSTRAINT profile_pk PRIMARY KEY(dogId),
        CONSTRAINT profile_fk FOREIGN KEY(userId) REFERENCES userTable 
        )`;

    await con.query(sql);
}

profileTable();

let getDogs = async () => {
    const sql = "SELECT * FROM profiles";
    return await con.query(sql);
};

async function editAge(profile) {
    const sql = `UPDATE profiles SET
    dogAge = "${profile.dogAge}"
    WHERE dogId = ${profile.dogId}
    `;
}

async function dogExists(dogId) {
    const sql = `SELECT * FROM profiles 
    WHERE dogId = ${dogId}
    `;

    return await con.query(sql);
}

module.exports = {getDogs, editAge, dogExists}