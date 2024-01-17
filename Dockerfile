# syntax=docker/dockerfile:1

# Base stage for shared settings
FROM registry.docker.com/library/ruby:3.2.2-slim as base

# Set a default environment which can be overridden
ARG RAILS_ENV=production
ENV RAILS_ENV=${RAILS_ENV}

# Rails app lives here
WORKDIR /rails

# Base packages installation
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git pkg-config curl && \
    rm -rf /var/lib/apt/lists* /var/cache/apt/*

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test --deployment

# Copy application code
COPY . .

# Precompile assets only for production
RUN if [ "$RAILS_ENV" = "production" ]; then \
      SECRET_KEY_BASE_DUMMY=1 ./bin/rails assets:precompile; \
    fi

# Final stage for app image
FROM base as final

# Run and own only the runtime files as a non-root user for security
RUN useradd rails --create-home --shell /bin/bash && \
    chown -R rails:rails log tmp
USER rails:rails

# Entrypoint and CMD can be overridden as needed
ENTRYPOINT ["/rails/bin/docker-entrypoint"]
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]

# Expose the Rails server port
EXPOSE 3000
