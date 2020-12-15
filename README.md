# shop
简历项目：自设计便利店网站—用于找工作（迭代思路：for（完善？）{面试-发现不足-学习-项目完善}-最终上线））

在找到工作后改为学习项目，进行移动开发/微信开发/混合app开发/android开发等  

---------------------------2020-12-15更新--------------------------------------------

以完成内容：1.页面的element-ui+axios重写完成。 2.上线准备完成（个人备案中）3.webpack重构完成  
项目说明：work文件夹下server.js为本地后端node服务器文件，通过local：3200访问，serve1.js为centos云服务器使用，域名备案中。shop.sql为数据库文件，vuework为前端工作区，因此有多个package存在  

现有问题：

1.element-ui不支持最新vue，使用element按钮会有attr/listeners错误  
2.页面远程加载速度过慢（域名备案中）  
后续方向：  
1.完善页面逻辑  
2.移动端适配  
3.后续页面开发（注册/后台/商品单页）  
4.加载优化  
当前页面效果图：  
![image](https://github.com/yt-fool/shop/blob/master/img2.jpg)   

 ---------------------------------------------------- 2020年11月12日更新-------------------  
 项目效果图：  
![image](https://github.com/yt-fool/shop/blob/master/img1.png)    
                                                        【具备问题】        
1.存在bug（数量按钮联动购物车点击减少时会出现购物车-商品组件错乱问题）    
2.设计错误（购物车不应该固定在右下角）  
3.开发失误（因为想尝试新东西而使用了vh/vw单位，这在简历中是减分点，应更换为古老px值）  

                                                   【项目完善初步构想】
1.具备三个页面{1.首页：对现有首页进行重构  2。注册登录页（由于个人没法申请支付接口，采用初始值方式模拟交易）  3.管理后台页（用于商品增删改查，最好加入数据分析——什么商品最好卖等）}   
3.进行相关优化补充  

                                                  【计划（优先级排序）】
1.首页重新设计，并用elementUI，vue-rouder，axios，vuex进行代码重构  
2.注册页开发  
3.后台页开发  
3.浏览器差异优化+webpack  
4.修复bug  
5.浏览器性能优化  
6.购买域名上线个人网站  
7尝试js算法优化  
                                                     

