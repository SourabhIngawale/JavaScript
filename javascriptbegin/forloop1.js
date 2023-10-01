const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
	gfg += subjects[i + ''];
	i++;
}
console.log(gfg)
