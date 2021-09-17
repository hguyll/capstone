# DogSportApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## About the App

The idea of this application is to be a "one-stop" shop for dog enthusiasts where they can create, edit, view, and sign up for dog sport events of varying types. In this application, Sports are also known as Categories, Events are known as Groups, and users are Members. Events can also be referred to as trials. There are currently no specific permissions a user needs to interact with any part of this application.

## Development server

- First, fire up the backend server by changing directories into the `server/`directory. Run the following commands in this order:
  - `npm install`
  - `node server.js`
Next, start the frontend application
- Change directories to client/dog-sport-app and run ` ng serve `
- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Home Page

This landing page is designed to give insight about what the site is about and allow users to intuitively navigate the application.

## View Events by Sport Type

Viewing all events of a specific sport type can be done by selecting a sport on the home page. This will navigate you to `/sport/:sport`

## View All Events

View all events by clicking the "View All Events" link in the navigation menu at the top of the page. This will present you with a list of all events, across all of the different sports. You can select these events to edit them. More instructions on this are under the View/Edit Event Details section.

## Create New Event

Once you are in the View Events by Sport type, you can create a new event. All fields are required and you will get an error message if you have not completed all fields in the form. 

## View/Edit Event Details

Whether you are in the "View All Events" or viewing events by sport type, you can click any event row in the table and it will navigate you to a view/edit page for that specific event. As titled, you can update or delete the event from this page. Once you delete or update, it will take you back to the `/sport/:sport` page that you were previously at. The new table should reflect the updated/deleted changes.

## Member Sign Up

Any event allows users to add members if you are viewing the event details. Scroll down to the bottom of the detail view and you will find the option to add a member. If you do not fill out the form completely, you will get an error message.

## Sign Up

Sign up works and uses local storage. It is not being utilized to its full potential. The plan is to use this in the future to make signing up for events easier. If you have already signed up, it will display your Profile information.


# Future Work

I genuinely enjoyed working on this project and found myself doing it in my free time. I intend to continue working on it in the future. I have many ideas for how to improve the current application. They are as follows, in no particular order:
- Work on adding options for removing and updating members.
- Add location details to the events.
- Enhance error handling and error messages.
- Only show events that occur in the future.
- Add a closing date and only allow users to sign up prior to that closing date.
- Handle member counts to prevent users from signing up for a full event.
- Clean up CSS more.
- Create roles for users and only allow admins to create events. And only the admin who created an event can edit it. Members will still be able to sign up.
- Add an "Update Account" option.
- Clean up CSS and consider using some frameworks to improve the quality.
- Add a log in page.
