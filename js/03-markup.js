const profile = {
    name: 'Viktor Korenkov',
    tag: 'v_korenkov',
    location: 'Kiev, Ukraine',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/US_40.svg/2048px-US_40.svg.png',
    stats: {
        followers: 5000,
        views: 4000,
        likes: 1000,
    },
};

const makeProfileMarkup = function (userProfile) {
    const {
        avatar = '',
        name,
        tag,
        location = 'Planet Earth',
        stats: { followers, views, likes }
    } = userProfile;


    return `<div>
    <img scr="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
        <li>followers: ${followers}</li>
        <li>views: ${views}</li>
        <li>likes: ${likes}</li>
    </ul>
    
    
    </div>
    `

};

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);