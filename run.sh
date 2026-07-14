# Prod only
set -e
docker compose down -v --remove-orphans
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build