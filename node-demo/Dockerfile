FROM node:14-alpine

WORKDIR /var/NodejsDemo
COPY package.json .
RUN npm install
ADD . .
EXPOSE 3000/tcp

# Set node server.js as a default command

CMD [ "node", "server.js" ]
