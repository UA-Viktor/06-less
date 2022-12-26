// const playlist = {
//     name: 'My Playlist',
//     rating: 5,
//     tracks: ['Track1', 'Track2', 'Track3'],
//     trackCount: 3,
// };

// // console.log(
// //     playlist.name,
// //     playlist.rating,
// //     playlist.tracks,
// //     playlist.trackCount,
// // );

// const {name, rating, tracks, trackCount = 10} = playlist; // Можно установить ДЕФОЛТНОЕ значение
// console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);

// const {
//     name,
//     rating,
//     tracks,
//     trackCount: numberOfTracks,
//     author = 'user',
// } = playlist;

// console.log(numberOfTracks);
    









// //  Грубая деструктуризация
// const profile = {
//     name: 'Viktor Korenkov',
//     tag: 'v_korenkov',
//     location: 'Kiev, Ukraine',
//     avatar: 'foto.jpg',
//     stats: {
//         followers: 5000,
//         views: 4000,
//         likes: 1000,
//     },
// };

// const { name, tag, location, avatar, stats: {followers, views, likes } } = profile;

// console.log(

//     name,
//     tag,
//     location,
//     avatar,
//     followers,
//     views,
//     likes,

// );







// // Деструктуризация массивов
// const rgb = [255, 100, 80];

// const [a, b, c] = rgb;
// console.log(a, b, c);





// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// const entries = Object.entries(authors);
// for (const [name, rating] of entries) {
//     console.log(name, rating);
// }





// Операция Rest (сбор)
// const profile = {
//     name: 'Viktor Korenkov',
//     tag: 'v_korenkov',
//     location: 'Kiev, Ukraine',
//     avatar: 'foto.jpg',
//     stats: {
//         followers: 5000,
//         views: 4000,
//         likes: 1000,
//     },
// };


// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);







// Паттерн "Объект настроек"

const showProfileInfo = function (userProfile) {
    const {
        name,
        tag,
        location,
        avatar,
        stats: { followers, views, likes } }
        = userProfile;
    console.log(name, tag, location, avatar, followers, views, likes);
}


const profile = {
    name: 'Viktor Korenkov',
    tag: 'v_korenkov',
    location: 'Kiev, Ukraine',
    avatar: 'foto.jpg',
    stats: {
        followers: 5000,
        views: 4000,
        likes: 1000,
    },
};

showProfileInfo(profile);