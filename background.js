const maxScaleLevel = 33;
let bClassExist = false;

window.onload = (function () {
    document.addEventListener('keydown', function (event) {
        let element = document.getElementsByClassName('video-stream html5-main-video')[0];

        if (!bClassExist) {
            element.classList.forEach(_class => {
                if (_class.includes('yt-scale')) {
                    bClassExist = true;
                }
            });
            if (!bClassExist) {
            	element.classList.add('yt-scale_0');
				bClassExist = true;
            }
        } else {
            if (event.code === 'NumpadAdd') {
                element.classList.forEach(_class => {
                    if (_class.includes('yt-scale')) {
                        element.classList.remove(_class);
                        if (parseInt(_class.split('_')[1]) === maxScaleLevel) {
                            element.classList.add('yt-scale_0');
                        } else {
                            element.classList.add('yt-scale_' + (parseInt(_class.split('_')[1]) + 1));
                        }
                    }
                })
            }
            if (event.code === 'NumpadSubtract') {
                element.classList.forEach(_class => {
                    if (_class.includes('yt-scale')) {
                        element.classList.remove(_class);
                        if (parseInt(_class.split('_')[1]) === 0) {
                            element.classList.add('yt-scale_' + maxScaleLevel);
                        } else {
                            element.classList.add('yt-scale_' + (parseInt(_class.split('_')[1]) - 1));
                        }
                    }
                })
            }
            if (event.code === 'NumpadMultiply') {
                element.classList.forEach(_class => {
                    if (_class.includes('yt-scale')) {
                        element.classList.remove(_class);
                        element.classList.add('yt-scale_0');
                    }
                })
            }
        }
    });

});