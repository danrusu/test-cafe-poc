FROM node:alpine

RUN apk update

RUN apk --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing/ --repository http://dl-cdn.alpinelinux.org/alpine/v3.10/main/ upgrade && \
 apk --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing/ --repository http://dl-cdn.alpinelinux.org/alpine/v3.10/main/ add \
 libevent nodejs npm chromium firefox-esr xwininfo xvfb dbus eudev ttf-freefont fluxbox procps

ENV WORKINGDIR=/opt/test
RUN mkdir -p ${WORKINGDIR}

COPY . ${WORKINGDIR}
WORKDIR ${WORKINGDIR}

RUN npm install -g testcafe
RUN npm install

RUN chmod +x run.sh

#remove windows line ends 
#RUN tr -d '\15\32' < .testcaferc.json > .testcaferc.json
#RUN tr -d '\15\32' < testcafe-docker.sh > testcafe-docker.sh

EXPOSE 1337 1338

ENTRYPOINT ["./run.sh"]
