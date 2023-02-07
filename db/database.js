// require the npm mysql2
const mysql = require("mysql2");

// Create a class to connect to the database
class initialiseDatabase {
  constructor(info) {
    this.info = info;
    this.db = null;
  }
  // Check to make sure the details are correct
  validate() {
    const { host, user, password, database } = this.info;
    if (!host || !user || !password || !database)
      throw new Error("Database details are wrong");

    return;
  }
  // Connect to the database
  connect() {
    this.validate();

    const { host, user, password, database } = this.info;

    this.db = mysql.createConnection(
      {
        host: host,
        user: user,
        password: password,
        database: database,
      },
      console.log(`Connected to the database!`)
    );
  }

  // Disconnect from the the databse
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = initialiseDatabase;
