FROM node:14-alpine

RUN npm install -g codeceptjs webdriverio

CMD ["codeceptjs", "run-multiple", "--all"]
