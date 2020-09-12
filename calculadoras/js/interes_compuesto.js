var capital=document.getElementById('capital');
var tasa=document.getElementById('tasa');
var tiempo=document.getElementById('tiempo');
var boton=document.getElementById('bCalcular');
var resultado1=document.getElementById('resultado1');
boton.addEventListener('click',calculando1);

function calculando1()
{
  vCapital=capital.value;
  vTasa=parseFloat(tasa.value);
  vTiempo=tiempo.value;
  vTasa=tasa.value;
  console.log(vCapital);
  console.log(vTasa);
  var indice=document.formularioTiempo.listaTiempo1.selectedIndex;
  var listaTiempo=document.formularioTiempo.listaTiempo1[indice].value;

  var indice2=document.formularioInteres.listaInteres1.selectedIndex;
  var listaInteres=document.formularioInteres.listaInteres1[indice2].value;

  if (vCapital>0)
  {
    if (listaInteres=='anual')
    {
      if (listaTiempo=='años')
      {anual_años(vCapital,vTasa,vTiempo);}
      else if (listaTiempo=='meses')
      {  anual_meses(vCapital,vTasa,vTiempo);}
      else if (listaTiempo=='dias')
      {anual_dias(vCapital,vTasa,vTiempo);}

    }
    else if (listaInteres=='mensual')
    {
      vTasa=vTasa*12;
      if (listaTiempo=='años')
      {anual_años(vCapital,vTasa,vTiempo);}
      else if (listaTiempo=='meses')
      {  anual_meses(vCapital,vTasa,vTiempo);}
      else if (listaTiempo=='dias')
      {anual_dias(vCapital,vTasa,vTiempo);  }
    }
    else if (listaInteres!='anual' && listaInteres!='') {
      alert('Debes seleccionar un tipo de Interés');
    }

  else
  {
    alert('No hay valor escrito en el Capital');
  }
 }


    if (listaTiempo) {

    }
}

function anual_años(capital,tasa,time)
{
  var tasaConver=1+(tasa/100);
  var elevado = Math.pow(tasaConver,time);
  var interes=capital*(elevado);
  resultado1.value=interes;
  console.log('ejecutando anual-año');
}

function anual_meses(capital,tasa,time)
{
  var tasaConver=1+(tasa/100);
  var timeMes=time/12;
  var elevado = Math.pow(tasaConver,timeMes);
  var interes=capital*(elevado);
  resultado1.value=interes;
  console.log('ejecutando anual-,mes');
}
function anual_dias(capital,tasa,time)
{
  var tasaConver=1+(tasa/100);
  var timeMes=time/365;
  var elevado = Math.pow(tasaConver,timeMes);
  var interes=capital*(elevado);
  resultado1.value=interes;
  console.log('ejecutando anual-dias');
}
function mensual_años()
{

}
