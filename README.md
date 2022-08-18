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

### Wireframe Mockups: 
* [Home](https://share.balsamiq.com/c/tQRnpMCDJFQxp9gezXZ22C.png)
* [Work](https://share.balsamiq.com/c/p7h2GmsKvW81XdHYdKaVBW.png)
* [Contact](https://share.balsamiq.com/c/tcT217VdfK6RTCJ52Sd5fY.png)

## Surface 
The logo and a collapsing menu bar are centred in the header incorporating black and white colours to represent a sleek and modern feel in keeping with the brand. This colour coordination is seen throughout the body of the website with dark typography to represent a minimalist yet bold styles.  The designer has chosen green colour for specific features such as hover over the menu items, call to action buttons, and social media icons to represent the sustainability in her designs. The combination of natural and green colours convey a sense of creativity and confidence which reflects the designer’s personality. I also tried to use bold typography to further promote confidence and creativity as a reflection of the industry. 

# Features 
### Header
The website consists of three pages; Home, Work and Contact. The **header** contains a **logo** and **menu** option on the top middle of every page.  This will create consistency throughout the page and the user can access the information via the menu bar and move around the site. The links will remain active when in use. 

### Footer
Every page has a **footer** with **designer's address**, **designer's phone number**, **social media and email icons** and **copyright information**. The social media icons are linked to the users’ social media accounts. 
There is also a **Top** button which with one click it takes the user to the menu bar. 

### Home
The Home page features an **image of the designer** to personalise the website and raise brand awareness. To the left side of the image, there is some information about the designer to make the users feel connected to the brand. 
At the bottom of these, the **designer’s’ visions and ethos** are presented. This helps the users to be able to make an informed decision whether they share the same values as the designer with regards to design concepts. It will enhance user’s emotional response. 
Finally, there is an invitation to have a chat about the user’s project via a **call to action** button: *Book your free consultation session now!*. 
The Home page also uses **parallax effects** to separate each section and create positive user response. These features will turn into images which scroll up and down with the rest of the page for iPads and phones. 

### Work
The Work page features **images in thumbnails** in 4 columns wide for laptop and desktop devices, 2 for iPads and 1 column wide for mobile devices.
Each image can be clicked to open a **fancybox** window to view further images/details of each project. 
The **testimonials** are placed below the project works to build trust and credibility and accountability of the designer. 
At the bottom of the page, there is an invitation to have a chat about the user’s project via a **call to action** button: *Book your free consultation session now!*. 
The Work page also uses **parallax effects** to separate each section and create positive user response. These features will turn into images which scroll up and down with the rest of the page for iPads and phones. 

### Contact  
The contact page features the **consultation stages**. Each stage is warped in a box with a large icon and some description to inform the users of collaboration process. 
Then, there will be a **Consultation Form** which the user can fill up to reach the designer laying over a **promotional image**. 
The bottom of the form contains a **Book your free consultation now!** button.  

# Existing Features 
* Header Logo – Exists on every page aiming to promote brand awareness. Clicking on the logo will return the users to the Home page as they expect. 
* Header Navigation Bar – Exists on every page to allow users to navigate the website and move from one page to another for access to more information. 
* [Home Page](https://tnamdarian.github.io/saranamdarian/) – Is a short introduction of the designer using visuals, a short biography of the designer and her ethos. 
* Designer Photo – Exists on the Home page accompanied by a short biography of the designer. 
* [Work Page](https://tnamdarian.github.io/saranamdarian/work.html) – It showcases the designers works and allows the visitors to view the thumbnail images of the designer’s works. Each image is clickable and can be viewed in a new page. 
* Fancybox Viewer – Allows potential clients to view the designer’s works in more details. It opens in the photos in a bigger scale and users can move to the next of previous images and/or close them to return to the website. 
* Footer –  Exists on every page and contains copyright to protect the content of the website; the social media and icons which link the users to the designer’s social media platforms; and the business address, phone number and email. For a better user-experience I put the link to the menu at the bottom of the page so the users do not need to scroll all the way up to access the menu. 
* Designer’s Ethos – Exist on the Home page to familiarise the visitors with the designer’s style and vision. 
* Testimonials – Exist in the Home page in a form of Carousel slides to confirm the designer’s credibility and build trust amongst users. 
* Call to Action Buttons – Exist on every page and invites potential clients to make the first contact with the designer. 
* Consultation Stages – Exist on the Contact page aiming to familiarise the users with the designer’s method of working and the stages involved in a project work. 
* [Contact Page](https://tnamdarian.github.io/saranamdarian/contact.html) – Provides consultation stages and a consultation form. It allows the clients to send their request for a free consultation session. 

# Features to Implement in future
Due to time restraints, I was unable to include the following features but hope to implement them in a future release:
* Embed up-to-date social media feeds - To showcase promotional activity and create buzz for the client base.
* Promotional video on the homepage – To make the homepage more appealing and engaging and create a more positive emotional response to the user. There was no promotional video available as this stage. 
* Designer’s blog to share educational articles and guides for added value. The designer has not had time to create a blog yet.  
* Live Chat app - To provide an instant connection between the user and company with high visibility on the site. I do not have the skills yet. 
* Add CAPTCHA to contact form – Allows business to protect the contact form from spam.  – JavaScript Needed.
* FAQ page, table with FAQs and dropdown buttons to view answers - Helps potential clients find answers to their common questions. (The designer has to compile and provide a list in the future.)
* Option to choose the language of the website - As the artist's second language is Farsi, this would allow Farsi speaking visitors to the website who form a big population in Vancouver, to view it in their native language. The content was not ready at this stage.
* Add a download button for a white paper for digital marketing purposes and building an email list in the future. The content was not ready at this stage. 

# Technologies Used
This project uses HTML and CSS programming languages.
-	[Balsamiq](https://balsamiq.cloud/sxrt5co/pf4f2oo) I used Balsamiq, the rapid low-fidelity UI wireframing tool to sketch the structure of the website layout and its pages following best UX practices.
-	[Gitpod](https://gitpod.io/workspaces)- The developer used Gitpod to write the code to builds the website.
-	[GitHub](https://github.com/) - The project used GitHub to host my code that was created and pushed from GitPod.
-	[Bootstarp5](https://getbootstrap.com/) - The project uses Bootstrap5 (BootstrapCDN and components) to simplify the structure of the website and make the website responsive across various platforms.
-   [FontAwesome](https://fontawesome.com/) - The projects uses a few icons from FontAwesome to make the websites less wordy and more visually appealing. 
-	[Fancybox](https://fancyapps.com/fancybox/3/) The project uses Fancybox for a gallery modal popup to slideshow gallery images.
-   [jQuery](https://jquery.com/) The project used jQuery to supply to JavaScript linked needed to the Fancybox gallery. 
-	[Google Fonts](https://fonts.google.com/) The project uses Google fonts to style the website fonts.
-   [Tiny-PNG](https://tinypng.com/) I used tinypng for big images up to 5M needed to be compressed to improve the website's loading time. 
-   [CompressJPEG](https://compressjpeg.com/) The big images bigger than 5M needed to be compressed to improve the website's loading time.
-	[Webaim.org](https://webaim.org/) The Webaim was used to test colour contrast on the project.
-	[W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) The W3C Markup Validation Service checked the markup validity of Web documents in HTML.
-	[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) W3C CSS Validation Service was used to check the validity of my CSS in the project.
-	[WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)I used WAVE to make my site more accessible to individuals with disabilities by detecting any potential issues.

# Testing 
## Testing client stories from UX section of README.md
1.	As a new visitor, I want to easily navigate the site to find whether the designer the right fit for my needs.
    - The user can navigate through the website using the navbar **menu** on top of the page. 
    - The **logo** links the user back to the **Home Page**. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/menubar.png)

    - The **4 reasons** on **Home Page** provide more information about the designer to the users. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/ethos.png)

    - The **call to action button** takes the users to the **Contact Page** where they can get more information on how to contact the designer. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/cta.png)

2.	As a business/home owner, I would like to find whether the designer is trustworthy and reputable by seeing what the previous clients say about them.
    - On the **Work Page**, below the gallery the users can see the previous clients’ **testimonials**. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/testimonials.png)

3.	As a new visitor, I would like to learn more about the designer’s vision, so I can get to know their background better. I would also like to know the reasons how this designer stands out of the crowd. 
    - The **4 reasons** on **Home Page** provide more information about the designer to the users. 
    - The **gallery** on **Work Page** will show the designer’s range of skills. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/gallery.png)

4.	As a new visitor, I would like to know the designer’s process and approach to their clients and projects. I would like to work with approachable designers and have a clear picture of what I should expect.  
    - In **Contact Page**, users can review the consultations process and have a realistic idea of a **Project Timeline**. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/project-timeline.png)

5. As an interested client, I want to be able to contact the designer easily. 
    - In **Contact Page**, users can fill up the **Consultation Form**.

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/consultation-form.png)

    - Each page, has a **call to action button** which takes users to the **Contact Page** to view the relevant information.

6. As a potential client, I would like to learn more about the designers’ works and get validation via their history and presence in the social media. It is more reassuring to trust businesses who have a solid follower base.  
    - The galley on **Work Page** showcases the designer’s range of skills and projects. 
    - The **footer** provides links to the designer's **social media** platforms. 

    ![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/footer.png)

7. As a returning visitor to the website, I want to be able to find the contact page easily to reach the designer.
    - The **phone number** and **address** of the designer has been shared in the footer on every page. 
    
## Code validation 
I used [W3C CSS validation](https://jigsaw.w3.org/css-validator/#validate_by_input) and [W3C Markup Validation](https://validator.w3.org/#validate_by_input) to check the validity of the website code.

Several issues were identified on **W3C Markup Validation**. 

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/html-erros-contact-page.png)

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/aria-lebel-footer.png)

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/images-error.png)

After I rectified the issue, no further errors were picked. 

No errors were identified in the CSS code by **W3C CSS validation**. 

![alt text](https://github.com/TNamdarian/saranamdarian/blob/master/assets/images/readme-images/clean.css.png)

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