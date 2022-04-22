function flash_click(){
    flash = document.getElementById('flash_msg')
    flash.style.display = 'none'
}

function night__mode(){
    night = document.getElementById('night')
    html_code = night.innerHTML
    console.log(html_code);
    if (html_code == '<link rel="stylesheet" href="../static/styles/night.css">'){
        night.innerHTML = '';
        console.log(night.innerHTML);
    }
    else{
        night.innerHTML = '<link rel="stylesheet" href="../static/styles/night.css">';
    }
}
function night_mode(){
    console.log('hello');
    var night_darker = document.querySelectorAll('footer,.navbar,nav, header').style.background = '#f4f4f4 !important'
    var night_lighter = document.querySelector('.bg')
    var font = document.querySelectorAll('*')

    console.log(night_darker, night_lighter, font);

    night_darker.style.background = '#767676 !important'
    night_lighter.style.background = '#f4f4f4 !important'
    font.style.background = '#242424'
}

const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});