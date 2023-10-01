function GFG() {
	let Platform = { fname: "sourabh", Mname: "chandrakant", lname: "ingawale", };

	let text = "";
	let x;
	for (x in Platform) {
		text += Platform[x] + " ";
	}
	console.log(text);
}
GFG()
