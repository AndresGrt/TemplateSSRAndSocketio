FROM node:18

WORKDIR /usr/src/app

# COPY package*.json /usr/src/app
# RUN npm install

COPY . /usr/src/app/

ENV PORT 8080
EXPOSE ${PORT}

CMD ["npm", "run start:dist"]