// 章節資料
		const chapters = [
  { text: "序幕", href: "index.html" },
  {
    text: "卷一",
    opener: true,
    children: [
      { text: "前言:關於嗶嗶小馬和可愛標誌", href: "prologue.html" },
    //   { text: "第一章:", href: "#" },
    //   { text: "第二章:", href: "#" },
    //   { text: "第三章:", href: "#" },
    //   { text: "第四章:", href: "#" },
    ]
  },
//   {
//     text: "卷二",
//     opener: true,
//     children: [
//       { text: "前言", href: "#" },
//       { text: "第一章", href: "#" },
//       { text: "第二章", href: "#" },
//       { text: "第三章", href: "#" },
//       { text: "第四章", href: "#" }
//     ]
//   },
];

// 生成章節目錄
function createChapterList(list, data) {
  data.forEach(item => {
    const li = document.createElement('li');
    if (item.opener) {
      const span = document.createElement('span');
      span.className = 'opener';
      span.textContent = item.text;
      li.appendChild(span);
      if (item.children) {
        const ul = document.createElement('ul');
        ul.style.display = 'none'; // 預設收起
        createChapterList(ul, item.children);
        li.appendChild(ul);

        // opener 點擊展開/收起
        span.addEventListener('click', function(e) {
          e.preventDefault();
          // 切換 active 樣式
          span.classList.toggle('active');
          // 切換子清單顯示
          if (ul.style.display === 'none') {
            ul.style.display = 'block';
          } else {
            ul.style.display = 'none';
          }
        });
      }
    } else {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
    }
    list.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const chapterList = document.getElementById('chapter-list');
  if (chapterList) createChapterList(chapterList, chapters);
});


// talk to us
document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.getElementById('contact-section');
  if (contactSection) {
    contactSection.innerHTML = `
      <header class="major">
        <h2>與我們聊聊</h2>
      </header>
      <p>無論是關於翻譯內容、網站錯誤、合作邀請，或只是想跟我們聊聊小馬與廢土世界，都歡迎來信！我們會盡快回覆你的訊息，一起讓《輻射小馬國》在繁體中文世界繼續閃耀光芒。</p>
      <ul class="contact">
        <li class="icon solid fa-envelope"><a href="mailto:needleplush@gmail.com" target="_self">needleplush@gmail.com</a></li>
      </ul>
    `;
  }
});

// 章節導航功能
document.addEventListener('DOMContentLoaded', function() {
  // 定義所有章節的 href（展平）
  function flattenChapters(data, arr = []) {
    data.forEach(item => {
      if (item.href) arr.push({ text: item.text, href: item.href });
      if (item.children) flattenChapters(item.children, arr);
    });
    return arr;
  }
  const flatChapters = flattenChapters(chapters);

  // 取得目前頁面檔名
  const currentPath = window.location.pathname.split('/').pop();

  // 找到目前章節的 index
  const currentIndex = flatChapters.findIndex(c => c.href === currentPath);

  // 將導航按鈕插入到 .chapter-navigation
  const navDiv = document.querySelector('.chapter-navigation');
  if (navDiv && currentIndex !== -1) {
    // 上一章
    const prevBtn = document.getElementById('prevChapter');
    if (prevBtn) {
      if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = function() {
          window.location.href = flatChapters[currentIndex - 1].href;
        };
      } else {
        prevBtn.disabled = true;
      }
    }
    // 下一章
    const nextBtn = document.getElementById('nextChapter');
    if (nextBtn) {
      if (currentIndex < flatChapters.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = function() {
          window.location.href = flatChapters[currentIndex + 1].href;
        };
      } else {
        nextBtn.disabled = true;
      }
    }
  }
});