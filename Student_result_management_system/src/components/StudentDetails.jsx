import { useNavigate, useLocation } from "react-router-dom";

export default function StudentDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student;

  if (!student) return <p>No student data found.</p>;

  return (
    <div className="details-card">
      <h2>Student Details</h2>

      <div className="detail-row">
        <span className="detail-label">Name:</span>
        <span className="detail-value">{student.name}</span>
      </div>

      <div className="detail-row">
        <span className="detail-label">Section:</span>
        <span className="detail-value">{student.section}</span>
      </div>

      <div className="detail-row">
        <span className="detail-label">Marks:</span>
        <span className="detail-value">{student.marks}</span>
      </div>

      <div className="detail-row">
        <span className="detail-label">Grade:</span>
        <span className="detail-value">{student.grade}</span>
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="btn-primary" onClick={() => navigate("/")}>
          Back to the List
        </button>
      </div>
    </div>
  );
}
