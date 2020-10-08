chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.click === 'change') {
    const lastName = msg.lastName;
    const firstName = msg.firstName;
    let confirm = window.confirm('書き換えます。よろしいですか?');
    if(confirm) {
      $("#lastName").val(lastName);
      $("#firstName").val(firstName);
    }
  } else {
    sendResponse("title message is none.");
  }
});
