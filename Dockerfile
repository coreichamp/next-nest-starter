###
# Build stage
###
FROM node:10-slim AS builder
WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build && rm -rf .next/cache

###
# Exec Stage
###
FROM node:10-slim
WORKDIR /app

COPY --from=builder /build/.next .next
COPY --from=builder /build/dist dist

EXPOSE 3000

CMD ["yarn", "start"]
