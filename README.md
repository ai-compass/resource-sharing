base [vue3-h5-template](https://github.com/yulimchen/vue3-h5-template)

ui base [vant](https://vant-ui.github.io/vant/#/zh-CN/home)

# nginx
sudo yum install nginx

项目打包后放在

/var/www/res-sharing/dist


编辑 Nginx 配置文件（通常位于 /etc/nginx/nginx.conf中）：

sudo nano /etc/nginx/nginx.conf


server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/my-vue-app;
        try_files $uri $uri/ /index.html;
    }
}
