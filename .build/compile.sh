#!/bin/bash

set -e

npm run lint
npm run build
rm -r .build/dist
cp -r dist .build/dist
git checkout build
cp -r .build/dist/* .
