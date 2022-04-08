import Header from "@/components/Header"
import AppShell from "@/components/AppShell"
import Dashboard from "@/components/Dashboard"
import { supabase } from '@/utils/supabaseClient'

function Home({ funding, count, investment_industry_country }) {
 
  return (
    <AppShell width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
      <Dashboard funding={funding} count={count} investment={investment_industry_country}/>
    
    </AppShell>
  )
}




export async function getServerSideProps() {
  const sql = `id, 
  stage,
  amount_usd,
  valuation, 
  date,
  source (
    url
  ),
  startups(
    name,
    logo_url,
    industry(
      text
    ),
    countries (
      name
    )
  )`

  // Fetch data from external API
  let { data: funding, count, error } = await
    supabase.from('funding')
      .select(sql, { count: "exact" })
      .order("date", { ascending: false })
      .range(0, 5)

    
  let { data: investment_industry_country} = await supabase
      .from('investment_industry_country')
      .select('countries(name), industry(text), total_usd')


  // Pass data to the page via props
  return { props: {funding, count, investment_industry_country} }
}

export default Home
