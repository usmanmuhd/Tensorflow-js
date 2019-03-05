var cont = new Vue({
    el: '#container',
    data: {
        predictions: []
    }
})

const img = document.getElementById('img');

function display() {
    model.classify(img).then(predictions => {
        cont.predictions = predictions;
    });
}

mobilenet.load().then(model => {
    window.model = model;
    $('#loader').css('display', 'none');
});

$('#display').click(function () {
    display();
});