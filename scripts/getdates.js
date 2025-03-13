 document.getElementById("currentyear").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

        const courses = [
            { name: "WDD 131 - HTML & CSS", category: "wdd", completed: true, credits: 3 },
            { name: "CSE 123 - Programming with JavaScript", category: "cse", completed: false, credits: 4 },
            { name: "WDD 132 - JavaScript & DOM Manipulation", category: "wdd", completed: true, credits: 3 },
            { name: "CSE 234 - Database Systems", category: "cse", completed: false, credits: 4 }
        ];

        function displayCourses(filteredCourses) {
            const courseListDiv = document.getElementById("coursesList");
            courseListDiv.innerHTML = "";

            let totalCredits = 0;

            filteredCourses.forEach(course => {
                const courseDiv = document.createElement("div");
                courseDiv.classList.add("course");
                courseDiv.style.border = "1px solid #ccc";
                courseDiv.style.padding = "10px";
                courseDiv.style.margin = "10px 0";

                const courseTitle = document.createElement("h3");
                courseTitle.textContent = course.name;

                const courseStatus = document.createElement("p");
                courseStatus.textContent = course.completed ? "Completed" : "Not Completed";
                courseStatus.style.color = course.completed ? "green" : "red";

                const courseCredits = document.createElement("p");
                courseCredits.textContent = `Credits: ${course.credits}`;

                courseDiv.appendChild(courseTitle);
                courseDiv.appendChild(courseStatus);
                courseDiv.appendChild(courseCredits);

                courseListDiv.appendChild(courseDiv);

                totalCredits += course.credits;
            });

            document.getElementById("totalCredits").textContent = totalCredits;
        }

        function filterCourses(category) {
            let filteredCourses = [];
            if (category === "all") {
                filteredCourses = courses;
            } else {
                filteredCourses = courses.filter(course => course.category === category);
            }
            displayCourses(filteredCourses);
        }

        displayCourses(courses);