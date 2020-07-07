var x = document.getElementById('rayyansaidi');
var y = document.getElementById('treasure');
var z = document.getElementById('home-url');
var a = document.getElementById('holiday');
var b = document.getElementById('holidays');
var aa = document.getElementById('holiday-home');
var bb = document.getElementById('birthday');
var cc = document.getElementById('father');
var dd = document.getElementById('mom');
var ee = document.getElementById('val');
// Treasure Hunt Varibles
var score = 0;
var s = document.getElementById('scorebord');
var w = document.getElementById('lose');
var p = document.getElementById('playbtn');
var sBtn = document.getElementById('screenshot')
// Stuff Besides Treausre Hunt
y.style.display = 'none';
a.style.display = 'none';
b.style.display = 'none';
function Rayyansaidi() {
    x.style.display = 'block';
    y.style.display = 'none';
    z.style.display = 'block';
    a.style.display = 'none';
    document.getElementById('table').style.display = 'none';
    document.getElementById('play').style.display = 'none';
    b.style.display = 'none';
}
function Treasure() {
    x.style.display = 'none';
    y.style.display = 'block';
    z.style.display = 'none';
    p.style.display = 'block';
    p.style.margin = '0 auto';
    a.style.display = 'none';
    b.style.display = 'none';
}
// Holiday Templates
function holiday() {
    a.style.display = 'block'
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'none';
    aa.style.display = 'block';
    bb.style.display = 'none';
    cc.style.display = 'none';
    dd.style.display = 'none';
    ee.style.display = 'none';
    b.style.display = 'block';
    document.getElementById('table').style.display = 'none';
    document.getElementById('play').style.display = 'none';
}
function Birthday() {
    aa.style.display = 'none';
    bb.style.display = 'block';
    cc.style.display = 'none';
    dd.style.display = 'none';
    ee.style.display = 'none';
    sBtn.style.display = 'block'
    sBtn.addEventListener('click', () => {
        document.getElementById('screenshot-output').setAttribute('disabled', 'disabled');
        html2canvas(bb, { backgroundColor: "#222222" }).then(canvas => {
            document.getElementById('canvas').appendChild(canvas);
            var canvas = document.querySelector('#canvas canvas');
            document.getElementById('screenshot').innerHTML = `<a href="` + document.querySelector('#canvas canvas').toDataURL() + `" target="blank">` + `<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>`;
            canvas.remove();
            document.getElementById('screenshot-output').style.display = 'inline-block';
            document.getElementById('screenshot-output').removeAttribute('disabled');
        })
    })
}
function Father() {
    aa.style.display = 'none';
    bb.style.display = 'none';
    cc.style.display = 'block';
    dd.style.display = 'none';
    ee.style.display = 'none';
    sBtn.style.display = 'block'
    sBtn.addEventListener('click', () => {
        document.getElementById('screenshot-output').setAttribute('disabled', 'disabled');
        html2canvas(cc, { backgroundColor: "#222222" }).then(canvas => {
            document.getElementById('canvas').appendChild(canvas);
            var canvas = document.querySelector('#canvas canvas');
            document.getElementById('screenshot').innerHTML = `<a href="` + document.querySelector('#canvas canvas').toDataURL() + `" target="blank">` + `<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>`;
            canvas.remove();
            document.getElementById('screenshot-output').style.display = 'inline-block';
            document.getElementById('screenshot-output').removeAttribute('disabled');
        })
    })
}
function Mom() {
    aa.style.display = 'none';
    bb.style.display = 'none';
    cc.style.display = 'none';
    dd.style.display = 'block';
    ee.style.display = 'none';
    sBtn.style.display = 'block'
    sBtn.addEventListener('click', () => {
        document.getElementById('screenshot-output').setAttribute('disabled', 'disabled');
        html2canvas(dd, { backgroundColor: "#222222" }).then(canvas => {
            document.getElementById('canvas').appendChild(canvas);
            var canvas = document.querySelector('#canvas canvas');
            document.getElementById('screenshot').innerHTML = `<a href="` + document.querySelector('#canvas canvas').toDataURL() + `" target="blank">` + `<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>`;
            canvas.remove();
            document.getElementById('screenshot-output').style.display = 'inline-block';
            document.getElementById('screenshot-output').removeAttribute('disabled');
        })
    })
}
function Val() {
    aa.style.display = 'none';
    bb.style.display = 'none';
    cc.style.display = 'none';
    dd.style.display = 'none';
    ee.style.display = 'block';
    sBtn.style.display = 'block'
    sBtn.addEventListener('click', () => {
        document.getElementById('screenshot-output').setAttribute('disabled', 'disabled');
        html2canvas(ee, { backgroundColor: "#222222" }).then(canvas => {
            document.getElementById('canvas').appendChild(canvas);
            var canvas = document.querySelector('#canvas canvas');
            document.getElementById('screenshot').innerHTML = `<a href="` + document.querySelector('#canvas canvas').toDataURL() + `" target="blank">` + `<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>`;
            canvas.remove();
            document.getElementById('screenshot-output').style.display = 'inline-block';
            document.getElementById('screenshot-output').removeAttribute('disabled');
        })
    })
}
// Treasure Hunt
function Uhall() {
    var width = Math.floor(Math.random() * 10) + 1;
    var hight = Math.floor(Math.random() * 31) + 1;
    w.innerHTML = '';
    if (width < 8 && hight < 13) {
        score += 1;
        s.innerHTML = score;
    } else if (width > 7 || hight > 12) {
        w.innerHTML = 'Incorect. Game over.';
        score = 0;
        s.innerHTML = score;
    } else {
        alert('Error Code 1');
    }
}
function Kitchen() {
    var width = Math.floor(Math.random() * 10) + 1;
    var hight = Math.floor(Math.random() * 31) + 1;
    w.innerHTML = '';
    if (width < 5 && hight > 12) {
        score += 1;
        s.innerHTML = score;
    } else if (width < 7 && hight > 18) {
        score += 1;
        s.innerHTML = score;
    } else if (hight > 13 || width < 6) {
        w.innerHTML = 'Incorect. Game over.';
        score = 0;
        s.innerHTML = score;
    } else if (width > 7 || hight < 19) {
        w.innerHTML = 'Incorect. Game over.';
        score = 0;
        s.innerHTML = score;
    } else {
        alert('Error Code 1');
    }
}
function Dhall() {
    var width = Math.floor(Math.random() * 10) + 1;
    var hight = Math.floor(Math.random() * 31) + 1;
    w.innerHTML = '';
    if (width < 6 && hight > 12) {
        score += 1;
        s.innerHTML = score;
    } else if (width > 5 || hight < 13) {
        w.innerHTML = 'Incorect. Game over.';
        score = 0;
        s.innerHTML = score;
    } else {
        alert('Error Code 1');
    }
}
function Monster() {
    var width = Math.floor(Math.random() * 10) + 1;
    var hight = Math.floor(Math.random() * 31) + 1;
    w.innerHTML = '';
    if (width > 7 && hight < 13) {
        score += 1;
        s.innerHTML = score;
    } else if (width < 8 || hight > 12) {
        w.innerHTML = 'Incorect. Game over.';
        score = 0;
        s.innerHTML = score;
    } else {
        alert('Error Code 1');
    }
}
function Play() {
    var width = Math.floor(Math.random() * 10) + 1;
    var hight = Math.floor(Math.random() * 31) + 1;
    w.innerHTML = '';
    if (width > 7 && 13 < hight < 19) {
        score += 1;
        s.innerHTML = score;
    } else if (width < 8 || 14 > hight < 18) {
        w.innerHTML = 'Incorect. Game over.';
        score = 0;
        s.innerHTML = score;
    } else {
        alert('Error Code 1');
    }
}
function restart() {
    score = 0;
    s.innerHTML = score;
}
function none() {
    document.getElementById('table').style.display = 'none';
    document.getElementById('play').style.display = 'none';
    p.style.display = 'block';
    p.style.margin = '0 auto';
}
function play() {
    document.getElementById('table').style.display = 'grid';
    document.getElementById('play').style.display = 'block';
    p.style.display = 'none';
}
// Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
