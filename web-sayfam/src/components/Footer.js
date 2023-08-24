import React from "react";

export default function Footer({ language, darkMode }) {
  console.log("footer darkMode ", darkMode);
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerCol">
          {language === "en" ? (
            <h2 className="lets">
              Let’s work together on <br /> your next product.
            </h2>
          ) : (
            <h2 className="lets">
              Haydi sonraki ürünümüz için <br /> birlikte çalışalım.
            </h2>
          )}
          <div className="footerMail">
            <a href="mailto:gurkan-satir@hotmail.com" className="mail">
            gurkan-satir@hotmail.com
            </a>

            <div className="links-footer">
              {language === "en" ? <p>Personal Blog</p> : <p>Kişisel Blog</p>}
              <a
                href="https://github.com/gurkansatr"
                className="footerGithub"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/g%C3%BCrkan-sat%C4%B1r-70261710a/"
                className="linkedinFooter"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}