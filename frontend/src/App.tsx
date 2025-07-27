import Container from './Components/Layout/Container.tsx';
import Wrapper from './Components/Layout/Wrapper.tsx';
import Box from './Components/Layout/Box.tsx';
import { useGetPhrases } from './hooks/useGetPhrases.ts';
import Phrase from './Components/Phrase/Phrase.tsx';

function App() {
  const phrases = useGetPhrases();

  console.log(phrases.data?.data);

  return (
    <Container className="flex h-[100vh] flex-col items-center justify-center overflow-hidden bg-[#282c34] text-[29px] text-white">
      <Wrapper className="flex flex-shrink-0 gap-4 py-5">
        <Box className="flex h-11 w-[400px] items-center whitespace-nowrap rounded-[40px] bg-[#3b3f47] px-4 pb-1 text-[14px] italic opacity-80">
          buscar por palabras, autor, numero...
        </Box>

        <Box className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b3f47] text-[20px]">
          B
        </Box>
      </Wrapper>

      <Wrapper className="flex w-[70%] max-w-[1300px] flex-grow flex-col gap-4 overflow-y-scroll">
        {phrases.data?.data?.map((p, i) => <Phrase key={i} {...p} />)}
      </Wrapper>
    </Container>
  );
}

export default App;
