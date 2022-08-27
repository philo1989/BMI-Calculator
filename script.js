//JavaScript Document 
// BMI RECHNER
//NICE TO KNOW
/* var in a function sets a local variable
||defining without var --> variable is global||
variable outside a function is global in each case*/
//parseInt() wandelt varibale in Integer
/*function changePic(img)
{
       document.getElementById('calc').src=img;
}*/
function auswertung() 
{	
	var age = document.bmicalc.age.value; //reading values through <form name> and <input name>
	
	var size = document.bmicalc.size.value;
	var weight = document.bmicalc.weight.value;
	optbmi = new Array(18, 23);
		
	//CALC
	var bmi = weight/Math.pow((size/100),2); //Math.pow(A,B) liefert beliebige Potenz wobei argument A die Basis und B den Exponenten beschreibt
	var bmi = bmi.toFixed(2);
	age = parseInt(age,10);
		
	if(document.bmicalc.sex[0].checked == true)//Abfrage welcher radio-button aktiv ist
	{	
		document.getElementById("cm").src = "media/cm_w.svg"; //volle funktion:firefox & ie(9) eingeschränkt:chrome gar keine:opera  

		optbmi [0] +=age; // == optbmi = optbmi[0] + age;
		optbmi [1] +=age;
		var ausgabe = "Für ne Frau";
		check(optbmi,bmi,ausgabe);
		document.getElementById("test").innerHTML="min. BMI:"+optbmi[0]+"&nbsp;&nbsp;&nbsp;max. BMI:"+optbmi[1];
	}
	else if(document.bmicalc.sex[1].checked == true)
	{	
		document.getElementById("cm").src = "media/cm_m.svg";
		age+=1;
		optbmi [0] +=age;
		optbmi [1] +=age;
		var ausgabe = "Für nen Mann";
		check(optbmi,bmi,ausgabe);
		document.getElementById("test").innerHTML="min. BMI:"+optbmi[0]+"&nbsp;&nbsp;&nbsp;max. BMI:"+optbmi[1];
	}
}
function check(optbmi,bmi,ausgabe)
{
	if (bmi >= optbmi[0] && bmi <= optbmi[1])
	{
		document.getElementById("result").style.color = "green";
		document.getElementById("result").style.fontSize = 30+"px";
		document.getElementById("result").innerHTML=bmi+"<br/>Ihr Body Mass Index ist OK<br/>...<br/>"+ausgabe;
	
	}
	else if	(bmi > optbmi[1] && bmi < 70)
	{
		document.getElementById("result").style.color = "red";
		document.getElementById("result").style.fontSize = 50+"px";
		document.getElementById("result").innerHTML=bmi+"<br/>zu dick<br/>...<br/>"+ausgabe;
	}
	else if	(bmi < optbmi[0] && bmi > 12)
	{
		document.getElementById("result").style.color = "red";
		document.getElementById("result").style.fontSize = 18+"px";
		document.getElementById("result").innerHTML=bmi+"<br/>zu dürr<br/>...<br/>"+ausgabe;
	}
	else if (isNaN(bmi) || (bmi == 0))
	{
		document.getElementById("result").style.color = "#f5f";
		document.getElementById("result").style.fontSize = 45+"px";
		document.getElementById("result").innerHTML=bmi+"=ERROR<br/>...<br/>Bitte ZAHLEN eingeben<br/> ...";
	}
	else 
	{
		document.getElementById("result").style.color = "#f5f";
		document.getElementById("result").style.fontSize = 45+"px";
		document.getElementById("result").innerHTML=bmi+"<br/>...<p>Nicht von dieser Welt ?</p>...<br/>kein Mensch ?";
	}
}
