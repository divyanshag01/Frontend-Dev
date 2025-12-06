import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addStudent, updateStudent } from "../services/studentServices";

export default function StudentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student;

  const [name, setName] = useState(student ? student.name : "");
  const [section, setSection] = useState(student ? student.section : "");
  const [marks, setMarks] = useState(student ? student.marks : "");
  const [grade, setGrade] = useState(student ? student.grade : "");

  async function handleSubmit(e) {
    e.preventDefault();

    const newData = { name, section, marks, grade };

    if (student) {
      await updateStudent(student.id, newData);
      alert("Student updated!");
    } else {
      await addStudent(newData);
      alert("Student added!");
    }

    navigate("/");
  }

  return (
    <div className="form-container">
      <h2>{student ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Marks"
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-success">
          {student ? "Save Changes" : "Add Student"}
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
