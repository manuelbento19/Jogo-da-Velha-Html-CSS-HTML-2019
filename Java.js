var jogador="X";

var o=0;
var x=0;
var cont=0;
function jogada(input)

{

if(fm.j1.value==""&&fm.j2.value=="")
{
alert("Digitem os nomes!!!")
fm.p1.value=x;fm.p2.value=o;
return 0;}
cont=cont+1;
	if(input.value=="")

		{
	
		if(cont==9&&o==0&&x==0)
			alert("Empate")
			input.value=jogador;

				if(jogador=="X")

					{

						jogador="O";

					}
				
else

					{

						jogador="X";

					}
	
		}

	if(fm.b1.value=="X"&&fm.b2.value=="X"&&fm.b3.value=="X"||fm.b4.value=="X"&&fm.b5.value=="X"&&fm.b6.value=="X"||fm.b7.value=="X"&&fm.b8.value=="X"&&fm.b9.value=="X"||fm.b1.value=="X"&&fm.b4.value=="X"&&fm.b7.value=="X"||fm.b2.value=="X"&&fm.b5.value=="X"&&fm.b8.value=="X"||fm.b3.value=="X"&&fm.b6.value=="X"&&fm.b9.value=="X"||fm.b1.value=="X"&&fm.b5.value=="X"&&fm.b9.value=="X"||fm.b3.value=="X"&&fm.b5.value=="X"&&fm.b7.value=="X")
	{
	x=x+1;
	alert(fm.j1.value+" venceu, e "+fm.j2.value+" perdeu.");
	fm.p1.value=x;fm.p2.value=o;
	}

	if(fm.b1.value=="O"&&fm.b2.value=="O"&&fm.b3.value=="O"||fm.b4.value=="O"&&fm.b5.value=="O"&&fm.b6.value=="O"||fm.b7.value=="O"&&fm.b8.value=="O"&&fm.b9.value=="O"||fm.b1.value=="O"&&fm.b4.value=="O"&&fm.b7.value=="O"||fm.b2.value=="O"&&fm.b5.value=="O"&&fm.b8.value=="O"||fm.b3.value=="O"&&fm.b6.value=="O"&&fm.b9.value=="O"||fm.b1.value=="O"&&fm.b5.value=="O"&&fm.b9.value=="O"||fm.b3.value=="O"&&fm.b5.value=="O"&&fm.b7.value=="O")
	{o=o+1;alert(fm.j2.value+" venceu, e "+fm.j2.value+" perdeu.");
	fm.p1.value=x;fm.p2.value=o;}
}