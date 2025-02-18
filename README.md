# MongoDB $inc Operator Error with String Value

This example demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field.  If applied to a field that does not exist, or contains a string value, it will throw an error or produce unexpected results.

The `bug.js` file shows the incorrect usage, and `bugSolution.js` provides the corrected version.