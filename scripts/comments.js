const sendCommentForm = document.querySelector('#sendCommentForm'),
      sendCommentInput = sendCommentForm.querySelector('input[type="text"]'),
      commentsContent = document.querySelector('.comments__content'),
      commentsCounter = document.querySelector('#comments-counter');

const currentUser = {
    userName: 'Alexey Arestovich',
    userImage: '../assets/img/users__media/user-3.webp',
};

const commentsDB = [
        {
            userName: 'John Doe',
            userImage: '../assets/img/users__media/user-1.webp',
            userResponse: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                       doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                       veritatis et quasi architecto beatae vitae dicta sunt explicabo!`,
        },
        {
            userName: 'Jane Doe',
            userImage: '../assets/img/users__media/user-2.webp',
            userResponse: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                           doloremque.`,
        },
        {
            userName: currentUser.userName,
            userImage: currentUser.userImage,
            userResponse: `Hi all!`,
        },
        {
            userName: currentUser.userName,
            userImage: currentUser.userImage,
            userResponse: `@Jane Doe, don't worry... Just a couple more weeks and it'll be over`,
        },

    ];

function uploadComments() {
    let counter = 0;
    commentsContent.innerHTML = '';

    for (const obj of commentsDB) {
        counter++;

        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment')
        commentContainer.classList.add('user-comment');
    
        commentContainer.innerHTML = `
            <div class="comment__user-photo user-photo">
                <img src="${obj.userImage}" alt="User Photo">
            </div>
            <div class="comment__user-name user-name">
                <h6>${obj.userName}</h6>
            </div>
            <div class="comment__user-response user-response">
                <p>${obj.userResponse}</p>
            </div>
            <div class="comment__reply-btn article__comment-btn">
                <button>Reply</button>
            </div>
        `;

        commentsContent.insertAdjacentElement('beforeend', commentContainer);

        commentsCounter.innerText = counter;
    }

    document.querySelectorAll('.comment__reply-btn button').forEach(el => {
        el.addEventListener('click', (e) => {
            return replyToUser(e.target);
        });
    });

    return;
}

document.addEventListener('DOMContentLoaded', uploadComments);


function addNewComment(callback) {
    commentsDB.push({
        userName: currentUser.userName,
        userImage: currentUser.userImage,
        userResponse: sendCommentInput.value,
    });

    sendCommentForm.reset();

    return callback();
}

sendCommentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    return addNewComment(uploadComments);
});


function replyToUser(replyBtn) {
    const toUserName = replyBtn.parentNode.parentNode.children[1].children[0].innerText;
    const replyText = sendCommentInput.value;
    sendCommentInput.value = `@ ${toUserName}, ${replyText}`;
}




