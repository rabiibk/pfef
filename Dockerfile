# Stage 1: Builder
FROM node:18.19.0 as builder

WORKDIR /app

# Copier les fichiers du projet Angular dans l'image
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet (à partir de l'emplacement du Dockerfile)
COPY . .

# Construire l'application Angular
RUN npm run build

# Stage 2: Final image
FROM nginx:alpine

## Copier le fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Répertoire de construction de l'application Angular
#ARG APP_DIR=/app/dist/angular8-crud-demo-master


# Copier le résultat de la construction dans le répertoire par défaut de Nginx
COPY --from=builder /app/dist/angular8-crud-demo-master  /usr/share/nginx/html
#COPY --from=builder --chown=nginx:nginx $APP_DIR /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande pour exécuter le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
