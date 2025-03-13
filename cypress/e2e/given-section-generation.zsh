#!/usr/bin/env zsh

# Here the array of viewport sizes with comma-separated values
viewports=("1920×1080" "1366×768" "1536×864" "1280×720" "360×800" "390×844" "393×873" "412×915" "768×1024" "1280×800" "800×1280" "820×1180")

# Here the output file variable with value Given-section-for-viewports.txt
output_file="Given-section-for-viewports.txt"

# Generate the given section file
{
  for viewport in "${viewports[@]}"; do    
    echo "    Given('The viewport size is $viewport', () => {"
    echo "    cy.viewport(1920, 1080);"
    echo "    });"
    echo
  done
} > "$output_file"

# Confirmation message
echo "Given section file '$output_file' generated successfully!"
