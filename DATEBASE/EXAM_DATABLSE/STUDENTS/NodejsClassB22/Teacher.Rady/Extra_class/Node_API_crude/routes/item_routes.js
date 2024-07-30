const express =require("express")
const { v4: uuidv4 } = require('uuid');
const router = express.Router()

let items = [{"id":"1","name":"Narong"},{"id":"2","name":"Hunnta"},{"id":"3","name":"gunrry"},{"id":"4","name":"mother"}]


// get alll
router.get("/",(req,res)=>{
    res.send(items);
})


// get one item


// create item
router.post("/id",(req,res)=>{
   if(req.body.name !== undefined){
       let itme = {
           "id":uuidv4(),
           "name":req.body.name
       }
       items.push(itme);
       res.status(201).send({"message":"Item create successfully"})
    }else{
        res.status(500).send({"message":"Your create is undefined"})
    }
});



// delete new item

router.delete("/:id",(req,res)=>{
    let id =req.params.id;
    let index = items.findIndex(item=>item.id===id);
    if(index !==-1){
        items.splice(index,1)
        res.status(200).send({"message":"Item deleted successfully"})
    }else{
        res.status(400).send({"massage":"You delete is not found"})
    }
})



//delete one item
// router.delete("/:id", (req,res) => {
//     let id = req.params.id;
//     let itemDeleteById = "";
//     for(let index in items){
//         if(items[index].id === id){
//             itemDeleteById = index;
//         }
//     }
//     items.splice(itemDeleteById, 1);
//     res.status(200).send(items);
// })


//Update item

router.patch("/:id",(req,res)=>{
    let id = req.params.id;
    let index = items.findIndex(itme =>itme.id===id)
    if(index !== -1){
        let item = items[index];
        if(req.body.name !==undefined){
            item.name= req.body.name
        }
        res.status(200).send({"massage":"items updated successfully"})
    }else{
        res.status(404).send({"message":"You Update is not found"})
    }
});

module.exports = router;