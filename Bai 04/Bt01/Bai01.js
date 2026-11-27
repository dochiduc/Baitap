const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Hàm render layout HTML chung kèm CSS và thanh menu điều hướng
function renderPage({ title, activePath, content }) {
  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/about', label: 'Giới thiệu' },
    { path: '/skills', label: 'Kỹ năng' },
    { path: '/hobbies', label: 'Sở thích' },
    { path: '/contact', label: 'Liên hệ' }
  ];

  const navHtml = navItems
    .map(
      (item) =>
        `<a href="${item.path}" class="nav-link ${activePath === item.path ? 'active' : ''}">${item.label}</a>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Personal Express Site</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: #f4f6f9;
      color: #1f2937;
      line-height: 1.6;
    }
    header {
      background: #111827;
      color: #fff;
      padding: 16px 0;
      box-shadow: 0 2px 6px rgba(0,0,0,0.12);
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .brand {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #38bdf8;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .nav-link {
      color: #e5e7eb;
      text-decoration: none;
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 0.95rem;
      transition: background 0.2s, color 0.2s;
    }
    .nav-link:hover {
      background: #1f2937;
      color: #38bdf8;
    }
    .nav-link.active {
      background: #0284c7;
      color: #fff;
    }
    main {
      margin: 30px auto;
      background: #fff;
      padding: 28px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    }
    h1 {
      font-size: 1.75rem;
      margin-bottom: 14px;
      color: #0f172a;
    }
    p { margin-bottom: 12px; }
    ul { margin: 12px 0 16px 22px; }
    li { margin-bottom: 6px; }
    .badge {
      display: inline-block;
      background: #e0f2fe;
      color: #0369a1;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-right: 6px;
      margin-bottom: 8px;
    }
    form {
      display: grid;
      gap: 12px;
      max-width: 520px;
      margin-top: 12px;
    }
    input, textarea {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 0.95rem;
    }
    button {
      width: fit-content;
      background: #0284c7;
      color: #fff;
      border: none;
      padding: 10px 18px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    }
    button:hover { background: #0369a1; }
    .error-box {
      border-left: 4px solid #ef4444;
      background: #fef2f2;
      padding: 16px;
      border-radius: 6px;
    }
    .btn-home {
      display: inline-block;
      margin-top: 12px;
      text-decoration: none;
      color: #0284c7;
      font-weight: 600;
    }
    footer {
      text-align: center;
      color: #6b7280;
      font-size: 0.85rem;
      padding: 20px 0 32px;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div class="brand">Express Portfolio Web</div>
      <nav>${navHtml}</nav>
    </div>
  </header>

  <main class="container">
    ${content}
  </main>

  <footer>
    Bài thực hành Node.js & Express Framework
  </footer>
</body>
</html>`;
}

// Route /
app.get('/', (req, res) => {
  res.send(
    renderPage({
      title: 'Trang chủ',
      activePath: '/',
      content: `
        <h1>Xin chào! Chào mừng đến với trang web cá nhân</h1>
        <p>Ứng dụng được xây dựng bằng <strong>Node.js</strong> và <strong>Express Framework</strong>, phục vụ các trang thông tin cá nhân cơ bản.</p>
        <p>Sử dụng thanh điều hướng phía trên để xem phần Giới thiệu, Kỹ năng, Sở thích và Liên hệ.</p>
      `
    })
  );
});

// Route /about
app.get('/about', (req, res) => {
  res.send(
    renderPage({
      title: 'Giới thiệu',
      activePath: '/about',
      content: `
        <h1>Giới thiệu bản thân</h1>
        <p>Tôi là sinh viên ngành Công nghệ thông tin tại Nha Trang, đang rèn luyện kỹ năng phát triển phần mềm web, ứng dụng di động và quản trị cơ sở dữ liệu.</p>
        <p>Mục tiêu của tôi là xây dựng các hệ thống ổn định, rõ ràng về kiến trúc và tối ưu trải nghiệm người dùng.</p>
      `
    })
  );
});

// Route /skills
app.get('/skills', (req, res) => {
  res.send(
    renderPage({
      title: 'Kỹ năng',
      activePath: '/skills',
      content: `
        <h1>Kỹ năng chuyên môn</h1>
        <div>
          <span class="badge">Node.js / Express</span>
          <span class="badge">C# / .NET / WPF</span>
          <span class="badge">Python / Django</span>
          <span class="badge">React Native</span>
          <span class="badge">SQL Server / MongoDB</span>
        </div>
        <ul>
          <li><strong>Backend & API:</strong> Xây dựng server, RESTful API, xử lý định tuyến và thao tác cơ sở dữ liệu.</li>
          <li><strong>Frontend & Mobile:</strong> Thiết kế giao diện responsive, ứng dụng đa màn hình với React Native.</li>
          <li><strong>Công cụ & Thiết kế:</strong> Git/GitHub, Visual Studio / VS Code, Illustrator & Photoshop.</li>
        </ul>
      `
    })
  );
});

// Route /hobbies
app.get('/hobbies', (req, res) => {
  res.send(
    renderPage({
      title: 'Sở thích',
      activePath: '/hobbies',
      content: `
        <h1>Sở thích cá nhân</h1>
        <ul>
          <li>Lắp ráp, sơn airbrush và tùy biến mô hình nhựa.</li>
          <li>Đọc truyện, xem phim khoa học viễn tưởng / mecha và viết truyện sáng tác.</li>
          <li>Chơi game chiến thuật, nhập vai và tìm hiểu cơ chế thiết kế màn chơi.</li>
        </ul>
      `
    })
  );
});

// Route /contact (GET & POST)
app.get('/contact', (req, res) => {
  res.send(
    renderPage({
      title: 'Liên hệ',
      activePath: '/contact',
      content: `
        <h1>Liên hệ</h1>
        <p>Gửi lời nhắn trực tiếp qua biểu mẫu dưới đây:</p>
        <form method="POST" action="/contact">
          <input type="text" name="fullname" placeholder="Họ và tên" required />
          <input type="email" name="email" placeholder="Email của bạn" required />
          <textarea name="message" rows="4" placeholder="Nội dung lời nhắn..." required></textarea>
          <button type="submit">Gửi liên hệ</button>
        </form>
      `
    })
  );
});

app.post('/contact', (req, res) => {
  const { fullname, email, message } = req.body;
  res.send(
    renderPage({
      title: 'Đã gửi liên hệ',
      activePath: '/contact',
      content: `
        <h1>Đã nhận lời nhắn</h1>
        <p>Cảm ơn <strong>${fullname}</strong> (<code>${email}</code>) đã liên hệ.</p>
        <p><strong>Nội dung:</strong> ${message}</p>
        <a class="btn-home" href="/contact">← Quay lại trang Liên hệ</a>
      `
    })
  );
});

// Xử lý đường dẫn không tồn tại (HTTP 404) - đặt cuối cùng sau mọi route
app.use((req, res) => {
  res.status(404).send(
    renderPage({
      title: '404 - Không tìm thấy trang',
      activePath: '',
      content: `
        <div class="error-box">
          <h1>404 - Không tìm thấy đường dẫn</h1>
          <p>Đường dẫn <code>${req.originalUrl}</code> không tồn tại trên hệ thống.</p>
          <a class="btn-home" href="/">← Về trang chủ</a>
        </div>
      `
    })
  );
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
