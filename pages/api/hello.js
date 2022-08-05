// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
console.log('source', p.source.value)
  if (p.source.value) {
    NEWS_API_URL =  `https://newsapi.org/v2/top-headlines?sources=${p.source.value
      .toLowerCase()
      .split(" ")
      .join("-")}&apiKey=${API_KEY}`;
  }

  const options = {
    url: NEWS_API_URL,
    headers: {
      "User-Agent": "request",
    },
  };
