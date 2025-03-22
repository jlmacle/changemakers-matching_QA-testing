#!/usr/bin/env python3

# Array of viewport sizes with comma-separated values
viewports = ["1920×1080", "1366×768", "1536×864", "1280×720", "360×800", 
             "390×844", "393×873", "412×915", "768×1024", "1280×800", 
             "800×1280", "820×1180"]

# Output file variable with value Given-section-for-viewports.txt
output_file = "Given-section-for-viewports.txt"

# Generate the given section file
with open(output_file, 'w') as f:
    for viewport in viewports:
        # Split the viewport dimensions by the × character
        width, height = viewport.split('×')
        
        f.write(f"\tGiven('The viewport size is {viewport}', () => {{\n")
        f.write(f"\t\tcy.viewport({width}, {height});\n")
        f.write(f"\t}});\n")
        f.write("\n")

# Confirmation message
print(f"Given section file '{output_file}' generated successfully!")