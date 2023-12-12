import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

const ContentRenderer = (props) => {
  //
  // const [content, setContent] = React.useState(null)
  const { source } = props

  console.log('source', source)

  if (!source) return null

  const content = source.compiledSource ? source : source.content

  // React.useEffect(() => {
  //   fetch('http://localhost:1337/api/posts/1',{
  //     headers: {
  //       // MDX Format
  //       'Accept': 'application/vnd.github.v3.raw',
  //       'Content-Type': 'application/vnd.github.v3.raw',
  //       'Authorization': 'Bearer 2a3777502233db75acc64b6a75d2268d71e0ad289e47a4f70b14bab6df48571aa725abe64d14eb5f80c2d38ddeb51fede2cc56b5b8a7880b57b5ee853d4990526c1104841165912367c4c2129efa1170347c5c9d8621550eaa8c03fc6ee3f7db669b6458562e3e872e142ae1b89df71b74a52c0430ea756da61b3c31174b0a98',
  //     }
  //   }).then(res => res.json())
  //     .then(async res =>{
  //       const sourc = await serialize(res.data.attributes.Content)
  //       console.log('ddd', sourc)
  //        setContent(sourc)
  //     })
  // },[])

  if (!content) return null

  return <MDXRemote {...content} />
}

export default ContentRenderer
