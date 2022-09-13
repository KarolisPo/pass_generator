document.querySelector("#userInput").addEventListener("submit", (e) => {
  e.preventDefault();

  const pass = document.querySelector("#basePass").value;
  const serviceName = document.querySelector("#service").value;
  const resultDiv = document.querySelector("#result");

  resultDiv.textContent =
    "Generated password: " + generatePass(pass, serviceName);
});

function generatePass(basepass, service) {
  const firstLetters = [];
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelArr = service.split("").filter((singleLetter) => {
    return vowels.includes(singleLetter);
  });
  firstLetters.push(service[service.length - 1]);

  vowelArr.length > 0
    ? firstLetters.push(service[vowelArr.length - 1])
    : firstLetters.push(service[0]);

  const finalPass =
    firstLetters.join("") +
    basepass +
    (service.length - vowelArr.length) +
    service[0];

  return finalPass;
}
