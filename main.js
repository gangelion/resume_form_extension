let change = document.getElementById('change');
change.addEventListener('click', () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  if(name == '') {
    alert('名前を入力してください');
    return;
  }
  if(email == '') {
    alert('メールアドレスを入力してください');
    return;
  }
  if(phone == '') {
    alert('電話番号を入力してください');
    return;
  }
  let confirm = window.confirm('登録します。よろしいですか?');
  if(confirm) {
    alert('名前:' + name + '\n' + 'Eメール:' + email + '\n' + '電話番号:' + phone + '\n' + 'で登録しました！');
  }
});