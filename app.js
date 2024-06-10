let acordion = document.querySelector('.acordion')
Array.from(acordion.children).forEach((wrapper) => {
    if(wrapper.classList.contains('show')){
        wrapper.querySelector('div').style.maxHeight = wrapper.querySelector('div').scrollHeight + 30 + 'px';
    }
    wrapper.querySelector('span').addEventListener('click', (e) =>{
        let span = e.target;
        let wrapper = span.parentElement;
        wrapper.classList.toggle('show');
        let div = span.nextElementSibling
        if(wrapper.classList.contains('show')){
            div.style.maxHeight = div.scrollHeight + 30 + 'px';
        }
        else{
            div.style.maxHeight = null;
        }
        Array.from(acordion.children).forEach((w) =>{
            if(w != wrapper){
                w.classList.remove('show');
                w.querySelector('div').style.maxHeight = null;
            }
        })
    })
})