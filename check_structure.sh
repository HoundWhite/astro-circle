#!/bin/bash
echo "=== Checking project structure ==="
pwd
ls -la
echo "=== Checking server directory ==="
ls -la server/
echo "=== Checking server/project directory ==="
ls -la server/project/
echo "=== Checking if manage.py exists ==="
ls -la server/project/manage.py 