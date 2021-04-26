# TigerHub v0.4
## SWEN-444 Group Project
### Team 5
- Ben Radley (bdr1224@rit.edu)
- Cameron Riu (cmr6689@rit.edu)
- Daniel Kamvakis (djk5435@rit.edu)
- Seth Teichman (smt5541@rit.edu)
- Wyatt Holcombe (wdh5674@rit.edu)
###A better SIS - for students, by students.
TigerHub was designed as the SIS that we want, something that we thought would unify and improve our daily workflow. Because we know what it's like to use a mediocre SIS, it was easy figuring out how to improve it!
## User Requirements
- An internet connection
- Active TigerHub instance (demo available at https://smt5541.github.io/tigerhub)
###Usage Instructions
1. Navigate to site (self-hosted using Development/Self-host Instructions or [the demo](https://smt5541.github.io/tigerhub)).
2. Log in using the button in the top right corner. Choose your work role.
3. Choose the desired option, options are different for each role.
#### Student > Schedule Building/Course Registration
1. Select 'Enrollment/Degree Planning' from the Navbar.
2. Either Search from a list of available classes by Course Code or Select from a list of Recommended Classes.
    - Search from Available Classes
        1. In the 'Search for classes' box, enter a Course Code (i.e. SWEN-250, HSPT-161, etc.).
        2. Click the button labelled by the Course you wish to enroll in.
        3. Click the 'Register' button underneath the point where it says 'Class to Enroll: [desired class]'
    - Select from Recommended Classes
        1. From the 'Select Recommended Class' box, choose the Course you wish to enroll in.
        2. Click the 'Register' button underneath the 'Select Recommended Class' box.
3. You will be prompted to Confirm Registration in the selected class. Click the 'Confirm' or 'Cancel' buttons as desired.
#### Student > Transfer Money
1. Select 'Finance' from the Navbar.
2. Select 'Transfer Money' from the Finance menu on the left.
3. Under 'RIT Account to Reload', select the RIT Account you wish to deposit funds into.
4. Under 'Payment Method to Charge', select the funding source you wish to charge for your transaction.
5. Under 'Amount', enter the amount, in dollars, that you wish to deposit to your account.
6. Click 'Go Back' to return to the 'Balances' page, or 'Submit' to continue your transaction.
    1. If 'Submit' is selected, you are presented with a confirmation dialog. Click 'Go Back' to return to the 'Transfer Money' page, or 'Complete' to confirm your transaction.
        1. If 'Complete' is selected, you are presented with a confirmation page. Click 'Make Another Payment' to return to the 'Transfer Money' page, or 'View Balances' to return to the 'Balances' page. 
#### Student > Place a Dining Order
1. Select 'Dining Order' from the Navbar.
2. You are prompted to 'Select Time' from a list of times. To select a time, click the 'Select Time' button next to the time you desire.
3. Once a time is selected, you are shown the list of restaurants open for pickup during that time. To select a restaurant, click the 'Order Here' button next to the restaurant name.
4. You are brought to the 'Item Selection' screen. By default, the 'All Items' category is selected, showing you all items available at that restaurant in the 'Items' column. To filter the 'Items' column, click the 'Select' button next to the category you wish to browse. Also, the 'Back' button in the top left will return you to the 'Select Time/Restaurant' page 
5. When you find an item you want to order, click the 'Add to Cart' button in its row.
6. You are presented with any applicable customizations and/or an allergy prompt. Select the customizations you would like and/or enter any allergies you have.
7. Press the 'Add to Cart' button to add the item to your cart, or 'Cancel' to abort the action.
8. Once at least one item is in your cart, it will appear in the 'Cart' section with a 'Remove' button that can be used to remove the associated item from your cart. Additionally, the 'Checkout' button will be enabled. In the top left, there is a 'Back' button that will return you to the 'Select Items' page.
9. Pressing the 'Checkout' button brings you to the 'Checkout' page, where you are shown a larger view of the items in your cart, with the ability to remove any items, and as long as there are items in your cart, pay with either Dining Dollars or Credit/Debit (by clicking the associated button in the bottom right).
10. Selecting a payment method brings you to the 'Order Confirmation' page, where you are provided the order number and helpful information about the online ordering process, as well as a button to 'Return to Homepage'.
#### Student > Student-Advisor Communication
1. Select 'Contact' from the Navbar.
- On the left, you can Schedule an Appointment by
    1. Selecting an Advisor or Professor from the 'Select Advisor/Professor' list.
    2. Entering a 'Reason for Meeting' in the text box.
    3. Selecting a Date and Time for meeting under the associated input fields.
    4. Clicking the 'Submit' button.
- On the right, you can
    - View Messages from your Professors/Advisors under the 'Conversations' section
        1. Click the conversation button labelled with the name/role of the person you'd like to contact.
        2. Their message to you will be displayed on the left, with a 'Back' button to return to the previous view, and the right will become a 'Reply to Message' section.
        3. To reply, enter your message in the 'Message' field. 
        4. Click 'Reply'.
        5. You will be provided with a confirmation that the 'Reply Sent!'.
    - Send Messages to your Professors/Advisors under the 'Create a New Message' section
        1. Select a recipient from the 'To' field.
        2. Enter a subject in the 'Subject' field.
        3. Enter your message in the 'Message' field.
        4. Click 'Send Message'.
        5. You will be provided with a confirmation that the 'Message Sent!'.
#### Advisor > Print Student Records
1. Select 'Student List' from the Navbar.
2. Search for Student under the 'Student Search' section.
3. Select a Student by clicking the button labelled by their name in the 'Search Results' section.
4. You are presented with their Student Information page.
5. Click the 'Print' button in the top right to print their records, then follow any browser or OS printing dialogs.

## Development/Self-host Requirements
- Any Git Command Line
- An internet connection
- Node.js (confirmed working on 14.16.1)
- NPM (confirmed working on 6.14.12)
### Setup/Installation Instructions
- Ensure Requirements (development) are satisfied, then run the following commands to start a server on http://localhost:3000
- ```git clone https://github.com/smt5541/tigerhub```
- ```git checkout main```
- ```npm install```
- ```npm start```
### Packaging/Deploying to GitHub Pages
- After Development Setup, you can run the following 2 commands to deploy to GitHub Pages
- ```npm run predeploy```
- ```npm run deploy```
## Known Issues
- Functionality unnecessary for demonstration:
    - Finance Balances Page 'See History' and 'Make Payment' buttons non-functional 
    - Finance Transaction History, Payment Method Management incomplete
    - Advisor Email, Course Search incomplete
## Version History
###v0.4 - Final Presentation Release
- Finished implementation of Dining Order Item Customization (and Allergy Specification)
- Fine tuning to layout and theming
###v0.3 - More Continued Development
- Implemented Advisor Student List, with one active student (Student Studentsen)
- Revised Enrollment/Degree Planning View, implemented Class Search
- Began implementation of Dining Order Item Customization on the backend
###v0.2 - Continued Development
- Implemented Finance Management Transfer Money
- Fixed Advisor Calendar Permissions
- Implemented Dining Order Item Selection, Cart Management, Checkout, and Order Confirmation
- Implemented Sign-In/Sign-Out
###v0.1 - Initial Release
- Add Homepage with Calendar, Agenda and Navbar
- Add Degree Planning with Flowchart, Recommended Class Registration, Class Search
- Add Finance Management with only Balances and Money Transfer functionality
- Add Dining Order with only Time and Restaurant Selection functionality
- Add Advisor/Professor Messaging in Contact Page
##Legal Information
Release Date: 04/26/2021, Copyright Team 5
