function filteredRoles(person, role = "Teacher") {
  // Code the function here.
  const personLinkToRole = [];
  if (role !== "Student" && role !== "Teacher") {
    return personLinkToRole;
  } else {
    if (role === "Student") {
      const students = person.filter((person) => person.role === "Student");
      return students;
    } else if (role === "Teacher") {
      const teachers = person.filter((person) => person.role === "Teacher");
      return teachers;
    }
  }
}

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
