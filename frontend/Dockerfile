FROM node:24-slim
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci 

COPY . .
RUN npm run build
EXPOSE 3000

RUN useradd app
USER app

CMD ["npm", "run", "start", "--", "--port", "3000"]