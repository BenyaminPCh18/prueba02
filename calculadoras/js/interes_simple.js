
var capital=document.getElementById('capital');
var interes=document.getElementById('interes');
var tiempo=document.getElementById('tiempo');
var calcula=document.getElementById('calcular001');
var resultado=document.getElementById('resultado');
calcula.addEventListener("click",calculando);

var capitalFinal2=document.getElementById('capitalFinal2');
var capital2=document.getElementById('capital2');
var tiempo2=document.getElementById('tiempo2');
var calcular2=document.getElementById('calcular002');
var resultado2=document.getElementById('resultado2');
calcular2.addEventListener('click',calculando2)

function calculando()
{
  var vCapital=parseFloat(capital.value);
  var vInteres=parseFloat(interes.value);
  var vTiempo=parseFloat(tiempo.value);
  var vRes=parseFloat(resultado.value);

  //var indiceInteres=document.formInteres.interesLista.selectedIndex;
  //var listaTasa=document.formInteres.interesLista.options[indiceInteres].value;

  var indiceTiempo=document.formulario.listaTiempo.selectedIndex;
  var listaTiempo=document.formulario.listaTiempo[indiceTiempo].value;

  if (vCapital>=0)
  {
    var interes01=vInteres/100;//interesd para operacion
    var res=vCapital*interes01*vTiempo;
    /*resultado.value=res; Con esto ya se muestra en pantalla el Resultado*/
    //TERMINA LAS CONDICIONES
    if ( listaTiempo=='años')
    {
      console.log('Primera opcion');
      //var res1=Math.round(res,-1);
      resultado.value=res;
    }
    else if ( listaTiempo=='dias')
    {
      console.log('anual y dias');
      var res=vCapital*interes01*(vTiempo/365);
      resultado.value=res;
      console.log('resultado de anual y dias');
    }
    else if (listaTiempo=='meses')
    {
      console.log('interes anual y tiempo mensual');
      var res=vCapital*interes01*(vTiempo/12);
      // var res1=Math.round(res,-1);
      //var res1=res;
      var redondeo=parseFloat(Math.round(res*1000)/1000).toFixed(3);
      // var redondeo=parseFloat(Math.round(res1)).toFixed(2);
      resultado.value=redondeo;
      //resultado.value=res;
    }
    else {
      alert('Selecciona una categoría');
    }
  }
  else {
    alert('No colocaste ningún Número en el Capital');
  }
}

function calculando2()
{
  var vCapital=parseFloat(capital2.value);
  var vcapitalFinal=parseFloat(capitalFinal2.value);
  var vTiempo=parseFloat(tiempo2.value);
  var vRes=parseFloat(resultado2.value);

  var indiceTiempo=document.formulario2.listaTiempo2.selectedIndex;
  var listaTiempo=document.formulario2.listaTiempo2[indiceTiempo].value;

  if(vCapital>=0)
  {
    if ( listaTiempo=='años')
    {
      console.log('Primera opcion');
      var interesGenerado=vcapitalFinal-vCapital;
      var res=(interesGenerado*100)/(vCapital*vTiempo);
      //var res1=Math.round(res,-1);
      var redondeo=parseFloat(Math.round(res*1000)/1000).toFixed(3);
      resultado2.value=redondeo;
      //Colocando respuesta a la DERECHA
      document.getElementById('resultado2').style.textAlign='right';
    }

    else if ( listaTiempo=='dias')
    {
      console.log('anual y dias');
      var vTiempo=vTiempo/365;
      var interesGenerado=vcapitalFinal-vCapital;
      var res=(interesGenerado*100)/(vCapital*vTiempo);
      //var res1=Math.round(res,-1);
      var redondeo=parseFloat(Math.round(res*1000)/1000).toFixed(3);
      resultado2.value=redondeo;
      document.getElementById('resultado2').style.textAlign='right';
    }
    else if (listaTiempo=='meses')
    {
      console.log('interes anual y tiempo mensual');
      var vTiempo=vTiempo/12;
      var interesGenerado=vcapitalFinal-vCapital;
      var res=(interesGenerado*100)/(vCapital*vTiempo);
      //var res1=Math.round(res,-1);
      var redondeo=parseFloat(Math.round(res*1000)/1000).toFixed(3);
      resultado2.value=redondeo;
      document.getElementById('resultado2').style.textAlign='right';
    }
    else {
      alert('Selecciona una categoría');
    }
  }
  else
  {
    alert('No colaste ningún valor en el Capital Inicial');
  }
}
