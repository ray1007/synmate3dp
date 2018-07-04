#!/usr/bin/env bash

yarn build

TARGET_DIR=gh_page
cp build/asset-manifest.json $TARGET_DIR
cp -r build/images $TARGET_DIR
cp build/index.html $TARGET_DIR
cp build/service-worker.js $TARGET_DIR
rm -rf $TARGET_DIR/static 
cp -r build/static $TARGET_DIR

cd $TARGET_DIR && git add * && git commit -m "New build" && git push origin gh-pages
