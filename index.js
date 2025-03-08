const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// 设置静态文件目录
app.use(express.static(path.join(__dirname)));

// 路由处理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// 处理 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});