let currentInput = "";

function appendValue(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("result").value = currentInput;
  } catch (e) {
    document.getElementById("result").value = "错误";
    currentInput = "";
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker 注册成功:", registration);
    })
    .catch(function (error) {
      console.log("Service Worker 注册失败:", error);
    });
}
