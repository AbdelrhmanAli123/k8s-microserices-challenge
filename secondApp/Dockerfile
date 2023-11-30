FROM node
WORKDIR /app
COPY package.json .
RUN npm install 
ENV PORT=8888
ENV APU_URL="https://dog.ceo/api/breeds/image/random"
COPY . .
EXPOSE 8088
CMD [ "npm","start" ]
