import React from 'react';

import { Phrase } from '../../hooks/types';
import Container from '../Layout/Container';

function PhraseItem(props: Phrase) {
  const { content } = props;

  return <Container>{content}</Container>;
}

export default React.memo(PhraseItem);
