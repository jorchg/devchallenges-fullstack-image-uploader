import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false
  }
}

export default async (req, res) => {
  const form = new formidable.IncomingForm()
  form.uploadDir = './public/uploads'
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err, fields, files)
      return res.status(400).send()
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ fields, files }, null, 2));
  })
}
