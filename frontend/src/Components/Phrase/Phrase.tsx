import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import Box from '../Layout/Box.tsx';
import { Phrase } from '../../hooks/types';
import Wrapper from '../Layout/Wrapper.tsx';
import Container from '../Layout/Container.tsx';

const DATE_FORMAT = `dd 'de' MMMM yyyy`;

function PhraseItem(props: Phrase) {
  const { content, author, date, id } = props;

  const dateText = format(new Date(date), DATE_FORMAT, { locale: es });

  return (
    <Container className="flex w-full flex-col rounded-[16px] border border-gray-200 px-4 pb-4 pt-3">
      <Wrapper className="flex items-baseline gap-1.5">
        <p>{id}</p>

        <Box className="h-2 w-2 rounded-full bg-gray-300" />

        <p className="text-[24px]">{author}</p>

        <Box className="h-2 w-2 rounded-full bg-gray-300" />

        <p className="text-[18px]">{dateText}</p>
      </Wrapper>

      <p>{content}</p>
    </Container>
  );
}

export default React.memo(PhraseItem);
