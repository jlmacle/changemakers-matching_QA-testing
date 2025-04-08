#!/usr/bin/env python3
"""
string_finder.py - A module to search for strings in files

This module provides functions to search for a string in a file and
return True if found, False otherwise.
"""


def string_in_file(file_path, search_string, case_sensitive=True):
    """
    Check if a string exists in a file.
    
    Args:
        file_path (str): Path to the file to search in
        search_string (str): String to search for
        case_sensitive (bool, optional): Whether the search should be case sensitive. 
                                        Defaults to True.
    
    Returns:
        bool: True if string is found, False otherwise
        
    Raises:
        FileNotFoundError: If the specified file does not exist
        PermissionError: If the file cannot be read due to permission issues
        IsADirectoryError: If the specified path is a directory, not a file
        UnicodeDecodeError: If the file contains characters that cannot be decoded
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
            if not case_sensitive:
                content = content.lower()
                search_string = search_string.lower()
                
            return search_string in content
            
    except UnicodeDecodeError:
        # Try to read the file in binary mode for non-text files
        try:
            with open(file_path, 'rb') as file:
                binary_content = file.read()
                binary_search = search_string.encode('utf-8')
                return binary_search in binary_content
        except Exception as e:
            raise UnicodeDecodeError(f"Could not decode file content: {str(e)}")

if __name__ == "__main__":
    # Example usage if this file is run directly
    import sys
    
    if len(sys.argv) < 3:
        print("Usage: python string_finder.py <file_path> <search_string> [case_sensitive]")
        sys.exit(1)
        
    file_path = sys.argv[1]
    search_string = sys.argv[2]
    case_sensitive = True
    
    if len(sys.argv) > 3 and sys.argv[3].lower() in ['false', '0', 'no', 'n']:
        case_sensitive = False
        
    try:
        result = string_in_file(file_path, search_string, case_sensitive)
        print(f"String '{search_string}' {'found' if result else 'not found'} in file '{file_path}'")
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)