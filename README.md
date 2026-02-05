# SouLift – Mental Health & Wellness Tracker
#Overview
SouLift is a client-side mental health and wellness tracking web application developed using HTML, CSS, and JavaScript. The project demonstrates an understanding of basic web infrastructure concepts while providing a practical tool to help users manage stress, track emotions, and set personal wellness goals.
All user data is stored locally in the browser using the localStorage API, ensuring privacy and eliminating the need for server-side data storage.

#Application Features
Core Features:
* Add wellness goals
* Display a list of goals
* Mark goals as completed
* Delete goals
* Persist data using browser localStorage

#Additional Features
* Daily affirmations with refresh option
* Mood tracking
* Mental health support resources
* Responsive design for mobile and desktop devices

# Technology Stack
| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| HTML5            | Structure and layout         |
| CSS3             | Styling and responsiveness   |
| JavaScript       | Logic and interactivity      |
| localStorage API | Client-side data persistence |
| GitHub Pages     | Static website hosting       |

# How to Run the Application Locally
Option 1: Open Directly
1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html` to open the application in your web browser.

# Option 2: Using Live Server
1. Open the project in Visual Studio Code.
2. Install the “Live Server” extension.
3. Right-click `index.html` and select “Open with Live Server”.

# Option 3: Using Python
```
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

# Deployment Process
Hosting Platform: GitHub Pages
GitHub Pages was selected as the hosting platform because:
* It provides free static hosting
* HTTPS is enabled by default
* It integrates seamlessly with GitHub repositories
* It is suitable for client-side web applications

#Deployment Steps
1. Initialize a Git repository.
2. Add all project files.
3. Commit the changes.
4. Push the repository to GitHub.
5. Enable GitHub Pages in the repository settings.
6. Access the live site via the public URL.

#Live URL
[https://yourusername.github.io/soulift/](https://yourusername.github.io/soulift/)

#Web Infrastructure Overview
How Users Access the Application:
A user accesses the application by entering the website URL into their web browser. The browser communicates with DNS servers to resolve the domain name into an IP address. Once resolved, the browser sends an HTTPS request to the hosting server, which responds by delivering the static website files.

#Infrastructure Flow Diagram
User → Browser → Internet → Web Server → HTML/CSS/JS files
What Happens When a User Types the Site URL:
1. The user enters the website URL into the browser.
2. The browser sends a DNS request to resolve the domain name into an IP address.
3. Once resolved, the browser sends an HTTPS request to the web server.
4. The web server (GitHub Pages) responds by sending the static files.
5. The browser loads and renders the HTML, applies CSS styling, and executes JavaScript.
6. The application becomes interactive and loads saved data from localStorage.

#How the Server Responds
The web server receives the HTTP request and returns the requested static files (HTML, CSS, and JavaScript) along with appropriate HTTP status codes and headers.

#How the Browser Loads and Executes JavaScript
Once the HTML file is loaded, the browser identifies linked JavaScript files and downloads them. The JavaScript code is then executed, initializing application logic, loading stored data from localStorage, and attaching event listeners for user interactions.

#How Assets (CSS and JS) Are Fetched
The browser parses the HTML document and identifies external asset references. It sends additional requests to the server for CSS and JavaScript files, which are then downloaded and applied to the webpage.

#Role of Each Component
Browser:
* Renders the user interface
* Executes JavaScript
* Stores user data in localStorage
* Handles user interactions

#DNS
* Translates human-readable domain names into IP addresses
* Enables browsers to locate the correct web server

#Web Server (GitHub Pages)
* Hosts and serves static files
* Responds to HTTP requests
* Delivers content securely over HTTPS

#Static Files
* `index.html`: Structure and content
* `style.css`: Styling and layout
* `script.js`: Logic and interactivity

#Data Storage and Privacy
All user data is stored locally within the browser using the localStorage API. No personal data is transmitted to or stored on external servers, ensuring user privacy and persistence across sessions.

#Design Decisions and Assumptions
* A clean and calming layout was chosen to support mental wellness.
* A mobile-first responsive design ensures usability across devices.
* The application assumes users have access to a modern web browser with JavaScript enabled.
* Client-side storage was selected to avoid backend complexity and protect user privacy.

#File Structure
```
soulift/
├── index.html
├── style.css
├── script.js
├── README.md
```
#Limitations and Future Improvements
* Mood history tracking
* Journaling functionality
* Dark mode support
* Data export options
* Reminder notifications
