start:
	docker run -p 3000:3000 --name meme-generator -v "${PWD}/src:/app/src" -v "${PWD}/public:/app/public" meme-generator:latest

stop:
	docker stop meme-generator

remove:
	docker container rm meme-generator

build:
	docker build -t meme-generator:latest .