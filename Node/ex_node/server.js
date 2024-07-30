const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded());

let posts = JSON.parse(fs.readFileSync("subject.json"));



app.get('/task', (req, res) => {
    res.send('Hello World');
})

// show all tasks
app.get('/tasks', (req, res) => {
    res.json({ success: true, posts: posts });
})

// call id task
app.get('/tasks/:id', (req, res) => {
    let id = req.params.id;
    let post = posts.find((post) => post.id == id);
    if (post !== undefined) {
        res.json({ success: true, post: post });
    } else {
        res.status(400).send({ success: false, post: undefined });
    }
})

// delete tasks
app.delete('/tasks/:id', (req, res) => {
    let id = req.params.id;
    let index = posts.findIndex((post) => post.id == id);
    if (index !== -1){
        posts.splice(index, 1);
        fs.writeFileSync("subject.json", JSON.stringify(posts));
        res.json({ success: true, post: "Post deleted successfully"});
    }else{
        res.status(400).send({ success: false, post: "Post not found" });
    }
})


const post = 3000;
app.listen(post, () => {
    console.log("Server is running on port " + post);
});