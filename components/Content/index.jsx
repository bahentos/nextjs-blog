import React from 'react';
import cl from 'classnames';
import s from './index.module.scss';
import BlockContent from '@sanity/block-content-to-react';
import { clientConfig } from '../../lib/client';

const Content = ({ className, body }) => {
  return (
    <div className={cl(className, s.content)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
