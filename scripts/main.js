// Main btns of sidebar
var btnAbout = document.getElementById('about-btn');
var btnWorks = document.getElementById('works-btn');
var btnService = document.getElementById('service-btn');

// Social media btns of sidebar
var btnInstagram = document.getElementById('instagram-btn');
var btnTelegram = document.getElementById('telegram-btn');
var btnCallme = document.getElementById('call-me-btn');

// Sidebar
var aSidebar = document.getElementById('sidebar');
// Dark cover
var darkCover = document.getElementById('dark-cover');

var btnsSide = document.querySelectorAll('btn-toggle-bar');

//main
var mainPanel = document.querySelector('main');

// Preloader
var preLoader = document.getElementById('preloader');

const instagramUrl = 'https://www.instagram.com/sash_verse';
const telegramUrl = 'https://t.me/sashamazur19';


PageStart();
async function preloaderOf() {
    await PageStart;
    await delay(1000)
    preLoader.classList.add('hidden');
}
preloaderOf();

async function toggleSideBar() {
    let aSidebar = document.querySelector('#sidebar'); // Убедитесь, что ID или класс правильный
    let darkCover = document.querySelector('#dark-cover'); // Убедитесь, что ID или класс правильный

    if (aSidebar && darkCover) {
        aSidebar.classList.toggle('hidden');
        darkCover.classList.toggle('hidden');
    } else {
        console.error('Sidebar or darkCover not found.');
    }
}

async function PageStart(){
    btnAbout.classList.add('Active');
    btnWorks.classList.remove('Active');
    btnService.classList.remove('Active');
    loadAbout();
    await loadAbout();
    let btnsSide = document.querySelectorAll('#btn-toggle-bar');
    console.log(btnsSide);

    btnsSide.forEach(btn => {
        btn.onclick = function() {
            console.log('SideBtn click');
            toggleSideBar();
        };
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 1024) { 
        aSidebar.classList.add('hidden');
        darkCover.classList.add('hidden');
        console.log('Width is lower or equal to 1024px');
    } else {
        console.log('Width is greater than 1024px');
    }
    // Main btns of sidebar
    var btnAbout = document.getElementById('about-btn');
    var btnWorks = document.getElementById('works-btn');
    var btnService = document.getElementById('service-btn');

    // Social media btns of sidebar
    var btnInstagram = document.getElementById('instagram-btn');
    var btnTelegram = document.getElementById('telegram-btn');
    var btnCallme = document.getElementById('call-me-btn');
});

// Go to about
document.addEventListener('keydown', async function(event) {
    if (event.key === '1') {
        btnAbout.classList.add('Pushed');
        btnAbout.classList.add('Active');
        btnWorks.classList.remove('Active');
        btnService.classList.remove('Active');
        loadAbout();
        await loadAbout();
        let btnsSide = document.querySelectorAll('#btn-toggle-bar');
        console.log(btnsSide);

        btnsSide.forEach(btn => {
            btn.onclick = function() {
                console.log('SideBtn click');
                toggleSideBar();
            };
        });
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '1') {
        btnAbout.classList.remove('Pushed');
    }
});

btnAbout.addEventListener('mousedown', async function(event) {
    btnAbout.classList.add('Pushed');
    btnAbout.classList.add('Active');
    btnWorks.classList.remove('Active');
    btnService.classList.remove('Active');
    await loadAbout();
    let btnsSide = document.querySelectorAll('#btn-toggle-bar');
    console.log(btnsSide);

    btnsSide.forEach(btn => {
        btn.onclick = function() {
            console.log('SideBtn click');
            toggleSideBar();
        };
    });
});

btnAbout.addEventListener('mouseup', function() {
    btnAbout.classList.remove('Pushed');
});

// Go to works
document.addEventListener('keydown', async function(event) {
    if (event.key === '2') {
        btnWorks.classList.add('Pushed');
        btnWorks.classList.add('Active');
        btnAbout.classList.remove('Active');
        btnService.classList.remove('Active');
        await loadWorks();
        let btnsSide = document.querySelectorAll('#btn-toggle-bar');
        console.log(btnsSide);

        btnsSide.forEach(btn => {
            btn.onclick = function() {
                console.log('SideBtn click');
                toggleSideBar();
            };
        });
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '2') {
        btnWorks.classList.remove('Pushed');
    }
    });

btnWorks.addEventListener('mousedown', async function(event) {
    btnWorks.classList.add('Pushed');
    btnWorks.classList.add('Active');
    btnAbout.classList.remove('Active');
    btnService.classList.remove('Active');
    await loadWorks();
    let btnsSide = document.querySelectorAll('#btn-toggle-bar');
    console.log(btnsSide);

    btnsSide.forEach(btn => {
        btn.onclick = function() {
            console.log('SideBtn click');
            toggleSideBar();
        };
    });
});

