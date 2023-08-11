const selectWeb = document.querySelector('.selectWeb')
const selectNet = document.querySelector('.selectNet')

selectWeb.addEventListener('click',function(e){

    e.preventDefault();
    selectWeb.innerHTML = `<div style="background:red;">WEBTECH</div>`
})