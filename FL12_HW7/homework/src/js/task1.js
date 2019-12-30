// Your code goes here

const userAuth = prompt('Enter your email', '');

const emailmin = 5;
const passwordMin = 6;

const adminPass = 'AdminPass';
const adminEmail = 'Admin@gmail.com';
const userEmail = 'User@gmail.com';
const userPass = 'UserPass';


if (userAuth === null || userAuth === '') {
    alert('Canceled');
}else if (userAuth.length < emailmin) {
    alert('I don\'t know any emails having name length less than 5 symbols');
}else if (userAuth === userEmail || userAuth === adminEmail) {
    const password = prompt('Enter password'); 
    if (password === null || password === '') {
        alert('Canceled');
      } else if 
      (userAuth === userEmail && password === userPass || userAuth === adminEmail && password === adminPass) {
    const changePassword = confirm('Do you want to change your password?');
       if (!changePassword) {
        alert('You have failed the change');
      } else {
        const userOldPasseword = prompt('Enter old password');
        if (userOldPasseword === null || userOldPasseword === '') {
          alert('Canceled');
        } else if (            
            userAuth === userEmail && userOldPasseword === userPass ||
             userAuth === adminEmail && userOldPasseword=== adminPass) {
        const newPassword = prompt('Enter new password, please');
            if (newPassword === null || newPassword === '') {
              alert('Canceled');
        } else if (newPassword.length < passwordMin) {
            alert('It’s too short password. Sorry.');
          } else {
            const newPasswordAccept = prompt('Enter new password again, please');
            if (newPasswordAccept !== newPassword) {
              alert('You wrote the wrong pasword.');
            } else {
                alert('You have successfully changed your password.');
              }
            }
          } else {
            alert('Wrong old password');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert("I don't know you");
    }


