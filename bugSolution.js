```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({ "_id": ObjectId("6530987654321") }, { $inc: { "counter": 1 } });

//Alternative if the field might not exist:
db.collection('myCollection').updateOne({ "_id": ObjectId("6530987654321") }, {
  $inc: { "counter": 1 },
  $setOnInsert: { "counter": 1 } 
});
```