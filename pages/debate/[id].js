import React, { useMemo } from 'react'
import Head from "next/head"
import { useRouter } from "next/router"
import { request } from 'graphql-request'
import useSWR from 'swr'
import Shell from '../../components/Shell'

const fetcher = (query, variables) => request(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, query, variables)

const Debate = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    const params = useMemo(() => {
        return {
            filter: {
                "_id": id
            }
        }
      }, [])
    const { data, error } = useSWR(
       id ? [ `query GetPost($filter:  FilterFindOnePostInput) {
        postOne(filter:$filter){
          _id,
          type,
          parent,
          creator,
          stake,
          title,
          contentType,
          content,
          extra {
            duration
          },
          createdAt,
          updatedAt
        }
      }`, params] : null,
        (url, id) => fetcher(url, { id })
      )
    console.log(data)
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
                Hello::
                {data&&<div>{data.postOne.title}</div>}
            </Shell>
        </div>
    )
}
export default Debate;
