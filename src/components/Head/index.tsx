import Head from "next/head";

interface TitleProps {
  title: string;
}

export function Title({title}: TitleProps){
  return(
    <Head>
      <title>{title}</title>
    </Head>
  )
}