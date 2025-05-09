#!/usr/bin/env python3

import os

viewports = ["1920×1080","1366×768","1536×864","1280×720","360×800","390×844","393×873","412×915","768×1024","1280×800","800×1280","820×1180"]

feature_variation = "Valid_123"

# Building the file name
root_feature_name = "valid-username-"
outputfile = root_feature_name + feature_variation + "-displays-validity-message" + ".feature"

# Building the "Feature" line
feature_title = "Username validation: valid username: " + feature_variation 
feature_line = "Feature: " + feature_title 

# Building the "Scenario" line
scenario_root = "Scenario: "+"The user enters valid username"

# Building the "Given" line
given_line = "Given"+" "+"I am on the new account project representative page"

# Building the "When" line
when_line_root = "When"+" "+"The user enters"
when_line_part2 = "in the username field"
when_line = when_line_root+" "+'"'+feature_variation+'"'+" "+when_line_part2

# Building the "Then" line
then_line = "Then"+" "+"the username validation message should display"+" "+'"✅ The username is valid."'

if os.path.exists(outputfile):
    os.remove(outputfile)
    print("Existing feature file deleted")

with open(outputfile,'w') as output_file:
    output_file.write(feature_line+"\n")
    scenario_line = scenario_root+" "+'"'+feature_variation+'"'+" on viewport size is <viewport>"
    output_file.write("\t"+scenario_line+"\n")
    output_file.write("\t\t"+given_line+"\n")
    and_line = "And"+" "+"the viewport size is <viewport>"
    output_file.write("\t\t"+and_line+"\n")
    output_file.write("\t\t"+when_line+"\n")
    output_file.write("\t\t"+then_line+"\n")
    output_file.write("\n\n")
    output_file.write("\t"+"Examples: "+"\n")    
    output_file.write("\t\t"+"|"+"\t"+"viewport"+"\t"+"|\n")

    for viewport in viewports:  
        extraTab = ""
        if len(viewport) < 8:
            extraTab = "\t"
        output_file.write("\t\t"+"|"+"\t"+viewport+"\t"+extraTab+"|\n")
        
