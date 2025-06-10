#!/usr/bin/env python3

import sys
import os

def load_viewport_sizes(config_file):
    """
    Load viewport sizes from a text file.
    The file format should be:
    
    Device Type:
    size1
    size2
    ...
    
    Args:
        config_file (str): Path to the text file containing viewport sizes
        
    Returns:
        dict: Dictionary of viewport sizes by device type
    """
    try:
        viewport_sizes = {}
        current_device = None
        
        with open(config_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                if line.endswith(':') or (not current_device and not any(char in line for char in '×:0123456789')):
                    current_device = line.rstrip(':').strip()
                    viewport_sizes[current_device] = []
                elif current_device:
                    viewport_sizes[current_device].append(line)
        
        if not viewport_sizes:
            print(f"Error: No viewport sizes found in '{config_file}'.")
            sys.exit(1)
            
        print(f"Successfully loaded viewport sizes from {config_file}")
        return viewport_sizes
    except FileNotFoundError:
        print(f"Error: Config file '{config_file}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred while loading the config file: {e}")
        sys.exit(1)


def generate_given_section_file(viewport_sizes, output_file):
    """
    Generate the Given section based on viewport sizes and write to a file.
    
    Args:
        viewport_sizes (dict): Dictionary of viewport sizes categorized by device
        output_file (str): Path to the output text file
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("import { Given } from '@badeball/cypress-cucumber-preprocessor';\n\n")
            for device_type, sizes in viewport_sizes.items():                
                f.write(f"// {device_type} Viewports\n")
                for viewport in sizes:
                    try:
                        width, height = viewport.split('×')
                        f.write(f"Given('the viewport size is {viewport}', () => {{\n")
                        f.write(f"\tcy.viewport({width},{height});\n")
                        f.write("}});\n\n")
                    except ValueError:
                        print(f"Warning: Skipping malformed size '{viewport}' in {device_type}")
        print(f"Given section file '{output_file}' generated successfully!")
    except Exception as e:
        print(f"An error occurred while writing the output file: {e}")
        sys.exit(1)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description='Generate a Cypress Given section from a list of viewport sizes.'
    )
    parser.add_argument('-c', '--config', default='_viewport_sizes.txt', 
                        help='Path to the viewport sizes text file (default: _viewport_sizes.txt)')
    parser.add_argument('-o', '--output', default='viewports-steps.ts',
                        help='Output file to write the Given section (default: Given-section-for-viewports.txt)')
    
    args = parser.parse_args()

    sizes = load_viewport_sizes(args.config)
    generate_given_section_file(sizes, args.output)
