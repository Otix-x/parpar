import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PaginateButton = ({ disable, icon, onSetPage }) => {
  return (
    <button
      onClick={() => {
        if (!disable) onSetPage();
      }}
      className={`group flex-center rounded-md border border-gray-200 py-2.5 px-5 ${
        disable ? 'bg-gray-50 cursor-default' : 'bg-white hover:bg-primary'
      }`}>
      <FontAwesomeIcon
        icon={icon}
        className={`text-sm ${
          disable ? 'text-gray-300' : 'group-hover:text-white'
        }`}
      />
    </button>
  );
};

export default PaginateButton;
