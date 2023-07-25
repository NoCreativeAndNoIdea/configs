#!/bin/bash

pnpm lint:fix

find $PWD/packages -type d  -maxdepth 1 | while read folder_path; do
  echo "Publish packages path for $folder_path"
  cd $folder_path && pnpm publish --tag latest --dry-run --access public --otp=$1
done

git push --all
