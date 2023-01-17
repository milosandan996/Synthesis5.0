
//Komatsu 380WA

let question = prompt('Unesite lozinku');

if (question === 'lepigale') {
    alert('WELCOME');

} else {
    window.location.href = 'https://sljunkarasynthesis.rs';
}

$('.category-menu').on('click', '.toggle-submenu', function (e) {
    e.preventDefault();
    $(this).toggleClass('fa-plus fa-minus');
    $(this).parent().next('.category-submenu').slideToggle(300);
});

