var user = {
  Name: "",
  Sex: "",
  Age: "",
  Id: "",
  Work: "",
  Home: "",
  Cards: []
};

function checkName() {
  if (document.getElementsByName("Name")[0].value == "") {
    document.querySelector("#noName").innerText = "姓名不能为空";
    return false;
  } else {
    document.querySelector("#noName").innerText = "";
    return true;
  }
}

function checkId() {
  if (
    (document.getElementsByName("Id")[0].value == "") |
    (document.getElementsByName("Id")[0].value.length != 18)
  ) {
    document.querySelector("#noId").innerText = "身份证号为空或错误";
    return false;
  } else {
    document.querySelector("#noId").innerText = "";
    return true;
  }
}
function checkWork() {
  if (document.getElementsByName("Work")[0].value == "") {
    document.querySelector("#noWork").innerText = "工作单位不能为空";
    return false;
  } else {
    document.querySelector("#noWork").innerText = "";
    return true;
  }
}
function checkHome() {
  if (document.getElementsByName("Home")[0].value == "") {
    document.querySelector("#noHome").innerText = "家庭住址不能为空";
    return false;
  } else {
    document.querySelector("#noHome").innerText = "";
    return true;
  }
}
function checkCards() {
  if (document.getElementsByName("Home")[0].value == "") {
    document.querySelector("#noHome").innerText = "家庭住址不能为空";
    return false;
  } else {
    document.querySelector("#noHome").innerText = "";
    return true;
  }
}

function ageDown() {
  var age = document.querySelector("#age");
  if (age.value > 1) {
    age.value = Number(age.value) - 1;
  }
}

function ageUp() {
  var age = document.querySelector("#age");
  if (age.value < 120) {
    age.value = Number(age.value) + 1;
  }
}

function readCards() {
  var t = document.querySelector("#cards");
}

function checkAndSave() {
  if (checkName()) {
  } else {
    return alert("请检查姓名");
  }

  if (checkId()) {
  } else {
    return alert("请检查身份证号");
  }
  if (checkWork()) {
  } else {
    return alert("请检查工作单位");
  }
  if (checkHome()) {
  } else {
    return alert("请检查家庭地址");
  }

  if (user.Cards[0]) {
  } else {
    return alert("请至少添加一张银行卡");
  }

  for (var i in user) {
    var fd = new FormData(document.querySelector("#form1"));
    if (typeof user[i] != "object") {
      user[i] = fd.get(i);
      // console.log(i, "\t", user[i]);
    } else
      for (var j in user[i]) {
        // console.log(i + j, user[i][j]);
      }
  }
  // console.log(user);
  window.sessionStorage.user = JSON.stringify(user);
  alert("数据正确！");
  window.open("index3.html");
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function cardSave() {
  if (document.querySelector("#card").value) {
    user.Cards.push(document.querySelector("#card").value);
  }
}

function cardRead() {
  document.querySelector("#cards").innerText = "";
  // console.log(document.querySelector("#cards"));
  user.Cards = Array.from(new Set(user.Cards));
  for (var t in user.Cards) {
    // console.log(t, user.Cards[t]);
    document.querySelector("#cards").innerText =
      document.querySelector("#cards").innerText + user.Cards[t] + "\r";
  }
}

function inputClear() {
  document.querySelector("#card").value = "";
}

function cssj() {
  document.getElementsByName("Name")[0].value = "Name";
  document.getElementsByName("Id")[0].value = "123456789012345678";
  document.getElementsByName("Work")[0].value = "Work";
  document.getElementsByName("Home")[0].value = "Home";
  user.Cards = ["1234567890123456789", "1234567890123456788"];
  cardRead();
}

function dqsj() {
  // console.log(window.sessionStorage.user);
  user = JSON.parse(window.sessionStorage.user);
  // console.log(user);
  for (var i in user) {
    if (typeof user[i] != "object") {
      // console.log(document.getElementById(i));
      if (i == "Id") {
        document.getElementById(i).innerText = hideNum(user[i]);
      } else {
        document.getElementById(i).innerText = user[i];
      }
      // console.log(user[i]);
    } else
      for (var j in user[i]) {
        document.getElementById(i).innerText =
          document.getElementById(i).innerText + hideNum(user[i][j]) + "\r";
      }
  }
}

function hideNum(num1) {
  var str1 = num1.slice(0, 6);
  var str2 = "********";
  var str3 = num1.slice(14);
  return str1 + str2 + str3;
}
