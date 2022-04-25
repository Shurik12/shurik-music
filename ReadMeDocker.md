# Docker
There are two mods: development and production
## Run development
```bash
docker-compose -f docker-compose.yml up -d --build
docker-compose exec web python3 manage.py migrate --noinput
docker-compose down -v (if will get error db does not exist)
```
Open http://127.0.0.1:8000 or http://localhost:8000
Stop all containers
```bash
docker-compose -f docker-compose.yml down -v
```

## Run production
```bash
docker-compose -f docker-compose.prod.yml up -d --build
docker-compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
docker-compose -f docker-compose.prod.yml exec web python manage.py collectstatic --no-input --clear
```

http://127.0.0.1:1337 - local run
ifconfig - to learn external ip of coputer
http://192.168.1.5:1337/ - production run

docker stop id_containers - stop containers
docker start id_containers - run stopped containers

docker-compose stop id_containers - stop all containers in app
docker-compose start id_containers - run stopped containers in app