btnWorks.addEventListener('mouseup', function() {
    btnWorks.classList.remove('Pushed');
});

// Go to service
document.addEventListener('keydown', async function(event) {
    if (event.key === '3') {
        btnService.classList.add('Pushed');
        btnService.classList.add('Active');
        btnAbout.classList.remove('Active');
        btnWorks.classList.remove('Active');
        await loadServices();
        let btnsSide = document.querySelectorAll('#btn-toggle-bar');
        console.log(btnsSide);
    
        btnsSide.forEach(btn => {
            btn.onclick = function() {
                console.log('SideBtn click');
                toggleSideBar();
            };
        });
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '3') {
        btnService.classList.remove('Pushed');
    }
});

btnService.addEventListener('mousedown', async function() {
    btnService.classList.add('Pushed');
    btnService.classList.add('Active');
    btnAbout.classList.remove('Active');
    btnWorks.classList.remove('Active');
    await loadServices();
    let btnsSide = document.querySelectorAll('#btn-toggle-bar');
    console.log(btnsSide);

    btnsSide.forEach(btn => {
        btn.onclick = function() {
            console.log('SideBtn click');
            toggleSideBar();
        };
    });
});

btnService.addEventListener('mouseup', function() {
    btnService.classList.remove('Pushed');
});

// Open Instagram
btnInstagram.addEventListener('click', function() {
    console.log('Going to Instagram page...');
    window.open(instagramUrl, '_blank');
});

document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
        console.log('Going to Instagram page...');
        window.open(instagramUrl, '_blank');
    }
});

// Open Telegram
btnTelegram.addEventListener('click', function() {
    console.log('Going to Telegram page...');
    window.open(telegramUrl, '_blank');
});

document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
        console.log('Going to Telegram page...');
        window.open(telegramUrl, '_blank');
    }
});

// Call Oleksandra
btnCallme.addEventListener('click', function() {
    console.log('Calling Oleksandra...');
    window.location.href = `tel:+48577456183`;
});

document.addEventListener('keydown', function(event) {
    if (event.key === '6') {
        console.log('Calling Oleksandra...');
        window.location.href = `tel:+48577456183`;
    }
});

async function loadAbout(){ 
    mainPanel.innerHTML = `
        <div id="loader">
            <div class="lds-dual-ring"></div>
        </div>
    `;  
    await delay(100);
    mainPanel.innerHTML = `
        <div id="btn-toggle-bar">
            <i class="bi bi-list"></i>
        </div>

        <p class="title light-text">Hello, I'm Oleksandra Mazur</p>
        <p class="title light-text">I'm your <span class="dark-text">Content Creator</span></p>
        <p class="subtitle dark-text">Capture, Edit, Completed - let's create and distribute only quality content.</p>
        <p class="subtitle dark-text">We're in favor of quality content...</p>

        <div class="wrapper">
            <div class="container-post">
                <img src="images/item1.png" alt="Item1">
                <div class="text-container">
                    <div class="post-text">
                        <span class="post-title">Content filming</span>
                        <span class="post-subtitle">Video shooting, photo shooting, editing, design.</span>
                    </div>
                    <div class="post-price">
                        100Zl
                    </div>
                </div>
            </div>
            <div class="container-post">
                <img src="images/item2.png" alt="Item2">
                <div class="text-container">
                    <div class="post-text">
                        <span class="post-title">Profile design</span>
                        <span class="post-subtitle">Video shooting, photo shooting, editing, design.</span>
                    </div>
                    <div class="post-price">
                        125Zl
                    </div>
                </div>
            </div>
        </div>

        <p class="subtitle dark-text">Let's be together only for the best ideas and the best realisation.</p>
        <p class="subtitle dark-text">I'll be happy to work with you.</p>
        <br><br>
        <p class="subtitle light-text">I am expanding every day, you can contact me in the menu by Instagram, Telegram or Call me.</p>
    `;
}

