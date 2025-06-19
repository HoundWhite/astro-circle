#!/usr/bin/env bash
# exit on error
set -o errexit

echo "=== Starting build process ==="
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -la

echo "=== Installing dependencies ==="
pip install -r requirements.txt

echo "=== Checking project structure ==="
if [ -d "server/project" ]; then
    echo "server/project directory exists"
    ls -la server/project/
else
    echo "ERROR: server/project directory not found!"
    echo "Available directories:"
    ls -la
    exit 1
fi

echo "=== Running Django commands ==="
cd server/project
python manage.py collectstatic --noinput
python manage.py migrate 