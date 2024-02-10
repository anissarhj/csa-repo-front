// EditEtudiant.js
import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const EditEtudiantModal = ({ etudiant, isOpen, onClose, onSave }) => {
    const [editedEtudiant, setEditedEtudiant] = useState({ ...etudiant });

    const handleSave = () => {
        onSave(editedEtudiant);
        onClose();
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <h2>Éditer </h2>
                <TextField
                    label="Nom"
                    fullWidth
                    value={editedEtudiant.nom}
                    onChange={(e) => setEditedEtudiant({ ...editedEtudiant, nom: e.target.value })}
                    sx={{ marginBottom: '16px' }}
                />
                <TextField
                    label="Prénom"
                    fullWidth
                    value={editedEtudiant.prenom}
                    onChange={(e) => setEditedEtudiant({ ...editedEtudiant, prenom: e.target.value })}
                    sx={{ marginBottom: '16px' }}
                />
                <TextField
                    label="Date de Naissance"
                    fullWidth
                    value={editedEtudiant.dateNaissance}
                    onChange={(e) => setEditedEtudiant({ ...editedEtudiant, dateNaissance: e.target.value })}
                    sx={{ marginBottom: '16px' }}
                />
                <TextField
                    label="Année Pro"
                    fullWidth
                    value={editedEtudiant.anneePro}
                    onChange={(e) => setEditedEtudiant({ ...editedEtudiant, anneePro: e.target.value })}
                    sx={{ marginBottom: '16px' }}
                />
                <Button variant="contained" onClick={handleSave}>Sauvegarder</Button>
            </Box>
        </Modal>
    );
};

export default EditEtudiantModal;