async function loadWorks() {
    // Проверяем, что элемент mainPanel существует на странице
    if (mainPanel) {
        mainPanel.innerHTML = `
        <div id="loader">
        <div class="lds-dual-ring"></div>
            </div>
        `;  
        await delay(450);
       mainPanel.innerHTML = `
        <div id="btn-toggle-bar">
            <i class="bi bi-list"></i>
        </div>

        <p class="title light-text">Here you can find examples of my works here</p>
        <p class="subtitle dark-text">I think you would like it...</p>
        <div class="wrapper">
            <a href="#">
                <div class="container-post example-post">
                    <img src="images/olga-trainer/photo_2024-09-04_21-41-33.jpg" alt="Item1">
                    <div class="text-container">
                        <div class="post-text">
                            <span class="post-title">Fintes Trainer</span>
                            <span class="post-subtitle">Videotaping, photography</span>
                        </div>
                        <div class="post-price hashtag">
                            #sport
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="container-post example-post">
                    <img src="images/victoria-hairmaister/photo_2024-04-28_11-54-30.jpg" alt="Item1">
                    <div class="text-container">
                        <div class="post-text">
                            <span class="post-title">Hairdresser</span>
                            <span class="post-subtitle">Videotaping, photography, profile design</span>
                        </div>
                        <div class="post-price hashtag">
                            #beauty
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="container-post example-post">
                    <img src="images/victoria-dipilation/IMG_7208.JPG" alt="Item1">
                    <div class="text-container">
                        <div class="post-text">
                            <span class="post-title">Depilation master</span>
                            <span class="post-subtitle">Videotaping, photography, profile design</span>
                        </div>
                        <div class="post-price hashtag">
                            #beauty
                        </div>
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="container-post example-post">
                    <img src="images/victoria-individual-filming/IMG_7367.JPG" alt="Item1">
                    <div class="text-container">
                        <div class="post-text">
                            <span class="post-title">Victoria</span>
                            <span class="post-subtitle">Videotaping, photography</span>
                        </div>
                        <div class="post-price hashtag">
                            #individual
                        </div>
                    </div>
                </div>
            </a>
            
        </div>
            `;
    } else {
        console.error('mainPanel not found on the page');
    }
}
async function loadServices() {
    // Проверяем, что элемент mainPanel существует на странице
    if (mainPanel) {
        mainPanel.innerHTML = `
        <div id="loader">
        <div class="lds-dual-ring"></div>
            </div>
        `;  
        await delay(450);        
        mainPanel.innerHTML = `
            <div id="btn-toggle-bar">
                <i class="bi bi-list"></i>
            </div>

            <p class="title light-text">Services for you</p>
            <p class="subtitle dark-text">There are all options which I can provide for you</p>

            <div class="wrapper">
                <a href="#">
                    <div class="container-post example-post">
                        <img src="images/videocamera.jpg" alt="Item1">
                        <div class="text-container">
                            <div class="post-text">
                                <span class="post-title">Videotaping</span>
                                <span class="post-subtitle">1-2 hours of work, any other times is paying extra.</span>
                            </div>
                            <div class="post-price hashtag">
                                100Zl
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="container-post example-post">
                        <img src="images/camera.avif" alt="Item1">
                        <div class="text-container">
                            <div class="post-text">
                                <span class="post-title">Photography</span>
                                <span class="post-subtitle">1-2 hours of work, any other times is paying extra.</span>
                            </div>
                            <div class="post-price hashtag">
                                100Zl
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="container-post example-post">
                        <img src="images/profile-design.avif" alt="Item1">
                        <div class="text-container">
                            <div class="post-text">
                                <span class="post-title">Profile design</span>
                                <span class="post-subtitle">Full pack for your profile, actual story + logo(photologo)</span>
                            </div>
                            <div class="post-price hashtag">
                                125Zl
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="container-post example-post">
                        <img src="images/videoediting.jpg" alt="Item1">
                        <div class="text-container">
                            <div class="post-text">
                                <span class="post-title">Video editing</span>
                                <span class="post-subtitle">1 Video from your content (Must be good quality)</span>
                            </div>
                            <div class="post-price hashtag">
                                25Zl
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="container-post example-post">
                        <img src="images/capone.jpg" alt="Item1">
                        <div class="text-container">
                            <div class="post-text">
                                <span class="post-title">Photo editing</span>
                                <span class="post-subtitle">Up to 10 photos in pack (Must be good quality)</span>
                            </div>
                            <div class="post-price hashtag">
                                50Zl
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="container-post example-post">
                        <img src="images/interface-template-instagram-stories_23-2148422902.avif" alt="Item1">
                        <div class="text-container">
                            <div class="post-text">
                                <span class="post-title">Profile managment</span>
                                <span class="post-subtitle">Full profile managment for 1 month</span>
                            </div>
                            <div class="post-price hashtag">
                                1200Zl
                            </div>
                        </div>
                    </div>
                </a>
                
            </div>
        `;
    } else {
        console.error('mainPanel not found on the page');
    }
}
