import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Page from '~/layout/Page';
import Header from '~/layout/Header';
import Content from '~/layout/Content';

type Props = {
  query: any;
}



const Index: NextPage<Props> = ({ query }) => {
  return (
      <Page>
        <Header
          title={`Welcome to Backstage`}
          subtitle="Some quick intro and links."
        />
        <Content>
        <h1>Next Nest Starter</h1>

          <p>Query: {query.name}</p>
        </Content>
      </Page>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  return { query };
};

export default Index;
