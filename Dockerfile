FROM node:18-slim

RUN apt update && apt -y install libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
WORKDIR /app
COPY package*.json .
RUN npm ci --omit=dev
COPY main.js .

CMD ["node", "main"]