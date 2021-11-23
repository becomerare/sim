FROM node:lts-alpine 

RUN npm install -g solc truffle

WORKDIR /app
COPY . . 

RUN truffle init
RUN cp -f truf-cfg.js truffle-config.js && rm truf-cfg.js

CMD [ "truffle", "migrate" ]