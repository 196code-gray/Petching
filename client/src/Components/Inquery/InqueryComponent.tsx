/* eslint-disable */

import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';
import { dummyData } from './dummyData';
import { DummyDataItem } from '../../Util/types';

interface InqueryComponentProps {
  data?: DummyDataItem[];
  search?: string;
}

const InqueryComponent: React.FC<InqueryComponentProps> = ({
  data = dummyData,
  search,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  console.log(data, search);
  const filteredData = data.filter(item =>
    item.q.toLowerCase().includes((search || '').toLowerCase()),
  );
  console.log(filteredData);
  return (
    <>
      <div className="flex flex-col p-6 justify-center items-center w-[90vw]">
        <div className="text-lg mb-6">총 {filteredData.length}개의 질문</div>
        {/* dummydata/data/filteredData 순으로 바뀌었음 */}
        {filteredData.map((item, index) => (
          <div key={item.id}>
            <div>
              <div className="flex p-3 text-3xl">
                Q. {item.q}
                <button
                  onClick={() =>
                    setExpandedIndex(index === expandedIndex ? null : index)
                  }
                  className="ml-4"
                >
                  <AiFillCaretDown />
                </button>
                <div className="flex justify-center items-center ml-6 text-sm">
                  조회수 : {item.조회수}
                </div>
              </div>
              <hr className="border-t border-gray-200 mb-10" />
              {expandedIndex === index && (
                <div className="text-2xl mb-4 mt-7 flex justify-center items-center bg-green-200">
                  A. {item.a}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InqueryComponent;