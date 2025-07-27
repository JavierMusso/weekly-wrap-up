import Container from './Components/Layout/Container.tsx';
import Wrapper from './Components/Layout/Wrapper.tsx';
import Box from './Components/Layout/Box.tsx';
import { useGetPhrases } from './hooks/useGetPhrases.ts';

function App() {
  const phrases = useGetPhrases();

  console.log(phrases.data?.data);

  return (
    <Container className="flex min-h-[100vh] flex-col items-center justify-center bg-[#282c34] text-[29px] text-white">
      <Wrapper className="flex flex-shrink-0 gap-4 py-5">
        <Box className="flex h-11 w-[400px] items-center whitespace-nowrap rounded-[40px] bg-[#3b3f47] px-4 pb-1 text-[14px] italic opacity-80">
          buscar por palabras, autor, numero...
        </Box>

        <Box className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b3f47] text-[20px]">
          B
        </Box>
      </Wrapper>

      <Wrapper className="flex w-[70%] max-w-[1300px] flex-col gap-2">
        {phrases.data?.data?.map((p, i) => <div key={i}>{p.content}</div>)}
      </Wrapper>
    </Container>
  );
}

export default App;
