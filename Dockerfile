FROM node:8-alpine

WORKDIR /code
ADD . /code
ENV NODE_ENV production
RUN npm install
EXPOSE 8000

CMD ["npm", "start"]
