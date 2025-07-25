#!/bin/sh
set -e

# Download and extract Go locally to /tmp
go_version=1.24.2
curl -LO https://go.dev/dl/go${go_version}.linux-amd64.tar.gz
rm -rf /tmp/go && tar -xzf go${go_version}.linux-amd64.tar.gz -C /tmp
export PATH="/tmp/go/bin:$PATH"

go version

# Fetch Hugo modules
hugo mod get

# Build the site
hugo --gc --minify 