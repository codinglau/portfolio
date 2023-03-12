import Image from 'next/image';
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import userData from '@/constants/data';

export default function Passion() {
  const contents = [
    {
      title: 'Developer',
      color: '#F59E0B', 
    },
    {
      title: 'Programmer',
      color: '#10B981', 
    },
    {
      title: 'Creator',
      color: '#3B82F6'
    }
  ];
  return (
    <>
      <div className="w-full mx-auto text-center">
        <h1 className="text-4xl font-bold underline text-gray-700 dark:text-gray-200 my-2">
          Don&apos;t be afraid to fail, be afraid not to try.
        </h1>
      </div>
      <div className="flex flex-row justify-center items-start overflow-hidden">
        {/* Text container */}
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <RoughNotationGroup show={true}>
            {contents.map((content, index) => (
              <RainbowHighlight key={index} color={content.color}>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                  {content.title}
                </h1>
              </RainbowHighlight>
            ))}
          </RoughNotationGroup>
        </div>
        {/* Image container */}
        <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
          <div className="w-3/4 flex flex-col items-center">
            <Image priority
              src={userData.avatarUrl} 
              alt="avatar" 
              className="rounded shadow-lg"
              width={200}
              height={200} 
            />
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row space-x-4">
                <i className="bi bi-arrow-90deg-up"></i>
                <p className="font-mono">That&apos;s me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
