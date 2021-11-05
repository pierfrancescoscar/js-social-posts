// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

// 1. Creiamo il nostro array di 5 oggetti

const socialPost = [

    {
        authorName: 'Red Hot Chili Peppers',
        profilePic: 'https://static.posters.cz/image/750/poster/red-hot-chili-peppers-logo-i4622.jpg',
        date: '1983 - today',
        postTxt: '“Destruction leads to a very rough road, but it also breeds creation.”',
        postPic: 'https://dynamicmedia.livenationinternational.com/Media/m/n/i/4dbe418e-e9e1-4fee-bf4b-28abbe2ca452.jpg?auto=webp&width=1507.2',
        likesNum: 95,

    },

    {
        authorName: 'Arctic Monkeys',
        profilePic: 'https://seeklogo.com/images/A/arctic-monkeys-logo-9E45743690-seeklogo.com.png',
        date: '2002 - today',
        postTxt: '“Great escape lost track of time and space/ She’s a silver lining climbing on my desire”',
        postPic: 'https://www.ondarock.it/images/monografie/arcticmonkeys_1_1378458269.jpg',
        likesNum: 105,

    },

    {
        authorName: 'Oasis',
        profilePic: 'https://m.media-amazon.com/images/I/813HkSh1HnL._AC_SX425_.jpg',
        date: '1991 - 2009',
        postTxt: 'I need to be myself. I cant be no one else. Im feeling supersonic. Give me gin & tonic.',
        postPic: 'https://www.ondarock.it/images/monografie/oasis_1349113670.jpg',
        likesNum: 100,

    },

    {
        authorName: 'The Killers',
        profilePic: 'https://www.impericon.com/780x240x85/media/impericon/header/merchandise/the_killers/20190227_the_killers_mobile@2x.jpg',
        date: '2001 - today',
        postTxt: '"Don’t you wanna come with me? / Don’t you wanna feel my bones / On your bones?"',
        postPic: 'https://i0.wp.com/notiziarioestero.com/wp-content/uploads/2021/09/The-Killers-dal-Nevada-con-furore.jpg?fit=2000%2C1268&ssl=1',
        likesNum: 100,

    },

    {
        authorName: 'Bob Dylan',
        profilePic: 'https://logodix.com/logo/764035.jpg',
        date: '1959 - today',
        postTxt: 'Behind every beautiful thing, there is some kind of pain.',
        postPic: 'https://style.corriere.it/wp-content/uploads/2021/05/bob-dylan-80-anni.jpg',
        likesNum: 50,

    },
    
    ];

    console.log(socialPost);

    // 2. Stampare le card con evocazione funzione

    const cardContainer = document.querySelector('.posts-list');

    cardGenerator(socialPost, cardContainer);
    

    // Creo la funzione per stampare le card
    function cardGenerator (socialPost, cardContainer) {
        
        // Loop cycle to generate cards

        for (let i = 0; i < socialPost.length; i++) {

            const cardItem = socialPost[i];

            cardContainer.innerHTML += `
                <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${cardItem.profilePic}" alt="${cardItem.authorName}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${cardItem.authorName}</div>
                            <div class="post-meta__time">${cardItem.date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${cardItem.postTxt}</div>
                <div class="post__image">
                    <img src="${cardItem.postPic}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${cardItem.likesNum}</b> persone
                        </div>
                    </div> 
                </div>
                </div>`
        }

    }