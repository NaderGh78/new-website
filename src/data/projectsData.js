//SKILLS IMGS
import html from "../../src/assets/images/projects/skills/html.png";
import css from "../../src/assets/images/projects/skills/css.png";
import js from "../../src/assets/images/projects/skills/js.png";
import react from "../../src/assets/images/projects/skills/react.png";
import php from "../../src/assets/images/projects/skills/php.png";
import boostsrp from "../../src/assets/images/projects/skills/bb.png";
import jquery from "../../src/assets/images/projects/skills/jqurey.png";

// PROJECTS IMGS
import comfy from "../../src/assets/images/projects/projects-imgs/comfy-sc.png";
import fiveNojom from "../../src/assets/images/projects/projects-imgs/5noujom.png";
import msl from "../../src/assets/images/projects/projects-imgs/MSL.png";
import worldPr from "../../src/assets/images/projects/projects-imgs/world_pres.png";
import mmClinic from "../../src/assets/images/projects/projects-imgs/mm-clinic.png";
import primoPart from "../../src/assets/images/projects/projects-imgs/primo_parts.png";
import primoCar from "../../src/assets/images/projects/projects-imgs/primocar.png";
import freelend from "../../src/assets/images/projects/projects-imgs/freelend.png";
import cafeCapetania from "../../src/assets/images/projects/projects-imgs/cafe_capitania.png";
import primoService from "../../src/assets/images/projects/projects-imgs/primoservice.png";
import myBlog from "../../src/assets/images/projects/projects-imgs/my-blog-sc.png";
import primoWeb from "../../src/assets/images/projects/projects-imgs/primoweb.png";
import socialMedia from "../../src/assets/images/projects/projects-imgs/social-sc.PNG";
import codePene from "../../src/assets/images/projects/projects-imgs/codepen.png";
import myCv from "../../src/assets/images/projects/projects-imgs/my-cv.png";
import myCv1 from "../../src/assets/images/projects/projects-imgs/my-cv1.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const projectsData = [
    {
        projId: 1,
        projImg: comfy,
        projName: "comfy",
        projRubbon: true,
        projRubbonTitle: "react js",
        projSkillsImgArr: [html, css, boostsrp, js, react],
        projRoutName: "comfy",
        projLive: "https://nadergh78.github.io/comfy-ecommerce/#/",
        projGithub: "https://github.com/NaderGh78/comfy-ecommerce",
        projFilter: "react js"
    },
    {
        projId: 2,
        projImg: primoCar,
        projName: "Primo Car",
        projRubbon: true,
        projRubbonTitle: "php",
        projSkillsImgArr: [html, css, boostsrp, js, jquery, php],
        projRoutName: "primo-car",
        projLive: "https://bp-labs.co/primocar/",
        projGithub: "",
        projFilter: "php"
    },
    {
        projId: 3,
        projImg: msl,
        projName: "msl",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "msl",
        projLive: "https://nadergh78.github.io/MSL/",
        projGithub: "https://github.com/NaderGh78/MSL",
        projFilter: "html css js"
    },
    {
        projId: 4,
        projImg: mmClinic,
        projName: "MM Clinic",
        projRubbon: true,
        projRubbonTitle: "react js",
        projSkillsImgArr: [html, css, boostsrp, js, react],
        projRoutName: "MM-Clinic",
        projLive: "https://nadergh78.github.io/Dr/",
        projGithub: "https://github.com/NaderGh78/Dr",
        projFilter: "react js"
    },
    {
        projId: 5,
        projImg: freelend,
        projName: "Freelend",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "freelend",
        projLive: "https://nadergh78.github.io/freelend/",
        projGithub: "https://github.com/NaderGh78/freelend",
        projFilter: "html css js"
    },
    {
        projId: 6,
        projImg: fiveNojom,
        projName: "5njoum",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "5njoum",
        projLive: "https://nadergh78.github.io/5njoum/",
        projGithub: "https://github.com/NaderGh78/5njoum",
        projFilter: "html css js"
    },
    {
        projId: 7,
        projImg: primoPart,
        projName: "Primo parts",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "primo-parts",
        projLive: "https://nadergh78.github.io/Primoparts/",
        projGithub: "https://github.com/NaderGh78/Primoparts",
        projFilter: "html css js"
    },
    {
        projId: 8,
        projImg: cafeCapetania,
        projName: "Cafe Capetania",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "cafe-capetania",
        projLive: "https://www.cafecapitania.com/",
        projGithub: "",
        projFilter: "html css js"
    },
    {
        projId: 9,
        projImg: msl,
        projName: "Msl React",
        projRubbon: true,
        projRubbonTitle: "react js",
        projSkillsImgArr: [html, css, boostsrp, js, react],
        projRoutName: "msl-react",
        projLive: "https://nadergh78.github.io/Msl-React-New/",
        projGithub: "https://github.com/NaderGh78/Msl-React-New",
        projFilter: "react js"
    },
    {
        projId: 10,
        projImg: primoService,
        projName: "Primo Service",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "primo-service",
        projLive: "https://nadergh78.github.io/primoservice/",
        projGithub: "https://github.com/NaderGh78/primoservice",
        projFilter: "html css js"
    },
    {
        projId: 11,
        projImg: myBlog,
        projName: "Simple Blog",
        projRubbon: true,
        projRubbonTitle: "react js",
        projSkillsImgArr: [html, css, boostsrp, , js, react],
        projRoutName: "simple-blog",
        projLive: "https://nadergh78.github.io/simple-blog/",
        projGithub: "https://github.com/NaderGh78/simple-blog",
        projFilter: "others"
    },
    {
        projId: 12,
        projImg: primoWeb,
        projName: "Primo Web",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "primo-web",
        projLive: "https://nadergh78.github.io/primoweb/",
        projGithub: "https://github.com/NaderGh78/primoweb",
        projFilter: "html css js"
    },
    {
        projId: 13,
        projImg: worldPr,
        projName: "world presentation",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "world-presentation",
        projLive: "https://nadergh78.github.io/world-presentation/",
        projGithub: "https://github.com/NaderGh78/world-presentation",
        projFilter: "html css js"
    },
    {
        projId: 14,
        projImg: socialMedia,
        projName: "Simple Social Media",
        projRubbon: true,
        projRubbonTitle: "react js",
        projSkillsImgArr: [html, css, boostsrp, js, react],
        projRoutName: "simple-social-media",
        projLive: "https://nadergh78.github.io/social-media/#/",
        projGithub: "https://github.com/NaderGh78/social-media",
        projFilter: "others"
    },
    {
        projId: 15,
        projImg: codePene,
        projName: "My Codepen",
        projRubbon: true,
        projRubbonTitle: "others",
        projSkillsImgArr: [html, css, js],
        projRoutName: "my-codepen",
        projLive: "https://codepen.io/matrix78/pens/public",
        projGithub: "",
        projFilter: "others"
    },
    {
        projId: 16,
        projImg: myCv,
        projName: "My Cv",
        projRubbon: true,
        projRubbonTitle: "react js",
        projSkillsImgArr: [html, css, boostsrp, js, react],
        projRoutName: "my-cv",
        projLive: "",
        projGithub: "",
        projFilter: "react js"
    },
    {
        projId: 17,
        projImg: myCv1,
        projName: "My First Cv",
        projRubbon: false,
        projRubbonTitle: "",
        projSkillsImgArr: [html, css, boostsrp, js, jquery],
        projRoutName: "my-first-cv",
        projLive: "https://nadergh78.github.io/myWebsite/",
        projGithub: "https://github.com/NaderGh78/myWebsite",
        projFilter: "html css js"
    }
]