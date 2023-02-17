#!/bin/sh

set -e

python /app/manage.py wait_for_db
python /app/manage.py collectstatic --noinput
python /app/manage.py migrate

uwsgi --socket :9000 --workers 4 --master --enable-threads --module app.wsgi