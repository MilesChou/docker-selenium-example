FROM node:10.15-alpine

RUN npm install -g codeceptjs webdriverio

CMD ["codeceptjs", "run-multiple", "--all"]