import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudents, deleteStudent } from "../services/studentServices";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Load all students
  async function handleLoad() {
    const data = await getStudents();
    setStudents(data);
  }

  // Delete student
  async function handleDelete(id) {
    await deleteStudent(id);
    alert("Student deleted");
    handleLoad(); // Reload list after delete
  }

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button className="btn-primary" onClick={handleLoad}>
          Load Students
        </button>
        <button className="btn-success" onClick={() => navigate("/add")}>
          Add Student
        </button>
      </div>

      <h2>All Students</h2>

      {students.length === 0 ? (
        <p>No students loaded. Click "Load Students" to view data.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>

                <td className="actions-cell">
                  <button
                    className="btn-secondary"
                    onClick={() => navigate("/edit", { state: { student: s } })}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-danger"
                    onClick={async () => {
                      await handleDelete(s.id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    className="btn-primary"
                    onClick={() =>
                      navigate("/details", { state: { student: s } })
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
