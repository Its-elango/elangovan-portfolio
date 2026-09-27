
document.addEventListener("DOMContentLoaded", () => {


    const chatbotToggle =
        document.getElementById("chatbotToggle");

    const chatbotWindow =
        document.getElementById("chatbotWindow");

    const chatbotClose =
        document.getElementById("chatbotClose");

    const chatbotInput =
        document.getElementById("chatbotInput");

    const chatbotSend =
        document.getElementById("chatbotSend");

    const chatbotMessages =
        document.getElementById("chatbotMessages");

    if (
        !chatbotToggle ||
        !chatbotWindow ||
        !chatbotInput ||
        !chatbotSend ||
        !chatbotMessages
    ) {
        console.warn(
            "Portfolio chatbot: required elements not found."
        );

        return;
    }
    const sectionMap = {

        about: [
            "about"
        ],

        experience: [
            "experience"
        ],

        projects: [
            "projects"
        ],

        certifications: [
            "certifications"
        ],

        talks: [
            "talks"
        ],

        contact: [
            "contact"
        ]

    };

    function cleanText(text) {

        if (!text) {
            return "";
        }

        return text
            .replace(/\s+/g, " ")
            .trim();
    }

    function limitResponse(
        text,
        maxLength = 500
    ) {

        if (!text) {
            return "";
        }

        text = cleanText(text);

        if (text.length <= maxLength) {
            return text;
        }

        return (
            text
                .substring(0, maxLength)
                .replace(/\s+\S*$/, "") +
            "..."
        );
    }

    function getSectionContent(sectionName) {

        const ids =
            sectionMap[sectionName] || [];


        for (const id of ids) {

            const element =
                document.getElementById(id);


            if (element) {

                return cleanText(
                    element.innerText
                );

            }

        }

        return null;
    }


    function getSkillsData() {

        if (
            typeof skills !== "undefined"
        ) {
            return skills;
        }


        if (
            window.skills
        ) {
            return window.skills;
        }


        console.warn(
            "Portfolio chatbot: skills data not found."
        );

        return null;
    }
    function getAllSkills() {

        const skillsData =
            getSkillsData();


        if (!skillsData) {
            return null;
        }


        return Object.entries(
            skillsData
        )
            .map(
                ([category, skillList]) => {
                    const shortList =
                        skillList.slice(0, 6);


                    return `${category}: ${shortList.join(", ")}`;

                }
            )
            .join("\n");
    }

    function getCategorySkills(
        category
    ) {

        const skillsData =
            getSkillsData();


        if (!skillsData) {
            return null;
        }


        const matchedCategory =
            Object.keys(skillsData)
                .find(
                    key =>
                        key.toLowerCase() ===
                        category.toLowerCase()
                );


        if (!matchedCategory) {
            return null;
        }


        return skillsData[
            matchedCategory
        ].join(", ");
    }


    function getTestimonialsData() {

        if (
            typeof testimonials !== "undefined"
        ) {
            return testimonials;
        }


        if (
            window.testimonials
        ) {
            return window.testimonials;
        }


        console.warn(
            "Portfolio chatbot: testimonials data not found."
        );

        return null;
    }

    function getTestimonialsAnswer() {

        const data =
            getTestimonialsData();


        if (
            !data ||
            !Array.isArray(data) ||
            data.length === 0
        ) {
            return null;
        }

        return data
            .slice(0, 2)
            .map(
                testimonial => {

                    const message =
                        cleanText(
                            testimonial.message
                                .replace(/^"|"$/g, "")
                        );


                    const shortMessage =
                        limitResponse(
                            message,
                            180
                        );


                    return `${testimonial.name}: ${shortMessage}`;

                }
            )
            .join("\n\n");
    }

    function detectIntent(
        question
    ) {

        const q =
            question
                .toLowerCase()
                .trim();

        if (
            q.includes("artificial intelligence") ||
            q.includes("machine learning") ||
            q.includes("ai/ml") ||
            q.includes("ai ml") ||
            q.includes("ai work") ||
            q.includes("ml work") ||
            q.includes("biometric") ||
            q.includes("biometrics") ||
            q.includes("face liveness") ||
            q.includes("voice biometric") ||
            q.includes("liveness") ||
            q.includes("identity verification") ||
            q.includes("face verification") ||
            q.includes("facial verification")
        ) {
            return "ai";
        }


        /* =============================================
           ABOUT
        ============================================= */

        if (
            q.includes("who is elangovan") ||
            q.includes("who is elango") ||
            q.includes("tell me about elangovan") ||
            q.includes("tell me about elango") ||
            q.includes("about elangovan") ||
            q.includes("about elango") ||
            q.includes("about him") ||
            q.includes("his profile") ||
            q.includes("profile") ||
            q.includes("summary") ||
            q.includes("what does he do") ||
            q.includes("what does elangovan do")
        ) {
            return "about";
        }


        /* =============================================
           EXPERIENCE / CAREER
        ============================================= */

        if (
            q.includes("experience") ||
            q.includes("work experience") ||
            q.includes("professional experience") ||
            q.includes("career") ||
            q.includes("work history") ||
            q.includes("where does he work") ||
            q.includes("where did he work") ||
            q.includes("company") ||
            q.includes("companies") ||
            q.includes("worked at") ||
            q.includes("working at") ||
            q.includes("job") ||
            q.includes("role") ||
            q.includes("designation") ||
            q.includes("years of experience") ||
            q.includes("how many years")
        ) {
            return "experience";
        }


        /* =============================================
           PROJECTS
        ============================================= */

        if (
            q.includes("project") ||
            q.includes("projects") ||
            q.includes("built") ||
            q.includes("developed") ||
            q.includes("what has he built") ||
            q.includes("what did he build") ||
            q.includes("what has he developed") ||
            q.includes("portfolio projects") ||
            q.includes("applications he built") ||
            q.includes("systems he built")
        ) {
            return "projects";
        }


        /* =============================================
           BACKEND
        ============================================= */

        if (
            q.includes("backend") ||
            q.includes("back end") ||
            q.includes("server side") ||
            q.includes(".net") ||
            q.includes("asp.net") ||
            q.includes("web api") ||
            q.includes("api development") ||
            q.includes("c#")
        ) {
            return "backend";
        }


        /* =============================================
           FRONTEND
        ============================================= */

        if (
            q.includes("frontend") ||
            q.includes("front end") ||
            q.includes("angular") ||
            q.includes("blazor") ||
            q.includes("javascript") ||
            q.includes("typescript") ||
            q.includes("html") ||
            q.includes("css")
        ) {
            return "frontend";
        }


        /* =============================================
           DATABASE
        ============================================= */

        if (
            q.includes("database") ||
            q.includes("databases") ||
            q.includes("sql server") ||
            q.includes("mysql") ||
            q.includes("qdrant") ||
            q.includes("vector database")
        ) {
            return "databases";
        }


        /* =============================================
           DEVOPS
        ============================================= */

        if (
            q.includes("devops") ||
            q.includes("docker") ||
            q.includes("kubernetes") ||
            q.includes("k8s") ||
            q.includes("jenkins") ||
            q.includes("azure devops") ||
            q.includes("harbor") ||
            q.includes("ci/cd") ||
            q.includes("cicd") ||
            q.includes("linux") ||
            q.includes("deployment") ||
            q.includes("infrastructure")
        ) {
            return "devops";
        }


        /* =============================================
           MONITORING
        ============================================= */

        if (
            q.includes("monitoring") ||
            q.includes("observability") ||
            q.includes("opentelemetry") ||
            q.includes("jaeger") ||
            q.includes("postman") ||
            q.includes("locust") ||
            q.includes("tracing")
        ) {
            return "monitoring";
        }


        /* =============================================
           CERTIFICATIONS
        ============================================= */

        if (
            q.includes("certification") ||
            q.includes("certifications") ||
            q.includes("certificate") ||
            q.includes("certificates") ||
            q.includes("credential") ||
            q.includes("credentials")
        ) {
            return "certifications";
        }


        /* =============================================
           TALKS
        ============================================= */

        if (
            q.includes("talk") ||
            q.includes("talks") ||
            q.includes("technical talk") ||
            q.includes("speaker") ||
            q.includes("speaking") ||
            q.includes("presentation") ||
            q.includes("seminar") ||
            q.includes("guest speaker")
        ) {
            return "talks";
        }


        /* =============================================
           TESTIMONIALS
        ============================================= */

        if (
            q.includes("testimonial") ||
            q.includes("testimonials") ||
            q.includes("recommendation") ||
            q.includes("recommendations") ||
            q.includes("feedback") ||
            q.includes("what do people say") ||
            q.includes("what do colleagues say") ||
            q.includes("colleagues say") ||
            q.includes("reviews")
        ) {
            return "testimonials";
        }


        /* =============================================
           CONTACT
        ============================================= */

        if (
            q.includes("contact") ||
            q.includes("email") ||
            q.includes("reach him") ||
            q.includes("reach elangovan") ||
            q.includes("hire him") ||
            q.includes("hire elangovan") ||
            q.includes("hiring") ||
            q.includes("how can i contact")
        ) {
            return "contact";
        }


        if (
            q.includes("skill") ||
            q.includes("skills") ||
            q.includes("technology") ||
            q.includes("technologies") ||
            q.includes("tech stack") ||
            q.includes("technical stack") ||
            q.includes("tools")
        ) {
            return "skills";
        }


        return "unknown";
    }


    /* =====================================================
       GET ANSWER
    ===================================================== */

    function getAnswer(
        intent
    ) {

        if (
            intent === "skills"
        ) {

            const content =
                getAllSkills();


            if (content) {

                return {

                    answer:
                        `Elangovan's main technical skills:\n\n${content}`,

                    followUp:
                        "Would you like to know about his backend skills?"

                };

            }
        }


        if (
            intent === "backend"
        ) {

            const content =
                getCategorySkills(
                    "Backend"
                );


            if (content) {

                return {

                    answer:
                        `Backend: ${content}`,

                    followUp:
                        "Would you like to know about his experience?"

                };

            }
        }


        /* =============================================
           FRONTEND
        ============================================= */

        if (
            intent === "frontend"
        ) {

            const content =
                getCategorySkills(
                    "Frontend"
                );


            if (content) {

                return {

                    answer:
                        `Frontend: ${content}`,

                    followUp:
                        "Would you like to know about his backend skills?"

                };

            }
        }


        /* =============================================
           DATABASES
        ============================================= */

        if (
            intent === "databases"
        ) {

            const content =
                getCategorySkills(
                    "Databases"
                );


            if (content) {

                return {

                    answer:
                        `Databases: ${content}`,

                    followUp:
                        "Would you like to know about his DevOps?"

                };

            }
        }


        /* =============================================
           DEVOPS
        ============================================= */

        if (
            intent === "devops"
        ) {

            const content =
                getCategorySkills(
                    "DevOps & Infrastructure"
                );


            if (content) {

                return {

                    answer:
                        `DevOps & Infrastructure: ${content}`,

                    followUp:
                        "Would you like to know about his projects?"

                };

            }
        }


        /* =============================================
           MONITORING
        ============================================= */

        if (
            intent === "monitoring"
        ) {

            const content =
                getCategorySkills(
                    "Monitoring & Tools"
                );


            if (content) {

                return {

                    answer:
                        `Monitoring & Tools: ${content}`,

                    followUp:
                        "Would you like to know about his projects?"

                };

            }
        }


        /* =============================================
           AI / ML / BIOMETRICS
        ============================================= */

        if (
            intent === "ai"
        ) {

            return {

                answer:
                    "Elangovan has experience with AI/ML-related biometric solutions, including face liveness, identity verification, and biometric authentication.",

                followUp:
                    "Would you like to explore his projects?"

            };
        }


        /* =============================================
           ABOUT
        ============================================= */

        if (
            intent === "about"
        ) {

            const content =
                getSectionContent(
                    "about"
                );


            if (content) {

                return {

                    answer:
                        limitResponse(
                            content,
                            420
                        ),

                    followUp:
                        "Would you like to know about his technical skills?"

                };

            }
        }


        /* =============================================
           EXPERIENCE
        ============================================= */

        if (
            intent === "experience"
        ) {

            const content =
                getSectionContent(
                    "experience"
                );


            if (content) {

                return {

                    answer:
                        limitResponse(
                            content,
                            500
                        ),

                    followUp:
                        "Would you like to explore his projects?"

                };

            }
        }


        /* =============================================
           PROJECTS
        ============================================= */

        if (
            intent === "projects"
        ) {

            const content =
                getSectionContent(
                    "projects"
                );


            if (content) {

                return {

                    answer:
                        limitResponse(
                            content,
                            500
                        ),

                    followUp:
                        "Would you like to know about his AI and biometric work?"

                };

            }
        }


        /* =============================================
           CERTIFICATIONS
        ============================================= */

        if (
            intent === "certifications"
        ) {

            const content =
                getSectionContent(
                    "certifications"
                );


            if (content) {

                return {

                    answer:
                        limitResponse(
                            content,
                            400
                        ),

                    followUp:
                        "Would you like to know about his experience?"

                };

            }
        }


        /* =============================================
           TALKS
        ============================================= */

        if (
            intent === "talks"
        ) {

            const content =
                getSectionContent(
                    "talks"
                );


            if (content) {

                return {

                    answer:
                        limitResponse(
                            content,
                            400
                        ),

                    followUp:
                        "Would you like to explore his projects?"

                };

            }
        }


        /* =============================================
           TESTIMONIALS
        ============================================= */

        if (
            intent === "testimonials"
        ) {

            const content =
                getTestimonialsAnswer();


            if (content) {

                return {

                    answer:
                        `People who have worked with Elangovan have highlighted:\n\n${content}`,

                    followUp:
                        "Would you like to know about his experience?"

                };

            }
        }


        /* =============================================
           CONTACT
        ============================================= */

        if (
            intent === "contact"
        ) {

            const content =
                getSectionContent(
                    "contact"
                );


            if (content) {

                return {

                    answer:
                        limitResponse(
                            content,
                            350
                        ),

                    followUp:
                        "Would you like to know more about his experience?"

                };

            }
        }


        /* =============================================
           UNKNOWN
        ============================================= */

        return {

            answer:
                "I can help you explore Elangovan's portfolio.",

            followUp:
                "Try asking about his skills, experience, projects, AI/ML work, certifications, or testimonials."

        };
    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(
        text
    ) {

        const div =
            document.createElement(
                "div"
            );

        div.textContent =
            text;

        return div.innerHTML;
    }


    /* =====================================================
       ADD MESSAGE
    ===================================================== */

    function addMessage(
        message,
        type
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            `chat-message ${type}`;


        element.innerHTML =
            escapeHTML(
                message
            ).replace(
                /\n/g,
                "<br>"
            );


        chatbotMessages.appendChild(
            element
        );


        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    /* =====================================================
       FOLLOW-UP BUTTON
    ===================================================== */

    function addFollowUp(
        question
    ) {

        if (!question) {
            return;
        }


        const container =
            document.createElement(
                "div"
            );


        container.className =
            "chatbot-followup";


        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.textContent =
            question;


        button.addEventListener(
            "click",
            () => {

                chatbotInput.value =
                    question;

                sendMessage();

            }
        );


        container.appendChild(
            button
        );


        chatbotMessages.appendChild(
            container
        );


        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    /* =====================================================
       SEND MESSAGE
    ===================================================== */

    function sendMessage() {

        const question =
            chatbotInput.value.trim();


        if (!question) {
            return;
        }


        /* User message */

        addMessage(
            question,
            "user"
        );


        chatbotInput.value =
            "";


        /* Generate answer */

        setTimeout(
            () => {

                const intent =
                    detectIntent(
                        question
                    );


                const result =
                    getAnswer(
                        intent
                    );


                addMessage(
                    result.answer,
                    "bot"
                );


                /* Follow-up */

                if (
                    result.followUp
                ) {

                    setTimeout(
                        () => {

                            addFollowUp(
                                result.followUp
                            );

                        },
                        200
                    );

                }

            },
            200
        );
    }


    /* =====================================================
       OPEN CHATBOT
    ===================================================== */

    chatbotToggle.addEventListener(
        "click",
        () => {

            chatbotWindow.classList.toggle(
                "active"
            );


            if (
                chatbotWindow.classList.contains(
                    "active"
                )
            ) {

                setTimeout(
                    () => {

                        chatbotInput.focus();

                    },
                    100
                );

            }

        }
    );


    /* =====================================================
       CLOSE CHATBOT
    ===================================================== */

    if (chatbotClose) {

        chatbotClose.addEventListener(
            "click",
            () => {

                chatbotWindow.classList.remove(
                    "active"
                );

            }
        );

    }


    /* =====================================================
       SEND BUTTON
    ===================================================== */

    chatbotSend.addEventListener(
        "click",
        sendMessage
    );


    /* =====================================================
       ENTER KEY
    ===================================================== */

    chatbotInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );


    /* =====================================================
       SUGGESTED QUESTIONS
    ===================================================== */

    document
        .querySelectorAll(
            ".chatbot-suggestions button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const question =
                            button.dataset.question ||
                            button.textContent.trim();


                        if (!question) {
                            return;
                        }


                        chatbotInput.value =
                            question;


                        sendMessage();

                    }
                );

            }
        );


    /* =====================================================
       INITIAL MESSAGE
    ===================================================== */

    if (
        chatbotMessages.children.length === 0
    ) {

        addMessage(
            "Hi! I'm Elangovan's portfolio assistant. What would you like to know?",
            "bot"
        );

    }


    console.log(
        "Elangovan Portfolio Chatbot initialized."
    );

});