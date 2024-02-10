import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AjoutEtudiant from './AjoutEtudiant';
import EditEtudiantModal from './EditEtudiant';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import '../layout/EtudiantList.css';

const EtudiantList = () => {
    const [etudiants, setEtudiants] = useState([]);
    const [editingEtudiant, setEditingEtudiant] = useState(null);

    useEffect(() => {
        fetchEtudiants();
    }, []);

    const fetchEtudiants = async () => {
        const response = await axios.get('http://localhost:8080/api/etudiantcsa');
        setEtudiants(response.data);
    };

    const deleteEtudiant = async (id) => {
        await axios.delete(`http://localhost:8080/api/etudiantcsa/${id}`);
        fetchEtudiants();
    };

    const openEditModal = (etudiant) => {
        setEditingEtudiant(etudiant);
    };

    const closeEditModal = () => {
        setEditingEtudiant(null);
    };

    const saveEditedEtudiant = async (editedEtudiant) => {
        await axios.put(`http://localhost:8080/api/etudiantcsa/${editedEtudiant.noEtudiantNat}`, editedEtudiant);
        fetchEtudiants();
        closeEditModal();
    };

    return (
        <div className="etudiant-list-container">
            <div className="etudiant-list">
                <h1>Liste des étudiants</h1>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>No. Etudiant</TableCell>
                                <TableCell>Nom</TableCell>
                                <TableCell>Prénom</TableCell>
                                <TableCell>Date de Naissance</TableCell>
                                <TableCell>Année Pro</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {etudiants.map((etudiant) => (
                                <TableRow key={etudiant.noEtudiantNat}>
                                    <TableCell>{etudiant.noEtudiantNat}</TableCell>
                                    <TableCell>{etudiant.nom}</TableCell>
                                    <TableCell>{etudiant.prenom}</TableCell>
                                    <TableCell>{etudiant.dateNaissance}</TableCell>
                                    <TableCell>{etudiant.anneePro}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => deleteEtudiant(etudiant.noEtudiantNat)}>Supprimer</Button>
                                        <Button onClick={() => openEditModal(etudiant)}>Mettre à jour</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="ajout-etudiant">
                <AjoutEtudiant onEtudiantAdded={fetchEtudiants} />
            </div>

            {editingEtudiant && (
                <EditEtudiantModal
                    etudiant={editingEtudiant}
                    isOpen={!!editingEtudiant}
                    onClose={closeEditModal}
                    onSave={saveEditedEtudiant}
                />
            )}
        </div>
    );
};

export default EtudiantList;
