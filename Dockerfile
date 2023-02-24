#base image
FROM node:16.15.1

# set working directory
WORKDIR /app

COPY . .

# install and cache app dependencies
RUN yarn install --frozen-lockfile --production

# start app
CMD ["yarn", "build"]

CMD ['yarn', 'start']