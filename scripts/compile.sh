#!/bin/bash

npm run lint
npm run build
git checkout build-2
rm -r build
mkdir -p build/alprou-frontend
cp -r dist/* build/alprou-frontend/
# sed -i 's/href="\//href="\/static\//g' build/index.html
# sed -i 's/src="\//src="\/static\//g' build/index.html
git add .
