import { Option } from "../../models/option.model";

interface Props {
  option: Option | null;
  onClose: () => void;
}

export const MessageModal: React.FC<Props> = (props) => {
  const { option, onClose } = props;

  if (!option) {
    return null;
  }

  return (
    <dialog className="modal modal-open">
      <div className="modal-box border border-base-content/10">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl font-black text-primary/20 leading-none">
            {String(option.id).padStart(2, "0")}
          </span>
          <div>
            <p className="text-xs text-base-content/40 uppercase tracking-widest mb-1">
              {option.description}
            </p>
            <h3 className="font-bold text-xl text-base-content">
              {option.title}
            </h3>
          </div>
        </div>
        <p className="text-base-content/70 leading-relaxed">{option.message}</p>
        <div className="modal-action">
          <button className="btn btn-ghost btn-sm" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
      <div className="modal-backdrop bg-base-300/80" onClick={onClose} />
    </dialog>
  );
};
