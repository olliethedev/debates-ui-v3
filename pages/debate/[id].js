import React, { useMemo } from 'react'
import Head from "next/head"
import { useRouter } from "next/router"
import { request } from 'graphql-request'
import useSWR from 'swr'
import Shell from '../../components/Shell'
import Parent from '../../components/Parent'
import Children from '../../components/Children'

const fetcher = (query, variables) => {
    //console.log({query, variables})
    return request(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, query, variables);
}
const query = `query GetPost($filter:  FilterFindOnePostInput, $filterMany: FilterFindManyPostInput) {
    postOne(filter:$filter){
      _id,
      type,
      parent,
      creator,
      stake,
      title,
      content,
      extra {
        duration
      },
      createdAt,
      updatedAt
    }
    postChildMany(filter:$filterMany){
        _id,
        type,
        parent,
        creator,
        stake,
        title,
        content,
        createdAt,
        updatedAt
      }
  }`;
const Debate = ({initialData}) => {
    const router = useRouter();
    const { id } = router.query;
    const params = useMemo(() => {
        return {
            filter: {
                "_id": id
            },
            filterMany: {
                "parent": id
            }
        }
      }, [])
    const { data, error } = useSWR(
       id ? [ query, params] : null,
        (query, params) => fetcher(query, params),
        {initialData}
      );
    if(error)
        return <div>Error</div>
    return (
        <div>
            <Head>
                <title>Debate - {data?.postOne?.title}</title>
                <meta name="description" content="Debate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Shell title={data?.postOne?.title}>
                {data&&<Parent post={data.postOne}/>}
                {data&&<Children postChildren={data.postChildMany}/>}
            </Shell>
        </div>
    )
}
export default Debate;

export async function getServerSideProps(context) {
    const id = context.params.id;
    const data = await fetcher(query,{
        filter: {
            "_id": id
        },
        filterMany: {
            "parent": id
        }
    });
    return {
      props: {
          initialData: data
      }, // will be passed to the page component as props
    }
  }
