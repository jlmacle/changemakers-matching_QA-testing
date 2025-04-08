#!/usr/bin/env python3

import os

def filter_examples(input_file, output_file):
    """
    Read the input file, find the only occurrence of "Examples", and write to the output file
    only the lines that appear before the line containing "Examples".
    
    Args:
        input_file (str): Path to the input file to read
        output_file (str): Path to the output file to write
    """
    try:
        if os.path.exists(output_file):            
            response = input(f"Output file '{output_file}' already exists. Overwrite? (y/n): ")
            if response.lower() != 'y':
                print("Operation cancelled.")
                return
                
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        filtered_lines = []
        for line in lines:
            if "Examples" in line:
                break
            filtered_lines.append(line)
        
        # https://www.w3schools.com/python/python_file_write.asp
        with open(output_file, 'w', encoding='utf-8') as f:
            f.writelines(filtered_lines)
            
        print(f"Successfully filtered content and wrote to {output_file}")
        
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='Filter out a line containing "Examples" and all lines after it.')
    parser.add_argument('input_file', help='Path to the input file')
    parser.add_argument('output_file', help='Path to the output file')
    
    args = parser.parse_args()
    
    filter_examples(args.input_file, args.output_file)