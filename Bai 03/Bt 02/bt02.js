var http = require('http');

http.createServer(function (req, res) {
  var path = req.url;

  if (path === '/' || path === '') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Trang chủ (Home)</h1>');
    res.write('<p>Lời chào: Xin chào đến web Node.js!</p>');
    res.write('<p>Mã sinh viên: <b>[CĐ-CNTT18A]</b></p>');
    res.end();
  } 
  else if (path === '/about') {
    // Thiết lập HTTP header trả về trang giới thiệu
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Giới thiệu bản thân</h1>');
    res.write('<p>Họ và tên: Đỗ Chí Đức</p>');
    res.write('<p>Lớp: CĐ-CNTT18A</p>');
    res.write('<p>Trường Cao đẳng Kỹ thuật Công Nghệ Nha Trang</p>');
    res.end();
  } 
  else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>404 Not Found</h1>');
    res.write('<p>Đường dẫn bạn truy cập không tồn tại trên hệ thống.</p>');
    res.end();
  }

}).listen(3000);

console.log('Server đang chạy tại địa chỉ: http://localhost:3000');
