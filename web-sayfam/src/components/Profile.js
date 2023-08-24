import React from "react";

export default function Profile({ language }) {
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-infoCol">
          {language === "en" ? (
            <h1 className="profile-heading">Profile</h1>
          ) : (
            <h1 className="profile-heading">Profil</h1>
          )}
          <div></div>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">Profile</h3>
                <div className="two-part">
                  <div className="keys">
                    {language === "en" ? (
                      <p>Birth Date</p>
                    ) : (
                      <p>Doğum Tarihi</p>
                    )}
                    {language === "en" ? <p>City</p> : <p>Şehir</p>}
                    {language === "en" ? (
                      <p>Education Status</p>
                    ) : (
                      <p>Eğitim Durumu</p>
                    )}
                    <br />
                    <br />
                    {language === "en" ? <p>Position</p> : <p>Pozisyon</p>}
                  </div>
                  <div className="values">
                    {" "}
                    <p>03.01.1997</p>
                    <p>Istanbul</p>
                    {language === "en" ? (
                      <p>
                        Trakya University, Finance,2021
                      </p>
                    ) : (
                      <p>
                        Trakya Üniversitesi,Maliye,2020
                      </p>
                    )}
                    <p>Frondend Developer,UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              {language === "en" ? (
                <h3 className="content-heading">About Me</h3>
              ) : (
                <h3 className="content-heading">Hakkımda</h3>
              )}
              {language === "en" ? (
                <p className="aboutMeText">
                   I graduated from the Department of Finance in the year 2021.
                  During the same year, I worked as a project consultant 
                  at a software house for approximately 1 year, despite not
                  having a background in the field. As I began to delve into
                  software development, I realized that it was a suitable 
                  industry for me and that I wanted to create something 
                  meaningful in this field.I was accepted into the Full Stack
                  Web Developer training program at Workintech educational
                  institution. This program encompasses 1000 hours of lessons
                  and involves nearly 50 projects. This training proved to be 
                  immensely beneficial for me. Some of the skills I acquired 
                  include problem-solving, teamwork, agile methodologies, 
                  object-oriented programming, front-end and back-end developmen, 
                  JavaScript, HTML/CSS, and Github proficiency.I now understand
                  that learning other programming languages is not challenging, 
                  and I am committed to continuous self-improvement in this field.
                </p>
              ) : (
                <p>
                   2021 yılında maliye bölümünden mezun oldum.Yine 2021
                  yılında yaklaşık 1 yıl bir yazılımevinde proje danışmanı
                  olarak çalıştım.Alanım olmamasına rağmen ucundan yazılımı 
                  öğrenmeye başladığımda bana uygun bir sektör olduğunu ve 
                  bu alanda bir şeyler yaratmak istediğimi farkettim.
                  Workintech eğitim kurumunun Full Stack Web Developer
                  eğitim programına kabul edildim. Bu programda 1000 saat ders
                  ve 50'ye yakın proje bulunmaktadır. Bu eğitim bana çok
                  yardımcı oldu. Bunlardan bazıları; problem çözme yeteneğim,
                  ekip çalışması, çevik metodolojiler, nesne yönelimli
                  programlama, ön uç-arka uç, javascript, HTML/CSS, ,Github...
                  Artık diğer programlama dillerini öğrenmenin zor olmadığını
                  biliyorum ve kendimi geliştirmeye devam ediyorum.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}