
const API = 'http://localhost:3000/data/structure.json?cache=' + Date.now()
export async function getTutorials() {
    const res = await fetch('http://localhost:3000/data/structure.json')
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    const tutorials = data.blocks.tutorials.data;
  
    return tutorials
  }
   

export async function getReports() {
  // remove cache
  
  const res = await fetch(API)
  if (!res.ok) {    throw new Error('Failed to fetch data')  }
  const response = await res.json();
  const data = response.blocks.reports.data;
  console.log(data)
  
  return data
}
 

export async function getInfoData() {
  // remove cache
  
  const res = await fetch(API)
  if (!res.ok) {    throw new Error('Failed to fetch data')  }
  const response = await res.json();
  const data = response.blocks.infodata.data;
  console.log(data)
    return data
}
