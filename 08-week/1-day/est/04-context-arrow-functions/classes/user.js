class User {
  constructor(name) {
    this.name = name;
  }

  // changeName = (newName) => {
  //   return this.name = newName;
  //   // return this.name;
  // }
  changeName(newName) {
    return (this.name = newName);
    // return this.name;
  }
}

module.exports = User;
