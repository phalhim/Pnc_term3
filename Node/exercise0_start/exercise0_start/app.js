const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// Define sample data for demonstration
let users = [
    { id: 1, firstName: 'Narong', lastName: 'Bunyon', age: 20},
    {id:3,firstName:'Sophal',lastName:'Phan'},
    {id:4,firstName:'Sophal',lastName:'Phan'},
    {id:5,firstName:'Sophal',lastName:'Phan'},
    {id:6,firstName:'Sophal',lastName:'Phan'},
    {id:7,firstName:'Sophal',lastName:'Phan'},
    {id:8,firstName:'Sophal',lastName:'Phan'},
    {id:9,firstName:'Sophal',lastName:'Phan'},
    {id:10,firstName:'Sophal',lastName:'Phan'},
    {id:11,firstName:'Sophal',lastName:'Phan'},
    {id:12,firstName:'Sophal',lastName:'Phan'},
    {id:13,firstName:'Sophal',lastName:'Phan'},
    {id:14,firstName:'Sophal',lastName:'Phan'},
];

// GET method - Read all users
app.get('/userss', (req, res) => {
    res.json(users);
});

// GET method - Read a single user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST method - Create a new user
app.post('/createuser', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Generate new ID
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});

// PUT method - Update a user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser };
        res.json({ message: 'User updated successfully', user: users[index] });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE method - Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});