const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.reduce((oldestPerson, person) => {
    if (!oldestPerson.yearOfDeath) {
      oldestPerson.yearOfDeath = currentYear;
    } else if (!person.yearOfDeath) {
      person.yearOfDeath = currentYear;
    }

    if (
      oldestPerson.yearOfDeath - oldestPerson.yearOfBirth <
      person.yearOfDeath - person.yearOfBirth
    ) {
      oldestPerson = person;
    }
    return oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
