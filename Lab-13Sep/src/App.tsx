
import Student from "./Student.tsx";

function App(){

  let student = {
    stuName : "Rahul",
    course: "Btech",
    sem: "5th Semester"
  }

  return (
      <div>
        {/*<Student*/}
        {/*  stuName = "Rinkhang"*/}
        {/*  course = "B-Tech"*/}
        {/*  sem = "5th Semester"*/}
        {/*/>*/}

        <Student stuDetails={student}/>

      </div>
  )
}

export default App