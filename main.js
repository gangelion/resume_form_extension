$('#change').on('click', () => {
  let name = $('#name').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  if (name == "") {
    alert("名前を入力してください");
    return;
  }
  if (email == "") {
    alert("メールアドレスを入力してください");
    return;
  }
  if (phone == "") {
    alert("電話番号を入力してください");
    return;
  }
  let confirm = window.confirm('登録します。よろしいですか?');
  if(confirm) {
    const STORAGE_KEY_NAME = 'name';
    const STORAGE_KEY_EMAIL = 'email';
    const STORAGE_KEY_PHONE = 'phone';
    localStorage.setItem(STORAGE_KEY_NAME, name);
    localStorage.setItem(STORAGE_KEY_EMAIL, email);
    localStorage.setItem(STORAGE_KEY_PHONE, phone);
    alert('名前:' + name + '\n' + 'Eメール:' + email + '\n' + '電話番号:' + phone + '\n' + 'で登録しました！');
  }
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