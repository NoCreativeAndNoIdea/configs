#!/bin/bash

find $PWD/packages -type d  -maxdepth 1 | while read folder_path; do
  if [ -f "$folder_path/package.json" ]; then
    echo "==========Publish Start=========="
    echo "Publish packages path for $folder_path"
    cd $folder_path && pnpm publish --tag latest --access public --otp=$1
    echo "==========Publish End=========="
  fi
done

git push --all --force
