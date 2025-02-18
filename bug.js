```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({ "_id": ObjectId("6530987654321") }, { $inc: { "counter": '1' }});
```