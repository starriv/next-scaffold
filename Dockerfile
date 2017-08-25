FROM mhart/alpine-node:latest

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN npm config set registry 'https://registry.npm.taobao.org'

COPY . /opt/app
RUN cd /opt/app && npm install
RUN npm run build

CMD ["npm", "run", "start"]
