# FROM define a imagem base
FROM node:20-alpine

# WORKDIR define o diretório de trabalho dentro do contêiner
WORKDIR /app

# COPY copia os arquivos para dentro do contêiner
COPY package*.json ./

# RUN instala as dependências do projeto
RUN npm install

# COPY copia o restante dos arquivos para o contêiner
COPY . .

# EXPOSE expõe a porta do contêiner
EXPOSE 3000

# CMD define o comando a ser executado quando o contêiner iniciar
CMD ["npm", "start"]
