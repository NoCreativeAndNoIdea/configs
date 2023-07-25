#!/bin/bash

find $PWD/packages -type d  -maxdepth 1 | while read folder_path; do
  if [ -f "$folder_path/package.json" ]; then
    echo "Setting version for $folder_path"
    jq ".version = \"$1\"" "$folder_path"/package.json > tmp.json && mv tmp.json "$folder_path"/package.json
  fi
done

git add .
git commit -m "v$1"
git tag -a v$1 -m "upgrade to v$1"
git tag show v$1
git push origin v$1
