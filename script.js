/* ===== MOBILE MENU ===== */
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if(menu){
  menu.onclick = () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "#fff";
    nav.style.padding = "15px";
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  };
}

/* ===== FOOTER YEAR ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== FADE-IN ANIMATION ===== */
const fades = document.querySelectorAll(".fade");

function reveal(){
  fades.forEach(sec =>{
    const pos = sec.getBoundingClientRect().top;
    if(pos < window.innerHeight - 40){
      sec.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* ===== CONTACT FORM (demo only) ===== */
const form = document.getElementById("contactForm");
if(form){
  form.onsubmit = e =>{
    e.preventDefault();
    document.getElementById("formMsg").style.display = "block";
    form.reset();
  };
}

/* ===== COURSE PAGE LOADER ===== */
if(window.location.pathname.includes("course.html")){
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const courses = {
    frontend:{
      name:"Frontend Development",
      info:"Beginner • 8 Weeks",
      desc:"Learn HTML, CSS, JavaScript, responsive design and real projects.",
      img:"https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      list:["HTML & CSS","JavaScript Basics","Responsive Design","DOM & API","Projects"]
    },
    backend:{
      name:"Backend Development",
      info:"Intermediate • 10 Weeks",
      desc:"Learn Node.js, APIs, databases and deployment.",
      img:"https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_1280.jpg",
      list:["Node.js","REST APIs","MongoDB","Auth","Deployments"]
    },
    uiux:{
      name:"UI / UX Design",
      info:"Beginner • 6 Weeks",
      desc:"Learn design thinking, wireframing, prototyping and visual design.",
      img:"https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_1280.jpg",
      list:["Research","Wireframes","Prototype","UI Design"]
    },
    devops:{
      name:"Cloud & DevOps",
      info:"Intermediate • 12 Weeks",
      desc:"Learn cloud basics, CI/CD, Docker and deployments.",
      img:"https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      list:["Linux","Docker","CI/CD","Cloud Deployments"]
    },
    cybersecurity:{
      name:"Cybersecurity",
      info:"Intermediate • 12 Weeks",
      desc:"Learn network security, risk management, incident response.",
      img:"https://cdn.pixabay.com/photo/2017/11/19/23/56/hacking-2964100_1280.jpg",
      list:["TCP/IP","Linux","Python","Malware and phishing"]
    },
  };

  const c = courses[id] || courses.frontend;

  document.getElementById("courseName").textContent = c.name;
  document.getElementById("courseInfo").textContent = c.info;
  document.getElementById("courseDesc").textContent = c.desc;
  document.getElementById("courseImg").src = c.img;

  const listBox = document.getElementById("courseList");
  c.list.forEach(i =>{
    const li = document.createElement("li");
    li.textContent = i;
    listBox.appendChild(li);
});
}

/* ===== CAREER PAGE DYNAMIC LOADER ===== */
if(window.location.pathname.includes("career.html")){
  
  const careers = {
    software:{
      title:"Software Engineering",
      img:"https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg",
      desc:"Software engineering is one of the most rewarding and in-demand career paths in the world. It gives you the power to build applications, websites, tools, and solutions used by millions of people. With strong problem-solving skills and creativity, software engineers enjoy high salaries, remote opportunities, and global relevance."
    },

    data:{
      title:"Data Analyst",
      img:"https://cdn.pixabay.com/photo/2017/10/29/14/49/data-2899903_1280.jpg",
      desc:"Data science is the career of the future. Businesses depend on data experts to understand trends, make decisions, and create intelligent solutions. Data scientists work with statistics, machine learning, and visualization to uncover insights. It's a high-paying, flexible career with endless opportunities."
    },

    design:{
      title:"UI/UX & Product Design",
      img:"https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg",
      desc:"Product design is about creating beautiful, intuitive interfaces that users love. UI/UX designers help shape digital experiences across apps and websites. With creativity and user empathy, designers play a major role in product success. This career blends art, psychology, and technology into something powerful."
    },

    devops:{
      title:"Cloud & DevOps Engineer",
      img:"https://cdn.pixabay.com/photo/2018/02/15/18/29/devops-3155972_1280.jpg",
      desc:"Cloud & DevOps professionals build, automate, and deploy modern systems. They ensure applications run smoothly, securely, and efficiently. With cloud computing growing rapidly, DevOps skills are highly demanded and lead to some of the highest-paying roles in tech."
    }
  };

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const c = careers[id] || careers.software;

  document.getElementById("careerTitle").textContent = c.title;
  document.getElementById("careerDesc").textContent = c.desc;
  document.getElementById("careerImg").src = c.img;
}

/* ======================
   JOB LISTINGS
   ====================== */
/* const menubtn = document.getElementById("menuIcon");
const navbtn = document.getElementById("navMenu"); */


if (window.location.pathname.includes("jobs.html")) {

  const jobs = [
    {
      id:"frontend-int",
      title:"Frontend Developer Intern",
      company:"TechSphere",
      location:"Remote",
      type:"internship",
      logo:"https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg"
    },
    {
      id:"uiux-designer",
      title:"UI/UX Designer",
      company:"Nova Creative",
      location:"Lagos, Nigeria",
      type:"full-time",
      logo:"https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg"
    },
    {
      id:"data-analyst",
      title:"Data Analyst",
      company:"BrightData Co.",
      location:"Hybrid (Abuja)",
      type:"hybrid",
      logo:"https://cdn.pixabay.com/photo/2017/10/29/14/49/data-2899903_1280.jpg"
    },
    {
      id:"customer-support",
      title:"Customer Support Officer",
      company:"BlueWave Ltd.",
      location:"Lagos",
      type:"full-time",
      logo:"https://cdn.pixabay.com/photo/2024/02/28/15/47/call-8602325_1280.png"
    },
    {
      id:"remote-writer",
      title:"Remote Content Writer",
      company:"WriteFlow",
      location:"Remote",
      type:"remote",
      logo:"https://cdn.pixabay.com/photo/2021/09/19/15/26/typewriter-6638277_1280.jpg"
    }
  ];

  const jobList = document.getElementById("jobList");
  const searchInput = document.getElementById("jobSearch");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function displayJobs(filter="all", search="") {
    jobList.innerHTML = "";

    const filtered = jobs.filter(job => {
      const matchesFilter = filter === "all" || job.type === filter;
      const matchesSearch =
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search);
      return matchesFilter && matchesSearch;
    });

    filtered.forEach(job => {
      jobList.innerHTML += `
        <div class="job-card fade">
          <img src="${job.logo}" alt="">
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <p>${job.location}</p>
          <span class="job-type">${job.type}</span>
          <a href="job-details.html?id=${job.id}">View Job</a>
        </div>
      `;
    });
  }

  displayJobs();

  // SEARCH
  searchInput.addEventListener("keyup", () => {
    displayJobs(
      document.querySelector(".filter-btn.active").dataset.type,
      searchInput.value.toLowerCase()
    );
  });

  // FILTERS
  filterBtns.forEach(btn =>
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");
      displayJobs(btn.dataset.type, searchInput.value.toLowerCase());
    })
  );
}

/* ======================
   JOB DETAILS PAGE LOADER
   ====================== */

if (window.location.href.includes("job-details")) {

  const jobs = {
    "frontend-int": {
      title: "Frontend Developer Intern",
      company: "TechSphere",
      location: "Remote",
      type: "Internship",
      img: "https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg",
      desc: "As a Frontend Developer Intern, you will assist in building responsive, interactive, and visually appealing user interfaces.",
      responsibilities: [
        "Assist in developing frontend components",
        "Work with HTML, CSS, JavaScript",
        "Collaborate with the design team",
        "Test UI for responsiveness"
      ],
      requirements: [
        "Basic HTML, CSS, JavaScript",
        "Willingness to learn",
        "Good communication skills"
      ]
    },

    "uiux-designer": {
      title: "UI/UX Designer",
      company: "Nova Creative",
      location: "Lagos, Nigeria",
      type: "Full-Time",
      img: "https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg",
      desc: "Work with a growing creative team to design beautiful and functional digital products.",
      responsibilities: [
        "Create wireframes & prototypes",
        "Conduct user research",
        "Design UI layouts",
        "Collaborate with developers"
      ],
      requirements: [
        "Understanding of UI/UX principles",
        "Portfolio of design work",
        "Team collaboration ability"
      ]
    },

    "data-analyst": {
      title: "Data Analyst",
      company: "BrightData Co.",
      location: "Hybrid (Abuja)",
      type: "Hybrid",
      img: "https://cdn.pixabay.com/photo/2017/10/29/14/49/data-2899903_1280.jpg",
      desc: "Analyze datasets, identify trends and generate useful insights for business growth.",
      responsibilities: [
        "Analyze datasets",
        "Prepare reports",
        "Work with Excel & SQL",
        "Collaborate with strategy teams"
      ],
      requirements: [
        "Basic statistics",
        "Analytical mindset",
        "Attention to detail"
      ]
    },

    "customer-support": {
      title: "Customer Support Officer",
      company: "BlueWave Ltd.",
      location: "Lagos",
      type: "Full-Time",
      img: "https://cdn.pixabay.com/photo/2024/02/28/15/47/call-8602325_1280.png",
      desc: "Provide customer assistance, answer inquiries, and support users with product-related issues.",
      responsibilities: [
        "Respond to customer queries",
        "Maintain support logs",
        "Help resolve complaints"
      ],
      requirements: [
        "Good communication",
        "Basic computer skills",
        "Customer friendliness"
      ]
    },

    "remote-writer": {
      title: "Remote Content Writer",
      company: "WriteFlow",
      location: "Remote",
      type: "Remote",
      img: "https://cdn.pixabay.com/photo/2021/09/19/15/26/typewriter-6638277_1280.jpg",
      desc: "Write engaging content for tech, business, lifestyle and digital products.",
      responsibilities: [
        "Write blogs & articles",
        "Research topics",
        "Edit drafts"
      ],
      requirements: [
        "Good writing skills",
        "Internet access",
        "Creativity"
      ]
    }
  };

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const job = jobs[id];

  if (job) {
    document.getElementById("jobTitle").textContent = job.title;
    document.getElementById("jobCompany").textContent = job.company;
    document.getElementById("jobLocation").textContent = job.location;
    document.getElementById("jobType").textContent = job.type;
    document.getElementById("jobImg").src = job.img;
    document.getElementById("jobDesc").textContent = job.desc;

    const respList = document.getElementById("jobResp");
    job.responsibilities.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      respList.appendChild(li);
    });

    const reqList = document.getElementById("jobReq");
    job.requirements.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      reqList.appendChild(li);
    });
  }
}

/* ======================
   LOGIN FORM (demo only)
   ====================== */

if (window.location.href.includes("login")) {

  const loginForm = document.getElementById("loginForm");

  loginForm.onsubmit = (e) => {
    e.preventDefault();
    document.getElementById("loginMsg").style.display = "block";
    loginForm.reset();
  };
}