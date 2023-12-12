const paragraphs = document.querySelectorAll('p')

console.log (paragraphs)


paragraphs.forEach(p => {
    currentContent=p.innerHTML
    p.innerHTML= "jjjj" + currentContent + "llllls"
    
})