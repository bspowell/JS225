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


let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');

foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"