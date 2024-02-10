import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {AppBar, Toolbar, TextField, Button, Container} from '@mui/material';
const LoginForm: React.FC = () => {
    const [identifiant, setIdentifiant] = useState<string>('');
    const [motDePasse, setMotDePasse] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/utilisateurs/login', { identifiant, motDePasse });
            console.log(response.data);
            navigate('/etudiant');
        } catch (error) {
            console.error('Erreur de connexion');
            alert(" Identifiant ou mot de passe incorrect ! ")
        }
    };

    return (
        <Container maxWidth="sm">
            <AppBar position="static">
                <Toolbar>
                    CSA*** SE CONNECTER
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
                VALIDER
            </Button>
            <Button component={Link} to="/register" variant="outlined" color="secondary" fullWidth>
                    Vous n'avez pas de compte?{' '}
            </Button>
        </Container>
    );
};

export default LoginForm;
