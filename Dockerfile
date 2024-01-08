# Use an official Ruby image as a parent image
FROM ruby:2.7

# Install dependencies
# Node.js and Yarn are required for Rails Webpacker
RUN apt-get update -qq && apt-get install -y nodejs yarn postgresql-client

# Set the working directory in the container
WORKDIR /ecommerce

# Copy the Gemfile and Gemfile.lock into the container at /ecommerce
COPY Gemfile /ecommerce/Gemfile
COPY Gemfile.lock /ecommerce/Gemfile.lock

# Install gems
RUN bundle install

# Copy the main application.
COPY . /ecommerce

# Add a script to be executed every time the container starts
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Expose port 3000 to the Docker host, so we can access it from the outside.
EXPOSE 3000

# Start the main process
CMD ["rails", "server", "-b", "0.0.0.0"]
