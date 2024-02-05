import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://spring-app:8081/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des étudiants</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}> {student.nom}  {student.prenom}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
