/* eslint-disable react/prop-types */


const Contactus = ({t}) => {
  return (
    <div className="contact">
        <div className="contact-cont">
            <div className="contact-left">
                <h2>
                    {t("contacttext")}
                </h2>
                <p>
                    {t("contactextra")}
                </p>
            </div>
            <div className="contact-right">
                <input type="text" placeholder={t("ismingiz")} className="contactinp" />
                <input type="text" placeholder={t("telraqam")} className="contactinp" />
                <button className="contactbtn">
                    {t("arizaqoldirish")}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contactus
