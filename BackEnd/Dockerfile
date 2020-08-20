FROM alpine:latest AS node
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . /app


RUN npm install

EXPOSE 27017
CMD ["sleep", "10"]
ENTRYPOINT [ "npm" ]

CMD [ "run", "start:dev" ]
