
import React, { useState } from 'react';

const studentsData = [
  { id: 1, name: "Elvin Mammadov", speciality: "Informatics", points: 85 },
  { id: 2, name: "Aysel Huseynova", speciality: "Mathematics", points: 92 },
  { id: 3, name: "Ramil Aliyev", speciality: "Physics", points: 78 },
  { id: 4, name: "Seda Quliyeva", speciality: "Biology", points: 95 },
  { id: 5, name: "Mahmud Novruzov", speciality: "Informatics", points: 88 },
  { id: 6, name: "Tural Rahimli", speciality: "Mathematics", points: 75 },
  { id: 7, name: "Samira Aslanova", speciality: "Physics", points: 90 },
];

const App = () => {
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [minPoints, setMinPoints] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 2;

  // Filtrləmə funksiyaları
  const filteredStudents = students
    .filter(student => student.points >= minPoints)
    .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(student => !selectedSpeciality || student.speciality === selectedSpeciality);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const currentStudents = filteredStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);

  return (
    <div>
      <h1>Tələbələr</h1>

      {/* Axtarış */}
      <input
        type="text"
        placeholder="Ad və soyadla axtarış edin"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* İxtisas seçimi */}
      <select onChange={(e) => setSelectedSpeciality(e.target.value)} value={selectedSpeciality}>
        <option value="">İxtisas seçin</option>
        <option value="Informatics">Informatics</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Physics">Physics</option>
        <option value="Biology">Biology</option>
      </select>

      {/* Balına görə filtr */}
      <input
        type="number"
        placeholder="Minimal bal"
        value={minPoints}
        onChange={(e) => setMinPoints(Number(e.target.value))}
      />

      {/* Tələbələr */}
      <ul>
        {currentStudents.map(student => (
          <li key={student.id}>
            {student.name} - {student.speciality} - {student.points} bal
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;