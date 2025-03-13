#!/usr/bin/env zsh

# Prompt for output file name
echo -n "Enter the output file name (e.g., username_validation.feature): "
read output_file

# Prompt for Feature title
echo -n "Enter the Feature title (e.g., Username validation: valid (in progress)): "
read feature_title

# Prompt for Scenario root
echo -n 'Enter the scenario root (e.g., The user enters valid username "Valid_123"): '
read scenario_root

# Prompt for viewport sizes array
echo -n "Enter viewport sizes (comma-separated, e.g., 1920x1080,1366x768,1280x720): "
read viewport_sizes

# Convert comma-separated string to array
IFS=',' read -r -A viewports <<< "$viewport_sizes"

# Generate the feature file
{
  echo "Feature: $feature_title"
  echo

  for viewport in "${viewports[@]}"; do
    echo "  Scenario: $scenario_root on viewport size $viewport"
    echo "    Given I am on the new account project representative page"
    echo "    And   The viewport size is $viewport"
    echo "    When  The user enters \"Valid_123\" in the username field"
    echo "    Then  The username validation message should display \"✅ The username is valid.\""
    echo
  done
} > "$output_file"


# Confirmation message
echo "Feature file '$output_file' generated successfully!"
