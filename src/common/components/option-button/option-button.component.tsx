import { Option } from "../../models/option.model";

interface Props {
  option: Option;
  onClick: () => void;
}

export const OptionButton: React.FC<Props> = (props) => {
  const { option, onClick } = props;
  return (
    <div
      className="card bg-base-100 border border-base-content/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="card-body gap-3">
        <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
          {String(option.id).padStart(2, "0")}
        </span>
        <div>
          <h2 className="card-title text-base-content text-lg">
            {option.title}
          </h2>
          <p className="text-base-content/50 text-sm">{option.description}</p>
        </div>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary btn-sm btn-outline group-hover:btn-primary transition-all">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};
