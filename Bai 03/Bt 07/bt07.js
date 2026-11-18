const http = require('http');

// Khởi tạo HTTP Server tại cổng 3001
const server = http.createServer((req, res) => {
  // Sử dụng đối tượng URL để phân tích đường dẫn và query parameters
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.searchParams;

  // Thiết lập kiểu nội dung trả về là HTML hỗ trợ tiếng Việt UTF-8
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Xử lý route /hello
  if (pathname === '/hello') {
    const name = query.get('name');
    
    // Kiểm tra nếu thiếu tham số name
    if (!name) {
      res.writeHead(400);
      res.end('<h3>Lỗi: Thiếu tham số "name"! Vui lòng truyền vào, ví dụ: /hello?name=Minh</h3>');
    } else {
      res.writeHead(200);
      res.end(`<h1>Xin chào ${name}</h1>`);
    }
  } 
  // Xử lý route /sum
  else if (pathname === '/sum') {
    const aStr = query.get('a');
    const bStr = query.get('b');

    // Kiểm tra nếu thiếu tham số a hoặc b
    if (!aStr || !bStr) {
      res.writeHead(400);
      res.end('<h3>Lỗi: Thiếu tham số "a" hoặc "b"! Vui lòng truyền vào, ví dụ: /sum?a=10&b=20</h3>');
    } else {
      const a = parseFloat(aStr);
      const b = parseFloat(bStr);

      // Kiểm tra giá trị có phải là số hợp lệ không
      if (isNaN(a) || isNaN(b)) {
        res.writeHead(400);
        res.end('<h3>Lỗi: Giá trị của "a" hoặc "b" không phải là số hợp lệ!</h3>');
      } else {
        const sum = a + b;
        res.writeHead(200);
        res.end(`<h1>Tổng = ${sum}</h1>`);
      }
    }
  } 
  // Xử lý các đường dẫn không tồn tại
  else {
    res.writeHead(404);
    res.end('<h1>404 Not Found</h1><p>Đường dẫn không tồn tại trên hệ thống.</p>');
  }
});

// Lắng nghe tại cổng 3001
server.listen(3001, () => {
  console.log('Server đang chạy tại địa chỉ: http://localhost:3001');
});
