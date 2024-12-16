const Politique = () => {
  return (
    <>
      <div className="text-[11px] text-[#777]">
        <p className="mb-3 ">
          Les personnes qui utilisent notre service ont pu importer vos
          coordonnées sur Facebook.
          <a
            id="password-forgot"
            className=" text-blue-900 font-semibold cursor-pointer focus:text-[#385898] pointer text-center mx-1"
          >
            En savoir plus.
          </a>
        </p>
        <p className="mb-3">
          En cliquant sur S'incrire. Vous acceptez nos
          <a className=" text-[#385898] font-semibold cursor-pointer focus:text-[#385898] pointer text-center mx-1">
            Conditions générales,
          </a>
          notre
          <a className=" text-[#385898] font-semibold cursor-pointer focus:text-[#385898] pointer text-center mx-1">
            Politique de confidentialité
          </a>
          et notre
          <a className=" text-[#385898] font-semibold cursor-pointer focus:text-[#385898] pointer text-center mx-1">
            Politique d'utilisation des cookies.
          </a>
          Vous recevrez peut-être des notifications par texto de notre part et
          vous pouvez à tout moment vous désabonner.
        </p>
      </div>
    </>
  );
};

export default Politique;
