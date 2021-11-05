// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

// 1. Creiamo il nostro array di 5 oggetti

const socialPost = [

    {
        authorName: 'Pierfrancesco Scarinci',
        profilePic: 'https://picsum.photos/seed/picsum/200/300',
        date: '2 Gennaio 1995',
        postTxt: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        postPic: 'https://picsum.photos/seed/picsum/200/300',
        likesNum: 95,

    },

    {
        authorName: 'Pietro Scaringi',
        profilePic: 'https://picsum.photos/seed/picsum/200/300',
        date: '2 Gennaio 1995',
        postTxt: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        postPic: 'https://picsum.photos/seed/picsum/200/300',
        likesNum: 105,

    },

    {
        authorName: 'Pietrofranco Scarci',
        profilePic: 'https://picsum.photos/seed/picsum/200/300',
        date: '2 Gennaio 1995',
        postTxt: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        postPic: 'https://picsum.photos/seed/picsum/200/300',
        likesNum: 100,

    },

    {
        authorName: 'Piero Scarnici',
        profilePic: 'https://picsum.photos/seed/picsum/200/300',
        date: '2 Gennaio 1995',
        postTxt: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        postPic: 'https://picsum.photos/seed/picsum/200/300',
        likesNum: 100,

    },

    {
        authorName: 'Pietro Scarnigi',
        profilePic: 'https://picsum.photos/seed/picsum/200/300',
        date: '2 Gennaio 1995',
        postTxt: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        postPic: 'https://picsum.photos/seed/picsum/200/300',
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