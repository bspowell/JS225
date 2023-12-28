function Person(name) {
	this.name = name;
}
Person.prototype.sayhi = function () {
	console.log('hi. my name is ' + this.name)
}

function Teacher(name, specialization) {
	Person.call(this, name)            // sets "inherited' pr from the parent class. 
	this.specialization = specialization
}

Teacher.prototype = Object.create(Person.prototype)

let person = new Person('bob');
let teacher = new Teacher('joe', 'Math');

console.log(teacher instanceof Person);     // logs true
console.log(teacher instanceof Teacher);     // logs true
console.log(teacher.constructor) // Function Person

teacher.constructor = Teacher
console.log(teacher.constructor) // Function Teacher
