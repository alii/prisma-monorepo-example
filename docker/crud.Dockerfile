FROM node:alpine
ADD yarn.lock .
RUN yarn
ADD package.json .
RUN yarn
ADD prisma .
RUN yarn prisma generate
ADD . .
