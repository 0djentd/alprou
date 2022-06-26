#!/bin/bash

npm run lint
npm run build
rm -r .build/dist
cp -r dist .build/
git checkout build
rm -r build/*
cp -r .build/dist/* build/
