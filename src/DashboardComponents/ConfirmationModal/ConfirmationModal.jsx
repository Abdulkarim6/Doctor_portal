
const ConfirmationModal = ({ deletingDoctor, deleteAction, title, message, deleteBtnText, CencelBtnText, closeModal }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation_Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => deleteAction(deletingDoctor)} htmlFor="confirmation_Modal" className="btn">{deleteBtnText}</label>
                        <div onClick={closeModal} className="btn">{CencelBtnText}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;