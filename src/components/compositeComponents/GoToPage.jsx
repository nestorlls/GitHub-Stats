import ButtonNav from '../baseComponents/ButtonNav';
import ShowCurrentPage from '../baseComponents/ShowCurrentPage';

const leftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const rightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const GoToPage = ({
  goNextPage,
  goPrevPage,
  currentPage,
  totalPages,
  limiteLower,
  limiteHigher,
}) => {
  return (
    <div className="flex justify-center items-center w-full gap-2">
      <ButtonNav
        onClick={goPrevPage}
        currentPage={currentPage}
        limiteLower={limiteLower}>
        {leftArrow}
      </ButtonNav>
      <ShowCurrentPage currentPage={currentPage} totalPages={totalPages} />
      <ButtonNav
        onClick={goNextPage}
        currentPage={currentPage}
        limiteHigher={limiteHigher}>
        {rightArrow}
      </ButtonNav>
    </div>
  );
};

export default GoToPage;
