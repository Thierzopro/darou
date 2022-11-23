const one =()=> promise.resolve("one")
async function myFunc() {
	console.log("in function!")
	const res = avait one()
	console.log(res)
}
console.log("before function")
myFunc();
console.log("after function")