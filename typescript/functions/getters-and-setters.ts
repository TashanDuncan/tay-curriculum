//getters and setters
class Student {
  
  private _name: string
  private _semester: number;
  private _course: string;

  constructor(name){
    this._name = name
  }

  // Getter method to return name
  // of Student class
  public get name() {
      return this._name;
  }

  // Setter method to set the semester number
  public set semester(thesem: number) {
      this._semester = thesem;
  }

  // Setter method
  public set course(thecourse: string) {
      this._course = thecourse;
  }
}

// Access any property of the Student class
let student = new Student('Tay Duncan');

// Setter call
student.semester = 5;
student.course = "Web Development";

console.log(student) 