docker build --tag odtcs-screen .
docker run -p 80:80 --name odtcs-screen odtcs-screen
