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
    $('#upload-label').removeClass('disabled')
    $('#img-input').prop('disabled', false);
    $('#display').prop('disabled', false);
});

$('#img-input').change(function () {
    cont.predictions = [];
    $('img')[0].src = URL.createObjectURL($('#img-input')[0].files[0]);
});

$('#display').click(function () {
    display();
});