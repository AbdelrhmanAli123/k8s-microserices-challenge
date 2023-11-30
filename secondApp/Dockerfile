FROM node
WORKDIR /app
COPY package.json .
RUN npm install 
ENV PORT=8888
ENV API_URL=""
COPY . .
EXPOSE 8088
CMD [ "npm","start" ]
