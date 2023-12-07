import { useEffect, useState } from "react";

const ModalCustom = (props) => {
  const { show, id } = props;
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (show) {
      setShowModal(show);
    }
  }, [show]);
  return (
    <>
      <div className={`modal-leo ${showModal && "active"}`} id={id}>
        <div className="modal-content">
          <span className="close" onClick={handleClick}>
            &times;
          </span>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default ModalCustom;
