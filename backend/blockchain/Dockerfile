FROM rust:1.81-slim as builder

WORKDIR /app

# Copy manifests
COPY Cargo.toml ./
RUN touch Cargo.lock

# Create dummy main.rs for dependency compilation
RUN mkdir src && echo "fn main() {}" > src/main.rs

# Build dependencies
RUN cargo build --release

# Remove dummy and copy real source
RUN rm -rf target/release/deps/blockchain*
COPY src/ src/

# Build the actual project
RUN touch src/main.rs
RUN cargo build --release

FROM debian:bookworm-slim

# Install SSL certificates for HTTPS
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/target/release/blockchain /app/blockchain

EXPOSE 8001

CMD ["./blockchain"]
