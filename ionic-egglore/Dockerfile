FROM node:9.11.2
MAINTAINER martin <martin@esls.io>

RUN npm install -g cordova ionic

RUN mkdir -p /egglore/docker
WORKDIR /egglore/docker
ADD . /egglore/docker

RUN npm install

ENV NODE_ENV development

EXPOSE 8100 8101 3000 80

CMD ionic serve --all
