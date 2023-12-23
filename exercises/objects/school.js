let school = {

  students: [],

  //Adds a student by creating a new student and adding the student to a collection of students. 
  //The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. 
  //Returns a student object if year is valid otherwise it logs "Invalid Year".
  addStudent(name, year) {
    validYears = ['1st', '2nd', '3rd', '4th', '5th']
    if (validYears.includes(year)) {
      this.students.push(createStudent(name, year))
      return this.students[this.students.length - 1]
    } 
    console.log('Invalid Year')
  }, 

  enrollStudent(name, course) {
    this.students.forEach(student => {
      if(student.name === name) {
        student.addCourse(course)
      }
    })
  },
  //Adds the grade of a student for a course.
  addGrade(name, course_id, grade) {
    this.students.forEach(student => {
      if(student.name === name) {
        student.courses.forEach(course => {
          if (course.code === course_id) {
            course.grade = grade;
          }
        })
      }
    })
  }, 
  // Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
  getReportCard(name) {
    for (let student of this.students) {
      if (student.name === name) {
        student.courses.forEach(course => {
          if(course.grade) {
            console.log(course.name + ': ' + course.grade);
          } else {
            console.log(course.name + ': In Progress');
          };
        })
      }
    }
  },
  courseReport(subject) {
    console.log('==' + subject + ' Grades==');
    this.students.forEach(student => {
      let selectCourse = student.courses.filter(course => course.name === subject);
      if (selectCourse[0].grade) {
        console.log(student.name + ': ' + selectCourse[0].grade);
      }
    })
  }, //Logs the grades of all students for a given course name. Only student with grades are part of the course report.

}


function createStudent(name, year) {
  return {
    courses: [],
    name,
    year,

    info() {
      console.log(this.name + ' is a ' + this.year + ' year student')
    },

    listCourses() {
      console.log(this.courses)
    },
    addCourse(course) {
      this.courses.push(course)
    },
    addNote(course_id, note) {
      // iterate over the array
      // within each object, check the course id
      // if id is correct, add property to object called note with message
      this.courses.forEach(course => {
        if (course.code === course_id) {
          if (!course.note) {
            course.note = [];
          }
          course.note.push(note)
        }
      })
    },
    viewNotes() {
      // iterate over the array of courses
      // if has a note property, print name of course and note.
      this.courses.forEach(course => {
        if(course.note) {
          console.log(course.name + ': ' + course.note.join('; '))
        }
      })
    },
    updateNote(course_id, note) {
      this.courses.forEach(course => {
        if (course.code === course_id) {
          if (!course.note) {
            console.log('There are no notes')
          }
          course.note = []
          course.note.push(note)
        }
      })
    },

  } 

}

let rock = Object.create(school);

let foo = rock.addStudent('foo', '3rd');

// console.log(foo);

foo.addCourse({ name: 'Math', code: 101})
foo.addCourse({ name: 'Advanced Math', code: 102})
foo.addCourse({ name: 'Physics', code: 202})

rock.addGrade('foo', 101, 95);
rock.addGrade('foo', 102, 90);


let bar = rock.addStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101});
// rock.addGrade('bar', 101, 91);

rock.getReportCard('foo');
rock.courseReport('Math');

// console.log(foo)
// console.log(rock)

// rock.addCourse()
// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }