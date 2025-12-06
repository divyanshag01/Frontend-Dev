import { Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Student Result App</h1>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit" element={<StudentForm />} />
        <Route path="/details" element={<StudentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
