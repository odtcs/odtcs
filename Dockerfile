FROM  nginx:alpine
ADD ./screen/ /screen
WORKDIR /screen
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
