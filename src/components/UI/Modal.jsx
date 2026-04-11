import { CircleX } from 'lucide-react';
import './Modal.css';

const Modal = ({
  title = 'Modal title',
  description = '...',
  onCloseModal,
}) => {
  return (
    <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button type="button" className="btn-close" onClick={onCloseModal}>
              <CircleX />
            </button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
