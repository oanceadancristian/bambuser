const select = (elem) => document.querySelector(elem);

const countdown = function (config) {
  const targetDate = select(config.target).getAttribute('data-date').split('-');
  const targetDay = parseInt(targetDate[0]);
  const targetMonth = parseInt(targetDate[1]);
  const targetYear = parseInt(targetDate[2]);
  let targetTime = select(config.target).getAttribute('data-time');
  let targetHour = 0,
    targetMin = 0;

  if (targetTime != null) {
    targetTime = targetTime.split(':');
    targetHour = parseInt(targetTime[0]);
    targetMin = parseInt(targetTime[1]);
  }

  // Set the date we're counting down to
  const countDownDate = new Date(
    targetYear,
    targetMonth - 1,
    targetDay,
    targetHour,
    targetMin
  ).getTime();

  select(config.target + ' .day .label').innerHTML = config.dayLabel;
  select(config.target + ' .hour .label').innerHTML = config.hourLabel;
  select(config.target + ' .min .label').innerHTML = config.minLabel;
  select(config.target + ' .sec .label').innerHTML = config.secLabel;

  const updateTime = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Stop countdown when zero
    if (distance <= 0) {
      // Hide countdown
      const countdownEl = document.querySelector('#countdown');
      if (countdownEl) countdownEl.style.display = 'none';

      // Show CTA
      const ctaEl = document.querySelector('#cta-btn');
      if (ctaEl) ctaEl.style.display = 'block';

      // Update header text
      const headerEl = document.querySelector('#header');
      if (headerEl) headerEl.innerText = 'We Are Live!';

      config.callback();
      return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    select(config.target + ' .day .num').innerHTML = addZero(days);
    select(config.target + ' .hour .num').innerHTML = addZero(hours);
    select(config.target + ' .min .num').innerHTML = addZero(minutes);
    select(config.target + ' .sec .num').innerHTML = addZero(seconds);

    requestAnimationFrame(updateTime);
  };

  updateTime();
};

const addZero = (x) => (x < 10 && x >= 0 ? '0' + x : x);

// Example usage
countdown({
  target: '#countdown',
  cta: '#cta-btn',
  header: '#header',
  dayLabel: 'Days',
  hourLabel: 'Hours',
  minLabel: 'Minutes',
  secLabel: 'Seconds',
  callback: () => console.log('Countdown finished!'),
});
