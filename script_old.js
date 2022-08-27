//JavaScript Document 
// BMI RECHNER
//NICE TO KNOW
/* var in a function sets a local variable
||defining without var --> variable is global||
variable outside a function is global in each cases*/
//parseInt() wandelt varibale in Integer
function auswertung() 
{
		
		var age = document.bmicalc.age.value; //reading values through <form name> and <input name>
		var size = document.bmicalc.size.value;
		var weight = document.bmicalc.weight.value;
		optbmi = new Array(18, 23);
		//CALC
		var bmi = weight/Math.pow((size/100),2); //Math.pow(A,B) liefert beliebige Potenz wobei argument A die Basis und B den Exponenten beschreibt
		var bmi = bmi.toFixed(2);
	
		
		
		if (size <= 0 || weight <= 0 || (document.bmicalc.sex[0].checked == false && document.bmicalc.sex[1].checked == false ))
		{
			document.getElementById("result").innerHTML="Unvollständige Werte !!!<br/>BMI="+bmi;
		}
		else 
		{
			switch (parseInt(age))// obwohl eig. bereits im int format verlangt js eine INT umwandlung?
			{					// eingaben aus Formular-feldern sind immer strings :-/
			case 0:
				if (checksex() == 0)
				{	
					var ausgabe = "Für so ein Junges Ding jedenfalls";
					check(optbmi,bmi,ausgabe)
					//für sonen junges Ding
				}
				if (checksex() == 1)
				{	
					var ausgabe = ("Für so einen Jungspund jedenfalls");
					optbmi [0] += 1; //entspricht optbmi[0] = optbmi[0] + 1
					optbmi [1] += 1;
					check(optbmi,bmi,ausgabe)
					//für sonen Jungspund
				}
			break;
			case 1:
				if (checksex() == 0)
				{	
					var ausgabe = ("Für ne Frau");
					optbmi [0] += 1;
					optbmi [1] += 1;
					check(optbmi,bmi,ausgabe)
					//fürn Mädel
				}
				else if (checksex() == 1)
				{
					var ausgabe = ("Für nen Kerl");
					optbmi [0] += 2;
					optbmi [1] += 2;
					check(optbmi,bmi,ausgabe)
					//fürn Kerl
				}
			break;
			case 2:
				if (checksex() == 0)
				{	
					var ausgabe = ("Für ne Frau");
					optbmi [0] += 2;
					optbmi [1] += 2;
					check(optbmi,bmi,ausgabe)
					//fürn Mädel
				}
				else if (checksex() == 1)
				{	
					var ausgabe = ("Für nen Kerl");
					optbmi [0] += 3;
					optbmi [1] += 3;
					check(optbmi,bmi,ausgabe)
					//fürn Kerl
				}
			break;
			case 3:
				if (checksex() == 0)
				{
					var ausgabe = ("Für ne Frau");
					optbmi [0] += 3;
					optbmi [1] += 3;
					check(optbmi,bmi,ausgabe)
					//fürn Mädel
				}
				else if (checksex() == 1)
				{	
					var ausgabe = ("Für nen Kerl");
					optbmi [0] += 4;
					optbmi [1] += 4;
					check(optbmi,bmi,ausgabe)
					//fürn Kerl
				}
			break;
			case 4:
				if (checksex() == 0)
				{	
					var ausgabe = ("Für ne Frau");
					optbmi [0] += 4;
					optbmi [1] += 4;
					check(optbmi,bmi,ausgabe)
					//fürn Mädel
				}
				else if (checksex() == 1)
				{	
					var ausgabe = ("Für nen Kerl");
					optbmi [0] += 5;
					optbmi [1] += 5;
					check(optbmi,bmi,ausgabe)
					//fürn Kerl
				}
			break;
			case 5:
				if (checksex() == 0)
				{
					var ausgabe = ("Für ne Frau");
					optbmi [0] += 5;
					optbmi [1] += 5;
					check(optbmi,bmi,ausgabe)
					//fürn Mädel
				}
				else if (checksex() == 1)
				{	
					var ausgabe = ("Für nen Kerl");
					optbmi [0] += 6;
					optbmi [1] += 6;
					check(optbmi,bmi,ausgabe)
					//fürn Kerl
				}
			break;
			}	
		
			/*else// if(document.bmicalc.sex[0].checked == false && document.bmicalc.sex[1].checked == false)
			{
			alert("Bitte Geschlecht wählen!")
			window.location.reload();
			}*/
			
		}
}
function checksex()
{
	if(document.bmicalc.sex[0].checked == true)
	{
		return (0)
	}
	else if(document.bmicalc.sex[1].checked == true)
	{
		return (1)
	}
}
function check(optbmi,bmi,ausgabe)
{
	if (bmi >= optbmi[0] && bmi <= optbmi[1])
		{
			document.getElementById("result").style.color = "green";
			document.getElementById("result").style.fontSize = 30+"px";
			document.getElementById("result").innerHTML=bmi+"<br/>Ihr Bodymass Index ist OK<br/>...<br/>"+ausgabe;
		
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
		else 
		{
			document.getElementById("result").style.color = "#f5f";
			document.getElementById("result").style.fontSize = 50+"px";
			document.getElementById("result").innerHTML=bmi+"<br/>...<p>Nicht von dieser Welt ?</p>...<br/>check your input values";
		}
}
