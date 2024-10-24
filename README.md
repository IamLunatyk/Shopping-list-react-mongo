Shopping List App
This is a collaborative shopping list app built with React and MongoDB. The app allows multiple users to manage a single shopping list in real-time, adding items, marking them as purchased, and removing them when necessary. With data stored on a shared MongoDB server, the list can be accessed and updated from multiple devices simultaneously.

Features
Add Items: Users can add new products to the shopping list, which will be stored on the MongoDB server.
Mark as Purchased: Items can be marked as purchased, and when marked, they will be crossed out in red.
Remove Items: Products can be deleted from the list once they are no longer needed.
Real-Time Collaboration: Multiple users can interact with the same list in real-time. Changes made on one device are instantly reflected on all other devices.
Technologies Used
Frontend: React
Backend: MongoDB for data storage
Deployment: Accessible via a link, making the app usable on multiple devices at once.
How to Run
Replace in .env the placeholders for your MongoDB connection:

php
Skopiuj kod
MONGODB_URI=mongodb+srv://<login>:<password>@<cluster-name>.mongodb.net/<your-database>?retryWrites=true&w=majority
Run one of the following commands while in the root directory:

bash
Skopiuj kod
node app.js
or

bash
Skopiuj kod
npm start
Usage
Add items to the list using the input field.
Click on an item to mark it as purchased, which will cross it out in red.
Delete items by pressing the delete button next to each product.
Share the app's link with others to collaborate on the same list in real-time.
Contributions
Feel free to submit issues or pull requests to improve the app.
