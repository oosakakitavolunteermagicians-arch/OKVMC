const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;

    // ページ切り替え
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    // メニューのアクティブ状態
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
