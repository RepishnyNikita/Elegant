function timer() {
  const endDate = new Date("Feb 28, 2024 , 11:06:00");
//   const endDate = new Date();
//   endDate.setDate(endDate.getDate() + 3);

  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondElement = document.querySelector("#second");
  let timerInterval;

  function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      daysElement.innerText = "0";
      hoursElement.innerText = "0";
      minutesElement.innerText = "0";
      secondElement.innerText = "0";

      return;
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const second = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.innerText = days < 10 ? '0'+ days : days;
    hoursElement.innerText = hours < 10 ? '0' + hours : hours;
    minutesElement.innerText = minutes < 10 ? '0' +minutes : minutes;
    secondElement.innerText = second < 10 ? '0' + second : second;
  }

  updateTimer();

  timerInterval = setInterval(updateTimer, 1000);
}

export default timer;
