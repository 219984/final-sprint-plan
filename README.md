# 期末冲刺计划打卡页

手机优先设计的纯静态网页，无需安装依赖。直接上传以下三个文件即可部署：

- `index.html`
- `styles.css`
- `script.js`

## 本地预览

在当前目录运行：

```powershell
python -m http.server 8765
```

然后访问 `http://127.0.0.1:8765`。

## 数据说明

打卡记录、每日复盘和主题设置保存在浏览器 `localStorage` 中。同一设备、同一浏览器再次打开会自动恢复；清理浏览器数据或更换设备后不会自动同步。右上角下载按钮可导出一份 JSON 备份。

## 部署

这是标准静态站点，可直接部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify，或上传至域名对应服务器的网站根目录。
