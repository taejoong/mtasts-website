# Use the official Python image as a base image
FROM python:3.9-slim

LABEL maintainer="Md. Ishtiaq Ashiq"

## Install necessary packages
RUN apt update && apt install -y \
    curl\
    nano

# Set the working directory inside the container
WORKDIR /home/ubuntu

# Copy the requirements.txt file into the container
COPY requirements.txt /home/ubuntu/

# Install the dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application into the container
#COPY . /home/ubuntu/

# Set the environment variable for Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5001
ENV FLASK_ENV=development
ENV FLASK_DEBUG=1
# Make the Flask app accessible externally

# Expose the Flask application port (default 5000)
EXPOSE 5001

# Command to run the Flask app when the container starts
CMD ["flask", "run", "-p", "5001"]
