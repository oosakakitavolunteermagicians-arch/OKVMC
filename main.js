// アコーディオン
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('open');
  });
});

const pages = document.querySelectorAll('.page');
const main = document.getElementById('main');
const mobileMenu = document.getElementById('mobile-menu');

function switchPage(target) {
  // ページ切り替え
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(target).classList.add('active');

  // 全nav-linkのactive更新（サイドバー＋モバイルメニュー）
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.target === target);
  });

  // TOPページ時は#mainのパディングを除去
  main.classList.toggle('top-active', target === 'page-top');
}

// 初期状態
switchPage('page-top');

// nav-linkクリック
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    switchPage(link.dataset.target);
    mobileMenu.classList.remove('open');
  });
});

// ハンバーガーメニュー
document.getElementById('hamburger').addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

document.getElementById('menu-close').addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});
