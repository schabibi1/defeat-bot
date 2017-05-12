$(document).ready(function() {
  var mail_address = 'szzazmzzplzzzez@szazzmzpzzzlze.zzcozmz';
  var mail_address2 = mail_address.replace(/z/g,'');

  var mail_address2, subject, body, hiddenData;
  var sendmail = document.getElementById('mail');

    sendmail.onclick = function() {
      hiddenData = document.getElementById('hidden_data').value;
      address = mail_address2;
      subject = 'title';
      body = 'contents' + hiddenData;

      $('.mail-contact').hide(mail_address2);
      $('.mail-contact').show('.fa-envelope-o');
      $('.mail-contact').attr('href','mailto:' + mail_address2 + '?subject=' + subject + '&body=' + body);
    };
});
