FROM node:18-alpine

WORKDIR /usr/test-tech/app

RUN apk update && apk add bash git curl --no-cache

USER node

EXPOSE 7730

CMD [ "tail", "-f", "/dev/null" ]