# Pieter K de Villiers

## Audio Filters

[View the live project here.](https://pieterkdevilliers.github.io/audio-filters/) 

![alt text](https://github.com/pieterkdevilliers/audio-filters/blob/main/docs/images/readme-images/project-preview.png)  
The image is from [Am I responsive?](http://ami.responsivedesign.is/)

This is a simple website allowing the user to calculate the component values for either a Passive Low Pass Filter or a Passive High Pass Filter.

The user enters 2 out of the 3 required values, and the calculator will calculate the value of the third component.

The goals of this website are:
* Generate traffic in order to generate AdSense revenue.

The user visit this website to:
* Calculate the component values for Passive Low Pass or Passive High Pass filters.
* An example of this would be to limit the lowest frequencies being sent to a pair of hi-fi speakers.

# UX
The design of the site is purposefully simple and single-use focussed. There are only two calculators at this stage, and the site makes it easy for the user to know which filter type they are calculating component values for.

### Ideal client 
The ideal client for this business is: 
* Electronic hobbyist
* Hi-Fi enthusiast
* Hi-Fi circuit designer
* Audiophile hobbyist

The project help clients to: 
* Determine the component values or cut-off frequency for a set of known components.

### User stories: 
1.	As a visitor, I am designing a Passive High Pass Filter to limit the minimum freqency signal being passed to the amplifier inputs of a hi-fi system. I know what the amplifier's input impedence is (300 mOhm), and know the desired cut-off frequency (50Hz). I can use the Passive High Pass Filter calculator to determine the Capacitance required (10.61pF) for the capacitor in the circuit, to achieve the desired cut-off frequency.
2.	As a visitor, I am designing a Passive Low Pass Filter to limit the maximum freqency signal being passed to the sub-woofer inputs of a hi-fi system. I know what the sub-woofer's input impedence is (300 mOhm), and know the desired cut-off frequency (50Hz). I can use the Passive Low Pass Filter calculator to determine the Capacitance required (10.61pF) for the capacitor in the circuit, to achieve the desired cut-off frequency.
3.	As a visitor, I am designing a Sub-woofer amplifier input circuit. I've completed the design and in testing want to calculate the actual cut-off frequency of the input-circuit. Baed on the Capacitance and Input Impedence in the design, I can use the Passive Low Pass Filter calculator to determine the actual cut-off frequency of the design.
4.	As a visitor, I am designing a Sub-woofer amplifier input circuit, with a Variable Resistor. I've completed the design and in testing want to calculate the actual reange of cut-off frequencies of the input-circuit. Baed on the Capacitance and Input Impedence, together with the range of the Variable Resistor in the design, I can use the Passive Low Pass Filter calculator to determine the actual cut-off frequency of the design.

### Scope
To help the visitor achieve their circuit design goals, I included the following features in the website: 
* Passive Low Pass Filter calculator.
* Passive High Pass FIlter calculator.
* Calculation Formula and Legend, showing the formula used in the calculations.
* Simple High Pass and Low Pass Filter diagrams.
* Basic High Pass and Low Pass Circuit Layout DIagrams, showing the difference in required circuit layout for each filter type.
* Diagrams showing the different -3dB cut-off frequency graphs for the Low Pass and High Pass filters respectively.

## Skeleton 
The website consists of only 3 pages. An initial landing page, with the options between the two calculator pages. A page for Passive High Pass FIlter and a third for the Passive Low Pass FIlter.

### Wireframe Mock-ups: 
* [Desktop Mock-up](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/desktop-mock-up.webp)
* [Responsive Mock-up](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/responsive-mock-up.webp)
* [Site Sketch](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/site-sketch.webp)
* [FIlter Sketches](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/filter-sketches.webp)
* [FC Equation](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/fc-equation.webp)

# Features 

# Existing Features 
### Passive Low Pass Filter Calculator
This allows the user to enter 2 of the 3 values required, including their unti scales. This then calculates the result and displays it on the screen. As an example, if the user enters a Resistance value of 300 with a unit scale of mega-ohm, and a Cut-off Frequency of 50 with a unit scale of Hertz, the rult is provided as 10,61pF (pico-Farad) as the required Capacitance.

### Passive High Pass Filter Calculator
As with the Low Pass Filter, this allows the user to enter 2 of the 3 values required, including their unti scales. This then calculates the result and displays it on the screen. As an example, if the user enters a Resistance value of 8 with a unit scale of ohm, and a Cut-off Frequency of 8 with a unit scale of kHz, the rult is provided as 2.49μF (micro-Farad) as the required Capacitance.

# Features to Implement in future
The following features can be added in the future, to help generate additional traffic and increase the opportunities for AdSense revenue
* Make the filter calculators available on the domains: lowpassfiltercalculator.com and highpassfiltercalculator.com
* Add AdSense configuration to the existing sites
* Build additional electrical / circuit based calculators

# Technologies Used
This project uses HTML, CSS and JavaScript programming languages.
-	[Balsamiq](https://balsamiq.cloud) I used Balsamiq to generate the Desktop and Responsive Mock-ups.
-	[Gitpod](https://gitpod.io/workspaces)- I used Gitpod to write the code to build the site.
-	[GitHub](https://github.com/) - I used GitHub to host my code that was created and pushed from GitPod.
-	[Bootstarp5](https://getbootstrap.com/) - The project uses Bootstrap5 (BootstrapCDN and components) to simplify the structure of the website and make the website responsive across various platforms.
-   [xDiagram](https://apps.apple.com/gb/app/xdiagram/id517581636?mt=12) - I used xDiagram to generate the equation, filter, circuit and cut-off frequency images for the site. 
-	[Google Fonts](https://fonts.google.com/) The project uses Google fonts to style the website fonts.
-   [Tiny-PNG](https://tinypng.com/) I used tinypng to compress images in order to improve the website's loading time. 
-   [cloudconvert](https://cloudconvert.com/) I used cloudconvert to convert png files into WEBP files.
-	[Webaim.org](https://webaim.org/) The Webaim was used to test colour contrast on the project.
-	[W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) The W3C Markup Validation Service checked the markup validity of Web documents in HTML.
-	[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) W3C CSS Validation Service was used to check the validity of my CSS in the project.
-	[WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)I used WAVE to make my site more accessible to individuals with disabilities by detecting any potential issues.

# Testing 
## Testing against client stories from UX section of README.md
- If the user lands on the home page, there is clear and direct links to the respective High Pass or Low Pass calculators, with a brief description of what to expect.
![Home Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/home-page.webp)

- The **High Pass Filter Page** allows the user to calculate any of the required 3 values for creating a Passive High Pass Filter. 
![High Pass Filter Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/hpf-page.webp)

- The **Low Pass Filter Page** allows the user to calculate any of the required 3 values for creating a Passive Low Pass Filter. 
![Low Pass Filter Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/lpf-page.webp)

    
## Code validation 
I used [W3C CSS validation](https://jigsaw.w3.org/css-validator/#validate_by_uri) and [W3C Markup Validation](https://validator.w3.org/#validate_by_uri) and [JSLint](https://www.jslint.com/) to check the validity of the website code.

Several issues were identified on **W3C Markup Validation**. 

![alt text](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/html-validation-errors.webp)

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/aria-lebel-footer.png)

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/images-error.png)

After I rectified the issue, no further errors were picked up. 

![alt text](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/html-validation-errors.webp)

No errors were identified in the CSS code by **W3C CSS validation**. 

![alt text](![alt text](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/css-validation-no-errors.webp)

Several warnings were generated in the JavaScript code by **JSLint validation**. 

![alt text](![alt text](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/jslint-validation.webp)

## Color Contrast 
The initial `color: ##81b214;` had Contrast Ratio of 2.52:1 with the white background. So I changed it to a darker green. The [Color Contrast Accessibility Validator](https://webaim.org/) was used to test for colour contrast on the project.

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/contrast-checker.png). 

## COMPATIBILITY
To ensure a broad range of users can successfully view/use the site, I tested it across all major browsers in both desktop and mobile configuration.

* Chrome
* Edge
* Firefox
* Safari
* Internet Explorer

## Issues
The link on **Internet Explorer** does not recognise `font-antonio`. It displays the web using `San-sarif`. 

# Further testing
I asked my friends and family to click on the deployed link on their devices especially iPads and 17" and bigger laptops which I do not personally own. I added further bootstrap padding and margin and CSS media queries to make the website responsive on all devices. 

# Deployment 
This project was developed using [Gitpod](https://gitpod.io/workspaces), committed to git and pushed to GitHub using git commands. 

To deploy this page to **GitHub Pages** from its [GitHub repository](https://github.com/TNamdarian/saranamdarian), the following steps were taken:

1. Log into [GitHub](https://github.com/).
2. From the list of repositories on the screen, **select saranamdarian**.
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under Source click the drop-down menu labelled None and select **Master Branch**. Then **Save** it. 
6. Wait for a few minutes of the website to be deployed.
7. Scroll back down to the **GitHub Pages** section to access the link to the deployed website.

### Run this project locally
- Select the Repository from the GitHub Dashboard.
- Click the green button labelled 'Code'.
- Click 'Download ZIP'.
- Extract ZIP file on your computer.
- Open folder and open index.html in web browser.

### Clone this project
- Select the Repository from the GitHub Dashboard.
- Click the green button labelled 'Code'.
- To clone the repository using:
    - HTTPS: under "Clone with HTTPS", click checklist icon.
    - SSH: click Use SSH, then click checklist icon.
- Open Git Bash.
- Change the current working directory to the location where you want the cloned directory.
- Type 'git clone', and then paste the URL you copied earlier.
- Press Enter to create your local clone.

# Credits
## Content
The texts for all the pages have been created by the designer. 

## Media 
* The images were taken by and obtained from the designer – Sara Namdarian. 
* Testimonial logos are from [Google Images](https://www.google.com/imghp?hl=en).

## Code 
* CSS code for shadows and hover responsiveness of gallery images and ptoject timeline boxes was originally taken from [Portrait Artist](https://ajgreaves.github.io/portrait-artist/index.html) by A Greaves. 

# Acknowledgement 
I decided to develop this website for my sister as she wanted to have a brand new website which has a more modern feel to it and it also reflected her own style and character. I took aspiration for this site from the following websites in terms of design: 
* [Karimrashid.com](http://karimrashid.com/)
* [Avissa Design](https://avissadesign.com/press)
* [sokruta.com.ua/en](https://sokruta.com.ua/en)
* I also received inspirations for the content of the website for personal branding via [Interior Design Business: How To Build a Personal Brand](https://essenziale-hd.com/2017/10/02/interior-design-business-build-personal-brand/).
* Huge thanks to my mentor [Guido Cecilio Garcia Bernal](https://github.com/guidocecilio) guided me throughout this project.
* I would like to also thank [Tim Nelson](https://github.com/TravelTimN), a great tutor at Code Institute, who helped me with problem solving. 