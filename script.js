const parentdiv=document.querySelector('.parentdiv')

parentdiv.addEventListener('click' ,function(event){if (event.target.tagName==='P') 
{const childdiv=document.querySelectorAll('childdiv')
childdiv.classlist.toggle('hidden')
}})