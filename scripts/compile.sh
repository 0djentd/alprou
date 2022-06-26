#!/bin/bash

npm run lint
npm run build
git checkout dist
rm -r build/*
cp -r dist/* build/
# sed -i 's/href="\//href="\/static\//g' build/index.html
# sed -i 's/src="\//src="\/static\//g' build/index.html
git add .
