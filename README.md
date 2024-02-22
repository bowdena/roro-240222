# Stimulus outlets example for Rails meetup 24/2/2024

## Built using rails 7.1.3, tailwind, esbuild and propshaft using sqlite3
rails _7.1.3_ new stimulus_20240219 --css tailwind --javascript=esbuild --asset-pipeline=propshaft

The two examples are:
 - http://localhost:3000
 - http://localhost:3000/hotwire


 ## Example 1: Stimulus outlet

Files:
roro.html.erb
visibility_controller.js
outside_controller.js

 Two examples, each of the buttons has identical button code, with the same stimulus targets.  As the scope is only to the div containing the data-controller with the button and the hidden div, triggering the button doesn't trigger the other hidden divs

 The DOM query requires that the id is set for each of the hidden div's.  It then calls the visibility stimulus controller to the #nastytoggle method.  This iterates over the DOM and finds any items with the same ID and toggles the visibility.

 The outlets controller is a little more nuanced.  You define the outlet at the start of the controller as the name of the outlet controller (visibility_controller.js). The visibility controller isn't changed but the erb file is updated to include a class with the name of the outlet to target.  I've called this outside-outlet in this example.  A new stimulus controller for the button called outside is creatd and the outlet is defined with the stanza data-<source controller>-<destination controller>-outlet="outside-outlet".

 Clicking the button calls the outside controller .toggleAll method, which then checks if there are any defined outlets on the page.  if there are, then they are iterated over and the method within the visibility controller is called to toggle the outlet.

 ## Example 2: Hotwire and Stimulus outlet

Files:
hotwire.html.erb
_result.html.erb
form_controller.js
token_controller.js

This example is a little more complicated, the stimulus controller wraps the form.  When the next button is clicked, hotwire replaces the form with the contents within result and connects to the token_controller.js

We define the outer controller as an outlet using the name btn-outlet so that we can access it later and set a target of nextbtn so that we can affect a specific element.  When hotwire loads the page into the turbo-frame, we bring in the token controller and set the button to target the outlet of the outer div.  Clicking the button calls togglebtn within the token controller which checks whether the outlet is on the page and then calls the toggleTargets() method within the form controller.