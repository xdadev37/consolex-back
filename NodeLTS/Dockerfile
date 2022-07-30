FROM node:16-alpine3.15
ENV TZ="Asia/Tehran"
WORKDIR /root
RUN rm -rf .yarn .yarnrc .yarnrc.yml \
&& yarn set version berry
WORKDIR /home/src
EXPOSE 1337
ENTRYPOINT ["tail", "-f", "/dev/null"]
