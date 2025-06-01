#!/bin/bash

# Build server (API)
echo "Building server..."
cd server
npm install
npx tsc
npm run start &

# Build client (Next.js)
echo "Building client..."
cd ../client
npm install
npm run build
npm run start &

echo "Epitech Challenges running.."