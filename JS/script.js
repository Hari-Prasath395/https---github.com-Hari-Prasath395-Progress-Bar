const container = document.querySelector(".container");

const courses = [
  { course: "HTML", percent: 99, color: "#27ae60" },
  { course: "CSS", percent: 77, color: "#d35400" },
  { course: "JS", percent: 70, color: "#8e44ad" },
];

courses.forEach((course) => {
  container.innerHTML += `
    <div class="progress-group">
      <div class="circular-progress" style="background-color: ${course.color}">
        <span class="course-value" style="color: ${course.color}">0%</span>
      </div>
      <label class="text" style="color: ${course.color}">${course.course}</label>
    </div>`;
});

const progressGroups = document.querySelectorAll(".progress-group");

progressGroups.forEach((progress, index) => {
  let progressStart = 0;
  let progressEnd = courses[index].percent;
  let speed = 5;

  let progressTimer = setInterval(() => {
    progressStart++;
    if (progressStart === progressEnd) {
      clearInterval(progressTimer);
    }

    progress.querySelector(".circular-progress").style.background = `conic-gradient(${courses[index].color} ${
      3.6 * progressStart
    }deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML = progressStart + "%";
  }, speed);
});
