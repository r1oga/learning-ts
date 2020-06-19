import { join, BufReader, parse } from '../deps.ts'

interface Data {
  [key: string]: any
}

export class CsvFileReader {
  data: Data[] = []

  constructor(public filename: string) {}

  async read(headers: string[]) {
    const path = join('.', this.filename)
    const file = await Deno.open(path)
    const data = await parse(new BufReader(file), {
      header: headers
    })

    this.data = data as Data[]

    Deno.close(file.rid)
  }
}
