import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const AjoutEtudiant = ({ onEtudiantAdded }) => {
    const [newEtudiant, setNewEtudiant] = useState({
        noEtudiantNat: '',
        nom: '',
        prenom: '',
        anneePro: '',
        dateNaissance: '',
    });

    const addEtudiant = async () => {
        await axios.post('http://localhost:8080/api/etudiantcsa', newEtudiant);
        onEtudiantAdded();
        setNewEtudiant({
            noEtudiantNat: '',
            nom: '',
            prenom: '',
            anneePro: '',
            dateNaissance: '',
        });
    };

    return (
        <Box >
            <h2>Ajouter</h2>
            <div>
                <TextField
                    label="No. Etudiant"
                    variant="outlined"
                    value={newEtudiant.noEtudiantNat}
                    onChange={(e) => setNewEtudiant({...newEtudiant, noEtudiantNat: e.target.value})}
                    style={{ marginBottom: '16px' }}
                />
            </div>

            <div>
                <TextField
                    label="Nom"
                    variant="outlined"
                    value={newEtudiant.nom}
                    onChange={(e) => setNewEtudiant({...newEtudiant, nom: e.target.value})}
                    style={{ marginBottom: '16px' }}
                />
            </div>
            <div>
                <TextField
                    label="Prénom"
                    variant="outlined"
                    value={newEtudiant.prenom}
                    onChange={(e) => setNewEtudiant({...newEtudiant, prenom: e.target.value})}
                    style={{ marginBottom: '16px' }}
                />
            </div>
            <div>
                <TextField
                    label="Année Pro"
                    variant="outlined"
                    value={newEtudiant.anneePro}
                    onChange={(e) => setNewEtudiant({...newEtudiant, anneePro: e.target.value})}
                    style={{ marginBottom: '16px' }}
                />
            </div>
            <div>
                <TextField
                    label="Date de Naissance"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{shrink: true}}
                    value={newEtudiant.dateNaissance}
                    onChange={(e) => setNewEtudiant({...newEtudiant, dateNaissance: e.target.value})}
                    style={{ marginBottom: '16px' }}
                />
            </div>
            <Button variant="contained" onClick={addEtudiant}>Ajouter</Button>
        </Box>
    );
};

export default AjoutEtudiant;
