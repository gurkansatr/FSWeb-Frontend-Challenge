import React from "react";

const projectDataTr = [
  {
    projectName: "Alışveriş Sepeti",
    projectImg: "../img/img2.jpg",
    projectDescription:
      "Bu proje React, React Router Dom, localStorage kütüphaneleri kullanılarak geliştirilmiş, kullanımı oldukça basit bir uygulamadır. Bu proje kullanıcılarına çok çaba sarfetmeden alışveriş sepetlerini oluşturmalarını amaçlamaktadır.",
    projectProgrammes: ["react", "redux", "axios"],
    projectUrl: "https://fsweb-s11g1-shopping-cart-2q9nxtozr-gurkansatr.vercel.app/",
    gitHub:"https://github.com/gurkansatr/fsweb-s11g1-shopping-cart"
  },
  {
    projectName: "Friends",
    projectImg: "../img/img33.jpg",
    projectDescription:
      "Bu proje React, Redux, LocalStorage, useContext kütüphaneleri kullanılarak geliştirilmiştir.Kullanıcı adı ve parola kontrolü olan arkadaş listenizi düzenleyebileceğiniz ekleme ve çıkarma işlemi yapabileceğiniz bir uygulamadır.",
    projectProgrammes: ["react", "localStorage", "Redux"],
    projectUrl: "https://fsweb-s11g2-client-auth-friends-one.vercel.app/",
    gitHub: "https://github.com/gurkansatr/fsweb-s11g2-client-auth-friends",
  },

  {
    projectName: "Hesap Makinesi",
    projectImg: "../img/img8.jpg",
    projectDescription:
      "Hesap Makinesi projesinde React, Reducer gibi araçları kullanarak basit bir hesap makinesi yaratılmıştır.Bu proje kullanıcıları hesaplamalarını daha basit ve keyifli bir şekilde yapabilsinler düşüncesiyle geliştirilmiştir.",
    projectProgrammes: ["react", "redux", "reducer"],
    projectUrl: "https://vercel.com/gurkansatr/fsweb-s10g1-reducer-calculator",
    gitHub: "https://github.com/gurkansatr/fsweb-s10g1-reducer-calculator",
  },


];

const projectData = [
  {
    projectName: "Shopping Cart",
    projectImg: "../img/img2.jpg",
    projectDescription:
      "This project has been developed using React, React Router Dom, and localStorage libraries. It is a straightforward application to use. The aim of this project is to enable users to create their shopping carts without much effort.",
    projectProgrammes: ["react", "redux", "axios"],
    projectUrl: "https://fsweb-s11g1-shopping-cart-2q9nxtozr-gurkansatr.vercel.app/",
    gitHub: "https://github.com/gurkansatr/fsweb-s11g1-shopping-cart",
  },
  {
    projectName: "Friends",
    projectImg: "../img/img33.jpg",
    projectDescription:
      "This project has been developed using React, Redux,useContext and LocalStorage libraries. It's an application where you can manage your friend list with username and password checks, and perform addition and removal operations.",
    projectProgrammes: ["react", "localStorage", "Redux"],
    projectUrl: "https://fsweb-s11g2-client-auth-friends-one.vercel.app/",
    gitHub: "https://github.com/gurkansatr/fsweb-s11g2-client-auth-friends",
  },
  {
    projectName: "Calculator",
    projectImg: "../img/img8.jpg",
    projectDescription:
      "In the Calculator project, a basic calculator has been built using tools like React and Reducer. This project has been developed with the intention of enabling users to perform their calculations in a simpler and more enjoyable manner.",
    projectProgrammes: ["react", "redux", "reducer"],
    projectUrl: "https://vercel.com/gurkansatr/fsweb-s10g1-reducer-calculator",
    gitHub: "https://github.com/gurkansatr/fsweb-s10g1-reducer-calculator",
  },
  
];
export default function Projects({ language }) {
  return language === "en" ? (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">Projects</h1>
          <div className="pro">
            {projectData.map((project) => (
              <div className="card">
                <img
                  src={project.projectImg}
                  alt="projects"
                  className="projectsPhotos"
                />
                <h3 className="content-heading">{project.projectName}</h3>
                <p className="description-project">
                  {project.projectDescription}
                </p>
                <div className="programs">
                  <p>{project.projectProgrammes[0]}</p>
                  <p>{project.projectProgrammes[1]}</p>
                  <p>{project.projectProgrammes[2]}</p>
                </div>
                <div className="links">
                  <a href={project.gitHub} target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href={project.projectUrl} target="_blank" rel="noreferrer">
                    View Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">Projeler</h1>
          <div className="pro">
            {projectDataTr.map((project) => (
              <div className="card">
                <img
                  src={project.projectImg}
                  alt="projects"
                  className="projectsPhotos"
                />
                <h3 className="content-heading">{project.projectName}</h3>
                <p className="description-project">
                  {project.projectDescription}
                </p>
                <div className="programs">
                  <p>{project.projectProgrammes[0]}</p>
                  <p>{project.projectProgrammes[1]}</p>
                  <p>{project.projectProgrammes[2]}</p>
                </div>
                <div className="links">
                  <a href={project.gitHub} target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href={project.projectUrl} target="_blank" rel="noreferrer">
                    Siteyi Gör
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}