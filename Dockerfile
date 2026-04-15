FROM nginx:1.27.3-alpine

LABEL maintainer="Mia-Care <info@mia-care.io>" \
  name="P4SaMD Handbook" \
  description="Mia-Care P4SaMD documentation website"

WORKDIR /etc/nginx

COPY nginx .
RUN rm -rf nginx/conf.d

WORKDIR /usr/static

COPY ./build .

USER nginx
