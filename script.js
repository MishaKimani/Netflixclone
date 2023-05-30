const parentdiv=document.querySelector('.faq')

parentdiv.addEventListener('click', function(e)
{const childdiv= e.target.querySelector('.childdiv')
if (e.target.tagName==='DIV') {
    childdiv.classList.toggle('hidden')
}})