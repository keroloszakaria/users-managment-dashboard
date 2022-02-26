# User Management Dashboard

## Project setup
  - npm install

## Compiles and hot-reloads for development
  - npm run serve

## Run local server
  - npm run db:serve

## Project Description
Only users can be allowed to enter the admin page and make add, edit and delete users

## Steps to test that
    1 - Login by random username and password. (can't allow)
    2 - Login by the user in the user's list (example: username: admin, password: admin).
    3 - Now you can make tests to add, edit and delete users you want.

P.S. User's list in db.json file.

## Addition feature
  - You can make admin only can edit, delete and add but users can see data only.

### You can activate this feature by
    1- Remove ( // ) on lines in LoginView.vue file.  (line from 92 to 97)
    2- Remove ( // ) on lines in NavHead.vue file.    (line 107)
