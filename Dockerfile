FROM node:16-alpine
EXPOSE 80/tcp
EXPOSE 80/udp
WORKDIR /home
COPY package-lock.json /home/package-lock.json
COPY package.json /home/package.json
COPY public /home/public
COPY src /home/src
COPY server.js /home/server.js
RUN npm install
RUN npm run build
CMD node /home/server.js
