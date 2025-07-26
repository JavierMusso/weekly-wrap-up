import Container from './Components/Layout/Container.tsx';
import Wrapper from './Components/Layout/Wrapper.tsx';
import { useGetPhrases } from './hooks/useGetPhrases.ts';

function App() {
  const phrases = useGetPhrases();

  console.log(phrases.data?.data);

  return (
    <Container className="flex min-h-[100vh] flex-col items-center justify-center bg-[#282c34] text-[29px] text-white">
      <Wrapper className="flex flex-col gap-2">
        {phrases.data?.data?.map((p, i) => <div key={i}>{p.content}</div>)}
      </Wrapper>
    </Container>
  );
}

export default App;
