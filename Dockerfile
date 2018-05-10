FROM node:8-alpine

WORKDIR /
ADD . /

RUN npm install
ENV ENVIROMENT production
EXPOSE 8000

CMD ["npm", "start"]