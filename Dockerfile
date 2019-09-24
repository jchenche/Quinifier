FROM mesosphere/aws-cli
WORKDIR '/quinifier'
COPY /build ./
CMD ["s3", "sync", "./", "s3://quinifier"]