#!/bin/bash

pnpm lint:fix
git add .
git commit -m "style: eslint lint"
git push --all

find $PWD/packages -type d  -maxdepth 1 | while read folder_path; do
  echo "==========Publish Start=========="
  echo "Publish packages path for $folder_path"
  cd $folder_path && pnpm publish --tag latest --dry-run --access public --otp=$1
  echo "==========Publish End=========="
done

git push --all
