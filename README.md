html5boilerplate
================

This is a micro website to find out if a Bay Area Rapid Transit station is biker friendly or not. Its a responsive design in HTML5, CSS3 and Pure Javascript (no use of frameworks like jQuery, Mootools etc)

Functionality 
-- It shows the user the local time (Client local time)
-- Dynamic Output based on User Input : The User selects(inputs) the station he/she is leaving from and the site  tells (outputs) whether the station is biker friendly or not

Technical Details 

-- It show the local time (Client local time) : using basic Javascript Date Function 
-- The colon in the time blinks. Accomplished by using <blink></blink> tag (only supported in Firefox). A cross-browser solution also implemented using css visibility attribute and running it through setInterval loop.
-- Uses Custom Web Fonts
-- Uses CSS3 transitions (transitions for bikes as opposed to animated gif, @keyframes )
-- Uses HTML5 Boilerplate framework with Modernizr.  
-- Media Queries used for Responsive design
-- Uses API from BART website
-- Just used plain javascript (and avoided any  javascript frameworks like  Jquery etc for this version)
-- Has been tested on Desktop Chrome, Firefox
-- HTML5 Compliant - Validated using W3c Validator at 

References & Tools Used : 
-- The base html5boilerplate framework can be generated from http://www.initializr.com/ based on your requirements
-- http://api.bart.gov for loading stations and to find if the station is biker friendly or not. (The API provides with bike_flag=0 or 1 attribute)
-- http://validator.w3c.org 
-- Firefox Webdeveloper plugin to test the Responsive layouts

Demo

-- The microsite implementation can be viewed at http:/leadersahead.org/showcase/html5boilerplate/

Future Enhancements 

-- Could be improved to use Server time (as opposed to local time, if the application is time-sensitive and the accuracy of the time is critical use  the following:
		-- Network Time Protocol http://www.ntp.org/downloads.html
		-- Find out if your client time (browser ot workstation) is Accurate http://www.lagado.com/tools/time
-- Could use jQuery framework to have less and clean code
-- Make performance improvements 
