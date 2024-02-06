export default async  function getData(route) {
    const res = await fetch(`${process.env.SERVER_API}/${route}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }