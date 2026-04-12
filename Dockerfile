FROM node:18

# create working directory inside container
WORKDIR /app

# copy package files first (for caching)
COPY package*.json ./

# install dependencies
RUN npm install

# copy all project files
COPY . .

# expose port
EXPOSE 8000

# start app
CMD ["npm", "start"]