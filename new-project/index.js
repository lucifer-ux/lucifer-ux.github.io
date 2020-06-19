// const contentHere = document.getElementById('preview');
// let markupArea = document.getElementById('editor');

// markupArea.value = localStorage.markupValue;


const typed = () => {
    document.getElementById('preview').innerHTML=marked(document.getElementById('editor').value);

    
};

typed();
