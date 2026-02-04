SouLift is a client-side mental health and wellness tracking web application built using HTML, CSS, and JavaScript. This project demonstrates an understanding of basic web infrastructure while providing a meaningful tool that helps users manage stress, track emotions, and set personal wellness goals.

All user data is stored locally in the browser using the localStorage API, meaning no information is sent to external servers.

Project Purpose
This project was created to:
Build a functional static website
Demonstrate how browsers, servers, and static hosting work together
Apply JavaScript for interactivity
Use client-side storage for data persistence
Deploy a website publicly using GitHub Pages

Core Features
Add wellness goals
Display a list of goals
Mark goals as completed
Delete goals
Persist data using browser localStorage
Additional Features
Daily affirmations with refresh option
Mood tracking 
Mental health support resources
Responsive design for mobile and desktop

Technology Stack
HTML5	Structure and layout
CSS3	Styling and responsiveness
JavaScript	Logic and interactivity
localStorage	Client-side data persistence
GitHub Pages	Static hosting

Running the Project Locally
Option 1: Open Directly
Download or clone the repository.
Open the folder.
Double-click index.html.

Option 2: Using Live Server
Open the project in Visual Studio Code.
Install the “Live Server” extension.
Right-click index.html and select “Open with Live Server”.

Option 3: Using Python
python -m http.server 8000
Then navigate to http://localhost:8000.

🌍 Live Deployment
This project is hosted using GitHub Pages.

Live URL:
https://yourusername.github.io/soulift/

Deployment Process
Initialize a Git repository.
Add all project files.
Commit the changes.
Push to GitHub.
Enable GitHub Pages in the repository settings.
Access the live site via the public URL.

Web Infrastructure Explanation
How the Website Works:
A user enters the website URL.
DNS converts the domain name into an IP address.
The browser sends a request over HTTPS.
The GitHub Pages server receives the request.
Static files (HTML, CSS, JavaScript) are sent back.
The browser renders the website.
JavaScript loads saved data from localStorage.
The website becomes interactive.

Role of Each Component
Browser renders the interface.
Executes JavaScript.
Stores user data in localStorage.
Handles user interaction.
DNS translates domain names into IP addresses.
Web Server (GitHub Pages)
Hosts static files.
Responds to HTTP requests.
Delivers content securely.

Static Files
index.html: Structure and content
style.css: Styling and layout
script.js: Logic and interactivity

Data Storage & Privacy
All data is stored locally in the browser using localStorage. No data is transmitted to external servers. This ensures privacy and persistence between sessions.

Design Decisions
Clean, calm layout with soft colours.
Rounded sections and clear spacing for ease of use.
Mobile-first responsive design.
Focus on simplicity and accessibility.

📁 File Structure
soulift/
├── index.html
├── style.css
├── script.js
├── README.md

Limitations & Future Improvements
Mood history tracking
Journaling feature
Dark mode
Data export
Reminder notifications

