const $auth =  document.querySelector('.authorization')
const $profile = document.querySelector('.profile')
const $about = document.querySelector('.about')

const sections = [
    {section: 'authorization', value: 'Авторизация'},
    {section: 'profile', value: 'Профиль'},
    {section: 'about', value: 'Обо мне'},
];

const elements = [ $auth, $profile, $about ]

const $navigation = document.querySelector('.navigation');

sections.forEach( ( { section, value} ) => {
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('data-section', section);
    button.value = value;
    $navigation.append(button)
});

$navigation.addEventListener( 'click', (event) => {
    event.stopPropagation()
    let focus = event.target.getAttribute('data-section')
    elements.forEach( (item) => {
        if (item.className == focus){
            item.hidden = false
        } else {
            item.hidden = true
        }
    })
    console.log(focus)
})
