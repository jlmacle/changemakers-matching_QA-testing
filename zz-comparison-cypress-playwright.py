import subprocess
import time

def time_script(name, cmd):
    start = time.perf_counter()
    subprocess.run(cmd, shell=True)
    duration = time.perf_counter() - start
    with open("timings.txt", "a") as f:
        f.write(f"{name} duration: {duration:.4f} seconds\n")
    return duration


d1 = time_script("Cypress: npx cypress run", "npx cypress run 'cypress/e2e/Accessibility/2. Operable/2.1 Keyboard Accessible/Tab-navigation' 'cypress/e2e/Accessibility/3. Understandable/3.3 Input Assistance/3.3.1 Error Identification Level A'")
time.sleep(5)
d2 = time_script("Playwright with sharding", "./_Zsh_utility-scripts/playwright-sharding.zsh")

print(f"Cypress: npx cypress run: {d1:.4f} s | Playwright with sharding: {d2:.4f} s \n")
