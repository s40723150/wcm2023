var tipuesearch = {"pages": [{'title': 'About', 'text': '本課程為網際內容管理, 每週上課三小時, 其中兩小時為教學時段, 另外一小時為學員實際操作與練習時段. 課程內容主要承接計算機程式課程中的 Brython 與 Python 初階 Programming 技術. 教導學員如何在 Windows 與 Linux 操作系統環境中搭建全球資訊網伺服器 (WWW Server), 如何建立個人與團隊網站, 以及如何利用 Replit 與自行安裝的 Windows 與 Linux 操作系統建立網際內容管理程式套件. \n 課程內容分為三部分: \n \n Brython  與 Python 程式 (建立個人  Github Pages  靜態網站與  Replit  上的動態網站) \n Windows 與 Linux 上的網站\xa0 ( Nginx  +  Stunnel  網站安裝與設定, 與個人動態與靜態網站結合) \n cmsimde  程式開發 (如何利用手機維護個人動態與靜態網站) \n \n 課程評量: 出席, 線上測驗, 協同專案與自我評量. \n 課程必備: USB 3.0 以上規格之隨身碟, 適用於電腦或手機之耳機. \n 課程選項配備: 電腦用麥克風與 Webcam. \n 本倉儲以  https://github.com/mdecycu/cmsite  作為 Template 複製, 倉儲位於  https://github.com/mdecycu/wcm2023 \n 課程靜態網頁:  https://mde.tw/wcm2023 \n MS Teams  (for @nfu users only) \n 網際內容管理在研究  https://github.com/mdecycu/cmsimde  網際內容管理系統. \n 本課程要求學員下載下載  portable_python_w10_nx_robodk.7z  (1.03 GB) 可攜 Python 程式系統, 解開壓縮後放入 USB 隨身碟. \n 行事曆 \n 全頁檢視 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Motivation', 'text': '學習網際內容管理的動機: \n 將數位內容放入 www 伺服器, 以方便維護管理及展示 \n 網際內容管理牽涉: \n \n 數位內容 - 以數位流程處理事務並建立對應內容 \n www 伺服器 - 以全球資訊網架構管理內容 - html, css, Javascript \n 維護管理 - Git, Repository, Web pages \n 展示 - Web browser oriented \n \n 教導或學習網際內容管理的過程, 必須自問學這東西有用嗎? 您自己(平時, 一直)使用嗎? \n 數位教材: \n 1999 How to be a star engineer ,  如何成為一位傑出的工程師  (for @nfu users only) \n 2023 Cloud Computing Technology  (for @nfu users only) \n 2021 Cloud Computing Basics  (for @nfu users only) \n', 'tags': '', 'url': 'Motivation.html'}, {'title': 'Stud', 'text': 'stud 是一台 Ubuntu server, 讓每一個用戶透過兩個 ports 共享 server\xa0 中所設置的外部與內部 ports. \n 其中以 9 開頭的 port 設定為內部 port,\xa0 而 8 開頭的 port 則用於外部連線. \n 當某一用戶誤用所分配的內部 port 時, 管理者就可以透過 lsof 指令找出該用戶, 並即時加以糾正. \n 又由於 8 開頭的外部 port 統一由管理者以 Stunnel 啟動並加以管控, 因此一般用戶產生誤用的情況只會發生在內部以 9 開頭的 port. \n 列出 Ubuntu 中 port 使用相關資訊: lsof -i :9123 \n lsof: list open files \n -i: selects the listing of files any of whose Internet address matches the address specified in i.\xa0 If no address is specified, this option selects the listing of all Internet and x.25 (HP-UX) network files.', 'tags': '', 'url': 'Stud.html'}, {'title': 'Ref', 'text': '2015 \n https://github.com/coursemdetw/2015wcm \n 2016 \n https://github.com/2015fallhw/wcmw13 \n https://github.com/2015fallhw/2016springwcm_final \n https://cadlab.mde.tw/post/ \n 2017 \n https://s40523144.github.io/2017springwcm_hw/blog/2017spring-mde-wcm.html \n 2018 \n https://github.com/scrum-3/wcms-scrum3 \n 2019 \n https://github.com/50733143/50733143.github.io \n https://www.youtube.com/watch?v=lPJGzHdpIOw \n https://github.com/scrum-1/wcm2019 \n https://scrum-1.github.io/wcm2019 \n 2020 \n https://gitter.im/mdecourse/wcm2020 \n https://50833106.github.io/wcmj2020 \n 2021 \n https://gitter.im/mdecourse/wcm2021 \n 2022 \n https://gitter.im/mdecourse/wcm2022 \n http://wcm.cycu.org:88/github/wcm2022_guide \xa0(for @nfu users only) \n wcm2022_1a_w13_part1.mp4  (29:06 Brython 環境, 在 Tetris 遊戲加入計分系統) \n wcm2022_1a_w13_part2.mp4  (18:26 Brython 基本程式與 Canvas 2D 動態繪圖程式編寫) \n wcm2022_5j_w13_part1.mp4  (29:25 cmsimde 維護與 Brython 靜態繪圖 (國旗) 介紹) \n wcm2022_5j_w13_part2.mp4  (44:17 Brython 環境設置與 html5 Canvas 介紹) \n wcm2022_1a_w14.mp4  (15:10 Brython 程式編寫) \n wcm2022_5j_w14.mp4  (25:45 Leo Editor 與線上 2D 繪圖編寫) \n wcm2022_5j_w16.mp4  (37:21 Tetris Brython 程式介紹) \n cp2022 計算機程式 site \n cad2022 電腦輔助設計與實習 site \n 下載\xa0 Win10_21H2.9_64BIT_CH.ISO  (5.5GB for @nfu users only) ( KMS ) \n 下載\xa0 Office_Pro_Plus_2016_64Ch.iso  (964MB for @nfu users only) ( KMS ) \n 行列輸入法: \n https://array30.misterfishup.com/tutorial-complete.html   \n 行列輸入法速探 \n', 'tags': '', 'url': 'Ref.html'}, {'title': 'WCM', 'text': "Web-based Content Management (網際內容管理) - 利用瀏覽器管理個人網站中的前端與後端內容稱為網際內容管理, 此網際指的是全球資訊網 (World Wide Web, WWW), 其中牽涉全球資訊網前端的程式與內容, 以及全球資訊網後端的程式與內容. \n 全球資訊網前端指的就是瀏覽器 (Web Browser), 其中首選為 Firefox 與 Waterfox, 其次為 Windows 環境中的 Edge, 最後若需要第四套瀏覽器, 才使用 Google Chrome. \n 全球資訊網後端址的就是 WWW Server, 本課程所使用的全球資訊網伺服器包括 serve Github Pages 的 Github 全球資訊網伺服器 (個人帳號 加上 github.io), 以及可自行配置安裝的 Nginx, 其次為了配合 Nginx 在 https 協定上的應用, 另外結合 Stunnel 與 Let's Encrypt 服務. \n", 'tags': '', 'url': 'WCM.html'}, {'title': '五專', 'text': 'w18 放假. \n 網際內容管理 - Web-based Content Management \n 課程目標: \n 看! 我把資料都存上雲端了. \n 就說根本不需要浪費紙, 可以全部在線上課! \n 電腦搬過來, 把它拆了! \n 請問: \n 您對電腦的了解有多少? 請整理與下列議題相關的內容, 並將資料放入個人的倉儲與網頁中. \n 請檢查一下與你現在用的這一台電腦有關的硬體與軟體資訊, 能把它拆開來看個仔細嗎? \n 主機板型號與規格, 支援 BIOS? 支援 UEFI? 什麼是 BIOS?\xa0 什麼是 UEFI? \n 電源供應器型號與規格 \n 中央處理器型號與規格 \n 記憶體規格 \n 配有水銀電池嗎? 功能是什麼? 電池壽命大概多久? \n 配有固態硬碟嗎? 什麼型號與規格? \n 光碟機型號與規格 \n 配有 sata 硬碟嗎? 什麼型號與規格? 硬碟採 MBR 或 GPT 分割? 什麼叫做硬碟分割? 什麼是 MBR? GPT? 硬碟採那種規格格式化? FAT32? NTFS? exFAT? \n 網路卡什麼品牌與規格? \n 防寫卡什麼品牌與規格? \n 操作系統版次? \n 裝了那些軟體? 如何分類? \n 這電腦能列印嗎? 需要列印嗎? \n 這電腦能當伺服器嗎? 什麼是伺服器? \n 這電腦能裝虛擬主機嗎? 什麼是虛擬主機? \n 學校提供哪些教育版的軟體套件? \n 系上提供哪些教育版的軟體套件? \n 哪些公司提供免費的工程用教育版套件? \n 關於這台電腦, 您還想知道什麼? \n 對了, 你們上學期已經修過 計算機概論 (Introduction to Computers)  了, 而下學期將修 計算機程式  (Computer Programming) ,\xa0 那麼 \n 從 計算機概論 -> 網際內容管理 (Web-based Content Management) ->  計算機程式 , 這三門與電腦及網路有關的課程, 到底希望傳達什麼樣的知識?了解這些課程的內涵, 未來到底能用來做什麼? \n 輸入(設定) -> 電腦 + 網路 -> 輸出(結果) \n 電腦 ＋ 網路 可以接受那些輸入, 會產生那些輸出? \n 台大電機系大一 計算機概論 課程 \n 清大資工 計算機網路概論 課程 \n 交大 計算機概論與程式設計 課程 \n MIT  introduction to computer science and programming in Python  course \n Stanford  Introduction to Computers  course \n Kenya Anin Girls High  Introduction to Computers  course \n 您對網路的了解有多少? \n 學校的新生訓練提到多少與電腦及網路有關的資訊? \n 您對系上的網路系統架構了解多少? \n 我們該花一點時間了解一下當今最紅的  https://openai.com/blog/chatgpt/  嗎? \n \n 電腦輔助設計室是如何上網的？ \n 您的手機使用門號上網與透過電腦輔助設計室 Wifi 上網, 會有哪些差別？ \n 電腦上的 Edge, Chrome 與 Firefox 瀏覽器在使用上有哪些差別? \n 網際內容管理中的 Web-based 代表什麼？ \n 請以自己的學號登入  https://mail.nfu.edu.tw \n 請以自己的英文姓名至  https://github.com  申請帳號 \n 假如要選擇一項主題作為內容進行管理, 您會選擇什麼主題？ \n \n 利用近端管理個人網站 - 需要能開啟動態網站的 Python 程式環境 \n 利用 Replit 管理個人網站 - 需要建立 Replit 帳號, 並使用 Token 授權維護 Github 倉儲 \n 利用 Stud 伺服器管理個人網站 - 需要 Stud 主機帳號, 內部與外部 port, server.py 以及 acp \n 利用遠端管理個人網站 - 需要透過 Github Actions 協助集結動態網站內容與轉檔 \n \n 數位教材: \n 1999 How to be a star engineer ,  如何成為一位傑出的工程師  (for @nfu users only) \n 2023 Cloud Computing Technology  (for @nfu users only) \n 2021 Cloud Computing Basics  (for @nfu users only)', 'tags': '', 'url': '五專.html'}, {'title': 'ChatGPT', 'text': 'https://en.wikipedia.org/wiki/ChatGPT \n Chat Generative Pre-trained Transformer \n \n is a chatbot \n launched by  https://en.wikipedia.org/wiki/OpenAI \n built on top of GPT-3 (Generative Pre-trained Transformer 3) \n fine tuned by supervised and reinforcement learning techniques \n models are trained in collaboration with Microsoft and Azure supercomputing infrastructure \n CEO of the OpenAI is  Sam Altman  who received his first computer at the age of 8 \n \n Automate tasks using Python:  https://medium.com/geekculture/hey-chatgpt-solve-these-coding-tasks-using-python-b2e7482f2c18 \n Learn Python with ChatGPT:  https://thedeveloperspace.com/learn-python-with-chatgpt/ \n Running Python inside ChatGPT:  https://mathspp.com/blog/running-python-inside-chatgpt \n Writing a chess program in one hour with ChatGPT:  https://medium.datadriveninvestor.com/writing-a-chess-program-in-one-hour-with-chatgpt-67e7ec56ba5d \n', 'tags': '', 'url': 'ChatGPT.html'}, {'title': '5jtopics1', 'text': '主題: \n 利用 Github 儲存資料 \n 建立 Github 帳號: \n 如何選擇帳號名稱? \n 帳號與學號如何對應? \n 透過  Github Classroom  取得作業倉儲 \n 目的: \n 整理 五專頁面 中的所有相關資料 \n What you get: \n A repository \n A Web site (sort of) \n 討論: \n Why Github? \n Why assignment repository from  Github Classroom ? \n 先前開放的  Github Classroom 原始碼 , 03.13.2020 之後 Github Classroom 原始碼不再公開, 轉為內部程式開發專案. \n https://stackoverflow.com/questions/56577184/github-pull-changes-from-a-template-repository \n 參考: \n 為什麼要學 Git?   https://www.sourcetreeapp.com/ \n Learn Git and Github in 15 分鐘 \n Pro Git 電子書繁體中文版 \n 連猴子都能懂的 Git 入門指南 \n', 'tags': '', 'url': '5jtopics1.html'}, {'title': '四技', 'text': 'w2 and w7 放假. \n 課程目標: \n Web-based program development - 網際應用程式開發 \n 數位教材: \n 1999 How to be a star engineer ,  如何成為一位傑出的工程師  (for @nfu users only) \n 2023 Cloud Computing Technology  (for @nfu users only) \n 2021 Cloud Computing Basics  (for @nfu users only) \n 三種選擇: \n 1. 用來研究 Streamlit? (快速建立 Web-based 應用程式, 著眼於 data science 與 Machine Learning) \n 2023 Beginner’s Guide to Streamlit with Python  (for @nfu users only) \n https://streamlit.io \n 2023 Productionizing AI  (for @nfu users only) \n 2. 或者研究 Reeborg? (深入了解中型 Python 網際程式開發) \n https://mde.tw/wcm2023/content/Reeborg \n 3. 或者繼續 Old School Study, 從 cmsimde 研究起, 或修改 cmsimde, 令其更適合手機使用？ (深入了解小型 Python 網際程式開發) \n 4. 或者 一組三個人, 每人研究上述一項技術的內涵與應用 . \n Web-based 應用程式都需要部署, 也就是需要一台電腦 (可稱為 server) 用來配置網際程式後端, 而使用者連結至 server 後, 會將 html + css + Javascript (Brython) 下載至客戶端 (Web Browser) 後執行. \n 而這一台電腦, 可以是 Windows based, Ubuntu based 或 MacOS based. 我們在上學期所使用的 Replit 與自行建構的 stud server, 就是用來配置網際伺服程式. \n 假如你有一台 Ram 達到 16GB 以上的電腦, 就能自行配置上述三種不同類型的應用程式. \n 假如你沒有足夠配備的電腦, 或許可以利用工作站室中的一台虛擬主機讓您學習如何配置網際伺服器與應用程式. \n 管理個人網站方法: \n \n 利用近端管理個人網站 - 需要能開啟動態網站的 Python 程式環境 \n 利用 Replit 管理個人網站 - 需要建立 Replit 帳號, 並使用 Token 授權維護 Github 倉儲 \n 利用 Stud 伺服器管理個人網站 - 需要 Stud 主機帳號, 內部與外部 port, server.py 以及 acp \n 利用遠端管理個人網站 - 需要透過 Github Actions 協助集結動態網站內容與轉檔 \n \n', 'tags': '', 'url': '四技.html'}, {'title': 'topics1', 'text': '', 'tags': '', 'url': 'topics1.html'}, {'title': 'History', 'text': "當我們利用 template 建立個人的作業網站之後, 假如原始的 template 倉儲改版, 而學員的作業倉儲也改版, 學員的倉儲應該要如何納入原始 template 倉儲中的改版資料? 即便在上學期末, 各分組學員已經用過 fork 與 pull requests, 但是針對上述所提出來的資料合併議題, 其實並不簡單. 有興趣處理這項問題, 大家可以 參考一下網友們如何處理這個 template 改版與合併的問題 . \n 利用  Microsoft Forms  建立各組互評表單 \n https://zen1976.com/homework/   \n OBS  and  Youtube 教學影片  (學習如何使用 OBS 並利用 Arduino 與 Python 開發周邊套件） \n https://github.com/micahmo/obs-tally-python   \n https://github.com/dmadison/OBS-Mute-Indicator   \n https://obsproject.com/docs/scripting.html   \n Python script using proxy to execute: \n import os\n\nproxy = 'http://[2001:288:6004:17::xx]:3128'\n\nos.environ['http_proxy'] = proxy\nos.environ['HTTP_PROXY'] = proxy\nos.environ['https_proxy'] = proxy\nos.environ['HTTPS_PROXY'] = proxy \n", 'tags': '', 'url': 'History.html'}, {'title': 'Website', 'text': 'Website 指的是全球資訊網協定下的網站, 而全球資訊網協定是依附在 TCP/IP 與 HTTP 網路協定下的客戶端 (瀏覽器) 與伺服器端. \n 若利用  Github Pages  建立個人網站, 則伺服器端就是 github.io 網址中的伺服器, \n Github Pages Docs:\xa0 https://docs.github.com/en/enterprise-server@3.5/admin/overview/about-github-enterprise-server \xa0 \n Github 帳號功能比較:  https://github.com/pricing#feature-comparison \n Github Pages : \n \n 由 Github 所提供的靜態網頁全球資訊網伺服器 (Static site hosting server) \n 可伺服 Github 倉儲中的超文件, 包括 html, css 與 Javascript 資料 \n 帳號.github.io 是最短的網站名稱, 但要求倉儲必須命名為: 帳號.github.io \n 將資料轉為網站時, 必須檢查倉儲內容是否具備轉為網站的 條件 \n 網站總容量必須小於 1GB (因此倉儲中儘量不要存放大檔案, 建議將檔案放入 Onedrive 後在網站中提供連結) \n 網站連結總頻寬必須小於 100GB/月 (因此網站中不要放入無謂的 html 連結或設定, 意即不要直接從其他網站 copy/paste 資料, 而應提供原始文字檔後, 進入編輯器設定必要的設定與連結) \n 網站轉檔次數限制在 每一小時 10 次  (意即每一小時的推送 (push) 次數不要超過 10 次) \n 使用者必須遵守  Github Terms of Service \n', 'tags': '', 'url': 'Website.html'}, {'title': 'Reeborg', 'text': 'https://github.com/aroberge/reeborg \n https://mde.tw/wcm2023/reeborg2016/ \n \n Reeborg 是如何建立的? \n 初學程式者如何透過 Reeborg 學習 Python (Brython and CPython) 與 Javascript \n', 'tags': '', 'url': 'Reeborg.html'}, {'title': 'cmsimde', 'text': 'https://github.com/mdecycu/cmsimde \n 本課程第三部分在說明  https://github.com/mdecycu/cmsite  與  https://github.com/mdecycu/cmsimde_site  如何搭建, 程式架構與應用的發展如何從個人電腦導向手機. \n \n 由於手機相機的解析度極高, 因此若能在上傳手機相片前或之後將影像檔案縮減至網站可視之檔案大小, 將可省下頻寬與倉儲儲存的負擔. ( 參考資料 ) \n 設法利用 Brython 或 Python 建立將 URL 轉為 QR Code, 以便讓手機可以直接透過手機拍攝後直接進入內容管理系統網站. ( 參考資料 ) \n \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Resize image', 'text': 'source ,  reference ,  reference \n <img src="" id="image">\n<input id="input" type="file" onchange="handleFiles()">\n\n<script>\n    function handleFiles()\n    {\n        var dataurl = null;\n        var filesToUpload = document.getElementById(\'input\').files;\n        var file = filesToUpload[0];\n\n        // Create an image\n        var img = document.createElement("img");\n        // Create a file reader\n        var reader = new FileReader();\n        // Set the image once loaded into file reader\n        reader.onload = function(e)\n        {\n            img.src = e.target.result;\n\n            img.onload = function () {\n                var canvas = document.createElement("canvas");\n                var ctx = canvas.getContext("2d");\n                ctx.drawImage(img, 0, 0);\n\n                var MAX_WIDTH = 300;\n                var MAX_HEIGHT = 400;\n                var width = img.width;\n                var height = img.height;\n\n                if (width > height) {\n                  if (width > MAX_WIDTH) {\n                    height *= MAX_WIDTH / width;\n                    width = MAX_WIDTH;\n                  }\n                } else {\n                  if (height > MAX_HEIGHT) {\n                    width *= MAX_HEIGHT / height;\n                    height = MAX_HEIGHT;\n                  }\n                }\n                canvas.width = width;\n                canvas.height = height;\n                var ctx = canvas.getContext("2d");\n                ctx.drawImage(img, 0, 0, width, height);\n\n                dataurl = canvas.toDataURL("image/jpeg");\n\n                document.getElementById(\'image\').src = dataurl;\n\n                // Post the data\n                var fd = new FormData();\n                fd.append("name", "some_filename.jpg");\n                fd.append("image", dataurl);\n                fd.append("info", "lah_de_dah");\n                $.ajax({\n                    url: \'/ajax_photo\',\n                    data: fd,\n                    cache: false,\n                    contentType: false,\n                    processData: false,\n                    type: \'POST\',\n                    success: function(data){\n                        $(\'#form_photo\')[0].reset();\n                        location.reload();\n                    }\n                });\n            } // img.onload\n        }\n        // Load files into file reader\n        reader.readAsDataURL(file);\n    }\n</script> \n', 'tags': '', 'url': 'Resize image.html'}, {'title': 'Brython', 'text': 'https://mde.tw/2022fall/   \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}, {'title': 'Javascript', 'text': '2023 Programming for Absolute Beginners Using the JavaScript Programming Language  (for @nfu users only) \n', 'tags': '', 'url': 'Javascript.html'}]};