function myFirstApp(name, age) {
	
	alert("Привет, меня зовут " + name + " и это моя первая программа!");
	
	function showSkills() {
		let skills = ['HTML', 'CSS', 'Photoshop'];
		

		for (let i = 0; i < skills.length; i++) {
			document.writeln("Я владею " + skills[i] + " <br>");	

		}
	}

showSkills();

function checkAge() {
	//не могу понять что тут не так, вариантов мого перебрал
	
	if (age > 18) {
		alert("Доступ открыт");
	}else {
		alert("Родители разрешили?");
	}

}

function calcPow(num) {
	let a = num * num;
	console.log(a);
}

calcPow(4);

}

myFirstApp("Андрей", 30);
