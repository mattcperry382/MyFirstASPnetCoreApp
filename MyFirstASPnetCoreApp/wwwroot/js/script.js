// document.getElementById('btnSend').addEventListener('click', () => {
//     alert('From: ' + document.getElementById('txtFrom').value +
//         ", Subject: " + document.getElementById('txtSubject').value +
//         ", Message: " + document.getElementById('txtMessage').value);
// })

$('#btnSend').click(() => {
    alert('From: ' + $('#txtFrom').val() +
        ", Subject: " + $('#txtSubject').val() +
        ", Message: " + $('#txtMessage').val());

    $('#picGanderson').fadeOut('slow')
})