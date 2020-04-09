# project

A mean stack project
1. Basic home page with login sigup button
2. On click of signup, a form with 3 fields, Name, Email id, and password.
3. On successful signup it should redirect to login page.
4. Login page will have 2 field, email and password.
5. On successful login redirect to a new dashboard page which will have a text in the centre stating HELLO {{Name of logged in User }} and two buttons.
6. First button: Send Emails: on click of it a form will will be loaded in new component with fields: to, cc, subject and body field and a submit button.(from will be automatically taken from logged in user). On successful mail sending, page should re direct us to dashboard page.
7. Second button: Show sent email: it should list all the email sent by logged in user. Table field: to, cc, subjectand body.
8. There should be additionallog out button to redirect us to very first homepage.

Tech stack: MEAN
npm package: maildev(for email smtp server), nodemailer(to send email on dummy box), JWT for authentication purpose., Ui must be using angular material.
