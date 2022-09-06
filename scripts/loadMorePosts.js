const loadMoreBtn = document.querySelector('#loadMoreBtn'),
      morePostsContainer = document.querySelector('#morePostsContainer');

loadMoreBtn.addEventListener('click', () => {
    morePostsContainer.insertAdjacentHTML('beforeend', `
    <article class="article img-article">
        <div class="article__img article__img-M">
            <img src="assets/img/articles__media/article-5.webp" alt="Music festival">
        </div>
        <div class="article__category">
            <a href="#">Lifestyle</a>
        </div>
        <div class="article__headline">
            <h2>More than just a music festival</h2>
        </div>
        <div class="article__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
    </article>
    `);
    morePostsContainer.insertAdjacentHTML('beforeend', `
    <article class="article img-article">
        <div class="article__img article__img-M">
            <img src="assets/img/articles__media/article-6.webp" alt="Music festival">
        </div>
        <div class="article__category">
            <a href="#">Lifestyle</a>
        </div>
        <div class="article__headline">
            <h2>Life tastes better with coffee</h2>
        </div>
        <div class="article__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
    </article>
    `);
});