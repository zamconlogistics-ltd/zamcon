document.addEventListener('DOMContentLoaded', function() {
  
  const fullname = document.getElementById('fullname');
  const mail = document.getElementById('mail');
  const phone = document.getElementById('phone');
  const selectOption = document.getElementById('selectOption');
  const message = document.getElementById('message');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Clicked');

      let ebody = `
      <br>Name: <br>${fullname.value}
      <br>
      <br>Email: <br>${mail.value}
      <br>
      <br>phone: <br>${phone.value}
      <br>
      <br>Insurance type: <br>${selectOption.value}
      <br>
      <br>${message.value}
      <br>
      `;

      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "zamconlogisticszm@outlook.com",
          Password : "25CF2519779F7A74A0CB6748422586E95FEB",
          To : 'zamconlogisticszm@outlook.com',
          From : "zamconlogisticszm@outlook.com",
          Subject : "New Application notification",
          Body : ebody
      }).then(
        message => {
          if (message == "OK"){
            Swal.fire({
              title: "Submitted",
              text: "Zamcon Logstics has recieved your quotation",
              icon: "success"
            });
            // reset to default after i submit my quote
            message.value ="";
            fullname.value = "";
            mail.value = "";
            phone.value = "";
            
          }
        }
      );
  });
});




// 25CF2519779F7A74A0CB6748422586E95FEB

