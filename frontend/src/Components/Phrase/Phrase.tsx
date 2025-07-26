import React from 'react';

import { Phrase } from '../../hooks/types';

function PhraseItem(props: Phrase) {
  const { content } = props;

  return <div>{content}</div>;
}

export default React.memo(PhraseItem);
