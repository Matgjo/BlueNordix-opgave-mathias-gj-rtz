var div = document.getElementById('brodtekst'); /*Knap og "Brodtekst" div forsvinder ved tryk på knap*/
var display =0;

function hideshow()
{
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }

    else
    {
        div.style.display = 'none';
        display = 1; 
    }
}