import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { AppBar, Toolbar, TextField, Button, Container } from '@mui/material';
const LoginForm: React.FC = () => {
    const [identifiant, setIdentifiant] = useState<string>('');
    const [motDePasse, setMotDePasse] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/utilisateurs/register', { identifiant, motDePasse });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Erreur de connexion');
        }
    };

    return (
        <Container maxWidth="sm">
            <AppBar position="static">
                <Toolbar>
                    CSA*** CREER UN COMPTE
                </Toolbar>
            </AppBar>
            <TextField
                label="Nom d'utilisateur"
                variant="outlined"
                fullWidth
                margin="normal"
                value={identifiant}
                onChange={(e) => setIdentifiant(e.target.value)}
            />
            <TextField
                label="Mot de passe"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={{ marginBottom: '10px' }}>
                Créer mon compte
            </Button>
            <Button component={Link} to="/login" variant="outlined" color="secondary" fullWidth>
                Redirection vers Login
            </Button>
        </Container>
    );
};

export default LoginForm;
