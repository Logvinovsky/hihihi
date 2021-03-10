import "../../scss/elements/ModalWindow.scss";
import Button from "./Button";
import closeImage from "../../images/458595.png";

export default function ModalWindow() {
  return (
    <>
      <div className='modal__heading'>
        <h3>Congratulatons</h3>
        <button>
          <img src={closeImage} alt='closingX' height='10px' width='10px' />
        </button>
      </div>

      <div className='modal__message'>
        <p>You have successfully passed the regestration</p>
      </div>

      <div className='modal__button'>
        <Button href='#regestration' text='Great' />
      </div>
    </>
  );
}
