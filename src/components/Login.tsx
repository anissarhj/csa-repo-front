import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import MyNavbar from "../layout/MyNavbar";

const LoginForm: React.FC = () => {
    const [identifiant, setIdentifiant] = useState<string>('');
    const [motDePasse, setMotDePasse] = useState<string>('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/utilisateurs/login', { identifiant, motDePasse });
            console.log(response.data);
            navigate('/student');
        } catch (error) {
            console.error('Erreur de connexion');
        }
    };

    return (
        <div>
            <MyNavbar/>
            <input type="text" placeholder="Nom d'utilisateur" value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
};

export default LoginForm;
