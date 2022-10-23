function app()
{
   let canvas = document.getElementById('lienzo');   

   /*Atributos del canvas*/
   canvas.setAttribute('width',500);
   canvas.setAttribute('height',500);
   /* Estilos al canvas*/
   canvas.style.border = "solid 2px black";
   canvas.style.backgroundColor ="#464857";
   /*Contexto del canvas*/
   const ctx = canvas.getContext("2d");

   /*objeto del juego del gato*/
   const gato =
   {
      regilla: function ()
      {
        var V1 = 100;
        var V2 = 500;

        ctx.strokeStyle = "black";

        for (var n = 0; n < 4; n++) 
        {
            ctx.setLineDash([5, 10]);

            ctx.beginPath();
            ctx.moveTo(0, V1);
            ctx.lineTo(500, V1);
            ctx.stroke(); 

            ctx.beginPath();
            ctx.moveTo(V1, 0);
            ctx.lineTo(V1,V2);
            ctx.stroke();

            V1 = V1 + 100;
        }

      },
      escenario: function ()
      {
        var trazo = 200;

        for (a = 0; a < 2; a++)
        {

            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.strokeStyle = "#f50c0c";
            ctx.lineWidth = 3;
            ctx.moveTo(400, trazo);
            ctx.lineTo(100, trazo);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = "#f50c0c";
            ctx.lineWidth = 3;
            ctx.moveTo(trazo, 100);
            ctx.lineTo(trazo, 400);
            ctx.stroke();

            trazo = trazo + 100;

        }

      
      },

    seleccionar: function(e)
    {
    var x = e.offsetX;
    var y = e.offsetY;

    var img = new Image();
    img.src = "./RunningTom.png"

    var coordenadas = document.getElementById("coordenada");
    coordenadas.style.border = "1px solid black";
    coordenadas.style.backgroundColor ="lightcyan";
    coordenadas.innerHTML =`${x}, ${y}`;

    if(x > 100 && x<200 && y > 100 && y < 200)
    {
      ctx.drawImage(img,105,105,90,90);
    }
    if(x > 200 && x<300 &&  y > 100 && y < 200)
    {
      ctx.drawImage(img,205,105,90,90);
    }
    if(x > 300 && x< 400 && y > 100  && y < 200)
    {
      ctx.drawImage(img,305,105,90,90);
    }
    if(x > 100 && x < 200 && y > 200 && y < 300)
    {
      ctx.drawImage(img,105,205,90,90);
    }
    if(x > 200 && x < 300 && y > 200 && y < 300)
    {
      ctx.drawImage(img,205,205,90,90);
    }
    if(x > 300 && x < 400 && y > 200 && y < 300)
    {
      ctx.drawImage(img,305,205,90,90);
    }
    if(x > 100 && x < 200 && y > 300 && y < 400)
    {
      ctx.drawImage(img,105,305,90,90);
    }
    if(x > 200 && x < 300 && y > 300 && y < 400)
    {
      ctx.drawImage(img,205,305,90,90);
    }
    if(x > 300 && x < 400 && y > 300 && y < 400)
    {
      ctx.drawImage(img,305,305,90,90);
    }


    },

    play:function(pintarRegilla = false)
    {
      if(pintarRegilla)
         this.regilla();
         this.escenario();
    }

   }
   canvas.addEventListener("mousemove",gato.seleccionar);
   gato.play(true);
}

window.onload = function() 
{
  app();
  
}


