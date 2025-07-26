import { useGetPhrases } from './hooks/useGetPhrases.ts';

function App() {
  const phrases = useGetPhrases();

  console.log(phrases.data?.data);

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-[#282c34] text-[29px] text-white">
      {phrases.data?.data?.map((p, i) => <div key={i}>{p.content}</div>)}
    </div>
  );
}

export default App;
