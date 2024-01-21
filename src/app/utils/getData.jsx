export default async  function getData(route) {
    const res = await fetch(`https://hishtalvut-api.vercel.app/api/main/${route}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }