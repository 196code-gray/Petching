import { useQuery } from '@tanstack/react-query';
import { Axios, BASE_URL } from '../API/api';

interface PostType {
  title: string;
  locationTag: string;
  petSize: string;
  nickName: string;
  profileImgUrl: string;
  imgUrls: string[];
}

export const useGetMyPostToCare = (userId: string) => {
  const {
    isLoading: GetMyPostToCareLoading,
    isError: GetMyPostToCareError,
    data: MyPostToCare,
  } = useQuery<PostType[], Error>({
    queryKey: ['MyPostToCare', userId],
    queryFn: async () => {
      const data = await Axios.get(`${BASE_URL}/careposts/my-page/${userId}`);
      console.log(data);
      return data.data;
    },
    onError: () => {
      console.error('데이터를 받아오지 못했습니다.');
    },
    retry: () => {
      // 임의 지정. 데이터 받아오기 실패시 재시도 없음.
      return false;
    },
  });
  return { GetMyPostToCareLoading, GetMyPostToCareError, MyPostToCare };
};
