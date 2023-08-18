/* eslint-disable */
import cat from '../Style/greencat.png';
import questionPicture from '../Style/question.png';
import InqueryComponent from '../Components/Inquery/InqueryComponent';
import { useNavigate } from 'react-router-dom';
import QuestionSection from '../Components/Inquery/QuestionSection';
import { GoToFunction } from '../Util/types';
import SearchInput from '../Components/Inquery/SearchInput';
import { useState } from 'react';
import useStore from '../store/useSearchStore';
// import { useSearchStore } from '../store/useSearchStore';
const Inquery = () => {
  const navi = useNavigate();
  const { inputValue } = useStore();
  const goTo: GoToFunction = (path: string) => {
    navi(path);
  };

  const [search, setSearch] = useState('');

  console.log(search);
  return (
    <>
      <div className="flex justify-stretch flex-col md:flex-row items-center w-full h-[50vh] sm:h-[55vh] md:h-[70vh] bg-InqueryMain">
        <div className="flex-1 flex flex-col p-10">
          <div className="text-[30px] sm:text-[30px] md:text-[50px] mb-4 items-center p-5 ">
            안녕하세요. <br />
            무엇을 도와드릴까요?
          </div>
          <div className="flex justify-center items-center">
            <SearchInput search={setSearch} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center ml-5 mr-5">
          <QuestionSection goTo={goTo} />
        </div>
      </div>
      <section className=" flex flex-col items-center justify-center bg-#e0e0e0">
        {/* <InqueryComponent search={inputValue} /> */}
        <InqueryComponent search={search} />
      </section>
      <section className="flex justify-left h-[20vh] bg-gray-100 p-10 inset-x-0 bottom-0">
        <div className="flex flex-col items-left">
          <div className="text-2xl mb-5">질문에 대한 답을 찾지 못하셨나요?</div>
          <div className="text-lg">1대1 문의하기</div>
        </div>
        <div className="flex ml-16">
          <img src={cat} className="w-50 h-50 " />
          <img src={questionPicture} className="w-50 h-70 " />
        </div>
      </section>
    </>
  );
};

export default Inquery;
