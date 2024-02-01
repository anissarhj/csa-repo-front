# Utilisez une image Node.js en tant qu'image de base
FROM node:14 as build

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers dans le répertoire de travail
COPY . .

# Construisez l'application React
RUN npm run build

# Utilisez une image légère en tant qu'image de production
FROM nginx:alpine

# Copiez les fichiers de build de l'application React dans le répertoire approprié de l'image nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposez le port 80
EXPOSE 80

# Commande pour démarrer le serveur nginx
CMD ["nginx", "-g", "daemon off;"]
