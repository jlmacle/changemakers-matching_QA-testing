#!/usr/bin/env python3
"""
Feature File Viewport Modifier

This script recursively finds all .feature files containing "Examples"
and replaces the Examples section viewport data with viewport data from predefined viewport sizes.
The viewport sizes are loaded from a text file.
"""

import os
import sys
import argparse
import subprocess

# Adding the utility scripts directory to the Python path to import modules
sys.path.append('../Utility scripts')
from file_processing import string_in_file, keep_lines_up_to_examples

def load_viewport_sizes(config_file):
    """
    Load viewport sizes from a text file.
    The file format should be:
    
    Device Type:
    size1
    size2
    ...
    
    Another Device Type
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
                
                # Skip empty lines
                if not line:
                    continue
                
                # Check if this is a device category line
                if line.endswith(':'):
                    # New device category
                    current_device = line.rstrip(':').strip()
                    viewport_sizes[current_device] = []
                elif current_device:
                    # This is a viewport size
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

def find_feature_files_with_examples(directory):
    """
    Recursively find all .feature files in a directory that contain "Examples".
    
    Args:
        directory (str): The directory to search in
        
    Returns:
        list: List of paths to .feature files containing "Examples"
    """
    matching_files = []
    
    # "For each directory in the tree rooted at directory top (including top itself), 
    # it yields a 3-tuple (dirpath, dirnames, filenames)"   
    # https://docs.python.org/3/library/os.html
    # the _ is a placeholder for the unused dirnames
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.feature'):
                file_path = os.path.join(root, file)
                if string_in_file(file_path, "Examples"):
                    matching_files.append(file_path)
    
    return matching_files

def modify_feature_file(input_file, output_file, viewport_sizes, force=False):
    """
    Modifies a feature file by removing the Examples section and replacing it with
    viewport sizes from the viewport_sizes dictionary.
    
    Args:
        input_file (str, optional): Path to the input feature file
        output_file (str, optional): Path to the output feature file. If None, overwrites input file.
        viewport_sizes (dict, optional): Dictionary of viewport sizes by device type
        force (bool, optional): Whether to overwrite the output file without asking
    
    Returns:
        bool: True if successful, False otherwise
    """
    # If no output file specified, use the input file
    if output_file is None:
        output_file = input_file
    
    try:
        # Checking if output file exists and is different from input file
        if os.path.exists(output_file) and output_file != input_file and not force:
            response = input(f"Output file '{output_file}' already exists. Overwrite? (y/n): ")
            if response.lower() != 'y':
                print("Operation cancelled.")
                return False
        
        # Creating a temporary file for filtered content
        temp_file = f"{output_file}.temp"
        
        # Using the imported keep_lines_up_to_examples function to keep content up to "Examples"
        keep_lines_up_to_examples(input_file, temp_file)
        
        # Reading the kept lines
        with open(temp_file, 'r', encoding='utf-8') as f:
            kept_lines = f.read()
        
        # Generating new examples section from viewport_sizes
        new_examples = "Examples:\n"  
        new_examples += "\t\t| viewport   |\n"
        
        # Adding each device category and its viewport sizes
        for device_type, sizes in viewport_sizes.items():
            new_examples += f"\t\t# {device_type}\n"
            for size in sizes:
                new_examples += f"\t\t|\t{size}\t|\n"
        
        # Writing kept lines plus new examples to output file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(kept_lines)
            f.write(new_examples)
        
        # Removing the temporary file
        os.remove(temp_file)
            
        print(f"Successfully modified feature file and wrote to {output_file}")
        return True
        
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
        return False
    except Exception as e:
        print(f"An error occurred with {input_file}: {e}")
        # Cleaning up temporary file if it exists
        # "Return a mapping object representing the current local symbol table, with variable names as the keys, "
        # "and their currently bound references as the values."
        # https://docs.python.org/3/library/functions.html#locals
        if 'temp_file' in locals() and os.path.exists(temp_file):
            os.remove(temp_file)
        return False

def process_directory(directory, output_dir, viewport_sizes, force=False):
    """
    Process all .feature files in a directory that contain "Examples".
    
    Args:
        directory (str): The directory to search in
        output_dir (str, optional): Directory to output modified files. 
                                   If None, files are modified in place.
        viewport_sizes (dict): Dictionary of viewport sizes by device type
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
            
            if modify_feature_file(file_path, output_path, viewport_sizes, force):
                success_count += 1
        else:
            # Modify in place
            if modify_feature_file(file_path, None, viewport_sizes, force):
                success_count += 1
    
    print(f"Successfully modified {success_count} out of {len(feature_files)} feature files.")


if __name__ == "__main__":
    try:
        git_project_dir = subprocess.check_output(
            ['git', 'rev-parse', '--show-toplevel'],
            stderr=subprocess.STDOUT
        ).decode().strip()
        print("Git top-level directory:", git_project_dir)
    except subprocess.CalledProcessError as e:
        print("Error:", e.output.decode().strip())

    parser = argparse.ArgumentParser(
        description='Finds and modifies feature files by replacing the Examples section viewport data with new viewport data.'
    )
    parser.add_argument('-i', '--input', default=git_project_dir, help='Input directory or single feature file')
    parser.add_argument('-o', '--output', help='Output directory (if input is a directory) or output file (if input is a file)')
    parser.add_argument('-c', '--config', default='_viewport_sizes.txt', 
                        help='Path to the viewport sizes text file (default: viewport_sizes.txt)')
    parser.add_argument('-f', '--force', action='store_true', 
                        help='Force overwrite if output files already exist')
    
    args = parser.parse_args()
    
    # Load viewport sizes from the configuration file
    viewport_sizes = load_viewport_sizes(args.config)
    
    if os.path.isdir(args.input):
        # Process a directory
        process_directory(args.input, args.output, viewport_sizes, args.force)
    elif args.input.endswith('.feature'):
        # Process a single file
        modify_feature_file(args.input, args.output, viewport_sizes, args.force)
    else:
        print("Error: Input must be a directory or a .feature file")
        sys.exit(1)        