import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Target container 'root' not found.");
}

/**
 * SEO 镜像替换机制：
 * 浏览器加载 HTML 时先显示预渲染的静态内容（提升 LCP 和 SEO）。
 * React 加载后执行 render，接管应用交互。
 */
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);