FROM mhart/alpine-node
WORKDIR '/quinifier'
RUN npm install -g serve
COPY /build .
CMD ["serve", "-s", "."]