import React, { useEffect } from 'react';

import { useGetPhrases } from './hooks/useGetPhrases.ts';

function App() {
  const phrases = useGetPhrases();

  useEffect(() => {
    phrases.get({ limit: 10, page: 0, search: undefined });
  }, []);

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-[#282c34] text-[29px] text-white">
      testing {phrases.data.length}
    </div>
  );
}

export default App;
