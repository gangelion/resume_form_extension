$('#change').on('click', () => {
  const lastName_ex = $('#lastName_ex').val();
  const firstName_ex = $("#firstName_ex").val();
  if (lastName_ex === "") {
    alert("姓を入力してください");
    return;
  }
  if (firstName_ex === "") {
    alert("名を入力してください");
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        click: 'change',
        lastName: lastName_ex,
        firstName: firstName_ex
      },
      (msg) => {
        console.log("result message:", msg);
      }
    );
  });
});

$('#fetch').on('click', () => {
  let confirm = window.confirm('登録済みのデータを読み込みます。よろしいですか？')
  if(confirm) {
    let name = localStorage['name'];
    let email = localStorage['email'];
    let phone = localStorage['phone'];
    $("#name").val(name);
    $("#email").val(email);
    $("#phone").val(phone);
  }
});

$('#clear').on('click', () => {
  let confirm = window.confirm('危険！登録済みのデータを消去します。よろしいですか？')
  if(!confirm) {
    return;
  }
  let reConfirm = window.confirm('危険！本当に削除しますか？この操作は取り消せません');
  if(reConfirm) {
    localStorage.clear();
    alert('登録済みデータを削除しました。')
  }
});
