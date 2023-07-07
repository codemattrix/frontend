
function Total(){
    // e.preventDefault();
    let Price=document.getElementById('price').value;
    let Gst=document.getElementById('gst').value;
    let Gst_Price=Price * Gst
    let Total_Price=parseFloat(Price) * parseFloat(Gst_Price);
    console.log(Total_Price);
    document.getElementById('result').value =Total_Price;
}