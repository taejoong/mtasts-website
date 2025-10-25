# Virtual Environment Setup
1. python3 -m venv .venv
2. source .venv/bin/activate

# Requirement Installation
1. pip install -r requirements.txt

# Docker Container Start
1. docker-compose build
2. docker-compose up

# A nginx service should be configured to reverse proxy to http://127.0.0.1:5001
