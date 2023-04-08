import type { NextPage } from 'next';
import { TextInput } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <TextInput label = "How do you feel?" placeholder='Demo' />
  )
}

export default Home;