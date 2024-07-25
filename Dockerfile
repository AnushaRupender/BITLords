FROM node 16.20.2

COPY ./app/bilords

WORKDIR /app/bilords

RUN npm install -g npm@8.19.4

EXPOSE 3000

ENTRYPOINT ["npm", "start"]