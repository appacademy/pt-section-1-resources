const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience (teachers) {
    let years = 0;
    teachers.forEach(teacher => years += teacher.yearsOfExperience);
    return years;
  }
}

// const teach1 = new Teacher("fist", "last", "something cool", 2)
// const teach2 = new Teacher("fist", "last", "something cool", 12)
// console.log(Teacher.combinedYearsOfExperience([teach1, teach2]))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
