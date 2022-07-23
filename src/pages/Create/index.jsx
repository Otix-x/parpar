import { useRef, useState } from 'react';

import Container from '../../components/Container';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
  const [photo, setPhoto] = useState('');

  const uploadRef = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];

    setPhoto(URL.createObjectURL(file));
  };

  const handleSelectPhoto = () => uploadRef.current?.click();

  return (
    <MainLayout>
      <Container
        as='section'
        className='flex my-auto pt-20 h-[calc(100vh-40px)]'>
        <div className='flex-center w-2/5 h-full'>
          {photo ? (
            <img
              src={photo}
              onClick={handleSelectPhoto}
              className='object-cover w-full h-full rounded-lg cursor-pointer'
            />
          ) : (
            <button
              onClick={handleSelectPhoto}
              className='rounded-md px-6 py-3 font-bold text-2xl text-primary border-2 border-primary'>
              Upload photo
            </button>
          )}

          <input
            onChange={handleUpload}
            ref={uploadRef}
            accept='image/*'
            id='upload'
            type='file'
            className='hidden'
          />
        </div>

        <form className='flex flex-col w-3/5 ml-10'>
          <label className='text-xl font-bold' htmlFor='name'>
            Product name
          </label>
          <input
            id='name'
            className=' border border-gray-200 px-4 py-3 mt-2 rounded-lg placeholder:text-gray-300'
            placeholder='Your product name...'
          />
          <label className='text-xl font-bold mt-6' htmlFor='price'>
            Price
          </label>
          <input
            id='price'
            type='number'
            className=' border border-gray-200 px-4 py-3 mt-2 rounded-lg placeholder:text-gray-300'
            placeholder='Product price here...'
          />
          <label className='text-xl font-bold mt-6' htmlFor='label'>
            Label
          </label>
          <input
            id='label'
            className=' border border-gray-200 px-4 py-3 mt-2 rounded-lg placeholder:text-gray-300'
            placeholder='Label...'
          />
          <button className='rounded-md px-6 py-3 font-bold text-2xl mt-auto text-white bg-primary'>
            Create
          </button>
        </form>
      </Container>
    </MainLayout>
  );
};

export default Create;
