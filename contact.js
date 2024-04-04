      function sendEmail() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        var subject = "Contact Request from ShoesStore Website";

        var mailtoLink = "mailto:trixidianedelatorre@gmail.com" +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message);

        window.location.href = mailtoLink;
      }