#!/bin/bash

echo "Building docker 🐳"

docker build -t backend .

echo "Running 🏃‍♀️"

docker run -d -p 3000:3000 backend

echo "Ready on port 3000"
