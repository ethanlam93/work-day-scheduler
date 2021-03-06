# work-day-scheduler


<h1>PROBLEM</h1>
  
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

<h1>REQUIREMENTS</h1>

1. Current Date is displayed at the top
2. Presented with timeblock for standard business hour
3. Timeblock is automatically color-coded to represent past, present, future
4. Click on a timeblock to enter an event
5. Able to save event to local storage
6. Event saved displayed after refreshed

<h1>PROCEDURES</h1>

1. Pseudo-coding
2. Wire-frame user journey
3. HTML based on Bootstrap
4. CSS
5. Javascript
6. User-Testing
7. Debug
8. Deploy


<h1>DETAILS</h1>

1. This project requires the use of Moment.Js to obtain the dynamic date and time for the schedule
2. Upon loading, Js will search in local storage for saved data and display them on the appropriate time-block based on ID
3. All the saved event are nested inside one object for easy navigation, the object contain key for each hours corresponding to the value, once user hit "save" button, the value will be saved into the corresponding key
4. The date and time display on top are run every second to update time dynamically without refreshing the whole page.



My Github Repo: https://github.com/ethanlam93<br>
Deployment: https://ethanlam93.github.io/work-day-scheduler/



  

