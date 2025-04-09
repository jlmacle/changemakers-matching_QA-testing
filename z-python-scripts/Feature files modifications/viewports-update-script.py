#!/usr/bin/env python3
"""
Feature File Viewport Modifier

This script recursively finds all .feature files containing "Examples"
and replaces the Examples section with viewport data from predefined viewport sizes.
"""

import os
import sys
import argparse

# Add the utility scripts directory to the Python path to import modules
sys.path.append('../Utility scripts')

# Import the string_in_file function from string-finder.py
from string_finder import string_in_file

# Import the filter_examples function from script-removing-lines-after-finding-string.py
# Using the module name convention (hyphens replaced with underscores)
from script_removing_lines_after_finding_string import filter_examples

# Define viewport sizes
VIEWPORT_SIZES = {
    "Desktop": ["1920×1080", "1366×768", "1536×864", "1280×720"],
    "Mobile": ["360×800", "390×844", "393×873", "412×915"],
    "Tablet": ["768×1024", "1280×800", "800×1280", "820×1180"]
}

def find_feature_files_with_examples(directory):
    """
    Recursively find all .feature files in a directory that contain "Examples".
    
    Args:
        directory (str): The directory to search in
        
    Returns:
        list: List of paths to .feature files containing "Examples"
    """
    matching_files = []
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.feature'):
                file_path = os.path.join(root, file)
                if string_in_file(file_path, "Examples"):
                    matching_files.append(file_path)
    
    return matching_files

def modify_feature_file(input_file, output_file=None, force=False):
    """
    Modifies a feature file by removing the Examples section and replacing it with
    viewport sizes from the VIEWPORT_SIZES dictionary.
    
    Args:
        input_file (str): Path to the input feature file
        output_file (str, optional): Path to the output feature file. If None, overwrites input file.
        force (bool): Whether to overwrite the output file without asking
    
    Returns:
        bool: True if successful, False otherwise
    """
    # If no output file specified, use the input file
    if output_file is None:
        output_file = input_file
    
    try:
        # Check if output file exists and is different from input file
        if os.path.exists(output_file) and output_file != input_file and not force:
            response = input(f"Output file '{output_file}' already exists. Overwrite? (y/n): ")
            if response.lower() != 'y':
                print("Operation cancelled.")
                return False
        
        # Create a temporary file for filtered content
        temp_file = f"{output_file}.temp"
        
        # Use the imported filter_examples function to keep content up to "Examples"
        filter_examples(input_file, temp_file)
        
        # Read the filtered content
        with open(temp_file, 'r', encoding='utf-8') as f:
            filtered_content = f.read()
        
        # Generate new examples section from VIEWPORT_SIZES
        new_examples = "Examples:\n"  # Add the Examples line back
        
        # Add Desktop category
        new_examples += "\t\t# Desktop\n"
        for size in VIEWPORT_SIZES["Desktop"]:
            new_examples += f"\t\t|\t{size}\t|\n"
        
        # Add Mobile category
        new_examples += "\t\t# Mobile\n"
        for size in VIEWPORT_SIZES["Mobile"]:
            new_examples += f"\t\t|\t{size}\t|\n"
        
        # Add Tablet category
        new_examples += "\t\t# Tablet\n"
        for size in VIEWPORT_SIZES["Tablet"]:
            new_examples += f"\t\t|\t{size}\t|\n"
        
        # Write filtered content plus new examples to output file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(filtered_content)
            f.write(new_examples)
        
        # Remove the temporary file
        os.remove(temp_file)
            
        print(f"Successfully modified feature file and wrote to {output_file}")
        return True
        
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
        return False
    except Exception as e:
        print(f"An error occurred with {input_file}: {e}")
        # Clean up temporary file if it exists
        if 'temp_file' in locals() and os.path.exists(temp_file):
            os.remove(temp_file)
        return False

def process_directory(directory, output_dir=None, force=False):
    """
    Process all .feature files in a directory that contain "Examples".
    
    Args:
        directory (str): The directory to search in
        output_dir (str, optional): Directory to output modified files. 
                                   If None, files are modified in place.
        force (bool): Whether to overwrite existing files without asking
    """
    feature_files = find_feature_files_with_examples(directory)
    
    if not feature_files:
        print(f"No .feature files containing 'Examples' found in {directory}")
        return
    
    print(f"Found {len(feature_files)} .feature files containing 'Examples'")
    
    success_count = 0
    
    for file_path in feature_files:
        if output_dir:
            # Create relative path structure in output directory
            rel_path = os.path.relpath(file_path, directory)
            output_path = os.path.join(output_dir, rel_path)
            
            # Ensure output directory exists
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
            if modify_feature_file(file_path, output_path, force):
                success_count += 1
        else:
            # Modify in place
            if modify_feature_file(file_path, None, force):
                success_count += 1
    
    print(f"Successfully modified {success_count} out of {len(feature_files)} feature files.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Find and modify feature files by replacing the Examples section with viewport sizes.'
    )
    parser.add_argument('input', help='Input directory or single feature file')
    parser.add_argument('-o', '--output', help='Output directory (if input is a directory) or output file (if input is a file)')
    parser.add_argument('-f', '--force', action='store_true', 
                        help='Force overwrite if output files already exist')
    
    args = parser.parse_args()
    
    if os.path.isdir(args.input):
        # Process a directory
        process_directory(args.input, args.output, args.force)
    elif args.input.endswith('.feature'):
        # Process a single file
        modify_feature_file(args.input, args.output, args.force)
    else:
        print("Error: Input must be a directory or a .feature file")
        sys.exit(1)