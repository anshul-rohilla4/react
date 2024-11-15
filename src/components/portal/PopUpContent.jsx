import { createPortal } from "react-dom";

const PopUpContent = ({ copied }) => {
    return createPortal(
        (<section>{copied && <div>Copied to Clipboard</div>}</section>),
        document.querySelector("#popUp-Content")
    );
};

export default PopUpContent;
