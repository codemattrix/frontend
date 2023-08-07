let no=document.querySelector('#no');/* left side*/
let yes=document.querySelector('#yes');

let addBtn=document.querySelector('#add');
let removeBtn=document.querySelector('#remove');

addBtn.addEventListener('click',function(e){
    // alert('hi i am here');
    e.preventDefault();
    let selOpt=document.querySelectorAll('#no option:checked');
    console.log('selected option=',selOpt);

    let exstOpt=document.querySelectorAll('#yes option');
    yes.replaceChildren(...selOpt,...exstOpt);

});
removeBtn.addEventListener('click',function(e){
    // alert(`hi an exiting`);
    e.preventDefault();
    let exstOpt=document.querySelectorAll('#yes option:checked');

    let selOpt=document.querySelectorAll('#no option');
    no.replaceChildren(...exstOpt,...selOpt);
});
