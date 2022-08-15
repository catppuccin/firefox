#!/usr/bin/env bash

# required CLI tools:
# - yq (https://github.com/mikefarah/yq) - to build JSON from YAML
# - jq (https://github.com/stedolan/jq) - to modify JSON

# each palette
palettes=(
    "frappe"
    "latte"
    "macchiato"
    "mocha"
)

accents=(
    "rosewater"
    "flamingo"
    "pink"
    "mauve"
    "red"
    "maroon"
    "peach"
    "yellow"
    "green"
    "teal"
    "sky"
    "sapphire"
    "blue"
    "lavender"
)

# loop over each
for palette in "${palettes[@]}"; do
  for accent in "${accents[@]}"; do
    # prepare the output folder
    mkdir -p "./dist/${palette}/${accent}"

    # get the accent colour
    accent_col=$(yq -r ".${accent}" "./src/palettes/${palette}.yaml")

    # echo a temp file with the variables
    echo """
name: &name 'Catppuccin ${palette^} - ${accent^}'
accent: &accent '${accent_col}'
""" | \
    # get the palette, and the base style
    cat - "./src/palettes/${palette}.yaml" "./src/base.yaml" | \
    # pipe it into yq, to convert to JSON
    yq -o json | \
    # and use jq to only select the `ff_theme` key, saving to ./dist
    jq -r ".ff_theme" > "./dist/${palette}/${accent}/manifest.json"
  done
done
