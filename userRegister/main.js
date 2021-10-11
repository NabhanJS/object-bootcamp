/* function filtreraMedLand(arr, nation) {
    let filtreraMedLand = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].nat === nation) {
        filtreraMedLand.push(arr[i]);
      }
    }
  
    console.log(filtreraMedLand.length);
  }

  filtreraMedLand(users, "FR"); */

  function justEmails(arr) {
    let emails = [];
    for (let i = 0; i < arr.length; i++) {
      emails.push(arr[i].email);
    }
    console.log(emails);
    return emails;
  }
  
  justEmails(users);