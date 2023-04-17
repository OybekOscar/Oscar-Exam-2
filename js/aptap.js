// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});
