# Utiliser une image Node.js officielle comme image de base
FROM node:22-bookworm-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY . .

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
#COPY . .

# Construire l'application React
#RUN npm run build

# Exposer le port sur lequel l'application va tourner
EXPOSE 5173

# Démarrer l'application avec l'option legacy OpenSSL
CMD ["npm", "run", "dev"]