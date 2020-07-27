import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";
import PropTypes from "prop-types";
import * as LunchModal from "react-modal";
import { updateInformationLoading } from "../redux/actions/launches";
import YouTube from "react-youtube";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
const opts = {
  height: "500",
  width: "840",
  playerVars: { autoplay: 1 }
};

const userId = "1344r43534"; // just using temporary

const Modal = forwardRef((props, ref) => {
  LunchModal.setAppElement("#root");
  const { launchInformaiton } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputValues, setInputValues] = useState({});
  let subtitle;

  const handleChange = event => {
    const { name, checked } = event.target;
    setInputValues({ ...inputValues, [name]: checked });
  };

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    }
  }));

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onStart = event => {
    event.target.pauseVideo();
  };

  return (
    <LunchModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button onClick={closeModal} className="button-style">
        X
      </button>
      <h2 ref={_subtitle => (subtitle = _subtitle)}>
        Mission Name: {launchInformaiton.mission_name}
      </h2>
      <h3>Rocket Name: {launchInformaiton?.rocket?.rocket_name}</h3>
      <h3>launch Site: {launchInformaiton?.launch_site?.site_name}</h3>
      {launchInformaiton?.links?.youtube_id && (
        <YouTube
          videoId={launchInformaiton?.links?.youtube_id}
          opts={opts}
          onReady={onStart}
        />
      )}
      <form>
        <label>
          <input
            name="details"
            type="checkbox"
            checked={inputValues.isSelected}
            onChange={handleChange}
          />
          Flight Number: {launchInformaiton?.flight_number}
        </label>
        <br />
        <label>
          <input
            name="launch_fail_reason"
            type="checkbox"
            checked={inputValues.isSelected}
            onChange={handleChange}
          />
          launch failure details:{" "}
          {launchInformaiton?.launch_failure_details?.reason}
        </label>
        <br />
        <button
          onClick={() =>
            inputValues && dispatch(updateInformationLoading(userId, inputValues))
          }
        >
          Submit Selected info
        </button>
      </form>
    </LunchModal>
  );
});

Modal.propTypes = {
  props: PropTypes.object
};

export default Modal;
