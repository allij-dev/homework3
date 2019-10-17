FROM node:carbon

# in Linux machine, there are /usr /bin /etc folders

WORKDIR ./

# To add all of the code from this folder to the WORKDIR
COPY . . 

# need to install node packages, so do npm install
RUN npm install

# expose a port for computer to talk to the web
EXPOSE 8080

#the command that is run when we start the container.  npm ___ runs a command in the package.json file
CMD ["npm","start"]

