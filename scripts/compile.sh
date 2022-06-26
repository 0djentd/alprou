#!/bin/bash

npm run lint
npm run build
git checkout dist
rm -r build/*
cp -r dist/* build/
git add .
