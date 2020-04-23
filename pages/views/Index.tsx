import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

type Props = {
  query: any;
}

const Index: NextPage<Props> = ({ query }) => {
  return (
    <div>
      <h1>Next Nest Starter</h1>

      <p>Query: {query.name}</p>
    </div>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  return { query };
};

export default Index;
