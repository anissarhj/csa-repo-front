# Image de base
FROM node:20.11.0

# Repertoire de travail
WORKDIR /app

# Copie de fichier package.json et yarn.lock
COPY package.json ./
COPY package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie le reste de l'application
COPY . ./

#Port
EXPOSE 3000

#Commande
CMD["npm","start"]