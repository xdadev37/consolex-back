FROM git.oncolog.ir:453/nodelts16bull
ENV NODE_ENV="production" PUBLIC_URL="https://consolex.shop" TZ="Asia/Tehran" DATABASE_CLIENT="postgres" DATABASE_HOST="consolex-db" DATABASE_PORT="5432" DATABASE_NAME="consolex" DATABASE_USERNAME="pouriasa" DATABASE_PASSWORD="4696048" DATABASE_SSL="false" ADMIN_JWT_SECRET="214f0396b70530487d12526a7d3315d2" API_TOKEN_SALT="4696048pouria" JWT_SECRET="6EIWbb3waEfcEkOH5dtlrg==" HOST="0.0.0.0" PORT="1337"
WORKDIR /root
RUN apt update \
    && rm -rf .yarn .yarnrc .yarnrc.yml \
    && yarn set version berry
WORKDIR /home/src
ENTRYPOINT ["tail", "-f", "/dev/null"]
