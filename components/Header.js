import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          alt=""
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2014%2F10%2FLogo-search.jpg&f=1&nofb=1"
          height={90}
          width={125}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hideen sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbodhicounseling.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fblank-profile-picture-973460_960_720-300x300.png&f=1&nofb=1"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
