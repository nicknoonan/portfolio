FROM node:17-alpine
EXPOSE 80/tcp
EXPOSE 80/udp
WORKDIR /home
COPY package-lock.json /home/package-lock.json
COPY package.json /home/package.json
COPY build /home/build
COPY server.js /home/server.js
RUN npm install

CMD node /home/server.js
