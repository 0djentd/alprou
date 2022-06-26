#!/bin/bash

npm run lint
npm run build
rm -r .build/dist
cp -r dist .build/
git checkout build
mkdir build
rm -r build/*
cp -r .build/dist/* build/
