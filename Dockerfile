FROM node:13.14 as build
COPY . .
RUN npm install
EXPOSE 8000
CMD [ "npm", "start" ]