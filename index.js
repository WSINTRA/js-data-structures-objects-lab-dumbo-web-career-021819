// Write your solution in this file!
driver = {}


const updateDriverWithKeyAndValue = (obj, key, value) => {
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
	driver[key] = value

	return driver
}

const destructivelyDeleteFromDriverByKey = (driver,key) => {
	delete driver[key]
	return driver
}


const deleteFromDriverByKey = (driver,key) => {

	returnJob = Object.assign({}, driver);
	delete returnJob[key]
    return returnJob
} 

// const obj = { foo: "bar" };
 
// const newObj = Object.assign({}, obj);
 
// newObj;
// // => { foo: "bar" }
 
// delete newObj.foo;
// // => true
 
// newObj;
// // => {}
 
// obj;
// // => { foo: "bar" }

// - `deleteFromDriverByKey()` - this function should take in a `driver` `Object` and
//   a `key`. It should delete the `key`/`value` pair for the `key` that was passed
//   in from the `driver` `Object`. This should all not actually mutate the `driver`
//   passed in.

// - `destructivelyDeleteFromDriverByKey()` - this function should work the same as

//   `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in.

// **HINT**: You might find `deleteFromDriverByKey()` to be a bit hard to write
// non-destructively. Think about how we learned to use `Object.assign()`. 

