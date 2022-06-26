#!/bin/bash

set -e

npm run lint
npm run build
cp -r dist .build/
git checkout build
mkdir build
cp -r .build/dist/* build/
